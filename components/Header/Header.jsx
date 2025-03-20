import NavBar from "./NavBar";

export default function Header({ changePage, currentPage, onLogout, role }) {
 return (
  <header className="flex items-center justify-between p-8 bg-headerBg">
   <div>
    <h1
     className="text-white cursor-pointer"
     onClick={() => changePage("accueil")}
    >
     BibliOnLine
    </h1>
   </div>
   <NavBar
    changePage={changePage}
    currentPage={currentPage}
    onLogout={onLogout}
    role={role}
   />
  </header>
 );
}
