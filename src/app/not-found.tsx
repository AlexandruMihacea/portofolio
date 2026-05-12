import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-lime">404</p>
        <h1 className="mt-4 font-display text-8xl leading-none text-white">Page not found</h1>
        <p className="mt-4 text-muted">This page is not part of the current portfolio build.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-lime px-5 py-3 text-sm font-black text-ink"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
