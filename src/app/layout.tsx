import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RendaLoop | Renda extra contínua",
  description: "Planeje e execute projetos para gerar renda extra recorrente."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
