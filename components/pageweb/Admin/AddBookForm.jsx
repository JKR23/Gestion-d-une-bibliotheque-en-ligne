"use client";
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

const AddBookForm = ({ onBack, onRefresh }) => {
 const [title, setTitle] = useState("");
 const [author, setAuthor] = useState("");
 const [quantity, setQuantity] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   await axios.post(`${API_URL}/books`, { title, author, quantity });
   onRefresh(); // Recharge les livres
   onBack(); // Revenir à la liste
  } catch (error) {
   console.error("Erreur lors de l’ajout du livre:", error);
  }
 };

 return (
  <div className="p-4 w-full max-w-xl mx-auto">
   <h2 className="text-xl font-semibold mb-4">Ajouter un Livre</h2>
   <form onSubmit={handleSubmit} className="space-y-4">
    <input
     type="text"
     placeholder="Titre du livre"
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     className="w-full p-2 border rounded"
    />
    <input
     type="text"
     placeholder="Auteur"
     value={author}
     onChange={(e) => setAuthor(e.target.value)}
     className="w-full p-2 border rounded"
    />
    <input
     type="number"
     placeholder="Quantité"
     value={quantity}
     onChange={(e) => setQuantity(e.target.value)}
     className="w-full p-2 border rounded"
    />
    <div className="flex justify-between">
     <button
      type="submit"
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
     >
      Ajouter
     </button>
     <button
      className="px-4 py-2 border rounded hover:bg-gray-100 transition"
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
