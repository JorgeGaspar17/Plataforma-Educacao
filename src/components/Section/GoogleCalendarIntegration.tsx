"use client";

import { useState, useCallback } from "react";
import { FaCheckCircle, FaGoogle } from "react-icons/fa";

export function GoogleCalendarIntegration() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = useCallback(() => {
    // TODO: Implementar autenticação real com API Google Calendar
    setIsConnected(true);
    alert("Conta do Google Calendar conectada com sucesso!");
  }, []);

  return (
    <section
      aria-labelledby="google-calendar-title"
      className="mt-8 bg-green-50 p-6 rounded-lg max-w-md"
    >
      <h3
        id="google-calendar-title"
        className="text-xl font-semibold mb-3 text-gray-900"
      >
        Integração com Google Calendar
      </h3>
      <p className="mb-6 text-gray-700">
        Conecte sua conta do Google para sincronizar automaticamente seus
        agendamentos.
      </p>

      {isConnected ? (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 text-green-600 font-medium"
        >
          <FaCheckCircle size={24} aria-hidden="true" />
          <span>Conectado</span>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          aria-label="Conectar Google Calendar"
          type="button"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none text-white py-2 px-5 rounded-md font-semibold transition transform hover:scale-105 cursor-pointer select-none"
        >
          <FaGoogle size={20} aria-hidden="true" />
          Conectar Google Calendar
        </button>
      )}
    </section>
  );
}


// "use client";

// import { useState } from "react";

// export function GoogleCalendarIntegration() {
//   const [isConnected, setIsConnected] = useState(false);

//   const handleConnect = () => {
//     // Aqui você implementaria a integração real com a API do Google Calendar
//     setIsConnected(true);
//     alert("Conta do Google Calendar conectada com sucesso!");
//   };

//   return (
//     <div className="mt-8 bg-green-50 p-6 rounded-lg">
//       <h3 className="text-xl font-semibold mb-2">
//         Integração com Google Calendar
//       </h3>
//       <p className="mb-4">
//         Conecte sua conta do Google para sincronizar automaticamente seus
//         agendamentos.
//       </p>
//       {isConnected ? (
//         <div className="flex items-center gap-2 text-green-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <span>Conectado</span>
//         </div>
//       ) : (
//         <button
//           onClick={handleConnect}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
//             <path d="M12 6c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
//           </svg>
//           Conectar Google Calendar
//         </button>
//       )}
//     </div>
//   );
// }
