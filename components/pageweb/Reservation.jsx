"use client";

import React, { useEffect, useState } from "react";
import BookListReservation from "@/components/pageweb/BookListReservation.jsx";
import SearchBar from "@/components/pageweb/buttons/SearchBar.jsx";

export default function Reservation() {
 const [filteredReservations, setFilteredReservations] = useState([]);
 const [reservations, setReservations] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 const fetchReservations = async () => {
  try {
   const userId = localStorage.getItem("userId");
   if (!userId) {
    console.error("Aucun utilisateur connecté !");
    return;
   }

   const response = await fetch(
    `http://localhost:5000/api/reservations/id/${userId}`
   );
   const data = await response.json();

   if (data.error) {
    setReservations([]);
    setFilteredReservations([]);
   } else {
    setReservations(data);
    setFilteredReservations(data);
   }
  } catch (error) {
   console.error("Erreur lors de la récupération des réservations:", error);
  } finally {
   setIsLoading(false);
  }
 };

 const handleSearch = (searchText, searchType) => {
  const filtered = reservations.filter((reservation) =>
   reservation.bookId[searchType]
    .toLowerCase()
    .includes(searchText.toLowerCase())
  );
  setFilteredReservations(filtered);
 };

 useEffect(() => {
  fetchReservations();
 }, []);

 if (isLoading) return <div className="p-4">Chargement...</div>;

 return (
  <div className="p-4">
   <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
    <h1 className="text-2xl md:text-3xl font-bold">Réservations</h1>
    <SearchBar onSearch={handleSearch} />
   </div>

   {filteredReservations.length === 0 ? (
    <p>Aucune réservation trouvée.</p>
   ) : (
    <BookListReservation reservations={filteredReservations} />
   )}
  </div>
 );
}
