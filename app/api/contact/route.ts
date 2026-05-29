import { NextResponse } from "next/server"
import { Resend } from "resend"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import ContactConfirmationEmail from "@/emails/contact-confirmation"
import ContactNotificationEmail from "@/emails/contact-notification"

// Initialize Upstash Redis for Rate Limiting (3 requests per hour per IP)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
})

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Cloudflare Turnstile Verification Helper
async function verifyTurnstile(token: string) {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
  })
  const data = await res.json()
  return data.success
}

export async function POST(req: Request) {
  try {
    // 1. IP-Based Rate Limiting via Redis
    const ip = req.headers.get("x-forwarded-for") || "anonymous"
    
    // Only enforce rate limiting if Redis credentials are provided
    if (process.env.UPSTASH_REDIS_REST_URL) {
      const { success } = await ratelimit.limit(ip)
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        )
      }
    }

    const { name, email, company, services, timeline, inquiry, turnstileToken } = await req.json()

    // 2. Bot Protection via Cloudflare Turnstile
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "Security check missing. Please complete the captcha." },
          { status: 400 }
        )
      }
      
      const isHuman = await verifyTurnstile(turnstileToken)
      if (!isHuman) {
        return NextResponse.json(
          { error: "Security check failed. Automated bots are not allowed." },
          { status: 403 }
        )
      }
    }

    // Basic validation
    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // 3. Send Notification Email to Founder
    await resend.emails.send({
      from: "onboarding@resend.dev", // Fallback for unverified domains
      to: "byteguardx@gmail.com",
      subject: `New Lead: ${name} from ${company || "Website"}`,
      react: ContactNotificationEmail({ name, email, company, services, timeline, inquiry }),
      replyTo: email,
    })

    // 4. Send Confirmation Email to User (This may fail if sending to arbitrary emails from onboarding@resend.dev)
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Fallback
        to: email,
        subject: "We received your inquiry, byteaegis",
        react: ContactConfirmationEmail({ name, inquiry }),
      })
    } catch (e) {
      console.warn("Failed to send confirmation email. This is normal if using an unverified Resend domain.")
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : JSON.stringify(error) },
      { status: 500 }
    )
  }
}
