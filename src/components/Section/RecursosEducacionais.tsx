"use client";

import { useState } from "react";
import { FaFilter, FaSearch, FaPlay, FaDownload, FaCheckCircle } from "react-icons/fa";

export function RecursosEducacionais() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlaylist, setActivePlaylist] = useState<number | null>(null);
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  
  // Áreas de conhecimento para filtro
  const areasConhecimento = [
    { id: "todos", name: "Todos" },
    { id: "matematica", name: "Matemática" },
    { id: "programacao", name: "Programação" },
    { id: "ciencias", name: "Ciências" },
    { id: "humanas", name: "Humanas" },
    { id: "linguagens", name: "Linguagens" },
  ];

  // Playlists de exemplo
  const playlists = [
    {
      id: 1,
      title: "Matemática Básica",
      area: "matematica",
      progress: 75,
      videos: [
        { id: 1, title: "Introdução à Álgebra", duration: "12:45", watched: true },
        { id: 2, title: "Equações de Primeiro Grau", duration: "15:30", watched: true },
        { id: 3, title: "Geometria Plana", duration: "18:20", watched: false },
      ],
    },
    {
      id: 2,
      title: "Introdução à Programação",
      area: "programacao",
      progress: 30,
      videos: [
        { id: 4, title: "Lógica de Programação", duration: "14:15", watched: true },
        { id: 5, title: "Variáveis e Tipos", duration: "16:40", watched: false },
        { id: 6, title: "Estruturas de Controle", duration: "13:25", watched: false },
      ],
    },
    {
      id: 3,
      title: "História da Arte",
      area: "humanas",
      progress: 0,
      videos: [
        { id: 7, title: "Arte Renascentista", duration: "20:10", watched: false },
        { id: 8, title: "Modernismo Brasileiro", duration: "18:35", watched: false },
      ],
    },
  ];

  // Materiais complementares
  const materiais = [
    { id: 1, title: "Exercícios de Álgebra", area: "matematica", type: "PDF", size: "2.4 MB" },
    { id: 2, title: "Guia de Sintaxe Python", area: "programacao", type: "PDF", size: "1.8 MB" },
    { id: 3, title: "Linha do Tempo História", area: "humanas", type: "Imagem", size: "3.2 MB" },
  ];

  // Filtrar playlists conforme filtro e busca
  const filteredPlaylists = playlists.filter(
    (playlist) =>
      (activeFilter === "todos" || playlist.area === activeFilter) &&
      playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrar materiais conforme filtro e busca
  const filteredMateriais = materiais.filter(
    (material) =>
      (activeFilter === "todos" || material.area === activeFilter) &&
      material.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Simula download com feedback visual
  const handleDownload = (id: number) => {
    setDownloadingId(id);
    setTimeout(() => {
      alert("Download concluído!");
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Recursos Educacionais
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Acesse videoaulas, playlists e materiais complementares para seu aprendizado
        </p>

        {/* Barra de busca e filtro */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <label htmlFor="search" className="sr-only">Buscar recursos</label>
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-auto focus-within:ring-2 focus-within:ring-blue-400">
            <FaSearch className="text-gray-400 mr-2" aria-hidden="true" />
            <input
              id="search"
              type="search"
              placeholder="Buscar recursos..."
              className="outline-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar recursos"
              autoComplete="off"
            />
          </div>

          <label htmlFor="filter" className="sr-only">Filtrar por área</label>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <FaFilter className="text-gray-400" aria-hidden="true" />
            <select
              id="filter"
              className="border border-gray-300 rounded-md px-3 py-2 bg-white outline-none w-full"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              aria-label="Filtrar por área do conhecimento"
            >
              {areasConhecimento.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Playlists */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Playlists de Vídeos</h3>
          {filteredPlaylists.length === 0 ? (
            <p className="text-gray-500">Nenhuma playlist encontrada</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaylists.map((playlist) => (
                <article
                  key={playlist.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  aria-label={`Playlist ${playlist.title}`}
                >
                  <div className="p-6">
                    <header className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{playlist.title}</h4>
                      <span
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        aria-label={`Área: ${playlist.area}`}
                      >
                        {playlist.area.charAt(0).toUpperCase() + playlist.area.slice(1)}
                      </span>
                    </header>

                    {/* Barra de progresso */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2" aria-hidden="true">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
                          style={{ width: `${playlist.progress}%` }}
                        />
                      </div>
                      <p className="text-right text-sm text-gray-500 mt-1">
                        {playlist.progress}% concluído
                      </p>
                    </div>

                    {/* Botão toggle videos */}
                    <button
                      onClick={() =>
                        setActivePlaylist(
                          activePlaylist === playlist.id ? null : playlist.id
                        )
                      }
                      aria-expanded={activePlaylist === playlist.id}
                      aria-controls={`playlist-videos-${playlist.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      {activePlaylist === playlist.id ? "Ocultar vídeos" : "Ver vídeos"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-200 ${activePlaylist === playlist.id ? "rotate-180" : ""
                          }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Lista de vídeos */}
                    {activePlaylist === playlist.id && (
                      <ul
                        id={`playlist-videos-${playlist.id}`}
                        className="mt-4 space-y-3"
                        aria-label={`Vídeos da playlist ${playlist.title}`}
                      >
                        {playlist.videos.map((video) => (
                          <li
                            key={video.id}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <div className="flex items-center gap-2">
                              <FaPlay
                                className={`text-xs ${video.watched ? "text-green-600" : "text-blue-600"
                                  }`}
                                aria-label={video.watched ? "Vídeo assistido" : "Vídeo não assistido"}
                              />
                              <span
                                className={`text-sm ${video.watched ? "text-gray-500 line-through" : "font-medium text-gray-900"
                                  }`}
                              >
                                {video.title}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500">{video.duration}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Materiais Complementares */}
        <section aria-labelledby="materiais-title">
          <h3
            id="materiais-title"
            className="text-xl font-semibold mb-6"
          >
            Materiais Complementares
          </h3>

          {filteredMateriais.length === 0 ? (
            <p className="text-gray-500">Nenhum material encontrado</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table
                className="min-w-full divide-y divide-gray-200"
                role="grid"
                aria-describedby="materiais-description"
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Título
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tipo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tamanho
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMateriais.map((material) => (
                    <tr key={material.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {material.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {material.area.charAt(0).toUpperCase() + material.area.slice(1)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {material.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {material.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleDownload(material.id)}
                          disabled={downloadingId === material.id}
                          className={`flex items-center gap-1 text-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed`}
                          aria-label={`Baixar material ${material.title}`}
                        >
                          <FaDownload className="text-sm" aria-hidden="true" />
                          {downloadingId === material.id ? "Baixando..." : "Download"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}



// "use client";

// import { useState } from "react";
// import { FaFilter, FaSearch, FaPlay, FaDownload } from "react-icons/fa";

// export function RecursosEducacionais() {
//   const [activeFilter, setActiveFilter] = useState("todos");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activePlaylist, setActivePlaylist] = useState<number | null>(null);

//   // Dados de exemplo
//   const areasConhecimento = [
//     { id: "todos", name: "Todos" },
//     { id: "matematica", name: "Matemática" },
//     { id: "programacao", name: "Programação" },
//     { id: "ciencias", name: "Ciências" },
//     { id: "humanas", name: "Humanas" },
//     { id: "linguagens", name: "Linguagens" },
//   ];

//   const playlists = [
//     {
//       id: 1,
//       title: "Matemática Básica",
//       area: "matematica",
//       progress: 75,
//       videos: [
//         {
//           id: 1,
//           title: "Introdução à Álgebra",
//           duration: "12:45",
//           watched: true,
//         },
//         {
//           id: 2,
//           title: "Equações de Primeiro Grau",
//           duration: "15:30",
//           watched: true,
//         },
//         { id: 3, title: "Geometria Plana", duration: "18:20", watched: false },
//       ],
//     },
//     {
//       id: 2,
//       title: "Introdução à Programação",
//       area: "programacao",
//       progress: 30,
//       videos: [
//         {
//           id: 4,
//           title: "Lógica de Programação",
//           duration: "14:15",
//           watched: true,
//         },
//         {
//           id: 5,
//           title: "Variáveis e Tipos",
//           duration: "16:40",
//           watched: false,
//         },
//         {
//           id: 6,
//           title: "Estruturas de Controle",
//           duration: "13:25",
//           watched: false,
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "História da Arte",
//       area: "humanas",
//       progress: 0,
//       videos: [
//         {
//           id: 7,
//           title: "Arte Renascentista",
//           duration: "20:10",
//           watched: false,
//         },
//         {
//           id: 8,
//           title: "Modernismo Brasileiro",
//           duration: "18:35",
//           watched: false,
//         },
//       ],
//     },
//   ];

//   const materiais = [
//     {
//       id: 1,
//       title: "Exercícios de Álgebra",
//       area: "matematica",
//       type: "PDF",
//       size: "2.4 MB",
//     },
//     {
//       id: 2,
//       title: "Guia de Sintaxe Python",
//       area: "programacao",
//       type: "PDF",
//       size: "1.8 MB",
//     },
//     {
//       id: 3,
//       title: "Linha do Tempo História",
//       area: "humanas",
//       type: "Imagem",
//       size: "3.2 MB",
//     },
//   ];

//   const filteredPlaylists = playlists.filter(
//     (playlist) =>
//       (activeFilter === "todos" || playlist.area === activeFilter) &&
//       playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredMateriais = materiais.filter(
//     (material) =>
//       (activeFilter === "todos" || material.area === activeFilter) &&
//       material.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//           Recursos Educacionais
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           Acesse videoaulas, playlists e materiais complementares para seu
//           aprendizado
//         </p>

//         <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
//           <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 w-full md:w-auto">
//             <FaSearch className="text-gray-400 mr-2" />
//             <input
//               type="text"
//               placeholder="Buscar recursos..."
//               className="outline-none w-full"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           <div className="flex items-center gap-2 w-full md:w-auto">
//             <FaFilter className="text-gray-400" />
//             <select
//               className="border border-gray-300 rounded-md px-3 py-2 bg-white outline-none w-full"
//               value={activeFilter}
//               onChange={(e) => setActiveFilter(e.target.value)}
//             >
//               {areasConhecimento.map((area) => (
//                 <option key={area.id} value={area.id}>
//                   {area.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="mb-12">
//           <h3 className="text-xl font-semibold mb-6">Playlists de Vídeos</h3>

//           {filteredPlaylists.length === 0 ? (
//             <p className="text-gray-500">Nenhuma playlist encontrada</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredPlaylists.map((playlist) => (
//                 <div
//                   key={playlist.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
//                 >
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-2">
//                       <h4 className="font-bold text-lg">{playlist.title}</h4>
//                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                         {playlist.area.charAt(0).toUpperCase() +
//                           playlist.area.slice(1)}
//                       </span>
//                     </div>

//                     <div className="mb-4">
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-blue-600 h-2 rounded-full"
//                           style={{ width: `${playlist.progress}%` }}
//                         ></div>
//                       </div>
//                       <div className="text-right text-sm text-gray-500 mt-1">
//                         {playlist.progress}% concluído
//                       </div>
//                     </div>

//                     <button
//                       onClick={() =>
//                         setActivePlaylist(
//                           activePlaylist === playlist.id ? null : playlist.id
//                         )
//                       }
//                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
//                     >
//                       {activePlaylist === playlist.id
//                         ? "Ocultar vídeos"
//                         : "Ver vídeos"}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`h-4 w-4 transition-transform duration-200 ${
//                           activePlaylist === playlist.id ? "rotate-180" : ""
//                         }`}
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </button>

//                     {activePlaylist === playlist.id && (
//                       <div className="mt-4 space-y-3">
//                         {playlist.videos.map((video) => (
//                           <div
//                             key={video.id}
//                             className="flex items-center justify-between p-2 bg-gray-50 rounded"
//                           >
//                             <div className="flex items-center gap-2">
//                               <FaPlay className="text-blue-600 text-xs" />
//                               <span
//                                 className={`text-sm ${
//                                   video.watched
//                                     ? "text-gray-500"
//                                     : "font-medium"
//                                 }`}
//                               >
//                                 {video.title}
//                               </span>
//                             </div>
//                             <span className="text-xs text-gray-500">
//                               {video.duration}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-6">
//             Materiais Complementares
//           </h3>

//           {filteredMateriais.length === 0 ? (
//             <p className="text-gray-500">Nenhum material encontrado</p>
//           ) : (
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Título
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Tipo
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Tamanho
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Ação
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredMateriais.map((material) => (
//                     <tr key={material.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">
//                           {material.title}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           {material.area.charAt(0).toUpperCase() +
//                             material.area.slice(1)}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {material.type}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {material.size}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <button className="text-blue-600 hover:text-blue-900 flex items-center gap-1">
//                           <FaDownload className="text-sm" /> Download
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
