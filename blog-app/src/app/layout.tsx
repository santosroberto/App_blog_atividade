import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Profissional",
  description: "Blog moderno com Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-black text-white p-4 text-center text-xl font-bold">
          Meu Blog
        </header>

        <main className="max-w-4xl mx-auto p-6">{children}</main>

        <footer className="text-center p-4 text-sm text-gray-500">
          © Todos Direitos Resevados - 2026 - Roberto
        </footer>
      </body>
    </html>
  );
}
