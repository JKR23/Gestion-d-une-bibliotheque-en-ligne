"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function AddBookForm() {
    const { register, handleSubmit, reset } = useForm();

    // Fonction de soumission du formulaire
    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:5000/api/books", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Livre ajouté avec succès !");
                reset(); // Réinitialiser le formulaire après soumission réussie
            } else {
                alert("Erreur lors de l’ajout du livre.");
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout du livre :", error);
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Ajouter un Livre</h2>

            {/* Formulaire d'ajout de livre */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border p-6 rounded-lg shadow-md bg-white"
            >
                {/* Titre */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Titre :</label>
                    <input
                        {...register("title", { required: true })}
                        placeholder="Titre du livre"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                {/* Auteur */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Auteur :</label>
                    <input
                        {...register("author", { required: true })}
                        placeholder="Nom de l’auteur"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">
                        Description :
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Description du livre"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                {/* Stock */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Stock :</label>
                    <input
                        type="number"
                        {...register("stock", { required: true })}
                        placeholder="Nombre d'exemplaires"
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                {/* Genre */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Genre :</label>
                    <select
                        {...register("genre", { required: true })}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="">Sélectionner un genre</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                    </select>
                </div>

                {/* Disponibilité */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">
                        Disponible :
                    </label>
                    <select
                        {...register("isAvailable", { required: true })}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="">Sélectionner la disponibilité</option>
                        <option value="true">Disponible</option>
                        <option value="false">Indisponible</option>
                    </select>
                </div>

                {/* Bouton de soumission */}
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                    Ajouter le Livre
                </button>
            </form>
        </div>
    );
}
