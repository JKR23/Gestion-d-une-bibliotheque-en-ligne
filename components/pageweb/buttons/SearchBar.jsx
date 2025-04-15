"use client";

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
 const [searchText, setSearchText] = useState("");
 const [searchType, setSearchType] = useState("title");

 const handleSearch = () => {
  onSearch(searchText, searchType);
 };

 return (
  <div className="search-bar flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6 w-full">
   <input
    type="text"
    className="p-2 border border-gray-800 rounded w-full sm:w-auto flex-1"
    placeholder="Mot-clé"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
   />
   <select
    value={searchType}
    onChange={(e) => setSearchType(e.target.value)}
    className="p-2 border border-gray-800 rounded w-full sm:w-auto"
   >
    <option value="title">Titre</option>
    <option value="author">Auteur</option>
    <option value="genre">Genre</option>
   </select>
   <button
    onClick={handleSearch}
    className="bg-reservationButtonBg text-white py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-105 hover:bg-survolButtonBg w-full sm:w-auto"
   >
    Rechercher
   </button>
  </div>
 );
}
