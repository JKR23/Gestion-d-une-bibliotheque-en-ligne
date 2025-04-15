"use client";
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

const AddUserForm = ({ onBack, onRefresh }) => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [role, setRole] = useState("etudiant");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   await axios.post(`${API_URL}/users`, { name, email, role });
   onRefresh();
   onBack();
  } catch (error) {
   console.error("Erreur lors de l’ajout de l’utilisateur:", error);
  }
 };

 return (
  <div className="p-4 w-full max-w-xl mx-auto">
   <h2 className="text-xl font-semibold mb-4">Ajouter un Utilisateur</h2>
   <form onSubmit={handleSubmit} className="space-y-4">
    <input
     type="text"
     placeholder="Nom"
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="w-full p-2 border rounded"
    />
    <input
     type="email"
     placeholder="Email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="w-full p-2 border rounded"
    />
    <select
     value={role}
     onChange={(e) => setRole(e.target.value)}
     className="w-full p-2 border rounded"
    >
     <option value="etudiant">Étudiant</option>
     <option value="admin">Administrateur</option>
    </select>
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

export default AddUserForm;
