"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ModalLogin({ isOpen, closeModal }) {
 const router = useRouter();
 const [formData, setFormData] = useState({ email: "", password: "" });
 const [errorMessage, setErrorMessage] = useState(null);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const res = await fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
   });

   const data = await res.json();

   if (res.ok) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("userRole", data.role);
    closeModal();
    router.push("/accueil");
   } else {
    setErrorMessage(data.error);
   }
  } catch (err) {
   setErrorMessage("Erreur réseau.");
  }
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
   <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center py-8 px-4 md:w-1/2 w-full">
     <h2 className="text-2xl font-bold text-center">Connexion</h2>
    </div>
    <div className="w-full md:w-1/2 p-6 sm:p-8">
     <form onSubmit={handleSubmit} className="space-y-4">
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
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      <button
       type="submit"
       className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
      >
       Se connecter
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
