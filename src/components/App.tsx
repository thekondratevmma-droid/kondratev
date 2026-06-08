"use client";

import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Cases } from "@/components/sections/Cases";
import { Contacts } from "@/components/sections/Contacts";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import type { Lang } from "@/lib/content";

type Theme = "dark" | "light";

export function App() {
  const [lang, setLang] = useState<Lang>("ru");
  const [theme, setTheme] = useState<Theme>("dark");

  const storageKey = useMemo(() => "portfolio:prefs:v1", []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { lang?: Lang; theme?: Theme };
      if (parsed.lang) setLang(parsed.lang);
      if (parsed.theme) setTheme(parsed.theme);
    } catch {
      // ignore
    }
  }, [storageKey]);

  useEffect(() => {
    // apply theme class
    const root = document.documentElement;
    if (theme === "light") root.classList.add("theme-light");
    else root.classList.remove("theme-light");

    // apply lang
    root.lang = lang;

    try {
      localStorage.setItem(storageKey, JSON.stringify({ lang, theme }));
    } catch {
      // ignore
    }
  }, [lang, theme, storageKey]);

  return (
    <div className="flex-1">
      <Header
        lang={lang}
        theme={theme}
        onLangToggle={() => setLang((l) => (l === "ru" ? "en" : "ru"))}
        onThemeToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      <main>
        <Hero lang={lang} />
        <Cases lang={lang} />
        <Experience lang={lang} />
        <Contacts lang={lang} />
      </main>

      <footer className="pb-10 pt-6 text-center text-xs text-[var(--text-2)]">
        © {new Date().getFullYear()} Андрей Кондратьев
      </footer>
    </div>
  );
}
