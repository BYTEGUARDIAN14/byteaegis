/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

/** Security headers applied to every route */
const securityHeaders = [
  // Prevent DNS prefetch leaking referrer info
  { key: 'X-DNS-Prefetch-Control', value: 'on' },

  // Force HTTPS for 2 years (Vercel already does this, belt-and-suspenders)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },

  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },

  // Stop MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // Referrer leakage control
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

  // Disable unused browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },

  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",

      // Next.js needs unsafe-inline + unsafe-eval in dev; tighten in prod
      // Next.js needs unsafe-inline + unsafe-eval in dev; tighten in prod
      isDev
        ? "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com"
        : "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",

      // Tailwind + framer-motion inject inline styles
      "style-src 'self' 'unsafe-inline'",

      // All external image / icon sources used by the project
      [
        "img-src 'self' data: blob:",
        'https://cdn.simpleicons.org',
        'https://cdn.jsdelivr.net',
        'https://github.com',
        'https://avatars.githubusercontent.com',
        'https://framerusercontent.com',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com',
        'https://images.unsplash.com',
      ].join(' '),

      // Geist font is self-hosted via the `geist` package
      "font-src 'self'",

      // XHR / fetch only to same origin
      "connect-src 'self'",

      // Allow Cloudflare Turnstile iframes
      "frame-src 'self' https://challenges.cloudflare.com",

      // Disallow embedding this site in iframes elsewhere
      "frame-ancestors 'none'",

      // No plugins (Flash, etc.)
      "object-src 'none'",

      // Only load workers from same origin
      "worker-src 'self' blob:",
    ].join('; '),
  },
]

const nextConfig = {
  // Re-enable TypeScript checks for production safety
  typescript: {
    ignoreBuildErrors: false,
  },

  // Disable source maps in production to prevent leaking internal code
  productionBrowserSourceMaps: false,


  // Use Next.js optimised images with explicit remote patterns
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // Attach security headers to every response
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // Compress responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,
}

export default nextConfig
