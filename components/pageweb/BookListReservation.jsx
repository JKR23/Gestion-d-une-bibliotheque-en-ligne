import React from "react";
import CancelReservationButton from "@/components/pageweb/buttons/CancelReservationButton.jsx";

export default function BookListReservation({ reservations }) {
 if (!reservations || reservations.length === 0) {
  return <p>Aucune réservation trouvée.</p>;
 }

 return (
  <div className="book-list">
   {reservations.map((reservation) => (
    <div
     key={reservation.id}
     className="book-card border p-4 mb-4 rounded shadow-md"
    >
     <h2 className="text-xl font-bold">{reservation.book.title}</h2>{" "}
     {/* Utilisation de reservation.book.title */}
     <p>
      <strong>Auteur:</strong> {reservation.book.author}{" "}
      {/* Utilisation de reservation.book.author */}
     </p>
     <p>
      <strong>Description:</strong>{" "}
      {reservation.book.description || "Pas de description disponible"}{" "}
      {/* Utilisation de reservation.book.description */}
     </p>
     <p>
      <strong>Genre:</strong> {reservation.book.genre || "Genre non spécifié"}{" "}
      {/* Utilisation de reservation.book.genre */}
     </p>
     <CancelReservationButton
      reservationId={reservation.id}
      userId={reservation.userId}
     />{" "}
     {/* Passer l'ID de la réservation et de l'utilisateur */}
    </div>
   ))}
  </div>
 );
}
