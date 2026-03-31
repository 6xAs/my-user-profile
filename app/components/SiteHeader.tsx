"use client";

import { useState } from "react";
import { BiCheck, BiCode, BiCopy, BiEnvelope, BiMenu, BiX } from "react-icons/bi";

type SiteHeaderProps = {
  name: string;
};

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#projetos", label: "Projetos" },
];

export default function SiteHeader({ name }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "anderson.6xas@gmail.com";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
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
          <button
            type="button"
            onClick={() => setIsEmailModalOpen(true)}
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:brightness-110"
          >
            Fale comigo
          </button>
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
          <button
            type="button"
            onClick={() => {
              handleLinkClick();
              setIsEmailModalOpen(true);
            }}
            className="rounded-xl border border-white/20 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
          >
            Fale comigo
          </button>
        </nav>
      </div>
      </header>

      {isEmailModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            onClick={() => setIsEmailModalOpen(false)}
          />
          <div className="glass ring-gradient relative w-full max-w-md rounded-3xl p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsEmailModalOpen(false)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/25 hover:text-white"
              aria-label="Fechar modal de contato"
            >
              <BiX className="text-xl" />
            </button>

            <div className="pr-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300/15 text-emerald-300 shadow-glow">
                <BiEnvelope className="text-[26px]" />
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-slate-400">
                Contato direto
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Meu e-mail profissional
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Você pode copiar o endereço abaixo e colar no seu provedor de e-mail preferido.
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm font-medium text-slate-100">{email}</p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                {copied ? (
                  <>
                    <BiCheck className="text-lg" />
                    E-mail copiado
                  </>
                ) : (
                  <>
                    <BiCopy className="text-lg" />
                    Copiar e-mail
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
