import NavBar from "./NavBar";

export default function Header({ changePage, currentPage, onLogout, role }) {
 return (
  <header className="flex items-center justify-between px-4 py-4 md:px-8 bg-headerBg relative">
   <h1
    className="text-white text-2xl font-bold cursor-pointer"
    onClick={() => changePage("accueil")}
   >
    BibliOnLine
   </h1>

   <NavBar
    changePage={changePage}
    currentPage={currentPage}
    onLogout={onLogout}
    role={role}
   />
  </header>
 );
}
