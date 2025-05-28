"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.push("/login");
    } else {
      alert("Erro no cadastro");
    }
  };

  return (
    <div className="max-w-md  mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Nome"
          required
          className="input mb-2"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Senha"
          required
          className="input mb-2"
        />
        <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          placeholder="Confirmar Senha"
          required
          className="input mb-4"
        />
        <Link href="/login">
          <button
            type="submit"
            className="btn w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Cadastrar
          </button>
        </Link>
      </form>
    </div>
  );
}
// Styles for the input and button
