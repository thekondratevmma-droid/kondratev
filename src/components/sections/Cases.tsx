"use client";

import Image from "next/image";
import { CASES, Lang, COPY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

type CasesProps = { lang: Lang };

export function Cases({ lang }: CasesProps) {
  return (
    <section id="cases" className="scroll-mt-24 pt-14 sm:scroll-mt-28 sm:pt-20">
      <Container>
        <Reveal>
          <h2 className="text-[28px] font-black uppercase tracking-[-0.02em] sm:text-4xl">
            {COPY.sections.cases[lang]}
          </h2>
        </Reveal>

        <div className="mt-5 grid w-full grid-cols-1 gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2">
          {CASES.map((c, idx) => (
            <Reveal key={idx} delay={0.05 * idx} className="h-full w-full">
              <TiltCard className="mobile-shell h-full w-full rounded-[var(--radius-lg)]">
                <article className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--card)] sm:min-h-[420px] sm:rounded-[var(--radius-lg)]">
                  {c.comingSoon ? (
                    <div className="relative flex h-full min-h-[420px] items-stretch">
                      {/* blurred background for entire card */}
                      <Image
                        src={c.imageSrc}
                        alt={c.title[lang]}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover blur-[22px] scale-110"
                        priority={idx === 0}
                      />
                      <div className="absolute inset-0 bg-black/40" />

                      <div className="relative z-10 grid w-full place-items-center p-5 sm:p-6">
                        <div className="flex flex-col items-center gap-3">
                          <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--border)] bg-black/25 backdrop-blur-md">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden
                            >
                              <path
                                d="M7 11V8a5 5 0 0 1 10 0v3"
                                stroke="white"
                                strokeWidth="1"
                                strokeLinecap="round"
                              />
                              <path
                                d="M7.5 11h9A2.5 2.5 0 0 1 19 13.5v5A2.5 2.5 0 0 1 16.5 21h-9A2.5 2.5 0 0 1 5 18.5v-5A2.5 2.5 0 0 1 7.5 11Z"
                                stroke="white"
                                strokeWidth="1"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                            {lang === "ru" ? "СКОРО" : "SOON"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={c.imageSrc}
                          alt={c.title[lang]}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                          priority={idx === 0}
                        />
                      </div>

                      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                        <h3 className="text-lg font-semibold leading-6 tracking-tight">
                          {c.title[lang]}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
                          {c.description[lang]}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className={[
                                "inline-flex items-center rounded-full px-3 py-1",
                                "text-xs font-semibold text-[var(--text)]",
                                "border border-[var(--border)] bg-[rgba(255,255,255,0.02)]",
                              ].join(" ")}
                            >
                              {t}
                            </span>
                          ))}

                          <span className="flex-1" />

                          <a
                            href={c.href ?? "#"}
                            className={[
                              "group ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full",
                              "border border-transparent bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)]",
                              "transition-colors",
                              "hover:border-[var(--btn-solid-hover-border)] hover:bg-transparent hover:text-[var(--btn-solid-hover-fg)]",
                            ].join(" ")}
                            aria-label="Открыть кейс"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden
                              className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rotate-[-45deg] group-hover:rotate-0"
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
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
