"use client";

import { useState } from "react";
import { AvaliacoesMentor } from "./AvaliacoesMentor";

type UserType = "estudante" | "mentor";

type Agendamento = {
  id: number;
  title: string;
  date: string;
  time: string;
  mentor: string;
  status: "confirmado" | "pendente";
};

type Historico = {
  id: number;
  title: string;
  date: string;
  time: string;
  mentor: string;
  avaliado: boolean;
};

export function PainelUsuario({ userType }: { userType: UserType }) {
  const [activeTab, setActiveTab] = useState<
    "agendamentos" | "historico" | "avaliacoes"
  >("agendamentos");

  const [avaliarId, setAvaliarId] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Dados exemplo
  const agendamentos: Agendamento[] = [
    {
      id: 1,
      title: "Aula de Matemática",
      date: "2023-11-15",
      time: "14:00",
      mentor: "Prof. João Silva",
      status: "confirmado",
    },
    {
      id: 2,
      title: "Orientação Carreira",
      date: "2023-11-20",
      time: "10:00",
      mentor: "Dra. Maria Souza",
      status: "pendente",
    },
  ];

  const historico: Historico[] = [
    {
      id: 1,
      title: "Introdução à Programação",
      date: "2023-10-10",
      time: "15:00",
      mentor: "Carlos Mendes",
      avaliado: true,
    },
    {
      id: 2,
      title: "Revisão para ENEM",
      date: "2023-09-28",
      time: "09:00",
      mentor: "Ana Paula",
      avaliado: false,
    },
  ];

  // Simula ação de cancelar agendamento
  function handleCancelar(id: number) {
    alert(`Cancelar agendamento ${id} (simulação)`);
  }

  // Simula abrir modal de avaliação
  function handleAvaliar(id: number) {
    setAvaliarId(id);
  }

  // Simula envio da avaliação
  function enviarAvaliacao() {
    setFeedback("Avaliação enviada com sucesso!");
    setAvaliarId(null);
    // Aqui poderia atualizar o estado para marcar avaliado
  }

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <header className="p-6 border-b border-gray-200 flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-2xl" aria-hidden="true">
                👤
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold" id="painel-title">
                {userType === "estudante"
                  ? "Painel do Estudante"
                  : "Painel do Mentor"}
              </h2>
              <p className="text-gray-600">Bem-vindo de volta!</p>
            </div>
          </header>

          <nav
            className="flex border-b border-gray-200"
            role="tablist"
            aria-label="Seções do painel"
          >
            <button
              role="tab"
              aria-selected={activeTab === "agendamentos"}
              aria-controls="tab-agendamentos"
              id="tab-btn-agendamentos"
              onClick={() => setActiveTab("agendamentos")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "agendamentos"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Agendamentos
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "historico"}
              aria-controls="tab-historico"
              id="tab-btn-historico"
              onClick={() => setActiveTab("historico")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "historico"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Histórico
            </button>
            {userType === "estudante" && (
              <button
                role="tab"
                aria-selected={activeTab === "avaliacoes"}
                aria-controls="tab-avaliacoes"
                id="tab-btn-avaliacoes"
                onClick={() => setActiveTab("avaliacoes")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "avaliacoes"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Avaliações
              </button>
            )}
          </nav>

          <main className="p-6" aria-labelledby="painel-title">
            {feedback && (
              <div
                className="mb-4 p-3 bg-green-100 text-green-800 rounded-md"
                role="alert"
              >
                {feedback}
                <button
                  aria-label="Fechar alerta"
                  className="ml-4 font-bold"
                  onClick={() => setFeedback(null)}
                >
                  ×
                </button>
              </div>
            )}

            {activeTab === "agendamentos" && (
              <section
                id="tab-agendamentos"
                role="tabpanel"
                aria-labelledby="tab-btn-agendamentos"
                tabIndex={0}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Próximas Mentorias</h3>
                {agendamentos.length === 0 ? (
                  <p className="text-gray-500">Nenhuma mentoria agendada</p>
                ) : (
                  <div className="space-y-3">
                    {agendamentos.map((item) => (
                      <article
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                        aria-label={`${item.title} com ${item.mentor}`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-gray-600">
                              Com {item.mentor}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              item.status === "confirmado"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                            aria-label={
                              item.status === "confirmado"
                                ? "Confirmado"
                                : "Pendente"
                            }
                          >
                            {item.status === "confirmado"
                              ? "Confirmado"
                              : "Pendente"}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {new Date(item.date).toLocaleDateString("pt-BR")} às{" "}
                          {item.time}
                        </div>
                        <div className="mt-3 flex gap-2">
                          <button
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            onClick={() =>
                              alert(`Detalhes do agendamento ${item.id}`)
                            }
                          >
                            Detalhes
                          </button>
                          <button
                            className="text-sm text-red-600 hover:text-red-800 font-medium"
                            onClick={() => handleCancelar(item.id)}
                          >
                            Cancelar
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            )}

            {activeTab === "historico" && (
              <section
                id="tab-historico"
                role="tabpanel"
                aria-labelledby="tab-btn-historico"
                tabIndex={0}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold">Sessões Passadas</h3>
                {historico.length === 0 ? (
                  <p className="text-gray-500">Nenhum histórico encontrado</p>
                ) : (
                  <div className="space-y-3">
                    {historico.map((item) => (
                      <article
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                        aria-label={`${item.title} com ${item.mentor}`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-gray-600">
                              Com {item.mentor}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              item.avaliado
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-200 text-gray-600"
                            }`}
                            aria-label={
                              item.avaliado ? "Avaliado" : "Não avaliado"
                            }
                          >
                            {item.avaliado ? "Avaliado" : "Não avaliado"}
                          </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString("pt-BR")} às{" "}
                          {item.time}
                        </div>
                        {!item.avaliado && userType === "estudante" && (
                          <div className="mt-3">
                            <button
                              onClick={() => handleAvaliar(item.id)}
                              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                              aria-label={`Avaliar sessão ${item.title}`}
                            >
                              Avaliar
                            </button>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </section>
            )}

            {activeTab === "avaliacoes" && userType === "estudante" && (
              <section
                id="tab-avaliacoes"
                role="tabpanel"
                aria-labelledby="tab-btn-avaliacoes"
                tabIndex={0}
              >
                <AvaliacoesMentor />
              </section>
            )}

            {/* Modal simples para avaliação */}
            {avaliarId !== null && (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              >
                <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
                  <h2
                    id="modal-title"
                    className="text-xl font-semibold mb-4"
                  >
                    Avaliar Sessão
                  </h2>
                  <textarea
                    placeholder="Escreva sua avaliação aqui..."
                    className="w-full border border-gray-300 rounded-md p-2 mb-4 resize-y"
                    rows={5}
                    aria-label="Texto da avaliação"
                  />
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setAvaliarId(null)}
                      className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={enviarAvaliacao}
                      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Enviar
                    </button>
                  </div>
                  <button
                    onClick={() => setAvaliarId(null)}
                    aria-label="Fechar modal"
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { useState } from "react";
// import { AvaliacoesMentor } from "./AvaliacoesMentor";

// export function PainelUsuario({
//   userType,
// }: {
//   userType: "estudante" | "mentor";
// }) {
//   const [activeTab, setActiveTab] = useState<
//     "agendamentos" | "historico" | "avaliacoes"
//   >("agendamentos");

//   // Dados de exemplo
//   const agendamentos = [
//     {
//       id: 1,
//       title: "Aula de Matemática",
//       date: "2023-11-15",
//       time: "14:00",
//       mentor: "Prof. João Silva",
//       status: "confirmado",
//     },
//     {
//       id: 2,
//       title: "Orientação Carreira",
//       date: "2023-11-20",
//       time: "10:00",
//       mentor: "Dra. Maria Souza",
//       status: "pendente",
//     },
//   ];

//   const historico = [
//     {
//       id: 1,
//       title: "Introdução à Programação",
//       date: "2023-10-10",
//       time: "15:00",
//       mentor: "Carlos Mendes",
//       avaliado: true,
//     },
//     {
//       id: 2,
//       title: "Revisão para ENEM",
//       date: "2023-09-28",
//       time: "09:00",
//       mentor: "Ana Paula",
//       avaliado: false,
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//                 <span className="text-blue-600 text-2xl">👤</span>
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold">
//                   {userType === "estudante"
//                     ? "Painel do Estudante"
//                     : "Painel do Mentor"}
//                 </h2>
//                 <p className="text-gray-600">Bem-vindo de volta!</p>
//               </div>
//             </div>
//           </div>

//           <div className="border-b border-gray-200">
//             <nav className="flex -mb-px">
//               <button
//                 onClick={() => setActiveTab("agendamentos")}
//                 className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
//                   activeTab === "agendamentos"
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Agendamentos
//               </button>
//               <button
//                 onClick={() => setActiveTab("historico")}
//                 className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
//                   activeTab === "historico"
//                     ? "border-blue-600 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Histórico
//               </button>
//               {userType === "estudante" && (
//                 <button
//                   onClick={() => setActiveTab("avaliacoes")}
//                   className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
//                     activeTab === "avaliacoes"
//                       ? "border-blue-600 text-blue-600"
//                       : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                   }`}
//                 >
//                   Avaliações
//                 </button>
//               )}
//             </nav>
//           </div>

//           <div className="p-6">
//             {activeTab === "agendamentos" && (
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold">Próximas Mentorias</h3>
//                 {agendamentos.length === 0 ? (
//                   <p className="text-gray-500">Nenhuma mentoria agendada</p>
//                 ) : (
//                   <div className="space-y-3">
//                     {agendamentos.map((item) => (
//                       <div
//                         key={item.id}
//                         className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
//                       >
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h4 className="font-medium">{item.title}</h4>
//                             <p className="text-sm text-gray-600">
//                               Com {item.mentor}
//                             </p>
//                           </div>
//                           <span
//                             className={`px-2 py-1 text-xs rounded-full ${
//                               item.status === "confirmado"
//                                 ? "bg-green-100 text-green-800"
//                                 : "bg-yellow-100 text-yellow-800"
//                             }`}
//                           >
//                             {item.status === "confirmado"
//                               ? "Confirmado"
//                               : "Pendente"}
//                           </span>
//                         </div>
//                         <div className="mt-2 flex items-center text-sm text-gray-500">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 mr-1"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                             />
//                           </svg>
//                           {new Date(item.date).toLocaleDateString("pt-BR")} às{" "}
//                           {item.time}
//                         </div>
//                         <div className="mt-3 flex gap-2">
//                           <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
//                             Detalhes
//                           </button>
//                           <button className="text-sm text-red-600 hover:text-red-800 font-medium">
//                             Cancelar
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === "historico" && (
//               <div className="space-y-4">
//                 <h3 className="text-lg font-semibold">
//                   Histórico de Mentorias
//                 </h3>
//                 {historico.length === 0 ? (
//                   <p className="text-gray-500">Nenhuma mentoria concluída</p>
//                 ) : (
//                   <div className="space-y-3">
//                     {historico.map((item) => (
//                       <div
//                         key={item.id}
//                         className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
//                       >
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h4 className="font-medium">{item.title}</h4>
//                             <p className="text-sm text-gray-600">
//                               Com {item.mentor}
//                             </p>
//                           </div>
//                           {userType === "estudante" && !item.avaliado && (
//                             <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md">
//                               Avaliar
//                             </button>
//                           )}
//                         </div>
//                         <div className="mt-2 flex items-center text-sm text-gray-500">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 mr-1"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                             />
//                           </svg>
//                           {new Date(item.date).toLocaleDateString("pt-BR")} às{" "}
//                           {item.time}
//                         </div>
//                         {userType === "mentor" && item.avaliado && (
//                           <div className="mt-2 flex items-center text-sm">
//                             <span className="text-yellow-500">★★★★☆</span>
//                             <span className="ml-2 text-gray-600">4.0</span>
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {activeTab === "avaliacoes" && userType === "estudante" && (
//               <AvaliacoesMentor />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
