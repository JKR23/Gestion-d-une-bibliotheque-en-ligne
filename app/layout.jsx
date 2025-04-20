"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import WelcomePage from "@/components/pageweb/Accueil/WelcomePage";
import PageApresConnexionDeUtilisateur from "@/app/page";
import InstallPrompt from "@/components/InstallPrompt";
import "./globals.css";

export default function RootLayout({ children }) {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const isLogged = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(isLogged === "true");
 }, []);

 return (
  <html lang="fr">
   <head>
    <title>Gestion Bibliothèque</title>

    {/* Meta & PWA install config */}
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#4f46e5" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta
     name="apple-mobile-web-app-status-bar-style"
     content="black-translucent"
    />
    <link rel="apple-touch-icon" href="/icons/img1.png" />
    <link rel="icon" href="/icons/img2.png" type="image/png" />
   </head>
   <body className="p-0 m-0 flex flex-col min-h-screen">
    {/* Bouton d'installation */}
    <InstallPrompt />

    {/* Page principale */}
    <main className="flex-grow">
     {isLoggedIn ? (
      <PageApresConnexionDeUtilisateur />
     ) : (
      <WelcomePage onLogin={() => setIsLoggedIn(true)} />
     )}
    </main>

    <Footer />
   </body>
  </html>
 );
}
