"use client";

import Head from "next/head";
import Header from "@/components/Header/Header";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { JSX } from "@fullcalendar/core/preact.js";
import Link from "next/link";
import { auth } from "@/lib/firebaseConfig";

// Componente de loading genérico
const LoadingSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`w-full ${height} bg-gray-100 rounded-lg animate-pulse flex items-center justify-center`}
  >
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Importações dinâmicas das seções
const Chamada = dynamic(() => import("@/components/Section/chamada"), {
  loading: () => <LoadingSkeleton height="400px" />,
  ssr: false,
});
const Sobre = dynamic(
  () => import("@/components/Section/sobre").then((mod) => mod.Sobre),
  { loading: () => <LoadingSkeleton height="600px" />, ssr: false }
);
const VideoSection = dynamic(
  () => import("@/components/Section/videoSection"),
  { loading: () => <LoadingSkeleton height="500px" />, ssr: false }
);
const ComunidadeSection = dynamic(
  () => import("@/components/Section/ComunidadeSection"),
  { loading: () => <LoadingSkeleton height="700px" />, ssr: false }
);
const MentoresSection = dynamic(
  () => import("@/components/Section/mentoresSection"),
  { loading: () => <LoadingSkeleton height="800px" />, ssr: false }
);
const ChatSection = dynamic(
  () =>
    import("@/components/Section/chatSection").then((mod) => mod.ChatSection),
  { loading: () => <LoadingSkeleton height="600px" />, ssr: false }
);
const CalendarioAgendamento = dynamic(
  () => import("@/components/Section/CalendarioAgendamento"),
  { loading: () => <LoadingSkeleton height="900px" />, ssr: false }
);
const AvaliacoesMentor = dynamic(
  () =>
    import("@/components/Section/AvaliacoesMentor").then(
      (mod) => mod.AvaliacoesMentor
    ),
  { loading: () => <LoadingSkeleton height="500px" />, ssr: false }
);
const Contato = dynamic(
  () => import("@/components/Section/contacto").then((mod) => mod.Contato),
  { loading: () => <LoadingSkeleton height="700px" />, ssr: false }
);
const RecursosEducacionais = dynamic(
  () =>
    import("@/components/Section/RecursosEducacionais").then(
      (mod) => mod.RecursosEducacionais
    ),
  { loading: () => <LoadingSkeleton height="800px" />, ssr: false }
);
const PainelUsuario = dynamic(
  () =>
    import("@/components/Section/PainelUsuario").then(
      (mod) => mod.PainelUsuario
    ),
  { loading: () => <LoadingSkeleton height="1000px" />, ssr: false }
);

export default function Home(): JSX.Element {
  const userType = Math.random() > 0.5 ? "estudante" : "mentor"; // Simula autenticação (troque depois)

  return (
    <>
      {/* <Chamada />
      <CalendarioAgendamento />
      <ChatSection /> */}

      <Head>
        <title>Educonect - Plataforma de Educação</title>
        <meta
          name="description"
          content="Conecte-se com mentores e acesse recursos educacionais de qualidade."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Educonect - Plataforma de Educação"
        />
        <meta
          property="og:description"
          content="Aprenda de forma simples, prática e eficiente com mentores especializados."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="pt-BR" />
      </Head>

      {/* Header global */}
      <Header />

      <main className="pt-20">
        {/* Hero Section SSR otimizada para SEO */}
        <section
          className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-50 to-white px-4"
          id="inicio"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Aprenda de forma <span className="text-blue-600">simples</span>,{" "}
              <span>prática</span> e <span>eficiente</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Cresça na carreira, prepare-se para provas ou aprenda algo novo
              com os melhores mentores e recursos do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg">
                  Começar Agora
                </button>
              </Link>
              <Link href="/sobre">
                <button className="bg-white border  inline-block  hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-black hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg">Saber Mais</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Seções carregadas dinamicamente */}
        <Suspense fallback={<LoadingSkeleton height="400px" />}>
          <Chamada />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="600px" />}>
          <Sobre />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="500px" />}>
          <VideoSection />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="700px" />}>
          <ComunidadeSection />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="800px" />}>
          <MentoresSection />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="600px" />}>
          <ChatSection />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="900px" />}>
          <CalendarioAgendamento />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="500px" />}>
          <AvaliacoesMentor />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="700px" />}>
          <Contato />
        </Suspense>
        <Suspense fallback={<LoadingSkeleton height="800px" />}>
          <RecursosEducacionais />
        </Suspense>

        {/* Painel de usuário dinâmico - troque lógica por autenticação real depois */}
         <Suspense fallback={<LoadingSkeleton height="1000px" />}>
          <PainelUsuario userType={userType} />
        </Suspense> 
      </main>
    </>
  );
}

