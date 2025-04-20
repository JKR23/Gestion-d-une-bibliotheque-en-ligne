"use client";
import React, { useState } from "react";
import axios from "axios";

const AddUserForm = ({ onBack, onRefresh }) => {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");
 const [role, setRole] = useState("USER");

 const [street, setStreet] = useState("");
 const [city, setCity] = useState("");
 const [state, setState] = useState("");
 const [postalCode, setPostalCode] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const newUser = {
    firstName,
    lastName,
    password,
    email,
    role,
    address: {
     street,
     city,
     state,
     postalCode,
    },
   };

   await axios.post("/api/users/register", newUser);
   onRefresh();
   onBack();
  } catch (error) {
   console.error("Erreur lors de l’ajout de l’utilisateur:", error);
  }
 };

 return (
  <div className="p-6 w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-gray-200">
   <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
    Ajouter un Utilisateur
   </h2>
   <form onSubmit={handleSubmit} className="space-y-6">
    {/* Infos utilisateur */}
    <div className="grid md:grid-cols-2 gap-4">
     {/* Prénom */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Prénom
      </label>
      <input
       type="text"
       value={firstName}
       onChange={(e) => setFirstName(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Nom */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Nom
      </label>
      <input
       type="text"
       value={lastName}
       onChange={(e) => setLastName(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Mot de passe */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Mot de passe
      </label>
      <input
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Email */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Email
      </label>
      <input
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       required
      />
     </div>

     {/* Rôle */}
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
       Rôle
      </label>
      <select
       value={role}
       onChange={(e) => setRole(e.target.value)}
       className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
       <option value="USER">Utilisateur</option>
       <option value="ADMIN">Administrateur</option>
      </select>
     </div>
    </div>

    {/* Adresse */}
    <div>
     <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-6">Adresse</h3>
     <div className="grid md:grid-cols-2 gap-4">
      <div>
       <label className="block text-sm font-medium text-gray-700 mb-1">
        Rue
       </label>
       <input
        type="text"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       />
      </div>

      <div>
       <label className="block text-sm font-medium text-gray-700 mb-1">
        Ville
       </label>
       <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       />
      </div>

      <div>
       <label className="block text-sm font-medium text-gray-700 mb-1">
        Région
       </label>
       <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       />
      </div>

      <div>
       <label className="block text-sm font-medium text-gray-700 mb-1">
        Code Postal
       </label>
       <input
        type="text"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
       />
      </div>
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

export default AddUserForm;
