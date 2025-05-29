"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // Ou qualquer página protegida
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Entrar
        </button>
      </form>
    </div>
  );
}



// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function LoginPage() {
//   const router = useRouter();
//   const [nome, setNome] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: nome, password: password }),
//     });

//     if (res.ok) {
//       router.push("/main"); // Redireciona após login
//     } else {
//       alert("Bem-Vindo");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
//       <h1 className="text-2xl justify-center font-bold mb-4">Entrar</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="nome"
//           type="text"
//           placeholder="Nome"
//           onChange={(e) => setNome(e.target.value)}
//           className="input mb-2"
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Senha"
//           onChange={(e) => setPassword(e.target.value)}
//           className="input mb-4"
//         />
//         <Link href="/main">
//           <button
//             type="submit"
//             className="btn w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Login
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// }

// // "use client";
// // import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import { useState } from "react";

// // export default function LoginPage() {
// //   const router = useRouter();
// //   const [nome, setNome] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async (e: { preventDefault: () => void }) => {
// //     e.preventDefault();
// //     const res = await fetch("/api/login", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ nome, password }),
// //     });
// //     if (res.ok) {
// //       router.push("/dashboard");
// //     } else {
// //       alert("Credenciais inválidas");
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
// //       <h1 className="text-2xl font-bold mb-4">Entrar</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           name="nome"
// //           type="nome"
// //           placeholder="Nome"
// //           onChange={(e) => setNome(e.target.value)}
// //           className="input mb-2"
// //         />
// //         <input
// //           name="password"
// //           type="password"
// //           placeholder="Senha"
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="input mb-4"
// //         />
// //         <Link href="/ComunidadeSection">
// //           <button
// //             type="submit"
// //             className="btn w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
// //           >
// //             Login
// //           </button>
// //         </Link>
// //       </form>
// //     </div>
// //   );
// // }
