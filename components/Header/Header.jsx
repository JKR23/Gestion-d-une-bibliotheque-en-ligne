import NavBar from "./NavBar"; // Importation de NavBar

// "flex items-center justify-between p-4" : aligne <h1>BibliOnLine</h1> au même niveau que le navBar
export default function Header() {
 return (
  <header className="flex items-center justify-between p-8 bg-headerBg">
   <div>
    <h1 className="text-white cursor-pointer">BibliOnLine</h1>{" "}
    {/* Appliquer la couleur grise */}
   </div>
   <NavBar /> {/* Appel de NavBar ici */}
  </header>
 );
}
