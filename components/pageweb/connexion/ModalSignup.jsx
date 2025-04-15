"use client";

import { useState } from "react";

export default function ModalSignup({ isOpen, closeModal }) {
 if (!isOpen) return null;

 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: {
   street: "",
   city: "",
   state: "",
   postalCode: "",
  },
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  if (name in formData.address) {
   setFormData((prev) => ({
    ...prev,
    address: {
     ...prev.address,
     [name]: value,
    },
   }));
  } else {
   setFormData((prev) => ({
    ...prev,
    [name]: value,
   }));
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const userData = {
   ...formData,
   role: "USER",
  };

  try {
   const response = await fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
   });

   if (response.ok) {
    console.log("Utilisateur enregistré !");
    closeModal();
   } else {
    const errorData = await response.json();
    console.error("Erreur :", errorData.message);
   }
  } catch (err) {
   console.error("Erreur API :", err);
  }
 };

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
   <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center py-8 px-4 md:w-1/2 w-full">
     <h2 className="text-2xl font-bold text-center">Inscription</h2>
    </div>
    <div className="w-full md:w-1/2 p-6 sm:p-8">
     <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
     >
      <input
       type="text"
       name="firstName"
       placeholder="Prénom"
       value={formData.firstName}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="text"
       name="lastName"
       placeholder="Nom"
       value={formData.lastName}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="email"
       name="email"
       placeholder="Email"
       value={formData.email}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="password"
       name="password"
       placeholder="Mot de passe"
       value={formData.password}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="text"
       name="street"
       placeholder="Rue"
       value={formData.address.street}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="text"
       name="city"
       placeholder="Ville"
       value={formData.address.city}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="text"
       name="state"
       placeholder="Province"
       value={formData.address.state}
       onChange={handleChange}
       required
       className="input"
      />
      <input
       type="text"
       name="postalCode"
       placeholder="Code postal"
       value={formData.address.postalCode}
       onChange={handleChange}
       required
       className="input"
      />
      <button
       type="submit"
       className="col-span-1 sm:col-span-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
      >
       S'inscrire
      </button>
     </form>
     <button
      onClick={closeModal}
      className="w-full mt-4 bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
     >
      Fermer
     </button>
    </div>
   </div>
  </div>
 );
}

// Classe utilitaire pour les inputs
const inputClass =
 "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400";
