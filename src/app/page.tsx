import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { HoverLift, Reveal, Stagger, StaggerItem } from "@/components/motion-system";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { metrics, projects, ventures } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <SiteHeader />
      <Hero />
      <Metrics />
      <Ventures />
      <Projects />
      <Timeline />
      <Contact />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20">
      <div className="absolute inset-x-0 top-8 -z-0 h-[560px] bg-[radial-gradient(circle_at_50%_30%,rgba(213,255,63,0.12),transparent_42%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 w-[1200px] -translate-x-1/2 -translate-y-1/2 select-none text-center font-display text-[18vw] leading-none text-white/[0.035]">
        BUILDER PRODUCT MARKETPLACE AI
      </div>
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <Stagger className="min-w-0" delay={0.08}>
          <StaggerItem>
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-lime/35 bg-lime/10 px-3 py-2 text-xs font-bold text-lime sm:px-4 sm:text-sm">
              <Sparkles className="size-4" />
              AI Product Founder &amp; Software Engineer
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="max-w-4xl text-balance font-display text-[clamp(4rem,19vw,5.7rem)] leading-[0.84] tracking-normal text-lime sm:text-[8.5rem] lg:text-[11rem]">
              Alexandru Mihacea
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-2xl text-lg leading-7 text-white/72 sm:mt-7 sm:text-2xl sm:leading-8">
              I build focused software businesses across AI, vertical marketplaces, logistics, and high-stakes engineering.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-lime px-5 py-3 text-sm font-black text-ink transition hover:scale-[1.02] sm:w-auto"
              >
                View projects
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-lime hover:text-lime sm:w-auto"
              >
                Partner inquiry
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
        <Reveal direction="left" delay={0.18} className="rounded-lg border border-line bg-panel/88 p-5 shadow-2xl backdrop-blur">
          <Stagger className="grid gap-3 sm:grid-cols-2" delay={0.22}>
            {[
              ["AI products", "Prompt systems, LLM flows, generation UX"],
              ["Marketplaces", "Liquidity, pricing, booking, trust"],
              ["Agency scale", "50+ shipped digital projects"],
              ["Defense software", "Reliability under strict constraints"],
            ].map(([title, body]) => (
              <StaggerItem key={title}>
                <HoverLift className="h-full rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-bold text-lime">{title}</p>
                  <p className="mt-2 text-sm leading-5 text-muted">{body}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-5 sm:px-8">
      <Stagger className="grid gap-3 rounded-lg bg-lime p-3 text-ink sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <StaggerItem key={metric.label}>
            <HoverLift className="h-full rounded-md border border-ink/10 bg-ink/[0.06] p-5 [container-type:inline-size]">
              <p
                className={`max-w-full overflow-hidden font-display leading-none ${
                  metric.value.length > 5
                    ? "whitespace-nowrap text-[clamp(2.45rem,16cqw,4.1rem)]"
                    : "text-[clamp(4.5rem,21vw,6rem)] lg:text-7xl"
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-1 text-lg font-black">{metric.label}</p>
              <p className="mt-3 text-sm font-semibold text-ink/68">{metric.detail}</p>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </AnimatedSection>
  );
}

function Ventures() {
  return (
    <AnimatedSection id="ventures" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Current focus"
        title="Ventures built around distribution and narrow markets"
        body="The portfolio is intentionally product-led: each venture highlights a market, a distribution angle, and the technical system behind it."
      />
      <Stagger className="mt-9 grid gap-4 lg:grid-cols-3">
        {ventures.map((venture) => (
          <StaggerItem key={venture.title}>
            <HoverLift className="h-full rounded-lg border border-line bg-panel p-6">
              <p className="text-sm font-bold text-lime">{venture.eyebrow}</p>
              <h3 className="mt-3 text-3xl font-black text-white">{venture.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{venture.description}</p>
              {venture.link ? (
                <Link
                  href={venture.link}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-lime"
                >
                  Visit
                  <ArrowUpRight className="size-4" />
                </Link>
              ) : null}
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </AnimatedSection>
  );
}

function Projects() {
  return (
    <AnimatedSection id="projects" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <div className="flex flex-col gap-6 rounded-lg bg-panel px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-lime">Selected work</p>
          <h2 className="mt-2 font-display text-6xl leading-none text-white sm:text-8xl">Projects</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-muted">
          Concise cards first, deeper case studies one click away. Built for scanning, not CV-reading.
        </p>
      </div>
      <Stagger className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <HoverLift>
              <ProjectCard project={project} />
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </AnimatedSection>
  );
}

function Timeline() {
  const roadmap = [
    {
      title: "BSc Computer Science",
      meta: "Bachelor's Degree",
      description:
        "Studied Computer Science at the Bucharest University of Economic Studies, CIBE, and built a real-time Danube logistics thesis platform.",
      icon: <GraduationCap className="size-5" />,
    },
    {
      title: "MSc E-Business",
      meta: "Master's Degree",
      description:
        "Continued at the same university and faculty, focusing the thesis on a vertical funeral services marketplace with transparent pricing.",
      icon: <GraduationCap className="size-5" />,
    },
    {
      title: "Systematic",
      meta: "Software Engineering",
      description:
        "Worked on mission-critical defense software used by NATO and allied forces, with high expectations for reliability and security.",
      icon: <ShieldCheck className="size-5" />,
    },
    {
      title: "Vengency",
      meta: "Agency Founder",
      description:
        "Founded a creative tech agency and delivered 50+ digital projects across web development, branding, and graphic design.",
      icon: <BriefcaseBusiness className="size-5" />,
    },
    {
      title: "Seacortex",
      meta: "Current Venture Studio",
      description:
        "Now building and scaling AI-native products through rapid iteration, organic distribution, and disciplined infrastructure choices.",
      icon: <Rocket className="size-5" />,
    },
  ];

  return (
    <AnimatedSection id="timeline" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <SectionHeading
        eyebrow="Roadmap"
        title="From academic platforms to AI-native ventures"
        body="A chronological path through the work that shaped how I build: applied research, high-stakes engineering, agency execution, then product ventures."
        compact
      />
      <Stagger className="relative mt-9 space-y-5">
        <span className="absolute bottom-10 left-7 top-7 w-px bg-gradient-to-b from-lime via-lime/45 to-transparent" />
        {roadmap.map((item, index) => (
          <StaggerItem key={item.title}>
            <RoadmapItem index={index} isLast={index === roadmap.length - 1} {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </AnimatedSection>
  );
}

function Contact() {
  return (
    <AnimatedSection id="contact" className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
      <div className="grid gap-8 rounded-lg bg-lime p-6 text-ink sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em]">Contact</p>
          <h2 className="mt-3 font-display text-7xl leading-none sm:text-9xl">Build the next focused product</h2>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-7 text-ink/72">
            Open to venture conversations, product partnerships, and engineering-led opportunities where speed and precision both matter.
          </p>
        </div>
        <Stagger className="flex flex-wrap gap-3 lg:justify-end" delay={0.1}>
          <StaggerItem>
          <Link href="mailto:alexmihacea@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-black text-lime">
            <Mail className="size-4" />
            Personal Email
          </Link>
          </StaggerItem>
          <StaggerItem>
          <Link href="mailto:alex@secortex.com" className="inline-flex items-center gap-2 rounded-lg border border-ink/25 px-5 py-3 text-sm font-black">
            <Mail className="size-4" />
            Work Email
          </Link>
          </StaggerItem>
          <StaggerItem>
          <Link href="https://github.com/AlexandruMihacea" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-ink/25 px-5 py-3 text-sm font-black">
            <Github className="size-4" />
            GitHub
          </Link>
          </StaggerItem>
          <StaggerItem>
          <Link
            href="https://www.linkedin.com/in/alexandru-mihacea-1355341b0/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-ink/25 px-5 py-3 text-sm font-black"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </AnimatedSection>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  compact?: boolean;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.26em] text-lime">{eyebrow}</p>
      <h2
        className={`mt-3 max-w-4xl text-balance font-display leading-[0.9] text-white ${
          compact ? "text-5xl sm:text-6xl xl:text-7xl" : "text-5xl sm:text-8xl"
        }`}
      >
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{body}</p>
    </div>
  );
}

function RoadmapItem({
  icon,
  index,
  isLast,
  title,
  meta,
  description,
}: {
  icon: React.ReactNode;
  index: number;
  isLast: boolean;
  title: string;
  meta: string;
  description: string;
}) {
  return (
    <div className="relative flex gap-5">
      <div className="relative z-10 flex w-14 shrink-0 flex-col items-center">
        <div className="flex size-14 items-center justify-center rounded-lg border border-lime/50 bg-lime text-ink shadow-glow">
          {icon}
        </div>
        {!isLast ? <ArrowDown className="mt-3 size-5 text-lime" /> : null}
      </div>
      <article
        className={`flex-1 rounded-lg border bg-panel p-5 transition ${
          isLast ? "border-lime/55 shadow-glow" : "border-line"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold text-lime">{meta}</p>
            <h3 className="mt-1 text-2xl font-black text-white">{title}</h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-white/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-muted">{description}</p>
      </article>
    </div>
  );
}
