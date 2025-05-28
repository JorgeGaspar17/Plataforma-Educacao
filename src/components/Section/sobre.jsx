"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <FaUserGraduate size={48} aria-label="Ícone de estudante" />,
    title: "Para Estudantes",
    description:
      "Cursos adaptativos que se ajustam ao seu ritmo de aprendizagem, com feedback constante e suporte personalizado.",
    count: "+5.000",
    label: "Estudantes Ativos",
    color: "text-blue-600",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher size={48} aria-label="Ícone de mentor" />,
    title: "Para Mentores",
    description:
      "Ferramentas poderosas para criar e gerenciar cursos, acompanhar o progresso dos alunos e monetizar seu conhecimento.",
    count: "+300",
    label: "Mentores Especializados",
    color: "text-green-600",
  },
  {
    id: 3,
    icon: <FaUsers size={48} aria-label="Ícone de comunidade" />,
    title: "Comunidade",
    description:
      "Conecte-se com outros aprendizes, participe de grupos de estudo e eventos exclusivos para networking e colaboração.",
    count: "+100",
    label: "Comunidades Ativas",
    color: "text-purple-600",
  },
];

export function Sobre() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      aria-labelledby="sobre-title"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2
            id="sobre-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Sobre Nossa Plataforma
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformando a educação através de tecnologia de ponta e
            metodologias inovadoras para potencializar seu aprendizado.
          </p>
        </motion.div>

        {/* Cards com animação em cascata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map(({ id, icon, title, description, count, label, color }, i) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow cursor-default"
              tabIndex={0}
              role="region"
              aria-labelledby={`card-title-${id}`}
            >
              <div className={`mb-5 ${color} flex justify-center`}>{icon}</div>
              <h3
                id={`card-title-${id}`}
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center"
              >
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center leading-relaxed">
                {description}
              </p>
              <div className={`text-center ${color} font-extrabold text-5xl mb-1`}>
                {count}
              </div>
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm tracking-wide">
                {label}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Seção de missão, visão e valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Nossa Missão, Visão e Valores
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                Missão
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Democratizar o acesso ao conhecimento, oferecendo recursos
                educacionais acessíveis, inovadores e de alta qualidade.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">
                Visão
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ser referência global em educação digital, promovendo uma
                comunidade colaborativa e de aprendizado contínuo.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                Valores
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Inclusão, inovação, transparência, excelência e paixão pelo
                ensino.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12">
            <a
              href="#contato"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
              aria-label="Entre em contato conosco"
            >
              Entre em contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

// export function Sobre() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Sobre Nossa Plataforma
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Transformando a educação através de tecnologia e metodologias
//             inovadoras
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="text-blue-600 mb-4">
//               <FaUserGraduate size={40} />
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               Para Estudantes
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Cursos adaptativos que se ajustam ao seu ritmo de aprendizagem,
//               com feedback constante e suporte personalizado.
//             </p>
//             <div className="text-4xl font-bold text-blue-600">+5.000</div>
//             <div className="text-gray-500">Estudantes Ativos</div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="text-blue-600 mb-4">
//               <FaChalkboardTeacher size={40} />
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               Para Mentores
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Ferramentas poderosas para criar e gerenciar cursos, acompanhar o
//               progresso dos alunos e monetizar seu conhecimento.
//             </p>
//             <div className="text-4xl font-bold text-blue-600">+300</div>
//             <div className="text-gray-500">Mentores Especializados</div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             whileHover={{ y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <div className="text-blue-600 mb-4">
//               <FaUsers size={40} />
//             </div>
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               Comunidade
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Conecte-se com outros aprendizes, participe de grupos de estudo e
//               eventos exclusivos para networking e colaboração.
//             </p>
//             <div className="text-4xl font-bold text-blue-600">+100</div>
//             <div className="text-gray-500">Comunidades Ativas</div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from 'next/image';
// import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

// export default function Sobre() {
//   return (
//     <section className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 my-10 px-4'>
//       <div className='max-w-lg'>
//         <h2 className='text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-4'>Sobre Nós</h2>
//         <p className='text-gray-600 mb-6'>
//           Na nossa plataforma de educação, você encontra cursos intuitivos,
//           flexíveis e eficazes, projetados para ajudar você a alcançar seus
//           objetivos — seja para avançar na carreira, se preparar para provas ou
//           aprender algo novo.
//         </p>

//         <div className='flex flex-row gap-4 mb-6'>
//           <div className='flex flex-col items-center justify-center border border-blue-600 bg-blue-600 text-white p-3 rounded-lg transition-all hover:scale-105'>
//             <p className='text-xl font-bold'>+100</p>
//             <p className='text-sm'>Estudantes</p>
//           </div>
//           <div className='flex flex-col items-center justify-center border border-blue-600 p-3 rounded-lg transition-all hover:bg-blue-600 hover:text-white hover:scale-105'>
//             <p className='text-xl font-bold'>+20</p>
//             <p className='text-sm'>Mentores</p>
//           </div>
//           <div className='flex flex-col items-center justify-center border border-blue-600 p-3 rounded-lg transition-all hover:bg-blue-600 hover:text-white hover:scale-105'>
//             <p className='text-xl font-bold'>+10</p>
//             <p className='text-sm'>Comunidades</p>
//           </div>
//         </div>

//         <div className='flex gap-4'>
//           <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors'>
//             <FaFacebook size={30} />
//           </a>
//           <a href="#" className='text-green-500 hover:text-green-700 transition-colors'>
//             <FaWhatsapp size={30} />
//           </a>
//           <a href="#" className='text-pink-600 hover:text-pink-800 transition-colors'>
//             <FaInstagram size={30} />
//           </a>
//         </div>
//       </div>

//       <div className='max-w-lg'>
//         <Image
//           src="/assets/student.png"
//           alt="Estudante usando a plataforma de educação"
//           width={500}
//           height={500}
//           className=''
//           priority
//         />
//       </div>
//     </section>
//   );
// }
