import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LOCALES } from "@/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eagle Cine",
  description: "Seu aplicativo de Cinema",
};

export async function generateStaticParams(){

  return LOCALES.map((lang) => ({lang}))
}

export default function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-3 py-2">
        <Header />
        {children}
        
      </body>
    </html>
  );
}
