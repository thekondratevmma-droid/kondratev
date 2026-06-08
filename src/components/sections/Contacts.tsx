"use client";

import { COPY, Lang } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type ContactsProps = { lang: Lang };

export function Contacts({ lang }: ContactsProps) {
  const c = COPY.contacts;

  return (
    <section id="contacts" className="scroll-mt-28 pb-20 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-black uppercase tracking-[-0.02em] sm:text-4xl">
            {COPY.sections.contacts[lang]}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
            <div className="text-xl font-semibold tracking-tight">
              {c.cardTitle[lang]}
            </div>
            <p className="mt-2 max-w-[720px] text-sm leading-6 text-[var(--text-2)] sm:text-[15px] sm:leading-7">
              {c.cardDesc[lang]}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://t.me/Mysterious_Nomad"
                target="_blank"
                rel="noreferrer"
                className={[
                  "inline-flex h-11 items-center justify-center rounded-full px-5",
                  "border border-transparent bg-[var(--btn-solid-bg)] text-[var(--btn-solid-fg)]",
                  "text-sm font-semibold",
                  "transition-colors",
                  "hover:border-[var(--btn-solid-hover-border)] hover:bg-transparent hover:text-[var(--btn-solid-hover-fg)]",
                ].join(" ")}
              >
                {c.tg[lang]}
              </a>
              <a
                href="mailto:thekondratevtkd@mail.ru"
                className={[
                  "inline-flex h-11 items-center justify-center rounded-full px-5",
                  "border border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-outline-fg)]",
                  "text-sm font-semibold",
                  "transition-colors",
                  "hover:border-[var(--btn-outline-hover-border)] hover:bg-[var(--btn-outline-hover-bg)] hover:text-[var(--btn-outline-hover-fg)]",
                ].join(" ")}
              >
                {c.email[lang]}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
