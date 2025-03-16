"use client"; // Indique que ce module s'exécute côté client
import { useState } from "react";
import Utilisateur from "./Utilisateur";
import Livre from "./livre";

export default function PageAdmin() {
    const [activeSection, setActiveSection] = useState("livre");

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-light-primary dark:text-white">
                Tableau de bord Administrateur
            </h1>

            {/* Liens de navigation */}
            <div className="flex justify-center gap-6 mb-8">
                <button
                    onClick={() => setActiveSection("livre")}
                    className={`px-6 py-3 rounded-lg font-semibold shadow transition
                        ${
                            activeSection === "livre"
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700"
                        }`}
                >
                    Gestion des Livres
                </button>

                <button
                    onClick={() => setActiveSection("utilisateur")}
                    className={`px-6 py-3 rounded-lg font-semibold shadow transition
                        ${
                            activeSection === "utilisateur"
                                ? "bg-blue-600 text-white"
                                : "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700"
                        }`}
                >
                    Gestion des Utilisateurs
                </button>
            </div>

            {/* Affichage de la section sélectionnée */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                {activeSection === "livre" ? <Livre /> : <Utilisateur />}
            </div>
        </div>
    );
}
