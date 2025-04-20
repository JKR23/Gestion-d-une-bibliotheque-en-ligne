import { registerUser } from "@/controllers/userController";

export default async function handler(req, res) {
 if (req.method === "POST") {
  return registerUser(req, res);
 }

 res.setHeader("Allow", ["POST"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
