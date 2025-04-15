"use client";

import React, { useState } from "react";
import ReserveButton from "@/components/pageweb/buttons/ReserveButton.jsx";

export default function FormDateButton({ bookId, userId, onCancel }) {
 const [date, setDate] = useState("");

 return (
  <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
   <h2 className="text-xl font-bold mb-4">Date retour</h2>
   <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded w-full"
   />
   <div className="flex flex-col sm:flex-row justify-end gap-2">
    <button
     onClick={() => {
      setDate("");
      onCancel?.();
     }}
     className="bg-red-500 text-white py-2 px-4 rounded hover:scale-105 hover:bg-orange-600 w-full sm:w-1/2 transition"
    >
     Annuler
    </button>
    {date && <ReserveButton bookId={bookId} userId={userId} date={date} />}
   </div>
  </div>
 );
}
