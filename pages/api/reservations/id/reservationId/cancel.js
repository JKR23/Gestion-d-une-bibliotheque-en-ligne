import { cancelReservation } from "@/controllers/reservationController";

export default async function handler(req, res) {
 if (req.method === "PUT") {
  return cancelReservation(req, res);
 }

 res.setHeader("Allow", ["PUT"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
