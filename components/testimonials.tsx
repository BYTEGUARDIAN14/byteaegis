import { Marquee } from "@/components/magicui/marquee"
import { RevealHeading } from "@/components/ui/reveal-heading"

const whybyteaegis = [
  { name: "Security is Core", username: "Not an Afterthought", body: "We treat security as a fundamental requirement from day one, not something reviewed after the software is built. Every line of code we write is written with threat modeling in mind." },
  { name: "End-to-End Ownership", username: "Full Project Scope", body: "We handle the full scope, design, development, testing, and deployment. Clients don't need to coordinate between multiple agencies or freelancers. One team, complete accountability." },
  { name: "Startup Mindset", username: "Speed & Security", body: "We understand that startups move fast. We help you ship quickly without cutting corners on security, because a breach early on can be company-ending." },
  { name: "AI-Augmented Security", username: "Modern Tooling", body: "We integrate AI into security workflows using both cloud and locally-hosted models, giving clients intelligent threat analysis and risk scoring without sacrificing data privacy." },
  { name: "Founder-Led Work", username: "Direct Access", body: "Founded by Mohamed Adhnaan J M, a CS student from Tamil Nadu. When you work with byteaegis, you work directly with the person doing the work, not a middleman." },
  { name: "Security Culture", username: "DevSecOps Adoption", body: "We don't just fix your current issues, we help your team build a security-aware engineering culture. Better practices, better defaults, better outcomes long-term." },
  { name: "Code Auditing", username: "Vulnerability Reports", body: "Our code audits identify exposed credentials, insecure dependencies, and risky coding patterns. You get a prioritized report with clear, actionable remediation steps." },
  { name: "Pipeline Automation", username: "Catch Issues Early", body: "Every code push gets automatically scanned for vulnerabilities and secrets. Security issues are caught before they ever reach production, not discovered post-incident." },
  { name: "Architecture Review", username: "Strategic Security", body: "For teams building new systems or scaling existing ones, we review architecture decisions from a security standpoint and advise on best practices and cloud hardening." },
]

const firstColumn = whybyteaegis.slice(0, 3)
const secondColumn = whybyteaegis.slice(3, 6)
const thirdColumn = whybyteaegis.slice(6, 9)

const ReasonCard = ({ name, username, body }: { name: string; username: string; body: string }) => {
  return (
    <div
      className="relative w-full max-w-xs overflow-hidden p-8"
      style={{
        backgroundColor: "#2A2825",
        border: "2px solid #3D3B37",
        boxShadow: "4px 4px 0px 0px #3D3B37",
      }}
    >
      <div className="leading-relaxed text-sm mb-5" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#E8E6E1" }}>
        {body}
      </div>
      <div className="flex flex-col" style={{ borderTop: "1px solid #3D3B37", paddingTop: "16px" }}>
        <div className="leading-5 font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C9FF3F" }}>{name}</div>
        <div className="leading-5 tracking-widest text-xs uppercase mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8A8680" }}>{username}</div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="why-byteaegis" className="mb-12 sm:mb-24 px-4" style={{ backgroundColor: "#1E1D1B" }}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[640px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto px-6 py-1 text-xs md:text-sm transition-all duration-150"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #C9FF3F",
                color: "#C9FF3F",
                fontFamily: "'JetBrains Mono', monospace",
                boxShadow: "3px 3px 0px 0px #C9FF3F",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translate(-2px,-2px)"
                el.style.boxShadow = "5px 5px 0px 0px #C9FF3F"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translate(0,0)"
                el.style.boxShadow = "3px 3px 0px 0px #C9FF3F"
              }}
            >
              Why byteaegis
            </button>
          </div>
          <h2
            className="mt-5 text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter leading-none text-center relative z-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}
          >
            <RevealHeading text="Secure By Design" delay={0.1} />
          </h2>
          <p className="mt-5 relative z-10 text-center text-sm sm:text-lg" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "#8A8680" }}>
            We take on client projects end-to-end and treat security not as an add-on, but as a fundamental part of every engagement.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {firstColumn.map((item) => <ReasonCard key={item.name} {...item} />)}
            </Marquee>
          </div>
          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:35s]">
              {secondColumn.map((item) => <ReasonCard key={item.name} {...item} />)}
            </Marquee>
          </div>
          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:40s]">
              {thirdColumn.map((item) => <ReasonCard key={item.name} {...item} />)}
            </Marquee>
          </div>
        </div>

        <div className="-mt-8 flex justify-center">
          <a href="https://github.com/BYTEGUARDIAN14" target="_blank" rel="noopener noreferrer">
            <button
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all duration-100"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                backgroundColor: "transparent",
                color: "#C9FF3F",
                border: "2px solid #C9FF3F",
                boxShadow: "4px 4px 0px 0px #C9FF3F",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translate(-2px,-2px)"
                el.style.boxShadow = "6px 6px 0px 0px #C9FF3F"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = "translate(0,0)"
                el.style.boxShadow = "4px 4px 0px 0px #C9FF3F"
              }}
            >
              <svg className="h-4 w-4" style={{ color: "#C9FF3F" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Our Work on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
