// components/pageweb/buttons/SearchBar.jsx
"use client";

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
 const [searchText, setSearchText] = useState("");
 const [searchType, setSearchType] = useState("title"); // Par défaut, la recherche est par titre

 const handleSearch = () => {
  // Appel de la fonction de recherche avec le texte et le type de recherche
  onSearch(searchText, searchType);
 };

 return (
  <div className="search-bar flex items-center gap-4 mb-6">
   <input
    type="text"
    className="p-2 border border-gray-800 rounded cursor-pointer" // Ajout de la bordure sombre ici
    placeholder="Mot-clé"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)} // Mise à jour de l'état du texte
   />
   <select
    value={searchType}
    onChange={(e) => setSearchType(e.target.value)} // Mise à jour du critère de recherche
    className="p-2 border border-gray-800 rounded cursor-pointer" // Bordure sombre également pour le select
   >
    <option value="title">Titre</option>
    <option value="author">Auteur</option>
    <option value="genre">Genre</option>
   </select>
   <button
    onClick={handleSearch}
    className="bg-reservationButtonBg text-white py-2 px-4 rounded transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-survolButtonBg"
   >
    Rechercher
   </button>
  </div>
 );
}
