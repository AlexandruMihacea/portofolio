import type { Project } from "@/lib/portfolio-data";
import Image from "next/image";

type ProjectMockupProps = {
  project: Pick<Project, "title" | "mockup" | "accent" | "category" | "image">;
  size?: "card" | "hero";
};

export function ProjectMockup({ project, size = "card" }: ProjectMockupProps) {
  const isHero = size === "hero";

  return (
    <div
      className={`relative overflow-hidden rounded-t-lg bg-[#0e1117] ${
        isHero ? "min-h-[320px] rounded-lg sm:min-h-[430px]" : "h-56"
      }`}
      style={{ ["--accent" as string]: project.accent }}
      aria-hidden="true"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          sizes={isHero ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover"
          priority={isHero}
        />
      ) : null}
      {project.image ? <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" /> : null}
      {!project.image ? (
        <>
      <div className="absolute inset-0 bg-grid-fade mockup-grid opacity-25" />
      <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 20% 18%, ${project.accent}66, transparent 34%), radial-gradient(circle at 86% 72%, ${project.accent}44, transparent 32%)` }} />
      {project.mockup === "audio" && <AudioMockup project={project} isHero={isHero} />}
      {project.mockup === "agency" && <AgencyMockup project={project} isHero={isHero} />}
      {project.mockup === "logistics" && <LogisticsMockup project={project} isHero={isHero} />}
      {project.mockup === "marketplace" && <MarketplaceMockup project={project} isHero={isHero} />}
      {project.mockup === "football" && <FootballMockup project={project} isHero={isHero} />}
        </>
      ) : null}
    </div>
  );
}

function BrowserShell({
  children,
  isHero,
}: {
  children: React.ReactNode;
  isHero: boolean;
}) {
  return (
    <div
      className={`liquid-glass absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-lg ${
        isHero ? "min-h-72" : "min-h-36"
      }`}
    >
      <div className="flex h-8 items-center gap-2 border-b border-white/10 px-4">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-yellow-300" />
        <span className="size-2 rounded-full bg-green-400" />
      </div>
      {children}
    </div>
  );
}

function AudioMockup({ isHero }: ProjectMockupProps & { isHero: boolean }) {
  return (
    <BrowserShell isHero={isHero}>
      <div className="flex flex-col gap-5 p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">AI studio</p>
            <h3 className={`${isHero ? "text-5xl" : "text-3xl"} font-display leading-none text-lime`}>
              Manele.io
            </h3>
          </div>
          <div className="rounded-full bg-lime px-3 py-1 text-xs font-black text-ink">20k+</div>
        </div>
        <div className="grid grid-cols-9 items-end gap-2">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="rounded-full bg-lime/80"
              style={{ height: `${18 + ((index * 17) % 80)}px` }}
            />
          ))}
        </div>
        <div className="rounded-lg border border-lime/30 bg-lime/10 p-3 text-sm text-white/72">
          Generate a track with cultural context, hook structure, and ready-to-share output.
        </div>
      </div>
    </BrowserShell>
  );
}

function AgencyMockup({ isHero }: ProjectMockupProps & { isHero: boolean }) {
  return (
    <BrowserShell isHero={isHero}>
      <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Creative tech</p>
          <h3 className={`${isHero ? "text-5xl" : "text-3xl"} font-display leading-none text-white`}>
            Vengency
          </h3>
          <p className="mt-2 text-sm text-white/58">Web, brand, and launch systems for ambitious small businesses.</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Brand", "Web", "Launch", "Deploy"].map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/[0.06] p-3 text-sm font-bold text-lime">
              {item}
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  );
}

function LogisticsMockup({ isHero }: ProjectMockupProps & { isHero: boolean }) {
  return (
    <BrowserShell isHero={isHero}>
      <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.9fr] sm:p-7">
        <div className="relative min-h-32 rounded-lg border border-cyan-300/20 bg-cyan-300/10">
          <span className="absolute left-[16%] top-[62%] h-1 w-[68%] rounded-full bg-cyan-200/70" />
          <span className="absolute left-[28%] top-[42%] size-3 rounded-full bg-lime shadow-glow" />
          <span className="absolute left-[57%] top-[55%] size-3 rounded-full bg-white" />
          <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            Danube sector
          </span>
        </div>
        <div className="space-y-2">
          {["Vessel telemetry", "Cargo loading", "Port workflow"].map((item) => (
            <div key={item} className="rounded-md bg-white/[0.07] p-3 text-sm font-semibold text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </BrowserShell>
  );
}

function MarketplaceMockup({ isHero }: ProjectMockupProps & { isHero: boolean }) {
  return (
    <BrowserShell isHero={isHero}>
      <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-7">
        {["Basic", "Complete", "Premium"].map((item, index) => (
          <div
            key={item}
            className={`rounded-lg border p-4 ${
              index === 1 ? "border-lime bg-lime text-ink" : "border-white/10 bg-white/[0.06] text-white"
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">{item}</p>
            <p className="mt-5 text-2xl font-black">{index === 0 ? "€" : "€€"}</p>
            <div className="mt-5 h-2 rounded-full bg-current opacity-30" />
          </div>
        ))}
      </div>
    </BrowserShell>
  );
}

function FootballMockup({ isHero }: ProjectMockupProps & { isHero: boolean }) {
  return (
    <BrowserShell isHero={isHero}>
      <div className="grid gap-4 p-5 sm:grid-cols-[0.9fr_1.1fr] sm:p-7">
        <div className="rounded-xl border border-green-300/30 bg-green-300/10 p-4">
          <div className="aspect-square rounded-full border-2 border-green-200/60" />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Open match</p>
          <h3 className={`${isHero ? "text-4xl" : "text-2xl"} font-black text-white`}>4 spots left</h3>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="aspect-square rounded-full bg-lime/80" />
            ))}
          </div>
        </div>
      </div>
    </BrowserShell>
  );
}
