import {
 getUserById,
 updateUser,
 deleteUser,
} from "../../../../controllers/userController";

export default async function handler(req, res) {
 const { id } = req.query;

 switch (req.method) {
  case "GET":
   return getUserById(req, res);
  case "PUT":
   return updateUser(req, res);
  case "DELETE":
   return deleteUser(req, res);
  default:
   res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
   res.status(405).end(`Méthode ${req.method} non autorisée`);
 }
}
