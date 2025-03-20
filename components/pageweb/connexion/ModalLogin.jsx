"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ModalLogin({ isOpen, closeModal }) {
 const router = useRouter();
 const [formData, setFormData] = useState({
  email: "",
  password: "",
 });
 const [errorMessage, setErrorMessage] = useState(null);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
   ...prevData,
   [name]: value,
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const { email, password } = formData;

  try {
   console.log("Envoi des informations de connexion...");
   const response = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
   });

   if (response.ok) {
    console.log("Connexion réussie, mise à jour du localStorage...");
    const data = await response.json();

    if (data.userId && data.role) {
     localStorage.setItem("isLoggedIn", "true");
     localStorage.setItem("userId", data.userId);
     localStorage.setItem("userRole", data.role);
     console.log("Connexion réussie, iduser : " + data.userId);
     closeModal();
     router.push("/accueil");
    } else {
     console.log("Erreur : ID utilisateur ou rôle manquant.");
    }
   } else {
    const errorData = await response.json();
    console.error("Erreur de connexion :", errorData.error);
    setErrorMessage(errorData.error); // Afficher le message d'erreur du backend
   }
  } catch (error) {
   console.error("Erreur lors de la connexion :", error);
   setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
  }
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
   <div className="flex w-full max-w-md rounded-lg overflow-hidden shadow-lg">
    <div className="w-1/2 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
     <h2 className="text-2xl font-bold text-white">Connexion</h2>
    </div>
    <div className="w-1/2 bg-white p-6">
     <form onSubmit={handleSubmit}>
      <div className="mb-4">
       <label htmlFor="email" className="block text-sm font-medium">
        Email
       </label>
       <input
        type="email"
        id="email"
        name="email"
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
       />
      </div>
      <div className="mb-6">
       <label htmlFor="password" className="block text-sm font-medium">
        Mot de passe
       </label>
       <input
        type="password"
        id="password"
        name="password"
        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
        placeholder="Votre mot de passe"
        value={formData.password}
        onChange={handleChange}
       />
      </div>
      {errorMessage && (
       <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
      )}
      <button
       type="submit"
       className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
       Se connecter
      </button>
     </form>
     <button
      onClick={closeModal}
      className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
     >
      Fermer
     </button>
    </div>
   </div>
  </div>
 );
}
