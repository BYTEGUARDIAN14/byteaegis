import { Marquee } from "@/components/magicui/marquee"

const whyByteAegis = [
  {
    name: "Security is Core",
    username: "Not an Afterthought",
    body: "We treat security as a fundamental requirement from day one — not something reviewed after the software is built. Every line of code we write is written with threat modeling in mind.",
  },
  {
    name: "End-to-End Ownership",
    username: "Full Project Scope",
    body: "We handle the full scope — design, development, testing, and deployment. Clients don't need to coordinate between multiple agencies or freelancers. One team, complete accountability.",
  },
  {
    name: "Startup Mindset",
    username: "Speed & Security",
    body: "We understand that startups move fast. We help you ship quickly without cutting corners on security — because a breach early on can be company-ending.",
  },
  {
    name: "AI-Augmented Security",
    username: "Modern Tooling",
    body: "We integrate AI into security workflows using both cloud and locally-hosted models — giving clients intelligent threat analysis and risk scoring without sacrificing data privacy.",
  },
  {
    name: "Founder-Led Work",
    username: "Direct Access",
    body: "Founded by Mohamed Adhnaan J M, a CS student from Tamil Nadu. When you work with ByteAegis, you work directly with the person doing the work — not a middleman.",
  },
  {
    name: "Security Culture",
    username: "DevSecOps Adoption",
    body: "We don't just fix your current issues — we help your team build a security-aware engineering culture. Better practices, better defaults, better outcomes long-term.",
  },
  {
    name: "Code Auditing",
    username: "Vulnerability Reports",
    body: "Our code audits identify exposed credentials, insecure dependencies, and risky coding patterns. You get a prioritized report with clear, actionable remediation steps.",
  },
  {
    name: "Pipeline Automation",
    username: "Catch Issues Early",
    body: "Every code push gets automatically scanned for vulnerabilities and secrets. Security issues are caught before they ever reach production — not discovered post-incident.",
  },
  {
    name: "Architecture Review",
    username: "Strategic Security",
    body: "For teams building new systems or scaling existing ones, we review architecture decisions from a security standpoint and advise on best practices and cloud hardening.",
  },
]

const firstColumn = whyByteAegis.slice(0, 3)
const secondColumn = whyByteAegis.slice(3, 6)
const thirdColumn = whyByteAegis.slice(6, 9)

const ReasonCard = ({
  name,
  username,
  body,
}: {
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#3b82f6]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed text-sm">{body}</div>

      <div className="mt-5 flex items-center gap-2">
        <div className="flex flex-col">
          <div className="leading-5 font-medium tracking-tight text-[#3b82f6]">{name}</div>
          <div className="leading-5 tracking-tight text-white/60 text-xs uppercase">{username}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="why-byteaegis" className="mb-12 sm:mb-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[640px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Why ByteAegis</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-2xl sm:text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
            Security-First, Every Single Time
          </h2>

          <p className="mt-5 relative z-10 text-center text-sm sm:text-lg text-zinc-500">
            We take on client projects end-to-end and treat security not as an add-on, but as a fundamental part of every engagement.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {firstColumn.map((item) => (
                <ReasonCard key={item.name} {...item} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:35s]">
              {secondColumn.map((item) => (
                <ReasonCard key={item.name} {...item} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:40s]">
              {thirdColumn.map((item) => (
                <ReasonCard key={item.name} {...item} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="-mt-8 flex justify-center">
          <a href="https://github.com/BYTEGUARDIAN14" target="_blank" rel="noopener noreferrer">
            <button className="group relative inline-flex items-center gap-2 rounded-full border border-[#3b82f6]/30 bg-black/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#3b82f6]/60 hover:bg-[#3b82f6]/10 active:scale-95">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent"></div>
              <svg className="h-4 w-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Our Work on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
