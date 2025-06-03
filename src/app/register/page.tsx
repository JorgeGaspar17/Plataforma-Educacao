"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Criar Conta</h1>

        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Senha" className="w-full mb-4 px-4 py-2 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Cadastrar</button>

        <p className="text-center mt-4">
          Já tem conta? <a href="/login" className="text-blue-600 underline">Entrar</a>
        </p>
      </form>
    </main>
  );
}
