import React from "react";
import ButtonDisplayFormDate from "@/components/pageweb/buttons/ButtonDisplayFormDate.jsx";

export default function BookList({ books }) {
 if (!books || books.length === 0) {
  return <p>Aucun livre disponible.</p>;
 }

 return (
  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   {books.map((book) => (
    <div key={book.id} className="border p-4 rounded shadow-md bg-white">
     <h2 className="text-xl font-bold mb-2">{book.title}</h2>
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
     <div className="mt-4">
      <ButtonDisplayFormDate bookId={book.id} userId={1} />
     </div>
    </div>
   ))}
  </div>
 );
}
