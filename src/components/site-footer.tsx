import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    href: "mailto:alex@secortex.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/AlexandruMihacea",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/alexandru-mihacea-1355341b0/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

type SiteFooterProps = {
  showContactLinks?: boolean;
};

export function SiteFooter({ showContactLinks = true }: SiteFooterProps) {
  return (
    <footer className="mx-auto mt-12 max-w-7xl px-5 pb-8 sm:px-8">
      <div className="liquid-glass grid gap-8 rounded-lg px-6 py-10 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <Link href="/" className="font-display text-8xl leading-none text-white">
          AM
        </Link>
        <div className="lg:text-right">
          <p className="font-display text-5xl leading-none text-white/40 sm:text-8xl">
            Building <span className="text-lime">focused products</span>
            <br />
            for overlooked markets.
          </p>
          {showContactLinks ? (
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              {footerLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  className="liquid-button inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-black text-white transition hover:border-lime/60 hover:text-lime"
                >
                  <Icon className="size-4" />
                  {label}
                </Link>
              ))}
            </div>
          ) : null}
          <p className="mt-5 text-sm font-semibold text-muted">© 2026 Alexandru Mihacea</p>
        </div>
      </div>
    </footer>
  );
}
