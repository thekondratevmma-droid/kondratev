"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { COPY, EXPERIENCE, Lang } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type ExperienceProps = { lang: Lang };

export function Experience({ lang }: ExperienceProps) {
  const [open, setOpen] = useState<string>("");

  return (
    <section id="experience" className="scroll-mt-24 pt-14 sm:scroll-mt-28 sm:pt-20">
      <Container>
        <Reveal>
          <h2 className="text-[28px] font-black uppercase tracking-[-0.02em] sm:text-4xl">
            {COPY.sections.experience[lang]}
          </h2>
        </Reveal>

        <div className="mt-5 w-full space-y-3 sm:mt-6">
          {EXPERIENCE.map((item, idx) => {
            const isOpen = open === item.id;

            return (
              <Reveal key={item.id} delay={0.04 * idx} className="w-full">
                <div className="w-full rounded-[14px] border border-[var(--border)] bg-[var(--card)] sm:rounded-[var(--radius)]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "" : item.id)}
                    className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:items-center sm:px-5"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0 pr-1">
                      <div className="text-[15px] font-semibold leading-5 tracking-tight sm:text-sm sm:leading-normal">
                        {item.company} — {item.role}
                      </div>
                      <div className="mt-1 text-xs text-[var(--text-2)]">
                        {item.period[lang]}
                      </div>
                    </div>

                    <span
                      className={[
                        "inline-flex h-10 w-10 flex-none items-center justify-center rounded-full",
                        "border border-transparent bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)]",
                        "transition-colors",
                        "hover:border-[var(--btn-solid-hover-border)] hover:bg-transparent hover:text-[var(--btn-solid-hover-fg)]",
                      ].join(" ")}
                      aria-hidden
                    >
                      {isOpen ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M6 12h12"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M6 12h12"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 6v12"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                          <ul className="space-y-2 text-sm leading-6 text-[var(--text-2)]">
                            {item.bullets[lang].map((b) => (
                              <li key={b} className="flex gap-3">
                                <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-[var(--text-2)]/60" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
