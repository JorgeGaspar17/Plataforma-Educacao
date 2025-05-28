"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaComments, FaUsers, FaCalendarAlt, FaSearch, FaPlus } from "react-icons/fa";

import { ForumTopicCard } from "@/components/ForumTopicCard";
import { StudyGroupCard } from "@/components/StudyGroupCard";
import { EventCard } from "@/components/EventCard";
import { NewTopicModal } from "@/components/NewTopicModal";

type Tab = "forum" | "grupos" | "eventos";

interface ForumTopic {
  id: number;
  title: string;
  category: string;
  replies: number;
  lastReply: string;
  author: string;
  authorAvatar: string;
}

interface StudyGroup {
  id: number;
  name: string;
  members: number;
  category: string;
  active: boolean;
  description: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  mentor: string;
  category: string;
}

export default function ComunidadeSection() {
  const [activeTab, setActiveTab] = useState<Tab>("forum");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // Exemplo inicial para fórum
  const [forumTopics, setForumTopics] = useState<ForumTopic[]>([
    {
      id: 1,
      title: "Dúvida sobre exercício de matemática",
      category: "Matemática",
      replies: 12,
      lastReply: "2 horas atrás",
      author: "Ana Silva",
      authorAvatar: "A",
    },
    {
      id: 2,
      title: "Melhores livros para aprender programação",
      category: "Programação",
      replies: 8,
      lastReply: "1 dia atrás",
      author: "Carlos Mendes",
      authorAvatar: "C",
    },
    {
      id: 3,
      title: "Como se preparar para o ENEM?",
      category: "Vestibular",
      replies: 24,
      lastReply: "3 dias atrás",
      author: "João Pereira",
      authorAvatar: "J",
    },
  ]);

  // Grupos e eventos fixos só para demo
  const gruposEstudo: StudyGroup[] = [
    {
      id: 1,
      name: "Grupo de Estudo de Física",
      members: 45,
      category: "Ciências",
      active: true,
      description: "Discussões sobre física clássica e moderna",
    },
    {
      id: 2,
      name: "Programação para Iniciantes",
      members: 32,
      category: "Programação",
      active: true,
      description: "Aprendendo os fundamentos da programação juntos",
    },
    {
      id: 3,
      name: "Literatura Brasileira",
      members: 18,
      category: "Humanas",
      active: false,
      description: "Análise das obras clássicas da literatura nacional",
    },
  ];

  const eventos: Event[] = [
    {
      id: 1,
      title: "Aula Ao Vivo: Álgebra Linear",
      date: "2023-11-20",
      time: "19:00",
      mentor: "Prof. João Silva",
      category: "Matemática",
    },
    {
      id: 2,
      title: "Workshop: Carreira em TI",
      date: "2023-11-25",
      time: "15:00",
      mentor: "Dra. Maria Souza",
      category: "Programação",
    },
    {
      id: 3,
      title: "Seminário: História do Brasil",
      date: "2023-12-01",
      time: "10:00",
      mentor: "Prof. Carlos Lima",
      category: "História",
    },
  ];

  // Filtrar tópicos do fórum pela pesquisa
  const filteredForumTopics = forumTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Função para adicionar novo tópico
  function handleCreateTopic(newTopic: { title: string; category: string; author: string }) {
    setForumTopics((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: newTopic.title,
        category: newTopic.category,
        author: newTopic.author,
        authorAvatar: newTopic.author.charAt(0).toUpperCase(),
        replies: 0,
        lastReply: "Agora",
      },
    ]);
  }

  // Animação da troca de conteúdo
  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Comunidade</h2>

      {/* Tabs */}
      <nav aria-label="Seções da Comunidade" className="flex gap-4 mb-6 border-b border-gray-300">
        {[
          { id: "forum", label: "Fórum", icon: <FaComments /> },
          { id: "grupos", label: "Grupos", icon: <FaUsers /> },
          { id: "eventos", label: "Eventos", icon: <FaCalendarAlt /> },
        ].map(({ id, label, icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={activeTab === id}
            aria-controls={`${id}-tabpanel`}
            id={`${id}-tab`}
            tabIndex={activeTab === id ? 0 : -1}
            className={`flex items-center gap-2 px-4 py-2 font-semibold border-b-4 ${
              activeTab === id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => setActiveTab(id as Tab)}
          >
            {icon} {label}
          </button>
        ))}
      </nav>

      {/* Search and New Topic Button (only in Fórum tab) */}
      {activeTab === "forum" && (
        <div className="flex justify-between mb-6">
          <div className="relative w-full max-w-md">
            <FaSearch
              className="absolute top-2 left-3 text-gray-400 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              aria-label="Pesquisar tópicos"
              placeholder="Pesquisar tópicos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-md flex items-center gap-2"
            aria-haspopup="dialog"
            aria-controls="new-topic-modal"
          >
            <FaPlus /> Novo Tópico
          </button>
        </div>
      )}

      {/* Content */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "forum" && (
            <motion.div
              key="forum"
              id="forum-tabpanel"
              role="tabpanel"
              aria-labelledby="forum-tab"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="grid gap-4 grid-cols-1 md:grid-cols-2"
            >
              {filteredForumTopics.length > 0 ? (
                filteredForumTopics.map((topic) => (
                  <ForumTopicCard key={topic.id} topic={topic} />
                ))
              ) : (
                <p>Nenhum tópico encontrado.</p>
              )}
            </motion.div>
          )}

          {activeTab === "grupos" && (
            <motion.div
              key="grupos"
              id="grupos-tabpanel"
              role="tabpanel"
              aria-labelledby="grupos-tab"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="grid gap-4 grid-cols-1 md:grid-cols-2"
            >
              {gruposEstudo.map((grupo) => (
                <StudyGroupCard key={grupo.id} grupo={grupo} />
              ))}
            </motion.div>
          )}

          {activeTab === "eventos" && (
            <motion.div
              key="eventos"
              id="eventos-tabpanel"
              role="tabpanel"
              aria-labelledby="eventos-tab"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {eventos.map((evento) => (
                <EventCard key={evento.id} evento={evento} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <NewTopicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateTopic}
      />
    </section>
  );
}



// "use client";

// import { useState } from "react";
// import {
//   FaComments,
//   FaUsers,
//   FaCalendarAlt,
//   FaSearch,
//   FaPlus,
// } from "react-icons/fa";

// export function ComunidadeSection() {
//   const [activeTab, setActiveTab] = useState<"forum" | "grupos" | "eventos">(
//     "forum"
//   );
//   const [searchQuery, setSearchQuery] = useState("");

//   // Dados de exemplo
//   const forumTopics = [
//     {
//       id: 1,
//       title: "Dúvida sobre exercício de matemática",
//       category: "Matemática",
//       replies: 12,
//       lastReply: "2 horas atrás",
//       author: "Ana Silva",
//       authorAvatar: "A",
//     },
//     {
//       id: 2,
//       title: "Melhores livros para aprender programação",
//       category: "Programação",
//       replies: 8,
//       lastReply: "1 dia atrás",
//       author: "Carlos Mendes",
//       authorAvatar: "C",
//     },
//     {
//       id: 3,
//       title: "Como se preparar para o ENEM?",
//       category: "Vestibular",
//       replies: 24,
//       lastReply: "3 dias atrás",
//       author: "João Pereira",
//       authorAvatar: "J",
//     },
//   ];

//   const gruposEstudo = [
//     {
//       id: 1,
//       name: "Grupo de Estudo de Física",
//       members: 45,
//       category: "Ciências",
//       active: true,
//       description: "Discussões sobre física clássica e moderna",
//     },
//     {
//       id: 2,
//       name: "Programação para Iniciantes",
//       members: 32,
//       category: "Programação",
//       active: true,
//       description: "Aprendendo os fundamentos da programação juntos",
//     },
//     {
//       id: 3,
//       name: "Literatura Brasileira",
//       members: 18,
//       category: "Humanas",
//       active: false,
//       description: "Análise das obras clássicas da literatura nacional",
//     },
//   ];

//   const eventos = [
//     {
//       id: 1,
//       title: "Aula Ao Vivo: Álgebra Linear",
//       date: "2023-11-20",
//       time: "19:00",
//       mentor: "Prof. João Silva",
//       category: "Matemática",
//     },
//     {
//       id: 2,
//       title: "Workshop: Carreira em TI",
//       date: "2023-11-25",
//       time: "15:00",
//       mentor: "Dra. Maria Souza",
//       category: "Programação",
//     },
//     {
//       id: 3,
//       title: "Debate: Filosofia Moderna",
//       date: "2023-12-05",
//       time: "18:30",
//       mentor: "Prof. Carlos Mendes",
//       category: "Humanas",
//     },
//   ];

//   const filteredTopics = forumTopics.filter(
//     (topic) =>
//       topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       topic.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredGrupos = gruposEstudo.filter(
//     (grupo) =>
//       grupo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       grupo.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredEventos = eventos.filter(
//     (evento) =>
//       evento.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       evento.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//           Comunidade
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           Conecte-se com outros estudantes e mentores, participe de grupos de
//           estudo e eventos ao vivo
//         </p>

//         <div className="flex flex-col md:flex-row gap-4 mb-8">
//           <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-md px-3 py-2">
//             <FaSearch className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder={`Buscar em ${
//                 activeTab === "forum"
//                   ? "fórum"
//                   : activeTab === "grupos"
//                   ? "grupos"
//                   : "eventos"
//               }...`}
//               className="outline-none w-full"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
//             <FaPlus /> Novo{" "}
//             {activeTab === "forum"
//               ? "Tópico"
//               : activeTab === "grupos"
//               ? "Grupo"
//               : "Evento"}
//           </button>
//         </div>

//         <div className="border-b border-gray-200 mb-6">
//           <nav className="flex -mb-px">
//             <button
//               onClick={() => setActiveTab("forum")}
//               className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center gap-2 ${
//                 activeTab === "forum"
//                   ? "border-blue-600 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//             >
//               <FaComments /> Fórum
//             </button>
//             <button
//               onClick={() => setActiveTab("grupos")}
//               className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center gap-2 ${
//                 activeTab === "grupos"
//                   ? "border-blue-600 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//             >
//               <FaUsers /> Grupos de Estudo
//             </button>
//             <button
//               onClick={() => setActiveTab("eventos")}
//               className={`py-4 px-6 text-center border-b-2 font-medium text-sm flex items-center gap-2 ${
//                 activeTab === "eventos"
//                   ? "border-blue-600 text-blue-600"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//             >
//               <FaCalendarAlt /> Eventos
//             </button>
//           </nav>
//         </div>

//         <div className="bg-gray-50 rounded-lg p-6">
//           {activeTab === "forum" && (
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-4">Tópicos do Fórum</h3>

//               {filteredTopics.length === 0 ? (
//                 <p className="text-gray-500">Nenhum tópico encontrado</p>
//               ) : (
//                 <div className="space-y-3">
//                   {filteredTopics.map((topic) => (
//                     <div
//                       key={topic.id}
//                       className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
//                           {topic.authorAvatar}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-medium text-lg">{topic.title}</h4>
//                           <div className="flex items-center gap-4 mt-1">
//                             <span className="text-sm text-gray-600">
//                               Por {topic.author}
//                             </span>
//                             <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
//                               {topic.category}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm text-gray-600">
//                             {topic.replies} respostas
//                           </div>
//                           <div className="text-xs text-gray-500">
//                             {topic.lastReply}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "grupos" && (
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-4">Grupos de Estudo</h3>

//               {filteredGrupos.length === 0 ? (
//                 <p className="text-gray-500">Nenhum grupo encontrado</p>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {filteredGrupos.map((grupo) => (
//                     <div
//                       key={grupo.id}
//                       className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
//                     >
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-medium text-lg">{grupo.name}</h4>
//                         <span
//                           className={`px-2 py-1 text-xs rounded-full ${
//                             grupo.active
//                               ? "bg-green-100 text-green-800"
//                               : "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           {grupo.active ? "Ativo" : "Inativo"}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-600 mb-3">
//                         {grupo.description}
//                       </p>
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-gray-500">
//                           {grupo.members} membros
//                         </span>
//                         <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
//                           {grupo.category}
//                         </span>
//                       </div>
//                       <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm">
//                         {grupo.active ? "Participar" : "Solicitar Ingresso"}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "eventos" && (
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold mb-4">Próximos Eventos</h3>

//               {filteredEventos.length === 0 ? (
//                 <p className="text-gray-500">Nenhum evento encontrado</p>
//               ) : (
//                 <div className="space-y-3">
//                   {filteredEventos.map((evento) => (
//                     <div
//                       key={evento.id}
//                       className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className="w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-blue-600">
//                           <span className="text-xs">NOV</span>
//                           <span className="text-xl font-bold">
//                             {evento.date.split("-")[2]}
//                           </span>
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-medium text-lg">
//                             {evento.title}
//                           </h4>
//                           <div className="flex items-center gap-4 mt-1">
//                             <span className="text-sm text-gray-600">
//                               Com {evento.mentor}
//                             </span>
//                             <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
//                               {evento.category}
//                             </span>
//                           </div>
//                           <div className="mt-2 flex items-center text-sm text-gray-600">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-4 w-4 mr-1"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                               />
//                             </svg>
//                             {evento.time} -{" "}
//                             {new Date(evento.date).toLocaleDateString("pt-BR", {
//                               weekday: "long",
//                               day: "numeric",
//                               month: "long",
//                             })}
//                           </div>
//                         </div>
//                         <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm whitespace-nowrap">
//                           Participar
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
