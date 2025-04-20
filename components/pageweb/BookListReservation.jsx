import React from "react";
import CancelReservationButton from "@/components/pageweb/buttons/CancelReservationButton.jsx";

export default function BookListReservation({ reservations }) {
 if (!reservations || reservations.length === 0) {
  return <p>Aucune réservation trouvée.</p>;
 }

 return (
  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {reservations.map((reservation) => (
    <div
     key={reservation.id}
     className="border p-4 rounded shadow-md bg-white text-txtClr"
    >
     <h2 className="text-xl font-bold mb-2">{reservation.book.title}</h2>
     <p>
      <strong>Auteur:</strong> {reservation.book.author}
     </p>
     <p>
      <strong>Description:</strong>{" "}
      {reservation.book.description || "Pas de description disponible"}
     </p>
     <p>
      <strong>Genre:</strong> {reservation.book.genre || "Genre non spécifié"}
     </p>
     <div className="mt-4">
      <CancelReservationButton
       reservationId={reservation.id}
       userId={reservation.userId}
      />
     </div>
    </div>
   ))}
  </div>
 );
}
