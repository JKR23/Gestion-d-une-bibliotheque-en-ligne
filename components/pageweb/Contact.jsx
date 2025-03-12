//components/pageweb/Accueil/Contact.jsx

"use client";

import { useState } from "react";

export default function Contact() {
 // États pour les champs du formulaire
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  // Ici vous pouvez envoyer les données, par exemple, à une API ou faire autre chose.
  console.log("Form Submitted", { name, email, subject, message });
 };

 return (
  <div className="flex justify-center items-center mt-0 min-h-screen">
   <div className="flex w-full max-w-4xl">
    {/* Partie gauche avec l'image */}
    <div className="w-1/2">
     <img
      src="/images/contactus.webp"
      alt="Image de technologie"
      className="w-full h-full object-cover rounded-lg"
     />
    </div>

    {/* Partie droite avec le formulaire */}
    <div className="w-1/2 flex justify-center items-center">
     <form
      className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
      onSubmit={handleSubmit} // Ajout de la gestion de la soumission
     >
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
       Contactez-nous
      </h2>

      <label className="flex flex-col mb-4">
       <span className="text-base text-gray-700">Nom:</span>
       <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Mise à jour de l'état
        className="border-2 border-gray-300 rounded-lg p-2 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
       />
      </label>

      <label className="flex flex-col mb-4">
       <span className="text-base text-gray-700">Email:</span>
       <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état
        className="border-2 border-gray-300 rounded-lg p-2 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
       />
      </label>

      <label className="flex flex-col mb-4">
       <span className="text-base text-gray-700">Objet:</span>
       <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)} // Mise à jour de l'état
        className="border-2 border-gray-300 rounded-lg p-2 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
       />
      </label>

      <label className="flex flex-col mb-6">
       <span className="text-base text-gray-700">Message:</span>
       <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Mise à jour de l'état
        className="border-2 border-gray-300 rounded-lg p-2 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-105"
        rows={4}
       />
      </label>

      <div className="flex justify-between">
       <input
        type="submit"
        value="Envoyer"
        className="bg-blue-600 text-white rounded-lg p-2 text-sm cursor-pointer hover:bg-blue-700 transform transition-all duration-200 hover:scale-105"
       />
       <input
        type="button"
        value="Annuler"
        onClick={() => {
         // Vous pouvez ici effacer les champs si nécessaire
         setName("");
         setEmail("");
         setSubject("");
         setMessage("");
        }}
        className="bg-blue-600 text-white rounded-lg p-2 text-sm cursor-pointer hover:bg-blue-700 transform transition-all duration-200 hover:scale-105"
       />
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}
