import { getReservationsByBookTitle } from "@/controllers/reservationController";

export default async function handler(req, res) {
 if (req.method === "GET") {
  return getReservationsByBookTitle(req, res);
 }

 res.setHeader("Allow", ["GET"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
