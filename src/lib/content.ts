export type Lang = "ru" | "en";

export type CaseItem = {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tags: string[];
  href?: string;
  imageSrc: string;
  comingSoon?: boolean;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: Record<Lang, string>;
  bullets: Record<Lang, string[]>;
};

export const COPY = {
  nav: {
    cases: { ru: "Кейсы", en: "Cases" },
    experience: { ru: "Опыт", en: "Experience" },
    contacts: { ru: "Контакты", en: "Contacts" },
  },
  hero: {
    kicker: { ru: "UI/UX DESIGNER / PRODUCT DESIGNER", en: "UI/UX DESIGNER / PRODUCT DESIGNER" },
    titleLines: {
      ru: ["ПРОЕКТИРОВАНИЕ", "ИНТЕРФЕЙСОВ", "С ПОНИМАНИЕМ", "ПРОДУКТА"],
      en: ["DESIGNING", "INTERFACES", "WITH PRODUCT", "THINKING"],
    },
    desc: {
      ru: "Создаю цифровые продукты для web, mobile и интерактивных систем, учитывая задачи бизнеса, потребности пользователей и особенности платформы.",
      en: "I design digital products for web, mobile, and interactive systems, balancing business goals, user needs, and platform specifics.",
    },
    primaryCta: { ru: "Написать мне", en: "Message me" },
    secondaryCta: { ru: "Смотреть опыт", en: "View experience" },
  },
  sections: {
    cases: { ru: "КЕЙСЫ", en: "CASES" },
    experience: { ru: "ОПЫТ", en: "EXPERIENCE" },
    contacts: { ru: "КОНТАКТЫ", en: "CONTACTS" },
  },
  contacts: {
    cardTitle: { ru: "Связаться со мной", en: "Get in touch" },
    cardDesc: {
      ru: "Открыт к новым возможностям, интересным проектам и профессиональному сотрудничеству.",
      en: "Open to new opportunities, interesting projects, and professional collaboration.",
    },
    tg: { ru: "Telegram", en: "Telegram" },
    email: { ru: "Написать на почту", en: "Email me" },
  },
} as const;

export const CASES: CaseItem[] = [
  {
    title: {
      ru: "Интерактивный проект МГУ и Университета Сямэня",
      en: "Interactive project for MSU & Xiamen University",
    },
    description: {
      ru: "Цифровой двойник МГУ и Университета Сямэня с интерактивной 3D‑навигацией.",
      en: "A digital twin of campuses with interactive 3D navigation.",
    },
    tags: ["B2G", "Цифровой двойник", "UX Архитектура"],
    href: "#",
    imageSrc: "/case-msu.png",
  },
  {
    title: { ru: "Скоро", en: "Coming soon" },
    description: {
      ru: "Следующий кейс в процессе подготовки.",
      en: "Next case is in progress.",
    },
    tags: [],
    imageSrc: "/vineyard.jpg",
    comingSoon: true,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "avalin",
    company: "АВАЛИН",
    role: "UX/UI Designer",
    period: { ru: "Сентябрь 2025 — Настоящее время", en: "Sep 2025 — Present" },
    bullets: {
      ru: [
        "Проектировал UX/UI для цифровых двойников жилых комплексов, городов и предприятий под Touch, Desktop и Mobile‑платформы.",
        "Разрабатывал пользовательские сценарии и логику взаимодействия для интерактивных продуктов.",
        "Участвовал в проектировании информационной архитектуры и структуры экранов.",
        "Анализировал требования заказчиков и преобразовывал их в интерфейсные решения.",
        "Адаптировал интерфейсы под различные устройства и сценарии использования.",
        "Участвовал в UX‑проработке мультимедийных проектов на базе Unreal Engine 5.",
        "Взаимодействовал с разработчиками и 3D‑командой на этапах реализации решений.",
      ],
      en: [
        "Designed UX/UI for digital twin products.",
        "Created user scenarios and flows.",
        "Built information architecture.",
        "Analyzed stakeholder and client requirements.",
        "Contributed to UX for multimedia experiences.",
        "Worked closely with engineering teams.",
      ],
    },
  },
  {
    id: "kg-energo",
    company: "ГК ЮГ-ЭНЕРГО",
    role: "UX/UI & Graphic Designer",
    period: { ru: "Май 2025 — Сентябрь 2025", en: "May 2025 — Sep 2025" },
    bullets: {
      ru: [
        "Сформировал единую визуальную систему компании: собрал UI‑kit, структурировал компоненты и заложил основу дизайн‑системы для сайтов, презентаций и маркетинговых материалов.",
        "Привёл корпоративные digital‑материалы к единому визуальному стандарту, повысив консистентность интерфейсов и бренд‑коммуникаций.",
        "Проектировал внутренние страницы корпоративных сайтов с учётом UX‑логики, структуры контента и требований бизнеса.",
        "Переработал инфографику для маркетплейсов: улучшил читаемость, визуальную иерархию и соответствие фирменному стилю.",
        "Разрабатывал презентации коммерческих предложений, рекламные креативы, визитки и информационные материалы для клиентов и сотрудников.",
        "Обеспечивал визуальную целостность материалов компании на разных носителях — от веб‑интерфейсов до печатной продукции.",
      ],
      en: [
        "Evolved a design system and UI patterns.",
        "Designed internal service interfaces.",
        "Created product communication materials.",
      ],
    },
  },
  {
    id: "a-group",
    company: "A‑Group",
    role: "UX/UI Designer",
    period: { ru: "Октябрь 2024 — Май 2025", en: "Oct 2024 — May 2025" },
    bullets: {
      ru: [
        "Разрабатывал UX/UI для корпоративных сайтов, каталогов, интернет‑магазинов и лендингов, учитывая бизнес‑задачи, пользовательские сценарии и адаптивность.",
        "Проектировал структуру страниц, навигацию и визуальную иерархию для повышения понятности интерфейсов и удобства взаимодействия.",
        "Создавал адаптивные версии интерфейсов для мобильных устройств, сохраняя консистентность визуального языка и пользовательской логики.",
        "Систематизировал UI‑решения по проектам: собирал UI‑kit, компоненты и шаблоны для ускорения дальнейшей разработки.",
        "Разрабатывал рекламные баннеры, презентации и коммерческие предложения в едином фирменном стиле.",
        "Подготавливал макеты к передаче в разработку, учитывая состояния элементов, адаптивность и особенности реализации.",
      ],
      en: [
        "Designed UX flows and prototypes.",
        "Supported development and QA.",
        "Collaborated with product stakeholders.",
      ],
    },
  },
];
