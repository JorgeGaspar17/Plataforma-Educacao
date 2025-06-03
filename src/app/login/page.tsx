"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleResetPassword = async () => {
    if (!email) return alert("Informe seu e-mail.");
    await sendPasswordResetEmail(auth, email);
    alert("Email de recuperação enviado.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar</h1>

        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Senha" className="w-full mb-4 px-4 py-2 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Entrar</button>

        <button type="button" className="mt-4 text-sm text-blue-500 underline" onClick={handleResetPassword}>
          Esqueceu a senha?
        </button>

        <p className="text-center mt-4">
          Não tem conta? <a href="/register" className="text-blue-600 underline">Cadastrar</a>
        </p>
      </form>
    </main>
  );
}
