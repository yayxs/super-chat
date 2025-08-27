import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Chat - 主流大语言模型聊天入口",
  description: "集成主流大语言模型的聊天入口，包括 OpenAI ChatGPT 等，提供便捷的 AI 聊天体验",
  keywords: "AI聊天,ChatGPT,大语言模型,人工智能,聊天机器人",
  authors: [{ name: "Super Chat" }],
  openGraph: {
    title: "Super Chat - 主流大语言模型聊天入口",
    description: "集成主流大语言模型的聊天入口",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
