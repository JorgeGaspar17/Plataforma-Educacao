export default function Chamada() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Plataforma de Educação
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique
            necessitatibus ducimus pariatur aliquid dolore omnis perspiciatis eius, deserunt dolorem
            vel eveniet a voluptas fuga possimus, amet soluta, illo veniam.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Estudante
            </button>
            <button
              type="button"
              className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-3 rounded-lg font-medium transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Mentor
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          {/* Espaço para imagem ou ilustração */}
          <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-6xl select-none" aria-label="Ícone de formatura">
              🎓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Chamada() {

//     return (
//         <section className="bg-blue-300 flex flex-row flex-wrap justify-center items-center w-screen gap-8 py-8">
//             <div>
//                 <h1 className="text-4xl font-semibold">Plataforma de Educação </h1>
//             </div>
//             <div className="max-w-lg">
//                 <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique necessitatibus ducimus pariatur aliquid dolore omnis perspiciatis eius, deserunt dolorem vel eveniet a voluptas fuga possimus, amet soluta, illo veniam.</p>
//                 <div className="my-4">
//                     <button className="bg-white p-2 font-semibold rounded-md">Estudande</button>
//                     <button className="p-2 font-semibold rounded-md">Mentor</button>
//                 </div>
//             </div>
//         </section>
//     )
// }
