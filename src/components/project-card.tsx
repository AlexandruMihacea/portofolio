import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/portfolio-data";
import { ProjectMockup } from "./project-mockup";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group overflow-hidden rounded-lg border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-lime/60 hover:shadow-glow"
    >
      <ProjectMockup project={project} />
      <div className="space-y-4 p-5">
        <div>
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-lime">{project.category}</p>
              <h3 className="mt-1 text-2xl font-black tracking-normal text-white">{project.title}</h3>
            </div>
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-white/40 transition group-hover:text-lime" />
          </div>
          <p className="text-sm leading-6 text-muted">{project.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs font-bold text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
