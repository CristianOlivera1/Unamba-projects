import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

const ogelo = localFont({
  src: "./fonts/Ogelo.woff",
  variable: "--font-ogelo",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Hackatón UNAMBA 2026",
  description: "Crea, Innova, Impacta. Desarrolla tu proyecto y demuestra tu talento en 3 semanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${figtree.variable} ${ogelo.variable} dark`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
