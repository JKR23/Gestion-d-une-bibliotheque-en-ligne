// components/Header/NavBar.jsx

export default function NavBar({ changePage, currentPage }) {
 return (
  <ul className="flex justify-center gap-x-8 flex-grow">
   <li>
    <button
     onClick={() => changePage("accueil")} // Change à la page "accueil"
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out 
            ${
             currentPage === "accueil"
              ? "scale-110 bg-blue-500 bg-opacity-20"
              : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
            }
          `}
    >
     Accueil
    </button>
   </li>
   <li>
    <button
     onClick={() => changePage("catalogue")} // Change à la page "catalogue"
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out 
            ${
             currentPage === "catalogue"
              ? "scale-110 bg-blue-500 bg-opacity-20"
              : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
            }
          `}
    >
     Catalogue
    </button>
   </li>
   <li>
    <button
     onClick={() => changePage("contact")} // Change à la page "contact"
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out 
            ${
             currentPage === "contact"
              ? "scale-110 bg-blue-500 bg-opacity-20"
              : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
            }
          `}
    >
     Contact
    </button>
   </li>
   <li>
    <button
     onClick={() => changePage("deconnexion")} // Change à la page "deconnexion"
     className={`text-white px-4 py-2 rounded transform transition-transform duration-300 ease-in-out 
            ${
             currentPage === "deconnexion"
              ? "scale-110 bg-blue-500 bg-opacity-20"
              : "hover:scale-105 hover:bg-blue-500 hover:bg-opacity-20"
            }
          `}
    >
     Deconnexion
    </button>
   </li>
  </ul>
 );
}
