"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddUserForm() {
 const { register, handleSubmit, reset } = useForm();

 // Soumission du formulaire
 const onSubmit = async (data) => {
  try {
   const response = await fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    credentials: "include",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
   });

   if (response.ok) {
    alert("Utilisateur ajouté avec succès !");
    reset(); // Réinitialiser le formulaire
   } else {
    alert("Erreur lors de l’ajout de l’utilisateur.");
   }
  } catch (error) {
   console.error("Erreur lors de l'ajout de l'utilisateur :", error);
  }
 };

 return (
  <div className="mt-8">
   <h2 className="text-2xl font-bold mb-4">Ajouter un Utilisateur</h2>

   {/* Formulaire d'ajout d'utilisateur */}
   <form
    onSubmit={handleSubmit(onSubmit)}
    className="border p-6 rounded-lg shadow-md bg-white"
   >
    <div className="mb-4">
     <label className="block mb-1 font-medium">Prénom :</label>
     <input
      {...register("firstName", { required: true })}
      placeholder="Prénom"
      className="w-full border border-gray-300 p-2 rounded"
     />
    </div>

    <div className="mb-4">
     <label className="block mb-1 font-medium">Nom :</label>
     <input
      {...register("lastName", { required: true })}
      placeholder="Nom"
      className="w-full border border-gray-300 p-2 rounded"
     />
    </div>

    <div className="mb-4">
     <label className="block mb-1 font-medium">Email :</label>
     <input
      {...register("email", { required: true })}
      type="email"
      placeholder="Email"
      className="w-full border border-gray-300 p-2 rounded"
     />
    </div>

    <div className="mb-4">
     <label className="block mb-1 font-medium">Mot de passe :</label>
     <input
      {...register("password", { required: true })}
      type="password"
      placeholder="Mot de passe"
      className="w-full border border-gray-300 p-2 rounded"
     />
    </div>

    <div className="mb-4">
     <label className="block mb-1 font-medium">Rôle :</label>
     <input
      {...register("role", { required: true })}
      placeholder="Rôle (admin, lecteur...)"
      className="w-full border border-gray-300 p-2 rounded"
     />
    </div>

    <button
     type="submit"
     className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
    >
     Ajouter l’Utilisateur
    </button>
   </form>
  </div>
 );
}
