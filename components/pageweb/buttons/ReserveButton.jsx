"use client";

import React, { useState } from "react";

export default function ReserveButton({ bookId, userId, date }) {
 const [loading, setLoading] = useState(false);
 const [reserved, setReserved] = useState(false);

 // La fonction qui gère la réservation du livre
 const handleReserve = async () => {
  if (!date) return; // Vérifie si une date a été sélectionnée

  setLoading(true); // Active le mode de chargement pendant la réservation
  try {
   const response = await fetch("http://localhost:5000/api/reservations", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
     userId,
     bookId,
     reservedUntil: date, // Utilise la date passée en paramètre
    }),
   });

   const data = await response.json();
   console.log("Réponse de la réservation:", data);

   if (data.success) {
    setReserved(true); // Si la réservation est réussie, on met à jour l'état
   } else {
    console.error("Échec de la réservation", data);
    alert("La réservation a échoué.");
   }
  } catch (error) {
   console.error("Erreur lors de la réservation", error);
   alert("Erreur de connexion, veuillez réessayer.");
  } finally {
   setLoading(false); // Arrêt du mode de chargement
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
