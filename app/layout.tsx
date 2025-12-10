import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Funil CartPanda - Teste",
  description: "Teste de integração com CartPanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Script do CartPanda - Produto Principal */}
        <Script
          src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
