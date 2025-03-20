"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import WelcomePage from "@/components/pageweb/Accueil/WelcomePage";
import PageApresConnexionDeUtilisateur from "@/app/page";
import "./globals.css";

export default function Layout({ children }) {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  console.log("Vérification de l'état de connexion dans le localStorage...");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
   console.log("Utilisateur est connecté, mise à jour de l'état...");
   setIsLoggedIn(true);
  } else {
   console.log("Utilisateur n'est pas connecté.");
  }
 }, []);

 useEffect(() => {
  console.log("État de connexion mis à jour :", isLoggedIn);
 }, [isLoggedIn]);

 return (
  <html lang="fr">
   <body className="p-0 m-0 flex flex-col min-h-screen">
    <main className="flex-grow">
     {isLoggedIn ? (
      <PageApresConnexionDeUtilisateur />
     ) : (
      <WelcomePage
       onLogin={() => {
        console.log("Utilisateur s'est connecté, mise à jour de l'état...");
        setIsLoggedIn(true);
       }}
      />
     )}
    </main>
    <Footer />
   </body>
  </html>
 );
}
