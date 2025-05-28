"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Fale Conosco
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas ou sugestões? Estamos aqui para ajudar!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <form className="space-y-6" aria-label="Formulário de contato">
              <div>
                <label
                  htmlFor="nomeContato"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nomeContato"
                  name="nome"
                  aria-required="true"
                  aria-label="Nome completo"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="nome completo"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="emailContato"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="emailContato"
                  name="email"
                  aria-required="true"
                  aria-label="Endereço de e-mail"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="mensagemContato"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagemContato"
                  name="mensagem"
                  rows={5}
                  aria-required="true"
                  aria-label="Mensagem"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Sua mensagem..."
                  required
                />
              </div>

              <button
                type="submit"
                aria-label="Enviar mensagem"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaEnvelope
                    size={24}
                    className="flex-shrink-0 text-blue-600 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">E-mail</h4>
                    <a
                      href="mailto:plataforma@educonect.com"
                      className="text-blue-600 hover:underline"
                    >
                      plataforma@educonect.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone
                    size={24}
                    className="flex-shrink-0 text-blue-600 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Telefone</h4>
                    <a href="tel:+244949486137" className="text-gray-700 hover:text-blue-600">
                      (+244) 949-486-137
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt
                    size={24}
                    className="flex-shrink-0 text-blue-600 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Endereço</h4>
                    <address className="not-italic text-gray-700">
                      Luanda.Cacuaco, 1000 - Boa-Esperança/BE
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Horário de Atendimento</h3>
              <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 9h às 12h</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// export function Contato() {
//   return (
//     <section id="contato" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Fale Conosco
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Tem dúvidas ou sugestões? Estamos aqui para ajudar!
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Formulário */}
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-white p-8 rounded-xl shadow-lg"
//           >
//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="nome"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Nome Completo
//                 </label>
//                 <input
//                   type="text"
//                   id="nome"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
//                   placeholder="Seu nome"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   E-mail
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
//                   placeholder="seu@email.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="mensagem"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Mensagem
//                 </label>
//                 <textarea
//                   id="mensagem"
//                   rows={5}
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
//                   placeholder="Sua mensagem..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02]"
//               >
//                 Enviar Mensagem
//               </button>
//             </form>
//           </motion.div>

//           {/* Informações */}
//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                 Informações de Contato
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 text-blue-600 mt-1">
//                     <FaEnvelope size={20} />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-gray-800">
//                       E-mail
//                     </h4>
//                     <p className="text-gray-600">plataforma@educonect.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 text-blue-600 mt-1">
//                     <FaPhone size={20} />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-gray-800">
//                       Telefone
//                     </h4>
//                     <p className="text-gray-600">(+244) 949-486-137</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 text-blue-600 mt-1">
//                     <FaMapMarkerAlt size={20} />
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium text-gray-800">
//                       Endereço
//                     </h4>
//                     <p className="text-gray-600">
//                       Luanda.Cacuaco, 1000 - Boa-Esperança/BE
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 rounded-xl shadow-lg text-white">
//               <h3 className="text-2xl font-bold mb-4">
//                 Horário de Atendimento
//               </h3>
//               <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
//               <p>Sábado: 9h às 12h</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
