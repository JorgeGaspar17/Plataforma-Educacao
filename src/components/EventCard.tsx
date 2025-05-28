// components/EventCard.tsx
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  mentor: string;
  category: string;
}

export function EventCard({ evento }: { evento: Event }) {
  return (
    <div
      role="article"
      aria-label={`Evento: ${evento.title} com ${evento.mentor}`}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="w-16 h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center text-blue-600"
        >
          <span className="text-xs">NOV</span>
          <span className="text-xl font-bold">{evento.date.split("-")[2]}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-lg">{evento.title}</h4>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-sm text-gray-600">Com {evento.mentor}</span>
            <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">{evento.category}</span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {evento.time} -{" "}
            {new Date(evento.date).toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </div>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm whitespace-nowrap"
          aria-label={`Participar do evento ${evento.title}`}
        >
          Participar
        </button>
      </div>
    </div>
  );
}
