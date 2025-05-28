"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";

export default function CalendarioAgendamento() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [events, setEvents] = useState<any[]>([]);

  const handleDateClick = (arg: any) => {
    setSelectedDate(arg.dateStr);
    setShowTimeSelection(false);
    setSelectedTime(null);
    setEventTitle("");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime && eventTitle.trim()) {
      const newEvent = {
        title: eventTitle.trim(),
        start: `${selectedDate}T${selectedTime}`,
        allDay: false,
      };
      setEvents([...events, newEvent]);
      alert(`Mentoria agendada para ${new Date(`${selectedDate}T${selectedTime}`).toLocaleString("pt-BR")}`);
      resetSelection();
    }
  };

  const resetSelection = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setShowTimeSelection(false);
    setEventTitle("");
  };

  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Agende Sua Mentoria
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendário */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              locale={ptBrLocale}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek",
              }}
              height="auto"
              dateClick={handleDateClick}
              events={events}
              selectable={true}
            />
          </div>

          {/* Seleção de Data/Hora e Agendamento */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col justify-center">
            {!selectedDate ? (
              <p className="text-center text-gray-600">
                Selecione uma data no calendário
              </p>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4">
                  Agendamento para{" "}
                  {new Date(selectedDate).toLocaleDateString("pt-BR")}
                </h3>

                {!showTimeSelection ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (eventTitle.trim()) setShowTimeSelection(true);
                    }}
                    className="space-y-4"
                    aria-label="Formulário para título do evento"
                  >
                    <div>
                      <label
                        htmlFor="eventTitle"
                        className="block text-gray-700 mb-2 font-medium"
                      >
                        Título da Mentoria
                      </label>
                      <input
                        id="eventTitle"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        placeholder="Ex: Aula de Matemática"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={!eventTitle.trim()}
                    >
                      Selecionar Horário
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <h4 className="font-medium">Selecione um horário:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map(
                        (time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeSelect(time)}
                            className={`py-2 rounded-md text-center transition-colors ${
                              selectedTime === time
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            aria-pressed={selectedTime === time}
                          >
                            {time}
                          </button>
                        )
                      )}
                    </div>

                    {selectedTime && (
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center justify-between text-gray-700">
                          <span>Data:</span>
                          <span className="font-medium">
                            {new Date(selectedDate).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-gray-700">
                          <span>Horário:</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <button
                            type="button"
                            onClick={resetSelection}
                            className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex-1 hover:bg-gray-100"
                          >
                            Cancelar
                          </button>
                          <button
                            type="button"
                            onClick={handleSchedule}
                            disabled={!eventTitle.trim()}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
                          >
                            Confirmar Agendamento
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">Lembretes</h3>
          <p className="mb-4 text-gray-700">
            Nós enviaremos lembretes por e-mail e WhatsApp antes de sua mentoria.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="emailReminder"
              defaultChecked
              className="h-4 w-4"
            />
            <label htmlFor="emailReminder" className="select-none">
              Receber lembretes por e-mail
            </label>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="whatsappReminder"
              defaultChecked
              className="h-4 w-4"
            />
            <label htmlFor="whatsappReminder" className="select-none">
              Receber lembretes por WhatsApp
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}





// "use client";

// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import ptBrLocale from "@fullcalendar/core/locales/pt-br";
// import { GoogleCalendarIntegration } from "./GoogleCalendarIntegration";

// export default function CalendarioAgendamento() {
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [showTimeSelection, setShowTimeSelection] = useState(false);
//   const [eventTitle, setEventTitle] = useState("");
//   const [events, setEvents] = useState<any[]>([]);

//   const handleDateClick = (arg: any) => {
//     setSelectedDate(arg.dateStr);
//     setShowTimeSelection(true);
//   };

//   const handleTimeSelect = (time: string) => {
//     setSelectedTime(time);
//   };

//   const handleSchedule = () => {
//     if (selectedDate && selectedTime && eventTitle) {
//       const newEvent = {
//         title: eventTitle,
//         start: `${selectedDate}T${selectedTime}`,
//         allDay: false,
//       };
//       setEvents([...events, newEvent]);
//       // Aqui você pode adicionar a lógica para enviar para o backend
//       alert(`Mentoria agendada para ${selectedDate} às ${selectedTime}`);
//       resetSelection();
//     }
//   };

//   const resetSelection = () => {
//     setSelectedDate(null);
//     setSelectedTime(null);
//     setShowTimeSelection(false);
//     setEventTitle("");
//   };

//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Agende Sua Mentoria
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//             <FullCalendar
//               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//               initialView="dayGridMonth"
//               locale={ptBrLocale}
//               headerToolbar={{
//                 left: "prev,next today",
//                 center: "title",
//                 right: "dayGridMonth,timeGridWeek",
//               }}
//               height="auto"
//               dateClick={handleDateClick}
//               events={events}
//               selectable={true}
//             />
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//             {!selectedDate ? (
//               <div className="flex items-center justify-center h-full">
//                 <p className="text-gray-600">
//                   Selecione uma data no calendário
//                 </p>
//               </div>
//             ) : (
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">
//                   Agendamento para{" "}
//                   {new Date(selectedDate).toLocaleDateString("pt-BR")}
//                 </h3>

//                 {!showTimeSelection ? (
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Título da Mentoria
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         value={eventTitle}
//                         onChange={(e) => setEventTitle(e.target.value)}
//                         placeholder="Ex: Aula de Matemática"
//                       />
//                     </div>
//                     <button
//                       onClick={() => setShowTimeSelection(true)}
//                       className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
//                     >
//                       Selecionar Horário
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     <h4 className="font-medium">Selecione um horário:</h4>
//                     <div className="grid grid-cols-3 gap-2">
//                       {[
//                         "09:00",
//                         "10:00",
//                         "11:00",
//                         "14:00",
//                         "15:00",
//                         "16:00",
//                       ].map((time) => (
//                         <button
//                           key={time}
//                           onClick={() => handleTimeSelect(time)}
//                           className={`py-2 rounded-md ${
//                             selectedTime === time
//                               ? "bg-blue-600 text-white"
//                               : "bg-gray-200 hover:bg-gray-300"
//                           }`}
//                         >
//                           {time}
//                         </button>
//                       ))}
//                     </div>

//                     {selectedTime && (
//                       <div className="mt-4 space-y-4">
//                         <div className="flex items-center justify-between">
//                           <span>Data:</span>
//                           <span className="font-medium">
//                             {new Date(selectedDate).toLocaleDateString("pt-BR")}
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span>Horário:</span>
//                           <span className="font-medium">{selectedTime}</span>
//                         </div>

//                         <div className="flex gap-2 mt-4">
//                           <button
//                             onClick={resetSelection}
//                             className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex-1"
//                           >
//                             Cancelar
//                           </button>
//                           <button
//                             onClick={handleSchedule}
//                             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex-1"
//                             disabled={!eventTitle}
//                           >
//                             Confirmar Agendamento
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* <GoogleCalendarIntegration /> */}

//         <div className="mt-8 bg-blue-50 p-6 rounded-lg">
//           <h3 className="text-xl font-semibold mb-2">Lembretes</h3>
//           <p className="mb-4">
//             Nós enviaremos lembretes por e-mail e WhatsApp antes de sua
//             mentoria.
//           </p>
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               id="emailReminder"
//               defaultChecked
//               className="h-4 w-4"
//             />
//             <label htmlFor="emailReminder">Receber lembretes por e-mail</label>
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <input
//               type="checkbox"
//               id="whatsappReminder"
//               defaultChecked
//               className="h-4 w-4"
//             />
//             <label htmlFor="whatsappReminder">
//               Receber lembretes por WhatsApp
//             </label>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
