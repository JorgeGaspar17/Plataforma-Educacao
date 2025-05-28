"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaUsers,
  FaGraduationCap,
  FaComments,
  FaCalendarAlt,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

export function FloatingNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    {
      id: 1,
      text: "Sobre Nós",
      icon: <FaGraduationCap size={20} />,
      target: "#Sobre",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: 2,
      text: "Comunidade",
      icon: <FaUsers size={20} />,
      target: "#ComunidadeSection",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      id: 3,
      text: "Mentores",
      icon: <FaGraduationCap size={20} />,
      target: "#mentoresSection",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: 4,
      text: "Chat",
      icon: <FaComments size={20} />,
      target: "#ChatSection",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      id: 5,
      text: "Agenda",
      icon: <FaCalendarAlt size={20} />,
      target: "#CalendarioAgendamento",
      color: "bg-orange-600 hover:bg-orange-700",
    },
    {
      id: 6,
      text: "Cursos",
      icon: <FaBook size={20} />,
      target: "#RecursosEducacionais",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      id: 7,
      text: "Contato",
      icon: <FaEnvelope size={20} />,
      target: "#contato",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen &&
            buttons.map((button) => (
              <motion.a
                key={button.id}
                href={button.target}
                className={`${button.color} text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)} // fecha menu ao clicar
              >
                <span className="font-medium">{button.text}</span>
                {button.icon}
              </motion.a>
            ))}
        </AnimatePresence>

        <button
          aria-label={isOpen ? "Fechar navegação" : "Abrir navegação"}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="button"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaPlus size={24} />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
