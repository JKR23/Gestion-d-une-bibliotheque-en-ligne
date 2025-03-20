"use client";

import { useState } from "react";

export default function Section2() {
 const [searchQuery, setSearchQuery] = useState("");

 const handleSearch = (e) => {
  e.preventDefault();
  // Logique de recherche ici
  console.log("Recherche :", searchQuery);
 };

 const recommendedBooks = [
  { title: "1984", author: "George Orwell", cover: "/images/orwell.jpg" },
  {
   title: "To Kill a Mockingbird",
   author: "Harper Lee",
   cover: "/images/lee.jpg",
  },
  {
   title: "The Great Gatsby",
   author: "F. Scott Fitzgerald",
   cover: "/images/great.jpg",
  },
 ];

 const categories = ["Romans", "Science-Fiction", "Histoire", "Biographies"];

 return (
  <div className="w-full h-full p-8 bg-gray-100 flex flex-col">
   <h2 className="text-3xl font-semibold mb-4">Découvrez nos Livres</h2>

   {/* Barre de Recherche */}
   <form onSubmit={handleSearch} className="mb-6 flex items-center">
    <input
     type="text"
     placeholder="Rechercher un livre..."
     value={searchQuery}
     onChange={(e) => setSearchQuery(e.target.value)}
     className="w-full p-2 border rounded-md mr-2"
    />
    <button
     type="submit"
     className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
    >
     Rechercher
    </button>
   </form>

   {/* Livres Recommandés */}
   <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Livres Recommandés</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     {recommendedBooks.map((book, index) => (
      <div key={index} className="bg-white p-4 rounded-md shadow-md">
       <img
        src={book.cover}
        alt={book.title}
        className="w-full h-48 object-cover rounded-md mb-2"
       />
       <h4 className="text-xl font-semibold">{book.title}</h4>
       <p className="text-gray-600">{book.author}</p>
      </div>
     ))}
    </div>
   </div>

   {/* Catégories */}
   <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Catégories</h3>
    <div className="flex flex-wrap gap-2">
     {categories.map((category, index) => (
      <span
       key={index}
       className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full cursor-pointer"
      >
       {category}
      </span>
     ))}
    </div>
   </div>

   {/* Appel à l'Action */}
   <div className="text-center">
    <button className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700">
     Explorer la Bibliothèque
    </button>
   </div>
  </div>
 );
}
