import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-12 max-w-7xl px-5 pb-8 sm:px-8">
      <div className="liquid-glass grid gap-8 rounded-t-2xl px-6 py-10 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <Link href="/" className="font-display text-8xl leading-none text-white">
          AM
        </Link>
        <div className="lg:text-right">
          <p className="font-display text-5xl leading-none text-white/40 sm:text-8xl">
            Building <span className="text-lime">focused products</span>
            <br />
            for overlooked markets.
          </p>
          <p className="mt-4 text-sm font-semibold text-muted">© 2026 Alexandru Mihacea</p>
        </div>
      </div>
    </footer>
  );
}
