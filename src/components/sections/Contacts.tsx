"use client";

import { COPY, Lang } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type ContactsProps = { lang: Lang };

function TelegramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21.9 5.6 19 19.4c-.2 1-1.2 1.6-2.1 1.1l-4.7-2.8-2.3 2.2c-.2.2-.5.3-.8.3h-.3c-.5-.1-.9-.6-.9-1.1l.1-3.5 9.4-8.4c.2-.2 0-.4-.2-.3L6.3 13.4 2.6 12.2c-1-.3-1.1-1.7-.2-2.2l18.1-7c1-.4 1.9.4 1.7 1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M5.5 7.5 12 12l6.5-4.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Contacts({ lang }: ContactsProps) {
  const c = COPY.contacts;

  return (
    <section id="contacts" className="scroll-mt-24 pb-20 pt-14 sm:scroll-mt-28 sm:pb-28 sm:pt-20">
      <Container>
        <Reveal>
          <h2 className="text-[28px] font-black uppercase tracking-[-0.02em] sm:text-4xl">
            {COPY.sections.contacts[lang]}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-5 w-full sm:mt-6">
          <div className="w-full rounded-[26px] border border-[var(--border)] bg-[var(--card)] p-5 sm:rounded-[var(--radius-lg)] sm:p-8">
            <div className="text-xl font-semibold tracking-tight">
              {c.cardTitle[lang]}
            </div>
            <p className="mt-2 max-w-[720px] text-sm leading-6 text-[var(--text-2)] sm:text-[15px] sm:leading-7">
              {c.cardDesc[lang]}
            </p>

            <div className="mt-6 flex flex-col gap-4">
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
                <span className="mr-3 inline-flex">
                  <TelegramIcon />
                </span>
                {c.tg[lang]}
              </a>
              <a
                href="mailto:thekondratevtkd@mail.ru"
                className={[
                  "inline-flex h-[58px] w-full items-center justify-center rounded-full px-6",
                  "border border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-outline-fg)]",
                  "text-[15px] font-medium",
                  "transition-colors",
                  "hover:border-[var(--btn-outline-hover-border)] hover:bg-[var(--btn-outline-hover-bg)] hover:text-[var(--btn-outline-hover-fg)]",
                ].join(" ")}
              >
                <span className="mr-3 inline-flex">
                  <MailIcon />
                </span>
                {c.email[lang]}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
