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
    setCanceled(true);
    alert("L'annulation a réussi.");
   } else {
    alert("L'annulation a échoué.");
   }
  } catch {
   alert("Erreur de connexion, veuillez réessayer.");
  } finally {
   setLoading(false);
  }
 };

 return (
  <button
   onClick={handleCancel}
   disabled={loading || canceled}
   className={`w-full sm:w-1/2 mt-2 py-2 px-4 rounded text-white ${
    loading ? "bg-gray-500" : "bg-red-500"
   } hover:scale-105 hover:bg-red-600 transition`}
  >
   {loading ? "Chargement..." : canceled ? "Annulé" : "Annuler"}
  </button>
 );
}
