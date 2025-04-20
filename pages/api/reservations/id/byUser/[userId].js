//pages/api/reservations/id/userId.js

import { getUserReservations } from "@/controllers/reservationController";

export default async function handler(req, res) {
 if (req.method === "GET") {
  return getUserReservations(req, res);
 }

 res.setHeader("Allow", ["GET"]);
 res.status(405).end(`Méthode ${req.method} non autorisée`);
}
