"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { auth } from "@/lib/firebaseConfig";


export default function Main() {
  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-4">
      {/* Background image - descomente para ativar */}
      {/* 
      <Image
        src="/assets/background.jpg"
        alt="Plataforma de educação"
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
      /> 
      */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900">
          Aprenda de forma simples, prática e eficiente
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm mt-4 max-w-2xl mx-auto text-gray-700"
      >
        Seja para crescer na carreira, se preparar para provas ou simplesmente
        aprender algo novo, aqui você encontra o curso certo, no formato certo.
        A educação que você merece, ao seu alcance.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 flex gap-4 justify-center"
      >
        <button
          type="button"
          className="py-2 px-6 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition"
          aria-label="Começar curso"
        >
          Começar
        </button>
        <button
          type="button"
          className="py-2 px-6 font-semibold border border-black rounded-md hover:bg-black hover:text-white transition"
          aria-label="Saber mais sobre a plataforma"
        >
          Saber mais
        </button>
      </motion.div>
    </main>
  );
}


// import Image from "next/image";

// export default function Main() {
//   return (
//     <main className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100">
//       {/*<Image
//         src="/assets/background.jpg" // Caminho relativo à pasta public
//         alt="Plataforma de educação"
//         width={1200} // Largura em pixels
//         height={800} // Altura em pixels
//         className="w-full h-auto relative z-0" // Classes opcionais para estilização
//       /> */}
//       <div className=" w-2xl">
//         <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold ">
//           Aprenda de forma simples, prática e eficiente
//         </h1>
//       </div>
//       <p className="text-sm mt-4 max-w-2xl mx-md text-gray-700">
//         Seja para crescer na carreira, se preparar para provas ou simplesmente
//         aprender algo novo, aqui você encontra o curso certo, no formato certo.
//         A educação que você merece, ao seu alcance.
//       </p>
//       <div className="mt-4 flex gap-4">
//         <button className="py-2 px-4 text-white font-semibold bg-blue-600 rounded-md">
//           Começar
//         </button>
//         <button className="py-2 px-4 font-semibold border border-black rounded-md hover:bg-black hover:text-white hover:duration-300">
//           Saber mais
//         </button>
//       </div>
//     </main>
//   );
// }
