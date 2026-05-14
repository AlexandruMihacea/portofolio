import type { Metadata } from "next";
import { ArrowLeft, Github, Monitor } from "lucide-react";
import Link from "next/link";
import { ProjectMockup } from "@/components/project-mockup";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/lib/portfolio-data";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Alexandru Mihacea",
    };
  }

  return {
    title: `${project.title} | Alexandru Mihacea`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink text-white">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <Link
          href="/#projects"
          className="liquid-button inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-black text-white transition hover:text-lime"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <ProjectMockup project={project} size="hero" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-lime">{project.category}</p>
            <h1 className="mt-3 text-balance font-display text-7xl leading-[0.86] text-white sm:text-9xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg font-semibold text-lime">{project.impact}</p>
            <p className="mt-4 text-lg leading-8 text-muted">{project.shortDescription}</p>
            <p className="liquid-glass-soft mt-5 rounded-lg p-4 text-sm leading-6 text-white/75">
              <span className="font-black text-white">Role:</span> {project.role}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-md border border-lime/30 bg-lime px-3 py-1.5 text-sm font-black text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.52)]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.demo ? (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  className="liquid-glass-lime inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-black text-ink transition hover:scale-[1.02]"
                >
                  <Monitor className="size-4" />
                  {project.links.demoLabel ?? "Visit site"}
                </Link>
              ) : null}
              {project.links.github ? (
                <Link
                  href={project.links.github}
                  target="_blank"
                  className="liquid-glass-lime inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-black text-ink transition hover:scale-[1.02]"
                >
                  <Github className="size-4" />
                  GitHub
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <CasePanel title="Problem" body={project.caseStudy.problem} />
          <CasePanel title="Solution" body={project.caseStudy.solution} />
          <CasePanel title="Outcome" body={project.caseStudy.outcome} />
        </div>

        <section className="liquid-glass mt-5 rounded-lg p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-lime">Product notes</p>
          <h2 className="mt-3 text-4xl font-black text-white">Technical and market highlights</h2>
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {project.caseStudy.highlights.map((highlight) => (
              <li key={highlight} className="liquid-glass-soft rounded-md p-4 text-sm leading-6 text-muted">
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}

function CasePanel({ title, body }: { title: string; body: string }) {
  return (
    <article className="liquid-glass-soft rounded-lg p-6">
      <h2 className="text-2xl font-black text-lime">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-muted">{body}</p>
    </article>
  );
}
