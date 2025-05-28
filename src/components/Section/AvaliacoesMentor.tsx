"use client";

import { useState } from "react";

export function AvaliacoesMentor() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      mentor: "Prof. João Silva",
      rating: 5,
      comment: "Excelente professor, explica muito bem!",
      date: "2023-10-15",
    },
    {
      id: 2,
      mentor: "Dra. Maria Souza",
      rating: 4,
      comment: "Muito paciente e conhecimento profundo",
      date: "2023-09-28",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      const newReview = {
        id: reviews.length + 1,
        mentor: "Prof. Carlos Mendes",
        rating,
        comment,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([...reviews, newReview]);
      setSubmitted(true);
      setRating(0);
      setComment("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="space-y-8 max-w-xl mx-auto">
      {/* Formulário de avaliação */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Avaliar Mentoria Recente</h3>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 p-6 rounded-lg shadow-md"
          aria-label="Formulário para avaliação de mentor"
        >
          <div className="mb-5">
            <label className="block text-gray-700 mb-2" htmlFor="rating">
              Avaliação (1-5 estrelas)
            </label>
            <div id="rating" className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                  className={`text-3xl transition-colors ${
                    star <= rating ? "text-yellow-400" : "text-gray-400"
                  } focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="comment"
              className="block text-gray-700 mb-2"
            >
              Comentário (opcional)
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Deixe um comentário sobre o mentor"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={rating === 0}
            className={`w-full py-3 rounded-md text-white font-semibold transition-colors ${
              rating === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Enviar Avaliação
          </button>

          {submitted && (
            <p
              role="alert"
              className="mt-4 text-green-600 font-medium text-center"
            >
              Avaliação enviada com sucesso!
            </p>
          )}
        </form>
      </section>

      {/* Listagem das avaliações anteriores */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Suas Avaliações Anteriores</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500 italic">Você ainda não avaliou nenhum mentor.</p>
        ) : (
          <ul className="space-y-6">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="border border-gray-200 rounded-lg p-5 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-lg">{review.mentor}</h4>
                  <time
                    dateTime={review.date}
                    className="text-sm text-gray-500"
                  >
                    {new Date(review.date).toLocaleDateString("pt-BR")}
                  </time>
                </div>
                <div
                  className="text-yellow-400 text-xl mb-2"
                  aria-label={`Avaliação de ${review.rating} estrela${review.rating > 1 ? "s" : ""}`}
                  role="img"
                >
                  {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                </div>
                {review.comment && (
                  <p className="text-gray-700">{review.comment}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}











// "use client";

// import { useState } from "react";

// export function AvaliacoesMentor() {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       mentor: "Prof. João Silva",
//       rating: 5,
//       comment: "Excelente professor, explica muito bem!",
//       date: "2023-10-15",
//     },
//     {
//       id: 2,
//       mentor: "Dra. Maria Souza",
//       rating: 4,
//       comment: "Muito paciente e conhecimento profundo",
//       date: "2023-09-28",
//     },
//   ]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (rating > 0) {
//       // Aqui você enviaria para o backend
//       const newReview = {
//         id: reviews.length + 1,
//         mentor: "Prof. Carlos Mendes",
//         rating,
//         comment,
//         date: new Date().toISOString().split("T")[0],
//       };
//       setReviews([...reviews, newReview]);
//       setSubmitted(true);
//       setRating(0);
//       setComment("");
//       setTimeout(() => setSubmitted(false), 3000);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Avaliar Mentoria Recente</h3>
//         <form onSubmit={handleSubmit} className="bg-blue-50 p-4 rounded-lg">
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">
//               Avaliação (1-5 estrelas)
//             </label>
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   type="button"
//                   onClick={() => setRating(star)}
//                   className="text-2xl focus:outline-none"
//                 >
//                   {star <= rating ? "★" : "☆"}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="comment" className="block text-gray-700 mb-2">
//               Comentário (opcional)
//             </label>
//             <textarea
//               id="comment"
//               rows={3}
//               className="w-full p-2 border border-gray-300 rounded-md"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             disabled={rating === 0}
//             className={`py-2 px-4 rounded-md text-white ${
//               rating === 0
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             Enviar Avaliação
//           </button>
//           {submitted && (
//             <div className="mt-2 text-green-600">
//               Avaliação enviada com sucesso!
//             </div>
//           )}
//         </form>
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-4">
//           Suas Avaliações Anteriores
//         </h3>
//         {reviews.length === 0 ? (
//           <p className="text-gray-500">Você ainda não avaliou nenhum mentor</p>
//         ) : (
//           <div className="space-y-4">
//             {reviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="border border-gray-200 rounded-lg p-4"
//               >
//                 <div className="flex justify-between items-start">
//                   <h4 className="font-medium">{review.mentor}</h4>
//                   <div className="flex items-center">
//                     <span className="text-yellow-500">
//                       {"★".repeat(review.rating)}
//                       {"☆".repeat(5 - review.rating)}
//                     </span>
//                     <span className="ml-2 text-sm text-gray-500">
//                       {new Date(review.date).toLocaleDateString("pt-BR")}
//                     </span>
//                   </div>
//                 </div>
//                 {review.comment && (
//                   <p className="mt-2 text-gray-700">{review.comment}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
