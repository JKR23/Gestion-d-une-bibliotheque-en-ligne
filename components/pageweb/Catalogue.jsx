"use client";

import React, { useEffect, useState } from "react";
import BookList from "@/components/pageweb/BookList.jsx";
import SearchBar from "@/components/pageweb/buttons/SearchBar.jsx"; // Importation du composant de recherche

export default function Catalogue() {
 const [books, setBooks] = useState([]);
 const [filteredBooks, setFilteredBooks] = useState([]); // État pour les livres filtrés

 const fetchBooks = async () => {
  try {
   const response = await fetch("http://localhost:5000/api/books");
   const data = await response.json();
   setBooks(data);
   setFilteredBooks(data); // Initialisation des livres filtrés avec tous les livres
  } catch (error) {
   console.error("Erreur lors de la récupération des livres:", error);
  }
 };

 // Fonction de recherche qui filtre les livres en fonction du critère et du texte de recherche
 const handleSearch = (searchText, searchType) => {
  const filtered = books.filter(
   (book) => book[searchType].toLowerCase().includes(searchText.toLowerCase()) // Filtrage insensible à la casse
  );
  setFilteredBooks(filtered); // Mise à jour des livres filtrés
 };

 useEffect(() => {
  fetchBooks();
 }, []);

 return (
  <div>
   {/* Conteneur avec flex pour aligner horizontalement le titre et la barre de recherche */}
   <div className="flex items-center justify-between mb-6">
    <h1 className="text-3xl">Catalogue</h1>
    <div className="mt-6">
     <SearchBar onSearch={handleSearch} /> {/* Zone de recherche */}
    </div>
   </div>
   <BookList books={filteredBooks} /> {/* Affichage des livres filtrés */}
  </div>
 );
}
