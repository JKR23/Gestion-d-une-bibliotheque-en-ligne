"use client";

import { useEffect, useState } from "react";

export default function NavBar({ changePage, currentPage, onLogout }) {
 const [role, setRole] = useState(null);

 useEffect(() => {
  // Récupérer le rôle de l'utilisateur depuis le localStorage
  const userRole = localStorage.getItem("userRole");
  setRole(userRole);
 }, []);

 return (
  <ul className="flex justify-center gap-x-8 flex-grow">
   <li>
    <button
     onClick={() => changePage("accueil")}
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out ${
      currentPage === "accueil"
       ? "scale-110 bg-blue-500 bg-opacity-20"
       : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
     }`}
    >
     Accueil
    </button>
   </li>
   <li>
    <button
     onClick={() => changePage("catalogue")}
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out ${
      currentPage === "catalogue"
       ? "scale-110 bg-blue-500 bg-opacity-20"
       : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
     }`}
    >
     Catalogue
    </button>
   </li>
   <li>
    <button
     onClick={() => changePage("reservation")}
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out ${
      currentPage === "reservation"
       ? "scale-110 bg-blue-500 bg-opacity-20"
       : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
     }`}
    >
     Réservation
    </button>
   </li>
   <li>
    <button
     onClick={() => changePage("contact")}
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out ${
      currentPage === "contact"
       ? "scale-110 bg-blue-500 bg-opacity-20"
       : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
     }`}
    >
     Contact
    </button>
   </li>

   {role === "ADMIN" && (
    <li>
     <button
      onClick={() => changePage("AdminDashboard")}
      className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out ${
       currentPage === "AdminDashboard"
        ? "scale-110 bg-yellow-500 bg-opacity-20"
        : "hover:scale-105 hover:bg-yellow-500 hover:bg-opacity-20"
      }`}
     >
      Admin Dashboard
     </button>
    </li>
   )}

   <li>
    <button
     onClick={onLogout}
     className="text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
    >
     Déconnexion
    </button>
   </li>
  </ul>
 );
}
