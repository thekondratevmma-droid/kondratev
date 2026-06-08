"use client";

import Image from "next/image";
import { Lang, COPY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type HeroProps = {
  lang: Lang;
};

export function Hero({ lang }: HeroProps) {
  const hero = COPY.hero;

  return (
    <section className="pt-24 sm:pt-32">
      <Container>
        <div className="mobile-frame">
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
                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href="https://t.me/Mysterious_Nomad"
                    target="_blank"
                    rel="noreferrer"
                    className={[
                      "inline-flex h-11 w-full items-center justify-center rounded-full px-5 sm:w-auto",
                      "border border-transparent bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)]",
                      "text-sm font-semibold",
                      "transition-colors",
                      "hover:border-[var(--btn-solid-hover-border)] hover:bg-transparent hover:text-[var(--btn-solid-hover-fg)]",
                    ].join(" ")}
                  >
                    {hero.primaryCta[lang]}
                  </a>
                  <a
                    href="#experience"
                    className={[
                      "inline-flex h-11 w-full items-center justify-center rounded-full px-5 sm:w-auto",
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
                  {/* subtle top reflection */}
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
