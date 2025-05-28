"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, password }),
    });
    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="nome"
          type="nome"
          placeholder="Email"
          onChange={(e) => setNome(e.target.value)}
          className="input mb-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className="input mb-4"
        />
        <Link href="/ComunidadeSection">
          <button
            type="submit"
            className="btn w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
