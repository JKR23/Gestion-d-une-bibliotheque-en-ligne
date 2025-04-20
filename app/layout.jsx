// app/layout.js
"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import WelcomePage from "@/components/pageweb/Accueil/WelcomePage";
import PageApresConnexionDeUtilisateur from "@/app/page";
import "./globals.css";

export default function RootLayout({ children }) {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const isLogged = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(isLogged === "true");
 }, []);

 return (
  <html lang="fr">
   <body className="p-0 m-0 flex flex-col min-h-screen">
    <main className="flex-grow">
     {isLoggedIn ? (
      <PageApresConnexionDeUtilisateur />
     ) : (
      <WelcomePage onLogin={() => setIsLoggedIn(true)} />
     )}
    </main>
    <Footer />
    {/*{children} {/* Pour inclure tout le contenu enfant */}
   </body>
  </html>
 );
}
