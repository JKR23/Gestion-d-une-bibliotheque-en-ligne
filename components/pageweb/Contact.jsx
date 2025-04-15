"use client";

import React, { useState } from "react";

export default function Contact() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Formulaire soumis:", formData);
 };

 return (
  <div className="min-h-screen flex items-center justify-center p-4">
   <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-lg overflow-hidden shadow-lg">
    {/* Partie gauche - Titre */}
    <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-8">
     <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
      Contactez-nous
     </h2>
    </div>

    {/* Partie droite - Formulaire */}
    <div className="w-full md:w-1/2 bg-white p-6 sm:p-8">
     <form onSubmit={handleSubmit}>
      {/* Nom */}
      <div className="mb-4">
       <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
       >
        Nom
       </label>
       <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
       />
      </div>

      {/* Email */}
      <div className="mb-4">
       <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
       >
        Email
       </label>
       <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
       />
      </div>

      {/* Sujet */}
      <div className="mb-4">
       <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="subject"
       >
        Sujet
       </label>
       <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        required
       />
      </div>

      {/* Message */}
      <div className="mb-4">
       <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="message"
       >
        Message
       </label>
       <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline h-24 resize-none"
        required
       ></textarea>
      </div>

      {/* Bouton */}
      <div className="flex items-center justify-center">
       <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
       >
        Envoyer
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}
