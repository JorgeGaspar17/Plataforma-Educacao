// app/layout.tsx 
// Importando os componentes de navegação
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {NavigationButtons} from "@/components/Navigation/NavigationButtons";
import {MobileNavigation} from "@/components/Navigation/MobileNavigation";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "Plataforma de Educação",
  description: "Conecte-se com mentores e acesse recursos educacionais de qualidade",
  authors: [{ name: "Seu Nome ou Marca", url: "https://seusite.com" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Plataforma de Educação",
    description: "Conecte-se com mentores e acesse recursos educacionais de qualidade",
    type: "website",
    locale: "pt_BR",
    siteName: "Plataforma de Educação",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white antialiased`}>
        {/* Navegação desktop */}
        {/* <Navigation /> */}

        {/* Navegação mobile */}
        <MobileNavigation />

        {/* Conteúdo da página */}
        <main>{children}</main>

        {/* Âncoras navegáveis para scroll suave */}
        <div id="inicio" />
        <div id="sobre" />
        <div id="comunidade" />
        <div id="contato" />
        <div id="agendamento" />
        <div id="recursos" />
        <div id="painel" />
        <div id="chat" />
        <div id="mentores" />
        <div id="chamada" />
        <div id="video" />
      </body>
    </html>
  );
}







// // import { NavigationButtons } from "../components/Navigation/NavigationButtons";
// // import { MobileNavigation } from "@/components/Navigation/MobileNavigation";
// // import { FloatingNavigation } from "@/components/Navigation/FloatingNavigation";

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// import React from "react";

// export const metadata: Metadata = {
//   title: "Plataforma de Educação",
//   description:
//     "Conecte-se com mentores e acesse recursos educacionais de qualidade",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="pt-BR">
//       <body className={inter.className}>
//         {children}
//         {/* <NavigationButtons />
//         <MobileNavigation /> */}
//         <section id="Home">...</section>
//         <section id="sobre">...</section>
//         <section id="ComunidadeSection">...</section>
//         {/* <section id="MentoresSection">...</section> */}
//         <section id="Contato">...</section>
//         {/* <section id="RecursosEducacionais">...</section>
//         <section id="PainelUsuario">...</section>
//         <section id="ChatSection">...</section>
//         <section id="Chamada">...</section>
//         <section id="VideoSection">...</section> */}
//         <section id="CalendarioAgendamento">...</section>
//       </body>
//     </html>
//   );
// }

// "use client";
// import React from "react";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Plataforma de Educação",
//   description: "Plataforma para estudantes se comunicarem com outros estudantes e mentores profissionais em diveras áreas.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
