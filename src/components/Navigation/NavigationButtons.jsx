"use client";

import { motion } from "framer-motion";
import {
  FaUsers,
  FaGraduationCap,
  FaComments,
  FaCalendarAlt,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

export function NavigationButtons() {
  const buttons = [
    {
      id: 1,
      text: "Sobre Nós",
      icon: <FaGraduationCap size={18} />,
      target: "#sobre",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: 2,
      text: "Comunidade",
      icon: <FaUsers size={18} />,
      target: "#comunidade",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      id: 3,
      text: "Mentores",
      icon: <FaGraduationCap size={18} />,
      target: "#mentores",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: 4,
      text: "Chat",
      icon: <FaComments size={18} />,
      target: "#chat",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      id: 5,
      text: "Agenda",
      icon: <FaCalendarAlt size={18} />,
      target: "#agendamento",
      color: "bg-orange-600 hover:bg-orange-700",
    },
    {
      id: 6,
      text: "Cursos",
      icon: <FaBook size={18} />,
      target: "#cursos",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      id: 7,
      text: "Contato",
      icon: <FaEnvelope size={18} />,
      target: "#contato",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {buttons.map((button) => (
          <motion.a
            key={button.id}
            href={button.target}
            aria-label={`Ir para ${button.text}`}
            className={`${button.color} dark:bg-opacity-90 dark:hover:bg-opacity-100 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all duration-300 transform hover:scale-105 backdrop-blur-md`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: button.id * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-semibold">{button.text}</span>
            {button.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
