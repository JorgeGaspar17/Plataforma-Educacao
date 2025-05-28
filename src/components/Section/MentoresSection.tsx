"use client";

import { motion } from "framer-motion";

const mentors = [
  {
    id: 1,
    name: "João Silva",
    specialty: "Matemática Avançada",
    description:
      "Professor com 10 anos de experiência em preparação para vestibulares.",
    emoji: "👨‍🏫",
  },
  {
    id: 2,
    name: "Maria Souza",
    specialty: "Programação Web",
    description:
      "Desenvolvedora sênior com experiência em React, Node.js e TypeScript.",
    emoji: "👩‍💻",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    specialty: "Ciências Biológicas",
    description:
      "Doutor em Biologia Molecular com experiência em pesquisa e ensino.",
    emoji: "👨‍🔬",
  },
];

export default function MentoresSection() {
  return (
    <section
      className="py-16 px-4 bg-white"
      aria-labelledby="mentores-title"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="mentores-title"
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Encontre Seu Mentor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map(({ id, name, specialty, description, emoji }) => (
            <motion.article
              key={id}
              role="region"
              aria-label={`Mentor ${name}, especialista em ${specialty}`}
              tabIndex={0}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.15 }}
              className="bg-white rounded-lg shadow-lg border border-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600 text-2xl">
                    {emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{name}</h3>
                    <p className="text-blue-600 text-sm">{specialty}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{description}</p>
                <button
                  type="button"
                  aria-label={`Agendar mentoria com ${name}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                  Agendar Mentoria
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            aria-label="Ver todos os mentores"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1"
          >
            Ver Todos os Mentores
          </button>
        </div>
      </div>
    </section>
  );
}


// export default function MentoresSection() {
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Encontre Seu Mentor
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card de Mentor 1 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-blue-600 text-xl">👨‍🏫</span>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">João Silva</h3>
//                   <p className="text-blue-600 text-sm">Matemática Avançada</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Professor com 10 anos de experiência em preparação para
//                 vestibulares.
//               </p>
//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300">
//                 Agendar Mentoria
//               </button>
//             </div>
//           </div>

//           {/* Card de Mentor 2 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-blue-600 text-xl">👩‍💻</span>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">Maria Souza</h3>
//                   <p className="text-blue-600 text-sm">Programação Web</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Desenvolvedora sênior com experiência em React, Node.js e
//                 TypeScript.
//               </p>
//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300">
//                 Agendar Mentoria
//               </button>
//             </div>
//           </div>

//           {/* Card de Mentor 3 */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300">
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <span className="text-blue-600 text-xl">👨‍🔬</span>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">Carlos Mendes</h3>
//                   <p className="text-blue-600 text-sm">Ciências Biológicas</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Doutor em Biologia Molecular com experiência em pesquisa e
//                 ensino.
//               </p>
//               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition duration-300">
//                 Agendar Mentoria
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300">
//             Ver Todos os Mentores
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
