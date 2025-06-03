// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">Edu <span className="text-black">conect</span></h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="#sobre">Sobre</Link>
        <Link href="#comunidade">Comunidade</Link>
        <Link href="#agenda">Agenda</Link>
        <Link href="#contato">Contato</Link>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
        </Link>
      </nav>
    </header>
  );
}







// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow-md fixed w-full top-0 z-50 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="flex items-center gap-1">
//               <span className="text-2xl font-extrabold text-blue-600 leading-none">
//                 Edu
//               </span>
//               <span className="text-2xl font-bold text-gray-800 leading-none">
//                 conect
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-6 items-center">
//             <Link
//               href="/"
//               className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-150"
//             >
//               Home
//             </Link>
//             <Link
//               href="/Section/sobre"
//               className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-150"
//             >
//               Sobre
//             </Link>
//             <Link href="/ComunidadeSection"
//               className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-150"
//             >
//               Comunidade
//             </Link>
//             <Link
//               href="/Section/CalendarioAgendamento"
//               className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-150"
//             >
//               Agenda
//             </Link>
//             <Link
//               href="/Section/contacto"
//               className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-150"
//             >
//               Contacto
//             </Link>
//             <Link href="/register">
//               <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium text-sm transition duration-300">
//                 Registrar-se Agora
//               </button>
//             </Link>
//           </nav>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
//               aria-label="Abrir menu principal"
//             >
//               <span className="sr-only">Abrir menu</span>
//               <div className="w-6 h-6 relative">
//                 <span
//                   className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
//                     isMenuOpen ? "rotate-45 top-2.5" : "top-1"
//                   }`}
//                 ></span>
//                 <span
//                   className={`block absolute h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
//                     isMenuOpen ? "opacity-0" : "opacity-100 top-3"
//                   }`}
//                 ></span>
//                 <span
//                   className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
//                     isMenuOpen ? "-rotate-45 top-2.5" : "top-5"
//                   }`}
//                 ></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "block" : "hidden"
//         }`}
//       >
//         <div className="px-4 pt-4 pb-6 space-y-2 bg-white shadow-lg">
//           <Link
//             href="/"
//             className="block text-gray-700 hover:text-blue-600 text-base font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             href="/Section/sobre"
//             className="block text-gray-700 hover:text-blue-600 text-base font-medium"
//           >
//             Sobre
//           </Link>
//           <Link
//             href="/Section/ComunidadeSection"
//             className="block text-gray-700 hover:text-blue-600 text-base font-medium"
//           >
//             Comunidade
//           </Link>
//           <Link
//             href="/Section/CalendarioAgendamento"
//             className="block text-gray-700 hover:text-blue-600 text-base font-medium"
//           >
//             Agenda
//           </Link>
//           <Link
//             href="/Section/contacto"
//             className="block text-gray-700 hover:text-blue-600 text-base font-medium"
//           >
//             Contacto
//           </Link>
//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-3 rounded-md font-medium transition duration-300">
//             Registrar-se Agora
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow-md fixed w-full top-0 z-50 font-sans">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}

//           <Link href="/" className="flex flex-col leading-tight">
//             <span className="text-2xl font-extrabold text-blue-600">Edu</span>
//             <span className="text-2xl font-bold text-black -mt-1">conect</span>
//           </Link>

//           {/* Logo alternative
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="flex items-center">
//               <span className="ml-2 text-xl font-extrabold text-blue-600">Edu <br/></span>
//               <span className="mr-1 text-xl font-bold text-black"><br/>conect</span>
//             </Link>
//           </div> */}

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <Link
//               href="/"
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
//             >
//               Home
//             </Link>
//             <Link
//               href="/sobre"
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
//             >
//               Sobre
//             </Link>
//             <Link
//               href="/comunidade"
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
//             >
//               Comunidade
//             </Link>
//             <Link
//               href="/agenda"
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
//             >
//               Agenda
//             </Link>
//             <Link
//               href="/contacto"
//               className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
//             >
//               Contacto
//             </Link>
//           </nav>

//           <div>
//             <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-white font-semibold text-sm rounded-md transition duration-300">
//               Login
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Abrir menu principal</span>
//               {!isMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white shadow-lg">
//           <Link
//             href="/"
//             className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             href="/sobre"
//             className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Sobre
//           </Link>
//           <Link
//             href="/comunidade"
//             className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Comunidade
//           </Link>
//           <Link
//             href="/agenda"
//             className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Agenda
//           </Link>
//           <Link
//             href="/contacto"
//             className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contacto
//           </Link>
//           <div className="px-3 py-2">
//             <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 text-white font-semibold text-sm rounded-md transition duration-300">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// // "use client";

// // import { useState } from 'react';
// // import Link from 'next/link';

// // export default function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <header className="bg-white shadow-md fixed w-full top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0 flex items-center">
// //             <Link href="/" className="flex items-center">
// //               <span className="ml-2 text-lg font-semibold text-gray-900">Logo</span>
// //             </Link>
// //           </div>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden md:flex space-x-8">
// //             <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
// //               Home
// //             </Link>
// //             <Link href="/sobre" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
// //               Sobre
// //             </Link>
// //             <Link href="/comunidade" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
// //               Comunidade
// //             </Link>
// //             <Link href="/agenda" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
// //               Agenda
// //             </Link>
// //             <Link href="/contacto" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150">
// //               Contacto
// //             </Link>
// //           </nav>

// //           <div>
// //             <button className='bg-blue-600 py-2 px-4 text-white font-semibold text-sm rounded-md'>Login</button>
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={toggleMenu}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
// //               aria-expanded="false"
// //             >
// //               <span className="sr-only">Abrir menu principal</span>
// //               <div className="w-6 flex flex-col items-center">
// //                 <span
// //                   className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}
// //                 ></span>
// //                 <span
// //                   className={`block w-5 h-0.5 bg-gray-600 my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ease-in-out`}
// //                 ></span>
// //                 <span
// //                   className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}
// //                 ></span>
// //               </div>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile menu, show/hide based on menu state */}
// //       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
// //         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
// //           <Link href="/" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
// //             Home
// //           </Link>
// //           <Link href="/sobre" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
// //             Sobre
// //           </Link>
// //           <Link href="/comunidade" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
// //             Comunidade
// //           </Link>
// //           <Link href="/agenda" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
// //             Agenda
// //           </Link>
// //           <Link href="/contacto" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
// //             Contacto
// //           </Link>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
