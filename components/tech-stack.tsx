"use client"

import { Marquee } from "@/components/magicui/marquee"
import { RevealHeading } from "@/components/ui/reveal-heading"

type Tech = { name: string; slug: string; hex: string }

const Logo = ({ name, slug, hex }: Tech) => (
  <div
    title={name}
    className="group flex flex-col items-center gap-1.5 mx-6 select-none cursor-default"
  >
    <div className="relative w-11 h-11">
      {/* Brand color version (hidden by default, shown on hover) */}
      <img 
        src={`https://cdn.simpleicons.org/${slug}/${hex}`} 
        alt={name} 
        className="absolute inset-0 w-11 h-11 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        loading="lazy" 
        draggable={false} 
      />
      {/* Acid green version (shown by default, hidden on hover) */}
      <img 
        src={`https://cdn.simpleicons.org/${slug}/C9FF3F`} 
        className="absolute inset-0 w-11 h-11 object-contain transition-opacity duration-300 opacity-50 group-hover:opacity-0" 
        alt={`${name} default`}
        loading="lazy" 
        draggable={false} 
      />
    </div>
    <span 
      className="text-[10px] font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-[#C9FF3F]" 
      style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8A8680" }}
    >
      {name}
    </span>
  </div>
)

const CategoryLabel = ({ label }: { label: string }) => (
  <p className="text-center text-[11px] font-semibold tracking-widest uppercase mb-4"
    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#C9FF3F", opacity: 0.7 }}>
    {label}
  </p>
)

const categories: { label: string; reverse: boolean; items: Tech[] }[] = [
  {
    label: "Languages & Frameworks", reverse: false,
    items: [
      { name: "JavaScript", slug: "javascript", hex: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", hex: "3178C6" },
      { name: "React", slug: "react", hex: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", hex: "ffffff" },
      { name: "Python", slug: "python", hex: "3776AB" },
      { name: "Node.js", slug: "nodedotjs", hex: "339933" },
      { name: "Rust", slug: "rust", hex: "ffffff" },
      { name: "FastAPI", slug: "fastapi", hex: "009688" },
      { name: "Flask", slug: "flask", hex: "ffffff" },
      { name: "HTML5", slug: "html5", hex: "E34F26" },
      { name: "Redis", slug: "redis", hex: "DC382D" },
      { name: "GraphQL", slug: "graphql", hex: "E10098" },
    ],
  },
  {
    label: "UI Libraries", reverse: true,
    items: [
      { name: "Tailwind CSS", slug: "tailwindcss", hex: "06B6D4" },
      { name: "Framer Motion", slug: "framer", hex: "0055FF" },
      { name: "GSAP", slug: "greensock", hex: "88CE02" },
      { name: "Material UI", slug: "mui", hex: "007FFF" },
      { name: "Chart.js", slug: "chartdotjs", hex: "FF6384" },
      { name: "Bootstrap", slug: "bootstrap", hex: "7952B3" },
      { name: "Sass", slug: "sass", hex: "CC6699" },
    ],
  },
  {
    label: "DevSecOps Tools", reverse: false,
    items: [
      { name: "GitHub Actions", slug: "githubactions", hex: "2088FF" },
      { name: "GitLab CI", slug: "gitlab", hex: "FC6D26" },
      { name: "Docker", slug: "docker", hex: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", hex: "326CE5" },
      { name: "Sentry", slug: "sentry", hex: "362D59" },
      { name: "Snyk", slug: "snyk", hex: "4C4A73" },
      { name: "Prometheus", slug: "prometheus", hex: "E6522C" },
      { name: "Grafana", slug: "grafana", hex: "F46800" },
      { name: "Datadog", slug: "datadog", hex: "632CA6" },
      { name: "OWASP", slug: "owasp", hex: "ffffff" },
    ],
  },
  {
    label: "IaC & Cloud", reverse: true,
    items: [
      { name: "Terraform", slug: "terraform", hex: "7B42BC" },
      { name: "Pulumi", slug: "pulumi", hex: "8A3391" },
      { name: "Ansible", slug: "ansible", hex: "EE0000" },
      { name: "DigitalOcean", slug: "digitalocean", hex: "0080FF" },
      { name: "Google Cloud", slug: "googlecloud", hex: "4285F4" },
      { name: "Ubuntu", slug: "ubuntu", hex: "E95420" },
      { name: "Cloudflare", slug: "cloudflare", hex: "F38020" },
      { name: "Linux", slug: "linux", hex: "FCC624" },
      { name: "HashiCorp", slug: "hashicorp", hex: "ffffff" },
      { name: "Vercel", slug: "vercel", hex: "ffffff" },
    ],
  },
]

export function TechStack() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ backgroundColor: "#1E1D1B" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: "#3D3B37" }} />

      <div className="container mx-auto px-4 mb-10 text-center">
        <h2
          className="mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter leading-none text-center relative z-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E8E6E1" }}
        >
          <RevealHeading text="Our Tech Stack" delay={0.1} />
        </h2>

      </div>

      <div className="flex flex-col gap-10">
        {categories.map((cat) => (
          <div key={cat.label} className="px-4">
            <CategoryLabel label={cat.label} />
            <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <Marquee reverse={cat.reverse} pauseOnHover className="[--duration:40s]">
                {cat.items.map((tech) => <Logo key={tech.name} {...tech} />)}
              </Marquee>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px" style={{ backgroundColor: "#3D3B37" }} />
    </section>
  )
}
