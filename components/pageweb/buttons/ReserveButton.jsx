"use client";

import React, { useState } from "react";

export default function ReserveButton({ bookId, date }) {
 const [loading, setLoading] = useState(false);
 const [reserved, setReserved] = useState(false);

 const userId = localStorage.getItem("userId");

 const handleReserve = async () => {
  if (!date || !userId) return;

  const userIdInt = parseInt(userId, 10);
  if (isNaN(userIdInt)) {
   console.error("ID utilisateur invalide : ", userIdInt);
   alert("ID utilisateur invalide : " + userIdInt);
   return;
  }

  setLoading(true);
  try {
   const response = await fetch("http://localhost:5000/api/reservations", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
     userId: userIdInt,
     bookId,
     reservedUntil: date,
    }),
   });

   if (response.ok) {
    const data = await response.json();
    console.log("Réponse de la réservation:", data);
    setReserved(true);
    alert("Réservation réussie.");
   } else {
    const errorData = await response.json();
    console.error("Échec de la réservation", errorData);
    alert("La réservation a échoué.");
   }
  } catch (error) {
   console.error("Erreur lors de la réservation", error);
   alert("Erreur de connexion, veuillez réessayer.");
  } finally {
   setLoading(false);
  }
 };

 return (
  <button
   onClick={handleReserve}
   disabled={loading || reserved}
   className={`w-1/2 mt-2 py-2 px-4 rounded ${
    loading ? "bg-gray-500" : "bg-reservationButtonBg"
   } text-white hover:scale-105 hover:bg-survolButtonBg`}
  >
   {loading ? "Chargement..." : reserved ? "Réservé" : "Confirmer"}
  </button>
 );
}
