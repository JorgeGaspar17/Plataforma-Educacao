import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

// simula banco de dados
const users: any[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) return res.status(400).json({ error: "Senhas não coincidem" });

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ error: "Usuário já existe" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword });

  return res.status(200).json({ message: "Usuário criado com sucesso" });
}
