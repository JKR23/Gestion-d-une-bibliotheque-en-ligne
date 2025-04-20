import { searchBooks } from "../../../controllers/bookController";

export default async function handler(req, res) {
 if (req.method === "GET") {
  return searchBooks(req, res);
 }

 res.setHeader("Allow", ["GET"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