// "use client";

// import Header from '@/components/Header/Header';
// import dynamic from 'next/dynamic';
// import Head from 'next/head';
// import { Suspense } from 'react';

// // Componente de loading genérico
// const LoadingSkeleton = ({ height = "h-64" }: { height?: string }) => (
//   <div className={`w-full ${height} bg-gray-100 rounded-lg animate-pulse flex items-center justify-center`}>
//     <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//   </div>
// );

// // Importações dinâmicas corretamente tipadas
// const Chamada = dynamic(() => import('@/components/Section/chamada').then(mod => mod.default), {
//   loading: () => <LoadingSkeleton height="400px" />,
//   ssr: false
// });

// const Sobre = dynamic(() => import('@/components/Section/sobre').then(mod => mod.Sobre), {
//   loading: () => <LoadingSkeleton height="600px" />,
//   ssr: false
// });

// const VideoSection = dynamic(() => import('@/components/Section/videoSection').then(mod => mod.default), {
//   loading: () => <LoadingSkeleton height="500px" />,
//   ssr: false
// });

// const ComunidadeSection = dynamic(() => import('@/components/Section/ComunidadeSection').then(mod => mod.ComunidadeSection), {
//   loading: () => <LoadingSkeleton height="700px" />,
//   ssr: false
// });

// const MentoresSection = dynamic(() => import('@/components/Section/mentoresSection').then(mod => mod.default), {
//   loading: () => <LoadingSkeleton height="800px" />,
//   ssr: false
// });

// const ChatSection = dynamic(() => import('@/components/Section/chatSection').then(mod => mod.ChatSection), {
//   loading: () => <LoadingSkeleton height="600px" />,
//   ssr: false
// });

// const CalendarioAgendamento = dynamic(() => import('@/components/Section/CalendarioAgendamento').then(mod => mod.default), {
//   loading: () => <LoadingSkeleton height="900px" />,
//   ssr: false
// });

// const AvaliacoesMentor = dynamic(() => import('@/components/Section/AvaliacoesMentor').then(mod => mod.AvaliacoesMentor), {
//   loading: () => <LoadingSkeleton height="500px" />,
//   ssr: false
// });

// const Contato = dynamic(() => import('@/components/Section/contacto').then(mod => mod.Contato), {
//   loading: () => <LoadingSkeleton height="700px" />,
//   ssr: false
// });

// const RecursosEducacionais = dynamic(() => import('@/components/Section/RecursosEducacionais').then(mod => mod.RecursosEducacionais), {
//   loading: () => <LoadingSkeleton height="800px" />,
//   ssr: false
// });

