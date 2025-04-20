import { deleteReservation } from "@/controllers/reservationController";

export default async function handler(req, res) {
 if (req.method === "DELETE") {
  return deleteReservation(req, res);
 }

 res.setHeader("Allow", ["DELETE"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
