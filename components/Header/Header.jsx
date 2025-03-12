// components/Header/Header.jsx
import NavBar from "./NavBar"; // Importation de NavBar

export default function Header({ changePage, currentPage }) {
 return (
  <header className="flex items-center justify-between p-8 bg-headerBg">
   <div>
    <h1
     className="text-white cursor-pointer"
     onClick={() => changePage("accueil")} // Lors du clic sur le titre, on change la page vers "accueil"
    >
     BibliOnLine
    </h1>
   </div>
   <NavBar changePage={changePage} currentPage={currentPage} />
   {/* Passer changePage et currentPage à NavBar */}
  </header>
 );
}
