import React from "react";
import ButtonDisplayFormDate from "@/components/pageweb/buttons/ButtonDisplayFormDate.jsx";

export default function BookList({ books }) {
 if (!books || books.length === 0) {
  return <p>Aucun livre disponible.</p>;
 }

 return (
  <div className="book-list">
   {books.map((book) => (
    <div key={book.id} className="book-card border p-4 mb-4 rounded shadow-md">
     <h2 className="text-xl font-bold">{book.title}</h2>
     <p>
      <strong>Auteur:</strong> {book.author}
     </p>
     <p>
      <strong>Description:</strong>{" "}
      {book.description || "Pas de description disponible"}
     </p>
     <p>
      <strong>Genre:</strong> {book.genre || "Genre non spécifié"}
     </p>
     <p>
      <strong>Disponible:</strong> {book.isAvailable ? "Oui" : "Non"}
     </p>
     <ButtonDisplayFormDate bookId={book.id} userId={1} />{" "}
     {/* Passer l'ID du livre et de l'utilisateur */}
    </div>
   ))}
  </div>
 );
}
