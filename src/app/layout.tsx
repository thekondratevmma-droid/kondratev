import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Андрей Кондратьев — Product Designer",
  description:
    "Портфолио UX/UI и продуктового дизайнера: кейсы, опыт и контакты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
