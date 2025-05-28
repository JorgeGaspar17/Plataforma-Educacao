"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaUser, FaRobot } from "react-icons/fa";

export function ChatSection() {
  const [isClient, setIsClient] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; sender: "user" | "bot"; time: string }>
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializa somente no cliente para evitar problemas SSR
  useEffect(() => {
    setIsClient(true);
    setMessages([
      {
        id: 1,
        text: "Olá! Como posso te ajudar hoje?",
        sender: "bot",
        time: getCurrentTime(),
      },
    ]);
  }, []);

  const getCurrentTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user" as const,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simula resposta do bot com delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Agradeço sua mensagem! Nossa equipe entrará em contato em breve.",
          sender: "bot" as const,
          time: getCurrentTime(),
        },
      ]);
    }, 1000);
  };

  // Scroll automático para a última mensagem visível
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      },
      { threshold: 1.0 }
    );

    if (messagesEndRef.current) observer.observe(messagesEndRef.current);

    return () => {
      if (messagesEndRef.current) observer.unobserve(messagesEndRef.current);
    };
  }, [messages, isClient]);

  if (!isClient) {
    // Placeholder para SSR
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[500px]" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Suporte ao Vivo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Converse em tempo real com nossa equipe de suporte
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-blue-600 p-4 text-white">
            <h3 className="text-xl font-bold">Atendimento Online</h3>
            <p className="text-blue-100 text-sm">Normalmente respondemos em minutos</p>
          </div>

          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: message.sender === "user" ? 50 : -50 }}
                  transition={{ duration: 0.3 }}
                  className={`flex mb-4 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-xs md:max-w-md ${
                      message.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                        message.sender === "user"
                          ? "bg-blue-100 text-blue-600 ml-3"
                          : "bg-gray-200 text-gray-600 mr-3"
                      }`}
                      aria-label={message.sender === "user" ? "Usuário" : "Bot"}
                    >
                      {message.sender === "user" ? <FaUser /> : <FaRobot />}
                    </div>
                    <div>
                      <div
                        className={`px-4 py-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white rounded-tr-none"
                            : "bg-white text-gray-800 rounded-tl-none shadow-sm"
                        }`}
                      >
                        <p>{message.text}</p>
                      </div>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-right" : "text-left"
                        } text-gray-500`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 transition"
                aria-label="Digite sua mensagem"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-r-lg transition duration-300 flex items-center justify-center"
                aria-label="Enviar mensagem"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}













// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaPaperPlane, FaUser, FaRobot } from "react-icons/fa";

// export function ChatSection() {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Olá! Como posso te ajudar hoje?",
//       sender: "bot",
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     },
//   ]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     // Adiciona mensagem do usuário
//     setMessages((prev) => [
//       ...prev,
//       {
//         id: prev.length + 1,
//         text: newMessage,
//         sender: "user",
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//     ]);

//     setNewMessage("");

//     // Simula resposta do bot após 1 segundo
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: prev.length + 1,
//           text: "Agradeço sua mensagem! Nossa equipe entrará em contato em breve.",
//           sender: "bot",
//           time: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         },
//       ]);
//     }, 1000);
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Suporte ao Vivo
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Converse em tempo real com nossa equipe de suporte
//           </p>
//         </motion.div>

//         <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
//           {/* Cabeçalho do Chat */}
//           <div className="bg-blue-600 p-4 text-white">
//             <h3 className="text-xl font-bold">Atendimento Online</h3>
//             <p className="text-blue-100 text-sm">
//               Normalmente respondemos em minutos
//             </p>
//           </div>

//           {/* Área de Mensagens */}
//           <div className="h-96 overflow-y-auto p-4 bg-gray-50">
//             <AnimatePresence>
//               {messages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className={`flex mb-4 ${
//                     message.sender === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`flex max-w-xs md:max-w-md ${
//                       message.sender === "user" ? "flex-row-reverse" : ""
//                     }`}
//                   >
//                     <div
//                       className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
//                         message.sender === "user"
//                           ? "bg-blue-100 text-blue-600 ml-3"
//                           : "bg-gray-200 text-gray-600 mr-3"
//                       }`}
//                     >
//                       {message.sender === "user" ? <FaUser /> : <FaRobot />}
//                     </div>
//                     <div>
//                       <div
//                         className={`px-4 py-3 rounded-lg ${
//                           message.sender === "user"
//                             ? "bg-blue-600 text-white rounded-tr-none"
//                             : "bg-white text-gray-800 rounded-tl-none shadow-sm"
//                         }`}
//                       >
//                         <p>{message.text}</p>
//                       </div>
//                       <p
//                         className={`text-xs mt-1 ${
//                           message.sender === "user" ? "text-right" : "text-left"
//                         } text-gray-500`}
//                       >
//                         {message.time}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input de Mensagem */}
//           <div className="border-t border-gray-200 p-4 bg-white">
//             <div className="flex">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Digite sua mensagem..."
//                 className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 transition"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-r-lg transition duration-300 flex items-center justify-center"
//               >
//                 <FaPaperPlane />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
