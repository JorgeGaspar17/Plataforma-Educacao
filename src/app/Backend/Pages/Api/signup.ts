import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

const users: any[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, password, confirmPassword } = req.body;
  if (!name || !password || !confirmPassword)
    return res.status(400).json({ error: "Preencha todos os campos" });

  if (password !== confirmPassword)
    return res.status(400).json({ error: "Senhas não coincidem" });

  const userExists = users.find(u => u.name === name);
  if (userExists) return res.status(400).json({ error: "Usuário já existe" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, password: hashedPassword });

  return res.status(200).json({ message: "Usuário registrado com sucesso" });
}


// import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcryptjs";

// // simula banco de dados
// const users: any[] = [];

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { name,password, confirmPassword } = req.body;
//   if (password !== confirmPassword) return res.status(400).json({ error: "Senhas não coincidem" });

//   const userExists = users.find(u => u.name === name);
//   if (userExists) return res.status(400).json({ error: "Usuário já existe" });

//   const hashedPassword = await bcrypt.hash(password, 10);
//   users.push({ name,password: hashedPassword });

//   return res.status(200).json({ message: "Usuário criado com sucesso" });
// }
