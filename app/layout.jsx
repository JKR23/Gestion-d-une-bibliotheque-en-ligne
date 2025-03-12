// app/layout.js
"use client";

import { useState } from "react";
import Header from "@/components/Header/Header.jsx"; // Importation du Header
import Footer from "@/components/Footer/Footer.jsx"; // Importation du Footer
import Home from "@/app/page.jsx"; // Page d'accueil
import Catalogue from "@/app/catalogue/page.jsx"; // Page catalogue
import Contact from "@/app/contact/page"; // Page contact
import Deconnexion from "@/app/deconnexion/page"; // Page deconnexion
import Reservation from "@/app/reservation/page.jsx";
import "./globals.css"; // Import des styles globaux

export default function Layout({ children }) {
 // État pour savoir quelle page est actuellement affichée
 const [page, setPage] = useState("accueil");

 // Fonction pour changer de page
 const changePage = (newPage) => {
  setPage(newPage);
 };

 // Fonction pour rendre la page actuelle
 const renderPage = () => {
  switch (page) {
   case "accueil":
    return <Home />;
   case "catalogue":
    return <Catalogue />;
   case "reservation":
    return <Reservation />;
   case "contact":
    return <Contact />;
   case "deconnexion":
    return <Deconnexion />;
   default:
    return <Home />;
  }
 };

 return (
  <html lang="fr">
   <body className="p-0 m-0">
    <Header changePage={changePage} currentPage={page} />{" "}
    {/* Passer la fonction et l'état à Header */}
    <main className="min-h-screen pt-0">{renderPage()}</main>{" "}
    {/* Afficher la page active */}
    <Footer />
   </body>
  </html>
 );
}
