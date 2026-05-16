import Link from "next/link";

const navItems = [
  { href: "/#ventures", label: "Ventures" },
  { href: "/#projects", label: "Projects" },
  { href: "/#timeline", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <nav className="liquid-glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-4 py-3 sm:px-6">
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
          href="/#contact"
          className="liquid-button rounded-lg px-4 py-2 text-sm font-bold text-lime transition hover:border-lime/60 hover:text-white"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  );
}
