"use client";

import React, { useState } from "react";
import HeaderWelcome from "./HeaderWelcome";
import ModalLogin from "@/components/pageweb/connexion/ModalLogin";
import ModalSignup from "@/components/pageweb/connexion/ModalSignup";

export default function WelcomePage({ onLogin }) {
 const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
 const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

 const openLoginModal = () => {
  console.log("Ouverture du modal de connexion...");
  setIsLoginModalOpen(true);
 };

 const closeLoginModal = () => {
  console.log("Fermeture du modal de connexion...");
  setIsLoginModalOpen(false);
 };

 const openSignupModal = () => {
  console.log("Ouverture du modal d'inscription...");
  setIsSignupModalOpen(true);
 };

 const closeSignupModal = () => {
  console.log("Fermeture du modal d'inscription...");
  setIsSignupModalOpen(false);
    };
    

    const handleLogin = async () => {
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (data.user) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", data.user.role); // ✅ Sauvegarder le rôle
            onLogin(); // déclenche le Layout
        } else {
            alert("Identifiants incorrects");
        }
    };


 return (
  <div>
   <HeaderWelcome />
   <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
    <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
     <h1 className="text-3xl font-semibold text-gray-800 mb-4">
      Bienvenue à la BibliOnLine !
     </h1>
     <p className="text-lg text-gray-600 mb-6">
      Explorez des milliers de livres, découvrez de nouvelles histoires, et
      plongez dans l'univers de la lecture.
     </p>
     <div className="flex justify-center gap-6">
      <button
       className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
       onClick={openSignupModal}
      >
       S'inscrire
      </button>
      <button
       className="px-6 py-2 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-700 transition"
       onClick={openLoginModal}
      >
       Se connecter
      </button>
     </div>
    </div>
   </div>
   <ModalLogin isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
   <ModalSignup isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
  </div>
 );
}
