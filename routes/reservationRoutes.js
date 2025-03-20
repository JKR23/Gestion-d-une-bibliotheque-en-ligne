//routeReservation
import express from "express";
import {
 createReservation,
 getUserReservations,
 deleteReservation,
 getReservationsByBookTitle,
 getReservationsByUserName,
 confirmReservation,
 cancelReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

// Créer une réservation
router.post("/", createReservation);
// URL : POST http://localhost:5000/api/reservations

// Obtenir toutes les réservations d'un utilisateur
router.get("/id/:userId", getUserReservations);
// URL : GET http://localhost:5000/api/reservations/id/:userId (Remplacez :userId par l'ID de l'utilisateur)

// Supprimer une réservation
router.delete("/id/:reservationId", deleteReservation);
// URL : DELETE http://localhost:5000/api/reservations/id/:reservationId (Remplacez :reservationId par l'ID de la réservation)

// Obtenir les réservations par titre de livre
router.get("/by-book", getReservationsByBookTitle);
// URL : GET http://localhost:5000/api/reservations/by-book (Fournir un paramètre de recherche pour le titre)

// Obtenir les réservations par nom d'utilisateur
router.get("/by-user", getReservationsByUserName);
// URL : GET http://localhost:5000/api/reservations/by-user (Fournir un paramètre de recherche pour le nom d'utilisateur)

// Confirmer une réservation (ex : /reservations/id/:reservationId/confirm)
router.put("/id/:reservationId/confirm", confirmReservation);
// URL : PUT http://localhost:5000/api/reservations/id/:reservationId/confirm (Remplacez :reservationId par l'ID de la réservation à confirmer)

// Annuler une réservation (ex : /reservations/id/:reservationId/cancel)
router.put("/id/:reservationId/cancel", cancelReservation);
// URL : PUT http://localhost:5000/api/reservations/id/:reservationId/cancel (Remplacez :reservationId par l'ID de la réservation à annuler)

export default router;
