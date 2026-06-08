# Портфолио — Next.js + Tailwind

## Запуск

```bash
npm install
npm run dev
```

Dev-сервер поднимется на `http://localhost:3000`.

## Сборка

```bash
npm run build
npm run start
```

## Где править контент

- Тексты и данные: `src/lib/content.ts`
- Страница/композиция: `src/components/App.tsx`
- Секции:
  - `src/components/sections/Hero.tsx`
  - `src/components/sections/Cases.tsx`
  - `src/components/sections/Experience.tsx`
  - `src/components/sections/Contacts.tsx`
- Стеклянный header: `src/components/Header.tsx`

## Важные детали

- Переключатели **тема (dark/light)** и **язык (RU/EN)** — в шапке, настройки сохраняются в `localStorage`.
- 3D hover карточек кейсов: `src/components/ui/TiltCard.tsx` (с ограничением до 8° и бликом).
- Токены (цвета/скругления/стекло): `src/app/globals.css`

