"use client";

import React, { useState } from "react";

export default function ReserveButton({ bookId, date }) {
 const [loading, setLoading] = useState(false);
 const [reserved, setReserved] = useState(false);
 const userId = localStorage.getItem("userId");

 // Déterminer l'URL de l'API en fonction de l'environnement
 const apiUrl =
  process.env.NODE_ENV === "production"
   ? "https://gestion-d-une-bibliotheque-en-ligne.vercel.app/api/reservations"
   : "http://localhost:3000/api/reservations";

 const handleReserve = async () => {
  if (!date || !userId) return;
  const userIdInt = parseInt(userId, 10);
  if (isNaN(userIdInt)) return;

  setLoading(true);
  try {
   const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId: userIdInt, bookId, reservedUntil: date }),
   });

   if (response.ok) {
    setReserved(true);
    alert("Réservation réussie.");
   } else {
    alert("La réservation a échoué.");
   }
  } catch {
   alert("Erreur de connexion, veuillez réessayer.");
  } finally {
   setLoading(false);
  }
 };

 return (
  <button
   onClick={handleReserve}
   disabled={loading || reserved}
   className={`w-full sm:w-1/2 mt-2 py-2 px-4 rounded text-white ${
    loading ? "bg-gray-500" : "bg-reservationButtonBg"
   } hover:scale-105 hover:bg-survolButtonBg transition`}
  >
   {loading ? "Chargement..." : reserved ? "Réservé" : "Confirmer"}
  </button>
 );
}
