"use client";

import { useState } from "react";
import { BiCode, BiMenu, BiX } from "react-icons/bi";

type SiteHeaderProps = {
  name: string;
};

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
];

export default function SiteHeader({ name }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/80 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300 text-slate-900 shadow-glow">
            <BiCode className="text-[20px]" />
          </span>
          <div>
            <p className="text-sm text-slate-400">Perfil profissional</p>
            <p className="text-base font-semibold tracking-tight">{name}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:anderson.6xas@gmail.com"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
          >
            Fale comigo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14] md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="site-header-mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <>
              <BiX className="text-[22px]" />
              <span className="sr-only">Fechar menu</span>
            </>
          ) : (
            <>
              <BiMenu className="text-[22px]" />
              <span className="sr-only">Abrir menu</span>
            </>
          )}
        </button>
      </div>

      <div
        id="site-header-mobile-menu"
        className={`md:hidden border-b border-white/10 bg-[#0b0f14]/90 transition-[max-height] duration-200 ease-out ${
          isMenuOpen ? "max-h-[400px]" : "max-h-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col gap-3 px-4 py-3 text-sm text-slate-200">
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.href}`}
              href={link.href}
              className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:anderson.6xas@gmail.com"
            className="rounded-xl border border-white/20 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
            onClick={handleLinkClick}
          >
            Fale comigo
          </a>
        </nav>
      </div>
    </header>
  );
}
