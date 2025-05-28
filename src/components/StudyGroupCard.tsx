// components/StudyGroupCard.tsx
import React from "react";

interface StudyGroup {
  id: number;
  name: string;
  members: number;
  category: string;
  active: boolean;
  description: string;
}

export function StudyGroupCard({ grupo }: { grupo: StudyGroup }) {
  return (
    <div
      role="article"
      aria-label={`Grupo: ${grupo.name}, categoria ${grupo.category}`}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-lg">{grupo.name}</h4>
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            grupo.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}
        >
          {grupo.active ? "Ativo" : "Inativo"}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{grupo.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">{grupo.members} membros</span>
        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
          {grupo.category}
        </span>
      </div>
      <button
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
        aria-label={
          grupo.active ? `Participar do grupo ${grupo.name}` : `Solicitar ingresso no grupo ${grupo.name}`
        }
      >
        {grupo.active ? "Participar" : "Solicitar Ingresso"}
      </button>
    </div>
  );
}
