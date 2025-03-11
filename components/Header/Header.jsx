// components/Header.jsx
import NavBar from "./NavBar"; // Importation de NavBar

export default function Header() {
 return (
  <header className="fixed w-full bg-headerBg backdrop-blur-md z-50 border-b border-borderColor">
   <div className="bg-darkPurple flex items-center justify-between h-16 text-white p-6">
    <h1 className="text-4xl font-bold text-center">BibliOnLine</h1>
   </div>
   <NavBar /> {/* Appel de NavBar ici */}
  </header>
 );
}
