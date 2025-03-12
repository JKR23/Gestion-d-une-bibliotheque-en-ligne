"use client";

import React, { useState } from "react";
import FormDateButton from "@/components/pageweb/buttons/FormDate.jsx"; // Importation du FormDateButton

export default function ButtonDisplayFormDate({ bookId, userId }) {
 const [showForm, setShowForm] = useState(false); // State pour afficher/cacher le formulaire

 // Fonction qui gère l'annulation du formulaire
 const handleReserveCancel = () => {
  setShowForm(false); // Masque le formulaire si l'utilisateur annule
 };

 return (
  <div>
   <button
    onClick={() => setShowForm(true)}
    className="bg-reservationButtonBg text-white py-2 px-4 rounded transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-survolButtonBg"
   >
    Réserver
   </button>

   {/* Affichage du formulaire sous forme de modal (popup) */}
   {showForm && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <FormDateButton
      bookId={bookId}
      userId={userId}
      onCancel={handleReserveCancel}
     />
    </div>
   )}
  </div>
 );
}
