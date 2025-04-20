import {
 getBookById,
 updateBook,
 deleteBook,
} from "../../../../controllers/bookController";

export default async function handler(req, res) {
 const { id } = req.query;

 switch (req.method) {
  case "GET":
   return getBookById(req, res);
  case "PUT":
   return updateBook(req, res);
  case "DELETE":
   return deleteBook(req, res);
  default:
   res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
   res.status(405).end(`Méthode ${req.method} non autorisée`);
 }
}
