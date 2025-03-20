"use client";

import { useState } from "react";

export default function ModalSignup({ isOpen, closeModal }) {
 if (!isOpen) return null;

 // État pour gérer les champs du formulaire
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
   setFormData((prevData) => ({
    ...prevData,
    address: {
     ...prevData.address,
     [name]: value,
    },
   }));
  } else {
   setFormData((prevData) => ({
    ...prevData,
    [name]: value,
   }));
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Configuration des données à envoyer au backend
  const userData = {
   firstName: formData.firstName,
   lastName: formData.lastName,
   email: formData.email,
   password: formData.password,
   role: "USER",
   address: {
    street: formData.address.street,
    city: formData.address.city,
    state: formData.address.state,
    postalCode: formData.address.postalCode,
   },
  };

  try {
   // Appel à l'API backend pour enregistrer l'utilisateur
   const response = await fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
   });

   if (response.ok) {
    console.log("Utilisateur enregistré avec succès !");
    closeModal();
   } else {
    const errorData = await response.json();
    console.error("Erreur d'inscription :", errorData.message);
   }
  } catch (error) {
   console.error("Erreur lors de l'appel à l'API :", error);
  }
 };

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
   <div className="flex w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
    <div className="w-1/2 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
     <h2 className="text-2xl font-bold text-white">Inscription</h2>
    </div>
    <div className="w-1/2 bg-white p-12">
     <form onSubmit={handleSubmit} className="flex flex-wrap -mx-1">
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="firstName" className="block text-sm font-medium">
        Prénom
       </label>
       <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre prénom"
        required
       />
      </div>
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="lastName" className="block text-sm font-medium">
        Nom de famille
       </label>
       <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre nom"
        required
       />
      </div>
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="email" className="block text-sm font-medium">
        Email
       </label>
       <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre email"
        required
       />
      </div>
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="password" className="block text-sm font-medium">
        Mot de passe
       </label>
       <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre mot de passe"
        required
       />
      </div>
      <h3 className="w-full text-sm font-medium mb-4">Adresse</h3>
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="street" className="block text-sm font-medium">
        Rue
       </label>
       <input
        type="text"
        id="street"
        name="street"
        value={formData.address.street}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre rue"
        required
       />
      </div>
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="city" className="block text-sm font-medium">
        Ville
       </label>
       <input
        type="text"
        id="city"
        name="city"
        value={formData.address.city}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre ville"
        required
       />
      </div>
      <div className="w-full md:w-1/2 px-1 mb-4">
       <label htmlFor="state" className="block text-sm font-medium">
        Province
       </label>
       <input
        type="text"
        id="state"
        name="state"
        value={formData.address.state}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre province"
        required
       />
      </div>
      <div className="w-full md:w-1/2 px-1 mb-6">
       <label htmlFor="postalCode" className="block text-sm font-medium">
        Code postal
       </label>
       <input
        type="text"
        id="postalCode"
        name="postalCode"
        value={formData.address.postalCode}
        onChange={handleChange}
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre code postal"
        required
       />
      </div>
      <div className="w-full">
       <button
        type="submit"
        className="w-full bg-blue-600 text-white py-5 rounded-md hover:bg-blue-700"
       >
        S'inscrire
       </button>
      </div>
     </form>
     <button
      onClick={closeModal}
      className="w-full mt-4 bg-red-600 text-white py-5 rounded-md hover:bg-red-700"
     >
      Fermer
     </button>
    </div>
   </div>
  </div>
 );
}
