import Link from "next/link";

const navItems = [
  { href: "/#ventures", label: "Ventures" },
  { href: "/#projects", label: "Projects" },
  { href: "/#timeline", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-3xl tracking-normal text-lime">
          AM
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-lime">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contact"
          className="rounded-lg border border-lime px-4 py-2 text-sm font-bold text-lime transition hover:bg-lime hover:text-ink"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  );
}
