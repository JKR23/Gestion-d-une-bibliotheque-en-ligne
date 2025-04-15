"use client";

import React, { useState } from "react";
import FormDateButton from "@/components/pageweb/buttons/FormDate.jsx";

export default function ButtonDisplayFormDate({ bookId, userId }) {
 const [showForm, setShowForm] = useState(false);

 return (
  <div>
   <button
    onClick={() => setShowForm(true)}
    className="bg-reservationButtonBg text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-survolButtonBg w-full sm:w-auto"
   >
    Réserver
   </button>

   {showForm && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
     <FormDateButton
      bookId={bookId}
      userId={userId}
      onCancel={() => setShowForm(false)}
     />
    </div>
   )}
  </div>
 );
}
