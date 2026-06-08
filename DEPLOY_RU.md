# Деплой (Vercel / Railway)

Важно: в текущей среде у ассистента есть сетевые ограничения, поэтому опубликовать проект “самому” (залогиниться в твой аккаунт и нажать Deploy) я не могу. Но проект уже подготовлен для деплоя — ниже самые быстрые способы.

## Вариант 1 — Vercel (рекомендуется для Next.js)

### Способ A: через GitHub (самый надёжный)
1) Создай репозиторий на GitHub (пустой).
2) В папке проекта выполни:
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```
3) Открой https://vercel.com/new → **Import Git Repository** → выбери репозиторий → Deploy.

### Способ B: через Vercel CLI
1) Установи CLI:
```bash
npm i -g vercel
```
2) В папке проекта:
```bash
vercel
vercel --prod
```

## Вариант 2 — Railway (тоже ок)

### Через GitHub
1) Запушь проект на GitHub (как в Vercel, способ A).
2) Открой https://railway.app → New Project → Deploy from GitHub repo.
3) В настройках сервиса укажи стартовую команду:
```bash
npm run start:railway
```
Railway сам выставит переменную `PORT`, а команда поднимет Next.js на нужном порту.

## Полезные команды проекта
- Локально: `npm run dev`
- Прод билд: `npm run build`
- Статика (если нужен pure-static хостинг): `npm run export` (создаст папку `out`)

