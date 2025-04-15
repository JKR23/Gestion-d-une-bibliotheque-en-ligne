"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icônes menu et fermeture

export default function NavBar({ changePage, currentPage, onLogout }) {
 const [role, setRole] = useState(null);
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
  const userRole = localStorage.getItem("userRole");
  setRole(userRole);
 }, []);

 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 const handleNavClick = (page) => {
  changePage(page);
  setIsOpen(false); // Fermer le menu mobile après un clic
 };

 const navLink = (label, page, color = "blue") => (
  <li>
   <button
    onClick={() => handleNavClick(page)}
    className={`text-white px-4 py-2 rounded transition-transform duration-300 ease-in-out ${
     currentPage === page
      ? `scale-110 bg-${color}-500 bg-opacity-20`
      : `hover:scale-105 hover:bg-${color}-500 hover:bg-opacity-20`
    }`}
   >
    {label}
   </button>
  </li>
 );

 return (
  <div className="relative">
   {/* Hamburger */}
   <div className="md:hidden flex items-center">
    <button
     className="text-white text-2xl focus:outline-none"
     onClick={toggleMenu}
    >
     {isOpen ? <FiX /> : <FiMenu />}
    </button>
   </div>

   {/* Liens de navigation */}
   <ul
    className={`flex-col md:flex-row md:flex gap-4 absolute md:static top-12 right-0 bg-headerBg md:bg-transparent p-4 md:p-0 rounded-md shadow-lg md:shadow-none z-50 transition-all duration-300 ${
     isOpen ? "flex" : "hidden"
    }`}
   >
    {navLink("Accueil", "accueil")}
    {navLink("Catalogue", "catalogue")}
    {navLink("Réservation", "reservation")}
    {navLink("Contact", "contact")}

    {role === "ADMIN" && navLink("Admin Dashboard", "AdminDashboard", "yellow")}

    <li>
     <button
      onClick={onLogout}
      className="text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
     >
      Déconnexion
     </button>
    </li>
   </ul>
  </div>
 );
}
