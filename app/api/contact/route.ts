import { NextResponse } from "next/server"
import { Resend } from "resend"
import ContactConfirmationEmail from "@/emails/contact-confirmation"
import ContactNotificationEmail from "@/emails/contact-notification"

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, company, services, budget, inquiry } = await req.json()

    // Basic validation
    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // 1. Send Notification Email to Founder
    await resend.emails.send({
      from: "byteaegis Web <hello@byteaegis.online>", // Must be a verified domain in Resend
      to: "byteguardx@gmail.com",
      subject: `New Lead: ${name} from ${company || "Website"}`,
      react: ContactNotificationEmail({ name, email, company, services, budget, inquiry }),
      replyTo: email,
    })

    // 2. Send Confirmation Email to User
    await resend.emails.send({
      from: "byteaegis <hello@byteaegis.online>", // Must be a verified domain in Resend
      to: email,
      subject: "We received your inquiry - byteaegis",
      react: ContactConfirmationEmail({ name, inquiry }),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error("[CONTACT_API_ERROR]", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
