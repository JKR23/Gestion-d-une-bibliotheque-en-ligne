import { changeUserAddress } from "@/controllers/userController";

export default async function handler(req, res) {
 const { userId } = req.query;

 if (req.method === "PUT") {
  return changeUserAddress(req, res);
 }

 res.setHeader("Allow", ["PUT"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
