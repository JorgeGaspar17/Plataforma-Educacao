"use client";

import { SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Introdução à Álgebra Linear",
    description:
      "Aprenda os conceitos básicos de álgebra linear com exemplos práticos.",
    thumbnail: "/thumbnails/math.jpg",
    duration: "12:45",
    videoUrl: "https://www.youtube.com/embed/xyz123", // exemplo
  },
  {
    id: 2,
    title: "Fundamentos de Programação",
    description: "Comece sua jornada na programação com estes conceitos essenciais.",
    thumbnail: "/thumbnails/programming.jpg",
    duration: "15:30",
    videoUrl: "https://www.youtube.com/embed/abc456",
  },
  {
    id: 3,
    title: "História da Arte Moderna",
    description: "Explore os movimentos artísticos que definiram o século XX.",
    thumbnail: "/thumbnails/art.jpg",
    duration: "18:20",
    videoUrl: "https://www.youtube.com/embed/def789",
  },
];

type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
};

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  function openModal(video: SetStateAction<Video | null>) {
    setSelectedVideo(video);
    document.body.style.overflow = "hidden"; // trava scroll do fundo
  }

  function closeModal() {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  }

  return (
    <section
      aria-labelledby="video-section-title"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="video-section-title"
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6"
        >
          Conteúdo Educacional
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          Acesse nossos vídeos educativos e melhore seu aprendizado com conteúdo de qualidade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {videos.map((video) => (
            <motion.article
              key={video.id}
              tabIndex={0}
              role="group"
              aria-labelledby={`video-title-${video.id}`}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(video)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(video);
              }}
            >
              <div className="relative h-48 bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail do vídeo: ${video.title}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-14 h-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="42" cy="42" r="40" stroke="white" strokeWidth="4" fill="none" />
                    <polygon points="34,27 58,42 34,57" fill="white" />
                  </svg>
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded select-none">
                  {video.duration}
                </span>
              </div>

              <div className="p-6">
                <h3
                  id={`video-title-${video.id}`}
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                >
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{video.description}</p>
                <button
                  type="button"
                  aria-label={`Assistir agora: ${video.title}`}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white rounded-lg font-medium transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(video);
                  }}
                >
                  Assistir Agora
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            type="button"
            className="inline-block bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white px-10 py-4 rounded-lg font-semibold transition"
            aria-label="Explorar mais vídeos"
            onClick={() => alert("Funcionalidade ainda em desenvolvimento!")}
          >
            Explorar Mais Vídeos
          </button>
        </div>
      </div>

      {/* Modal simples para vídeo */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-video-title"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3
                  id="modal-video-title"
                  className="text-white font-bold text-lg"
                >
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={closeModal}
                  aria-label="Fechar vídeo"
                  className="text-white hover:text-red-500 transition"
                >
                  ✕
                </button>
              </header>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


// export default function VideoSection() {
//   const videos = [
//     {
//       id: 1,
//       title: "Introdução à Álgebra Linear",
//       description:
//         "Aprenda os conceitos básicos de álgebra linear com exemplos práticos.",
//       thumbnail: "/thumbnails/math.jpg",
//       duration: "12:45",
//     },
//     {
//       id: 2,
//       title: "Fundamentos de Programação",
//       description:
//         "Comece sua jornada na programação com estes conceitos essenciais.",
//       thumbnail: "/thumbnails/programming.jpg",
//       duration: "15:30",
//     },
//     {
//       id: 3,
//       title: "História da Arte Moderna",
//       description:
//         "Explore os movimentos artísticos que definiram o século XX.",
//       thumbnail: "/thumbnails/art.jpg",
//       duration: "18:20",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
//           Conteúdo Educacional
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           Acesse nossos vídeos educativos e melhore seu aprendizado
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
//             >
//               <div className="relative">
//                 <div className="h-48 bg-blue-100 flex items-center justify-center">
//                   <span className="text-blue-600 text-4xl">▶️</span>
//                 </div>
//                 <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                   {video.duration}
//                 </span>
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-lg mb-2">{video.title}</h3>
//                 <p className="text-gray-600 mb-4">{video.description}</p>
//                 <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">
//                   Assistir Agora
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
//             Explorar Mais Vídeos
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
