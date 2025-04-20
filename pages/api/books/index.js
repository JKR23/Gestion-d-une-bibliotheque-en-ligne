import { getBooks, addBook } from "../../../controllers/bookController";

export default async function handler(req, res) {
 switch (req.method) {
  case "GET":
   return getBooks(req, res);
  case "POST":
   return addBook(req, res);
  default:
   res.setHeader("Allow", ["GET", "POST"]);
   res.status(405).end(`Méthode ${req.method} non autorisée`);
 }
}
