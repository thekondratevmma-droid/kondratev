"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lang, COPY } from "@/lib/content";
import { Container } from "@/components/ui/Container";

type Theme = "dark" | "light";

type HeaderProps = {
  lang: Lang;
  theme: Theme;
  onLangToggle: () => void;
  onThemeToggle: () => void;
};

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M12 2.5v2.3M12 19.2v2.3M21.5 12h-2.3M4.8 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ lang, theme, onLangToggle, onThemeToggle }: HeaderProps) {
  const nav = COPY.nav;
  const [open, setOpen] = useState(false);
  const [glowKey, setGlowKey] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed top-3 left-1/2 z-[1000] w-full -translate-x-1/2 sm:top-4">
      <Container>
        <div
          className={[
            "mobile-shell mx-auto flex h-14 w-full items-center sm:h-16",
            "rounded-full border border-[var(--border)]",
            "bg-[var(--glass-bg)] backdrop-blur-[24px]",
            "shadow-[var(--glass-shadow)]",
            "inset-border",
            "px-2.5 sm:px-4",
          ].join(" ")}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--card)] sm:h-9 sm:w-9">
              <Image
                src="/avatar.jpg"
                alt="Аватар"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-[13px] font-semibold tracking-tight sm:text-sm">
              <span className="sm:hidden">Андрей</span>
              <span className="hidden sm:inline">Андрей Кондратьев</span>
            </span>
          </div>

          <div className="flex-1" />

          <nav className="hidden items-center gap-6 pr-6 text-sm text-[var(--text-2)] md:flex">
            <a
              href="#cases"
              className="transition-colors hover:text-[var(--text)]"
            >
              {nav.cases[lang]}
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-[var(--text)]"
            >
              {nav.experience[lang]}
            </a>
            <a
              href="#contacts"
              className="transition-colors hover:text-[var(--text)]"
            >
              {nav.contacts[lang]}
            </a>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => {
                if (!reduceMotion) setGlowKey((k) => k + 1);
                onThemeToggle();
              }}
              className={[
                "relative inline-flex h-10 w-10 items-center justify-center rounded-full overflow-hidden",
                "border border-[var(--border)] bg-transparent",
                "text-[var(--text)] transition-colors",
                "hover:border-[rgba(255,255,255,0.22)]",
              ].join(" ")}
              aria-label="Переключить тему"
            >
              <AnimatePresence>
                {!reduceMotion && glowKey > 0 && (
                  <motion.span
                    key={glowKey}
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.0) 80%)",
                      mixBlendMode: "screen",
                    }}
                    initial={{ opacity: 0, filter: "blur(6px)" }}
                    animate={{ opacity: [0, 1, 0], filter: ["blur(6px)", "blur(2px)", "blur(10px)"] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </AnimatePresence>

              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={onLangToggle}
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full",
                "border border-[var(--border)] bg-[rgba(255,255,255,0.02)]",
                "text-[11px] font-semibold tracking-wide",
                "transition-colors hover:bg-[rgba(255,255,255,0.06)]",
              ].join(" ")}
              aria-label="Переключить язык"
            >
              {lang.toUpperCase()}
            </button>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={[
                "inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden",
                "border border-[var(--border)] bg-[rgba(255,255,255,0.02)]",
                "text-[var(--text)] transition-colors hover:bg-[rgba(255,255,255,0.06)]",
              ].join(" ")}
              aria-label="Меню"
              aria-expanded={open}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 md:hidden">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--glass-bg)] backdrop-blur-[24px] shadow-[var(--glass-shadow)] inset-border p-2">
              <a
                href="#cases"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[rgba(255,255,255,0.06)]"
              >
                {nav.cases[lang]}
              </a>
              <a
                href="#experience"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[rgba(255,255,255,0.06)]"
              >
                {nav.experience[lang]}
              </a>
              <a
                href="#contacts"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[rgba(255,255,255,0.06)]"
              >
                {nav.contacts[lang]}
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
