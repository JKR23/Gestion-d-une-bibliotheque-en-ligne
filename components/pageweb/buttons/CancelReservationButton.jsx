"use client";

import React, { useState } from "react";

export default function CancelReservationButton({ reservationId }) {
 const [loading, setLoading] = useState(false);
 const [canceled, setCanceled] = useState(false);

 const handleCancel = async () => {
  setLoading(true);
  try {
   const response = await fetch(
    `http://localhost:5000/api/reservations/id/${reservationId}`,
    {
     method: "DELETE",
    }
   );

   if (response.ok) {
    const data = await response.json();
    console.log("Réponse de l'annulation:", data);
    setCanceled(true);
    alert("L'annulation a réussi.");
   } else {
    const errorData = await response.json();
    console.error("Échec de l'annulation", errorData);
    alert("L'annulation a échoué.");
   }
  } catch (error) {
   console.error("Erreur lors de l'annulation", error);
   alert("Erreur de connexion, veuillez réessayer.");
  } finally {
   setLoading(false);
  }
 };

 return (
  <button
   onClick={handleCancel}
   disabled={loading || canceled}
   className={`w-1/2 mt-2 py-2 px-4 rounded ${
    loading ? "bg-gray-500" : "bg-red-500"
   } text-white hover:scale-105 hover:bg-red-600`}
  >
   {loading ? "Chargement..." : canceled ? "Annulé" : "Annuler"}
  </button>
 );
}
