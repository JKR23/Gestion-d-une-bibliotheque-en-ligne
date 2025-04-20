"use client";
import React, { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";
import AddUserForm from "./AddUserForm";
import axios from "axios";

const CardComponent = ({ title, onClick }) => (
 <div
  onClick={onClick}
  className="cursor-pointer bg-teal-600 text-white border rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
 >
  <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
  <p className="text-sm sm:text-base">Cliquer ici pour accéder.</p>
 </div>
);

const AdminDashboard = () => {
 const [activeSection, setActiveSection] = useState(null);
 const [books, setBooks] = useState([]);
 const [users, setUsers] = useState([]);

 // Récupération des livres et utilisateurs
 const fetchBooks = async () => {
  try {
   const response = await axios.get("/api/books");
   setBooks(response.data);
  } catch (error) {
   console.error("Erreur de chargement des livres:", error);
  }
 };

 const fetchUsers = async () => {
  try {
   const response = await axios.get("/api/users");
   setUsers(response.data);
  } catch (error) {
   console.error("Erreur de chargement des utilisateurs:", error);
  }
 };

 const deleteBook = async (id) => {
  try {
   await axios.delete(`/api/books/id/${id}`);
   fetchBooks();
  } catch (error) {
   console.error("Erreur lors de la suppression du livre:", error);
  }
 };

 const deleteUser = async (id) => {
  try {
   await axios.delete(`/api/users/id/${id}`);
   fetchUsers();
  } catch (error) {
   console.error("Erreur lors de la suppression de l’utilisateur:", error);
  }
 };

 useEffect(() => {
  fetchBooks();
  fetchUsers();
 }, []);

 const handleSectionClick = (section) => setActiveSection(section);
 const handleBack = () => setActiveSection(null);

 // Affichage du bon formulaire
 if (activeSection === "addBook") {
  return <AddBookForm onBack={handleBack} onRefresh={fetchBooks} />;
 }

 if (activeSection === "addUser") {
  return <AddUserForm onBack={handleBack} onRefresh={fetchUsers} />;
 }

 return (
  <div className="p-4 max-w-7xl mx-auto">
   {/* Cartes */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
    <CardComponent
     title="Ajouter un Livre"
     onClick={() => handleSectionClick("addBook")}
    />
    <CardComponent
     title="Ajouter un Utilisateur"
     onClick={() => handleSectionClick("addUser")}
    />
   </div>

   {/* Livres */}
   <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
    Gestion des Livres
   </h2>
   <div className="overflow-x-auto mb-8">
    <table className="min-w-full table-auto border text-sm sm:text-base">
     <thead className="bg-gray-100">
      <tr>
       <th className="border px-4 py-2">Titre</th>
       <th className="border px-4 py-2">Auteur</th>
       <th className="border px-4 py-2">Quantité</th>
       <th className="border px-4 py-2">Actions</th>
      </tr>
     </thead>
     <tbody>
      {books.map((book) => (
       <tr key={book.id}>
        <td className="border px-4 py-2">{book.title}</td>
        <td className="border px-4 py-2">{book.author}</td>
        <td className="border px-4 py-2">{book.stock}</td>
        <td className="border px-4 py-2 space-x-2 flex flex-wrap">
         <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => {}}
         >
          Modifier
         </button>
         <button
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={() => deleteBook(book.id)}
         >
          Supprimer
         </button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   {/* Utilisateurs */}
   <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
    Gestion des Utilisateurs
   </h2>
   <div className="overflow-x-auto">
    <table className="min-w-full table-auto border text-sm sm:text-base">
     <thead className="bg-gray-100">
      <tr>
       <th className="border px-4 py-2">Nom</th>
       <th className="border px-4 py-2">Email</th>
       <th className="border px-4 py-2">Rôle</th>
       <th className="border px-4 py-2">Actions</th>
      </tr>
     </thead>
     <tbody>
      {users.map((user) => (
       <tr key={user.id}>
        <td className="border px-4 py-2">
         {user.firstName} {user.lastName}
        </td>
        <td className="border px-4 py-2">{user.email}</td>
        <td className="border px-4 py-2">{user.role}</td>
        <td className="border px-4 py-2 space-x-2 flex flex-wrap">
         <button
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => {}}
         >
          Modifier
         </button>
         <button
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={() => deleteUser(user.id)}
         >
          Supprimer
         </button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default AdminDashboard;
