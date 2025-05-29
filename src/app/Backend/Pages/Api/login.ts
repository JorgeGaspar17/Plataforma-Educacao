import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

const users: any[] = [];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, password } = req.body;
  const user = users.find(u => u.name === name);
  if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Senha incorreta" });

  return res.status(200).json({ message: "Login bem-sucedido" });
}









// import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcryptjs";

// const users: any[] = []; // simula banco (deve ser persistente em prod)

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { email, password } = req.body;
//   const user = users.find(u => u.email === email);
//   if (!user) return res.status(401).json({ error: "Usuário não encontrado" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ error: "Senha incorreta" });

//   return res.status(200).json({ message: "Login bem-sucedido" });
// }
