"use client"

import { Marquee } from "@/components/magicui/marquee"
import { RevealHeading } from "@/components/ui/reveal-heading"

// Simple Icons CDN, returns the official brand SVG in the given hex colour
const si = (slug: string, hex: string) =>
  `https://cdn.simpleicons.org/${slug}/${hex}`

// GitHub org avatar (for tools not in Simple Icons)
const gh = (org: string) =>
  `https://github.com/${org}.png?size=80`

type Tech = { name: string; url: string }

const Logo = ({ name, url }: Tech) => (
  <div
    title={name}
    className="flex flex-col items-center gap-1.5 mx-6 opacity-60 hover:opacity-100 transition-opacity duration-300 select-none cursor-default"
  >
    <img
      src={url}
      alt={name}
      width={44}
      height={44}
      className="w-11 h-11 object-contain"
      loading="lazy"
      draggable={false}
    />
    <span className="text-[10px] text-white/30 font-medium whitespace-nowrap">
      {name}
    </span>
  </div>
)

const CategoryLabel = ({ label }: { label: string }) => (
  <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-white/25 mb-4">
    {label}
  </p>
)

const categories: { label: string; reverse: boolean; items: Tech[] }[] = [
  {
    label: "Languages & Frameworks",
    reverse: false,
    items: [
      { name: "JavaScript",   url: si("javascript",  "F7DF1E") },
      { name: "TypeScript",   url: si("typescript",  "3178C6") },
      { name: "React",        url: si("react",       "61DAFB") },
      { name: "Next.js",      url: si("nextdotjs",   "ffffff") },
      { name: "Python",       url: si("python",      "3776AB") },
      { name: "Node.js",      url: si("nodedotjs",   "339933") },
      { name: "Rust",         url: si("rust",        "ffffff") },
      { name: "FastAPI",      url: si("fastapi",     "009688") },
      { name: "Flask",        url: si("flask",       "ffffff") },
      { name: "HTML5",        url: si("html5",       "E34F26") },
      { name: "Redis",        url: si("redis",       "DC382D") },
      { name: "Prismic CMS",  url: si("prismic",     "5163BA") },
    ],
  },
  {
    label: "UI Libraries",
    reverse: true,
    items: [
      { name: "Tailwind CSS",   url: si("tailwindcss", "06B6D4") },
      { name: "Framer Motion",  url: si("framer",      "0055FF") },
      { name: "GSAP",           url: si("greensock",   "88CE02") },
      { name: "Material UI",    url: si("mui",         "007FFF") },
      { name: "Chart.js",       url: si("chartdotjs",  "FF6384") },
      { name: "Bootstrap",      url: si("bootstrap",   "7952B3") },
      { name: "CSS3",           url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    label: "DevSecOps Tools",
    reverse: false,
    items: [
      { name: "GitHub Actions", url: si("githubactions", "2088FF") },
      { name: "GitLab CI/CD",   url: si("gitlab",        "FC6D26") },
      { name: "Docker",         url: si("docker",        "2496ED") },
      { name: "Kubernetes",     url: si("kubernetes",    "326CE5") },
      { name: "Semgrep",        url: gh("semgrep") },
      { name: "Snyk",           url: si("snyk",          "4C4A73") },
      { name: "Prometheus",     url: si("prometheus",    "E6522C") },
      { name: "Grafana",        url: si("grafana",       "F46800") },
      { name: "Jenkins",        url: si("jenkins",       "D24939") },
    ],
  },
  {
    label: "IaC & Policy",
    reverse: true,
    items: [
      { name: "Terraform",   url: si("terraform",          "7B42BC") },
      { name: "Terragrunt",  url: gh("gruntwork-io")                 },
      { name: "Ansible",     url: si("ansible",            "EE0000") },
      { name: "Atlantis",    url: gh("runatlantis")                  },
      { name: "Checkov",     url: gh("bridgecrewio")                 },
      { name: "tfsec",       url: gh("aquasecurity")                 },
      { name: "Terrascan",   url: gh("accurics")                     },
      { name: "Regula",      url: gh("fugue")                        },
      { name: "Conftest",    url: gh("open-policy-agent")              },
      { name: "Sentinel",    url: si("hashicorp",         "ffffff")  },
    ],
  },
]

export function TechStack() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="mb-12 text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-transparent relative z-10">
          <RevealHeading text="Technologies We Work With" delay={0.1} />
        </h2>
        <p className="mt-2 text-sm text-white/30">
          Hover to reveal brand colours
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {categories.map((cat) => (
          <div key={cat.label} className="px-4">
            <CategoryLabel label={cat.label} />
            <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <Marquee reverse={cat.reverse} pauseOnHover className="[--duration:40s]">
                {cat.items.map((tech) => (
                  <Logo key={tech.name} {...tech} />
                ))}
              </Marquee>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