// const PainelUsuario = dynamic(() => import('@/components/Section/PainelUsuario').then(mod => mod.PainelUsuario), {
//   loading: () => <LoadingSkeleton height="1000px" />,
//   ssr: false
// });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Plataforma de Educação</title>
//         <meta name="description" content="Conecte-se com mentores e acesse recursos educacionais de qualidade" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content="Plataforma de Educação" />
//         <meta property="og:description" content="Conecte-se com mentores e acesse recursos educacionais de qualidade" />
//         <meta property="og:type" content="website" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="pt-20">
//         {/* Hero Section - SSR para SEO */}
//         <section
//           className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4"
//           id="inicio"
//         >
//           <div className="max-w-4xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
//               Aprenda de forma simples, prática e eficiente
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               Seja para crescer na carreira, se preparar para provas ou
//               simplesmente aprender algo novo, aqui você encontra o curso certo,
//               no formato certo. A educação que você merece, ao seu alcance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a
//                 href="#comunidade"
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                 aria-label="Começar a usar a plataforma"
//               >
//                 Começar
//               </a>
//               <a
//                 href="#sobre"
//                 className=" border-1 bg-white hover:bg-black border-e-blue-700 text-blue-700  hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
//                 aria-label="Saber mais sobre a plataforma"
//               >
//                 Saber mais
//               </a>
//             </div>
//           </div>
//         </section>
//         <Suspense fallback={<LoadingSkeleton height="400px" />}>
//           <Chamada />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="600px" />}>
//           <Sobre />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="500px" />}>
//           <VideoSection />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="700px" />}>
//           <ComunidadeSection />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="800px" />}>
//           <MentoresSection />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="600px" />}>
//           <ChatSection />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="900px" />}>
//           <CalendarioAgendamento />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="500px" />}>
//           <AvaliacoesMentor />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="700px" />}>
//           <Contato />
//         </Suspense>

//         <Suspense fallback={<LoadingSkeleton height="800px" />}>
//           <RecursosEducacionais />
//         </Suspense>

//         {/* Painéis de usuário condicionais */}
//         <Suspense fallback={<LoadingSkeleton height="1000px" />}>
//           <div className="hidden">
//             {/* Pré-carrega ambos os painéis mas mantém escondido */}
//             <PainelUsuario userType={'estudante'} />
//             <PainelUsuario userType={'mentor'} />
//           </div>
//           {/* Implemente sua lógica de autenticação aqui */}
//           {Math.random() > 0.5 ? (
//             <PainelUsuario userType={'estudante'} />
//           ) : (
//             <PainelUsuario userType={'mentor'} />
//           )}
//         </Suspense>
//         <Header/>
//       </main>
//     </>
//   );
// }

// import { ComunidadeSection } from "../components/Section/ComunidadeSection";
// import Head from "next/head";
// import Chamada from "../components/Section/chamada";
// import { Sobre } from "../components/Section/sobre"; // Note a padronização para minúsculas
// import VideoSection from "../components/Section/videoSection";
// import MentoresSection from "../components/Section/mentoresSection";
// import { ChatSection } from "@/components/Section/chatSection";
// import CalendarioAgendamento from "@/components/Section/CalendarioAgendamento";
// import { AvaliacoesMentor } from "@/components/Section/AvaliacoesMentor";
// import { Contato } from "../components/Section/contacto";
// import { RecursosEducacionais } from "@/components/Section/RecursosEducacionais";
// import { PainelUsuario } from "@/components/Section/PainelUsuario";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Plataforma de Educação</title>
//         <meta
//           name="description"
//           content="Conecte-se com mentores e acesse recursos educacionais de qualidade"
//         />
//       </Head>

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4">
//           <div className="max-w-4xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
//               Aprenda de forma simples, prática e eficiente
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               Seja para crescer na carreira, se preparar para provas ou
//               simplesmente aprender algo novo, aqui você encontra o curso certo,
//               no formato certo. A educação que você merece, ao seu alcance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
//                 Começar
//               </button>
//               <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300">
//                 Saber mais
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Outras seções */}

//         <Chamada />
//         <Sobre />
//         <VideoSection />
//         <ComunidadeSection />
//         <MentoresSection />
//         <ChatSection />
//         <CalendarioAgendamento />
//         <AvaliacoesMentor />
//         <Contato />
//         <RecursosEducacionais />
//         <PainelUsuario userType={"estudante"} />
//         {/* Painel do Usuário */}
//         {<PainelUsuario userType={'estudante'} />}
//         {<PainelUsuario userType={'mentor'} />}
//       </main>
//     </>
//   );
// }

// // import Header from "@/components/Header/Header";
// // import Main from "../components/Section/main";
// // import Sobre from "../components/Section/Sobre"
// // import Chamada from "../components/Section/chamada"

// // export default function Home() {
// //   return (
// //     <>
// //       <Header />
// //       <Main />
// //       <Sobre/>
// //       <Chamada />
// //     </>
// //   );
// // }
