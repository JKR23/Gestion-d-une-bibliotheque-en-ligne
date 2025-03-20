"use client";

import React, { useState } from "react";
import ReserveButton from "@/components/pageweb/buttons/ReserveButton.jsx"; // Importation de ReserveButton

export default function FormDateButton({ bookId, userId, onCancel }) {
 const [date, setDate] = useState(""); // Gérer la date sélectionnée

 // Fonction pour gérer la sélection de la date
 const handleDateChange = (event) => {
  setDate(event.target.value);
 };

 // Fonction pour gérer l'annulation de la réservation
 const handleCancel = () => {
  setDate(""); // Réinitialise la date
  if (onCancel) {
   onCancel(); // Appelle la fonction onCancel
  }
 };

 return (
  <div className="bg-white p-6 rounded shadow-lg max-w-sm w-55">
   <h2 className="text-xl font-bold mb-4">date retour</h2>
   <input
    type="date"
    value={date}
    onChange={handleDateChange}
    className="mb-4 p-2 border border-gray-300 rounded w-full"
   />
   <div className="flex justify-end space-x-2">
    <button
     onClick={handleCancel}
     className="bg-red-500 hover:scale-105 text-white mt-2 py-2 px-4 rounded hover:bg-orange-600 w-1/2"
    >
     Annuler
    </button>

    {/* Afficher le bouton de réservation directement */}
    {date && (
     <ReserveButton
      bookId={bookId}
      userId={userId}
      date={date} // Passer la date sélectionnée à ReserveButton
     />
    )}
   </div>
  </div>
 );
}
