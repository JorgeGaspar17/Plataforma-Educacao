"use client";

import {
  FaUsers,
  FaGraduationCap,
  FaComments,
  FaCalendarAlt,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

export function MobileNavigation() {
  const buttons = [
    {
      id: 1,
      text: "Sobre Nós",
      icon: <FaGraduationCap size={24} />,
      target: "#sobre",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      id: 2,
      text: "Comunidade",
      icon: <FaUsers size={24} />,
      target: "#comunidade",
      color: "text-green-600 hover:text-green-700",
    },
    {
      id: 3,
      text: "Mentores",
      icon: <FaGraduationCap size={24} />,
      target: "#mentores",
      color: "text-purple-600 hover:text-purple-700",
    },
    {
      id: 4,
      text: "Chat",
      icon: <FaComments size={24} />,
      target: "#chat",
      color: "text-pink-600 hover:text-pink-700",
    },
    {
      id: 5,
      text: "Agenda",
      icon: <FaCalendarAlt size={24} />,
      target: "#agendamento",
      color: "text-orange-600 hover:text-orange-700",
    },
    {
      id: 6,
      text: "Cursos",
      icon: <FaBook size={24} />,
      target: "#cursos",
      color: "text-red-600 hover:text-red-700",
    },
    {
      id: 7,
      text: "Contato",
      icon: <FaEnvelope size={24} />,
      target: "#contato",
      color: "text-indigo-600 hover:text-indigo-700",
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-inner md:hidden z-50"
      aria-label="Navegação móvel"
    >
      <div className="flex justify-around py-3">
        {buttons.map((button) => (
          <a
            key={button.id}
            href={button.target}
            aria-label={button.text}
            className={`flex flex-col items-center justify-center ${button.color} hover:brightness-110 transition duration-200`}
            style={{ minWidth: 48 }}
          >
            {button.icon}
            <span className="text-xs mt-1 select-none">{button.text}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
