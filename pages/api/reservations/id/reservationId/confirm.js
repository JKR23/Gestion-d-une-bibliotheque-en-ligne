import { confirmReservation } from "../../../../../controllers/reservationController";

export default async function handler(req, res) {
 if (req.method === "PUT") {
  return confirmReservation(req, res);
 }

 res.setHeader("Allow", ["PUT"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
