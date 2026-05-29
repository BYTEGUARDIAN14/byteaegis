import { NextRequest, NextResponse } from "next/server"

/**
 * FULLY SECURED PROXY API ROUTE
 * 
 * Since we are avoiding Vercel Middleware, this Next.js App Router API endpoint
 * acts as a secure proxy to forward requests to external APIs without exposing 
 * your API keys or internal infrastructure.
 * 
 * Usage: GET /api/proxy?url=https://api.github.com/users/BYTEGUARDIAN14
 */

// 1. STRICT WHITELIST (SSRF Protection)
// Only allow proxying to these specific external domains. Never allow wildcard domains.
const ALLOWED_DOMAINS = [
  "api.github.com",
  "api.openai.com",
  // Add other external APIs you need to call here
]

export async function GET(request: NextRequest) {
  return handleProxy(request)
}

export async function POST(request: NextRequest) {
  return handleProxy(request)
}

async function handleProxy(req: NextRequest) {
  try {
    // 2. ORIGIN VALIDATION (CORS / CSRF Protection)
    // Ensure the request is coming from your own frontend, not a malicious third-party site.
    const origin = req.headers.get("origin") || req.headers.get("referer")
    const isDevelopment = process.env.NODE_ENV === "development"
    const allowedOrigin = "https://byteaegis.in" // Replace with your production domain

    if (!isDevelopment) {
      if (!origin || !origin.startsWith(allowedOrigin)) {
        return NextResponse.json({ error: "Forbidden: Invalid Origin" }, { status: 403 })
      }
    }

    // Extract the target URL from the query string (e.g. ?url=...)
    const { searchParams } = new URL(req.url)
    const targetUrlString = searchParams.get("url")

    if (!targetUrlString) {
      return NextResponse.json({ error: "Bad Request: Missing 'url' parameter" }, { status: 400 })
    }

    // Parse the target URL
    let targetUrl: URL
    try {
      targetUrl = new URL(targetUrlString)
    } catch (e) {
      return NextResponse.json({ error: "Bad Request: Invalid URL format" }, { status: 400 })
    }

    // 3. TARGET DOMAIN VALIDATION (Open Proxy Protection)
    if (!ALLOWED_DOMAINS.includes(targetUrl.hostname)) {
      return NextResponse.json({ error: "Forbidden: Domain not whitelisted" }, { status: 403 })
    }

    // 4. HEADER SANITIZATION
    // We strip sensitive headers from the incoming client request so they aren't
    // leaked to the external API (e.g., user session cookies).
    const sanitizedHeaders = new Headers()
    
    // Only pass safe headers
    const safeHeaders = ["content-type", "accept", "user-agent"]
    safeHeaders.forEach((headerName) => {
      const val = req.headers.get(headerName)
      if (val) sanitizedHeaders.set(headerName, val)
    })

    // If you need to attach a secret API key to the external request, do it here securely on the server!
    // if (targetUrl.hostname === "api.openai.com") {
    //   sanitizedHeaders.set("Authorization", `Bearer ${process.env.OPENAI_API_KEY}`)
    // }

    // Read the body for POST/PUT requests
    const body = req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined

    // 5. EXECUTE PROXY REQUEST
    const externalResponse = await fetch(targetUrl.toString(), {
      method: req.method,
      headers: sanitizedHeaders,
      body,
      // Prevent the proxy from endlessly following redirects
      redirect: "manual",
    })

    // Read external response
    const responseData = await externalResponse.arrayBuffer()

    // 6. SANITIZE RESPONSE HEADERS
    // We don't want the external API setting cookies on our domain or returning bad security headers
    const proxyResponseHeaders = new Headers()
    proxyResponseHeaders.set("Content-Type", externalResponse.headers.get("content-type") || "application/json")
    
    // Hardened security headers for the proxy response
    proxyResponseHeaders.set("X-Content-Type-Options", "nosniff")
    proxyResponseHeaders.set("Cache-Control", "no-store, max-age=0") // Prevent sensitive data caching

    return new NextResponse(responseData, {
      status: externalResponse.status,
      headers: proxyResponseHeaders,
    })

  } catch (error) {
    console.error("[PROXY_ERROR]", error)
    // 7. AVOID ERROR LEAKAGE
    // Never expose internal stack traces to the client
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
