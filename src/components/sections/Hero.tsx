"use client";

import Image from "next/image";
import { Lang, COPY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type HeroProps = {
  lang: Lang;
};

function CtaArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="rotate-[-45deg]"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero({ lang }: HeroProps) {
  const hero = COPY.hero;

  return (
    <section className="pt-24 sm:pt-32">
      <Container>
        <div className="md:hidden">
          <div className="w-full">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-2)]">
                {hero.kicker[lang]}
              </p>
            </Reveal>

            <Reveal delay={0.05} className="mt-4">
              <h1 className="break-words text-[29px] font-black uppercase leading-[0.92] tracking-[-0.03em]">
                {hero.titleLines[lang].map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="mt-5">
              <p className="max-w-none text-[14px] leading-[1.45] text-[var(--text-2)]">
                {hero.desc[lang]}
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-6">
              <div className="flex flex-col gap-4">
                <a
                  href="https://t.me/Mysterious_Nomad"
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "inline-flex h-[58px] w-full items-center justify-center rounded-full px-6",
                    "border border-transparent bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)]",
                    "text-[15px] font-medium",
                    "transition-colors",
                    "hover:border-[var(--btn-solid-hover-border)] hover:bg-transparent hover:text-[var(--btn-solid-hover-fg)]",
                  ].join(" ")}
                >
                  <span>{hero.primaryCta[lang]}</span>
                  <span className="ml-3 inline-flex">
                    <CtaArrowIcon />
                  </span>
                </a>
                <a
                  href="#experience"
                  className={[
                    "inline-flex h-[58px] w-full items-center justify-center rounded-full px-6",
                    "border border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-outline-fg)]",
                    "text-[15px] font-medium",
                    "transition-colors",
                    "hover:border-[var(--btn-outline-hover-border)] hover:bg-[var(--btn-outline-hover-bg)] hover:text-[var(--btn-outline-hover-fg)]",
                  ].join(" ")}
                >
                  {hero.secondaryCta[lang]}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="mt-7">
              <div className="relative aspect-[0.78] w-full overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--card)]">
                <div className="absolute inset-0 opacity-80">
                  <Image
                    src="/hero.jpg"
                    alt="Фотография дизайнера"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  aria-hidden
                  className="hero-reflection pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 22%)",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-12 items-stretch gap-6 sm:gap-10 md:gap-12">
            <div className="col-span-12 min-w-0 md:col-span-6 lg:col-span-7">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-2)] sm:text-xs sm:tracking-[0.2em]">
                  {hero.kicker[lang]}
                </p>
              </Reveal>

              <Reveal delay={0.05} className="mt-4">
                <h1 className="max-w-[580px] break-words text-[28px] font-black uppercase leading-[0.96] tracking-[-0.02em] sm:text-[46px] md:text-[42px] lg:text-[58px]">
                  {hero.titleLines[lang].map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              </Reveal>

              <Reveal delay={0.1} className="mt-5">
                <p className="max-w-[520px] text-[14px] leading-6 text-[var(--text-2)] sm:text-[15px] sm:leading-7">
                  {hero.desc[lang]}
                </p>
              </Reveal>

              <Reveal delay={0.15} className="mt-6">
                <div className="flex items-center gap-3">
                  <a
                    href="https://t.me/Mysterious_Nomad"
                    target="_blank"
                    rel="noreferrer"
                    className={[
                      "inline-flex h-11 shrink-0 items-center justify-center rounded-full px-5 whitespace-nowrap",
                      "border border-transparent bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)]",
                      "text-sm font-semibold",
                      "transition-colors",
                      "hover:border-[var(--btn-solid-hover-border)] hover:bg-transparent hover:text-[var(--btn-solid-hover-fg)]",
                    ].join(" ")}
                  >
                    <span>{hero.primaryCta[lang]}</span>
                    <span className="ml-3 inline-flex">
                      <CtaArrowIcon />
                    </span>
                  </a>
                  <a
                    href="#experience"
                    className={[
                      "inline-flex h-11 shrink-0 items-center justify-center rounded-full px-5 whitespace-nowrap",
                      "border border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-outline-fg)]",
                      "text-sm font-semibold",
                      "transition-colors",
                      "hover:border-[var(--btn-outline-hover-border)] hover:bg-[var(--btn-outline-hover-bg)] hover:text-[var(--btn-outline-hover-fg)]",
                    ].join(" ")}
                  >
                    {hero.secondaryCta[lang]}
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <Reveal delay={0.08} className="h-full">
                <div className="relative aspect-[4/5] w-full max-w-full overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--card)] md:min-h-[520px] md:rounded-[var(--radius-lg)]">
                  <div className="absolute inset-0 opacity-80">
                    <Image
                      src="/hero.jpg"
                      alt="Фотография дизайнера"
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div
                    aria-hidden
                    className="hero-reflection pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 22%)",
                    }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
