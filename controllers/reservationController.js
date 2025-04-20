//reservationController

import reservationModel from "../models/reservation.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Créer une réservation
export const createReservation = async (req, res) => {
 try {
  const { bookId, userId, reservedUntil } = req.body;
  console.log("Données de réservation reçues :", req.body);

  if (!reservedUntil) {
   return res
    .status(400)
    .json({ error: "La date de réservation est requise." });
  }

  const book = await prisma.book.findUnique({ where: { id: bookId } });

  if (!book) {
   return res
    .status(400)
    .json({ error: "Le livre n'existe pas pour réservation." });
  }
  if (book.stock <= 0) {
   return res
    .status(400)
    .json({ error: "Le livre n'est plus disponible pour réservation." });
  }

  const reservation = await reservationModel.createReservation(
   userId,
   bookId,
   reservedUntil
  );

  await prisma.book.update({
   where: { id: bookId },
   data: { stock: book.stock - 1 },
  });

  res.status(201).json(reservation);
 } catch (error) {
  console.error("Erreur lors de la création de la réservation :", error);
  res.status(500).json({
   error: error.message || "Erreur lors de la création de la réservation",
  });
 }
};

// Obtenir les réservations d'un utilisateur
export const getUserReservations = async (req, res) => {
 const { userId } = req.query;
 console.log("Demande de réservations pour l'utilisateur avec ID :", userId);

 try {
  const userIdInt = parseInt(userId, 10);
  if (isNaN(userIdInt)) {
   return res
    .status(400)
    .json({ error: "L'ID utilisateur doit être un nombre valide." });
  }

  const reservations = await reservationModel.getUserReservations(userIdInt);

  if (!reservations || reservations.length === 0) {
   return res
    .status(404)
    .json({ error: "Aucune réservation trouvée pour cet utilisateur." });
  }

  res.status(200).json(reservations);
 } catch (error) {
  console.error("Erreur lors de la récupération des réservations :", error);
  res
   .status(500)
   .json({ error: "Erreur lors de la récupération des réservations" });
 }
};

// Supprimer une réservation
export const deleteReservation = async (req, res) => {
 const { reservationId } = req.query;
 console.log(
  "Demande de suppression de la réservation avec ID:",
  reservationId
 );

 try {
  if (!reservationId) {
   return res.status(400).json({ error: "L'ID de réservation est requis." });
  }

  const reservationIdInt = parseInt(reservationId, 10);
  if (isNaN(reservationIdInt)) {
   return res
    .status(400)
    .json({ error: "L'ID de réservation doit être un nombre valide." });
  }

  const reservation = await reservationModel.deleteReservation(
   reservationIdInt
  );

  if (!reservation) {
   return res.status(404).json({ error: "Réservation non trouvée." });
  }

  res.status(200).json({ message: "Réservation supprimée", reservation });
 } catch (error) {
  console.error("Erreur lors de la suppression de la réservation:", error);
  res
   .status(500)
   .json({ error: "Erreur lors de la suppression de la réservation" });
 }
};

// Obtenir les réservations par titre de livre
export const getReservationsByBookTitle = async (req, res) => {
 const { title } = req.query;

 try {
  if (!title) {
   return res.status(400).json({ error: "Le titre du livre est requis." });
  }

  const reservations = await reservationModel.getReservationsByBookTitle(title);

  if (reservations.length === 0) {
   return res
    .status(404)
    .json({ error: "Aucune réservation trouvée pour ce livre." });
  }

  res.status(200).json(reservations);
 } catch (error) {
  console.error(
   "Erreur lors de la recherche des réservations par titre de livre:",
   error
  );
  res.status(500).json({
   error: "Erreur lors de la recherche des réservations par titre de livre",
  });
 }
};

// Obtenir les réservations par nom d'utilisateur
export const getReservationsByUserName = async (req, res) => {
 const { username } = req.query;
 console.log("Demande de réservations pour l'utilisateur :", username);

 try {
  if (!username) {
   return res.status(400).json({ error: "Le nom d'utilisateur est requis." });
  }

  const reservations = await reservationModel.getReservationsByUserName(
   username
  );

  if (reservations.length === 0) {
   return res
    .status(404)
    .json({ error: "Aucune réservation trouvée pour cet utilisateur." });
  }

  res.status(200).json(reservations);
 } catch (error) {
  console.error(
   "Erreur lors de la recherche des réservations par utilisateur:",
   error
  );
  res.status(500).json({
   error: "Erreur lors de la recherche des réservations par utilisateur",
  });
 }
};

// Confirmer une réservation
export const confirmReservation = async (req, res) => {
 const { reservationId } = req.query;
 console.log(
  "Demande de confirmation de la réservation avec ID:",
  reservationId
 );

 try {
  if (!reservationId) {
   return res.status(400).json({ error: "L'ID de réservation est requis." });
  }

  const reservationIdInt = parseInt(reservationId, 10);
  if (isNaN(reservationIdInt)) {
   return res
    .status(400)
    .json({ error: "L'ID de réservation doit être un nombre valide." });
  }

  const reservation = await reservationModel.updateReservationStatus(
   reservationIdInt,
   "CONFIRMED"
  );

  if (!reservation) {
   return res.status(404).json({ error: "Réservation non trouvée." });
  }

  res.status(200).json({ message: "Réservation confirmée", reservation });
 } catch (error) {
  console.error("Erreur lors de la confirmation de la réservation:", error);
  res.status(500).json({
   error: "Erreur lors de la confirmation de la réservation",
  });
 }
};

// Annuler une réservation
export const cancelReservation = async (req, res) => {
 const { reservationId } = req.query;
 console.log("Demande d'annulation de la réservation avec ID:", reservationId);

 try {
  if (!reservationId) {
   return res.status(400).json({ error: "L'ID de réservation est requis." });
  }

  const reservationIdInt = parseInt(reservationId, 10);
  if (isNaN(reservationIdInt)) {
   return res
    .status(400)
    .json({ error: "L'ID de réservation doit être un nombre valide." });
  }

  const reservation = await reservationModel.updateReservationStatus(
   reservationIdInt,
   "CANCELED"
  );

  if (!reservation) {
   return res.status(404).json({ error: "Réservation non trouvée." });
  }

  res.status(200).json({ message: "Réservation annulée", reservation });
 } catch (error) {
  console.error("Erreur lors de l'annulation de la réservation:", error);
  res.status(500).json({
   error: "Erreur lors de l'annulation de la réservation",
  });
 }
};
