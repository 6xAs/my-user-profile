import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perfil | Analista Programador e Cientista de Dados",
  description:
    "Perfil profissional com foco em desenvolvimento, analytics e ciencia de dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
