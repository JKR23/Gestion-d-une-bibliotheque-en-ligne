"use client";
import React, { useState } from "react";
import axios from "axios";

const AddBookForm = ({ onBack, onRefresh }) => {
 const [title, setTitle] = useState("");
 const [author, setAuthor] = useState("");
 const [description, setDescription] = useState("");
 const [stock, setStock] = useState("");
 const [genre, setGenre] = useState("");
 const [isAvailable, setIsAvailable] = useState(true);

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   await axios.post("/api/books", {
    title,
    author,
    description,
    stock: parseInt(stock),
    genre,
    isAvailable,
   });
   onRefresh();
   onBack();
  } catch (error) {
   console.error("Erreur lors de l’ajout du livre:", error);
  }
 };

 return (
  <div className="p-6 w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-gray-200">
   <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
    Ajouter un Livre
   </h2>
   <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid md:grid-cols-2 gap-4">
     {/* Titre */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Titre du livre
      </label>
      <input
       type="text"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Auteur */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Auteur
      </label>
      <input
       type="text"
       value={author}
       onChange={(e) => setAuthor(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Description */}
     <div className="md:col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Description
      </label>
      <textarea
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       rows={3}
      ></textarea>
     </div>

     {/* Stock */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Stock
      </label>
      <input
       type="number"
       value={stock}
       onChange={(e) => setStock(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Genre */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Genre
      </label>
      <input
       type="text"
       value={genre}
       onChange={(e) => setGenre(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Disponible */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Disponible ?
      </label>
      <select
       value={isAvailable.toString()}
       onChange={(e) => setIsAvailable(e.target.value === "true")}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
       <option value="true">Oui</option>
       <option value="false">Non</option>
      </select>
     </div>
    </div>

    {/* Boutons */}
    <div className="flex justify-between pt-6">
     <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
     >
      Ajouter
     </button>
     <button
      type="button"
      className="border border-gray-300 px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-700 transition"
      onClick={onBack}
     >
      Retour
     </button>
    </div>
   </form>
  </div>
 );
};

export default AddBookForm;
