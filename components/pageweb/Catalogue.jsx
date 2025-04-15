"use client";

import React, { useEffect, useState } from "react";
import BookList from "@/components/pageweb/BookList.jsx";
import SearchBar from "@/components/pageweb/buttons/SearchBar.jsx";

export default function Catalogue() {
 const [books, setBooks] = useState([]);
 const [filteredBooks, setFilteredBooks] = useState([]);

 const fetchBooks = async () => {
  try {
   const response = await fetch("http://localhost:5000/api/books");
   const data = await response.json();
   setBooks(data);
   setFilteredBooks(data);
  } catch (error) {
   console.error("Erreur lors de la récupération des livres:", error);
  }
 };

 const handleSearch = (searchText, searchType) => {
  const filtered = books.filter((book) =>
   book[searchType].toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredBooks(filtered);
 };

 useEffect(() => {
  fetchBooks();
 }, []);

 return (
  <div className="p-4">
   <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
    <h1 className="text-2xl md:text-3xl font-bold">Catalogue</h1>
    <SearchBar onSearch={handleSearch} />
   </div>
   <BookList books={filteredBooks} />
  </div>
 );
}
