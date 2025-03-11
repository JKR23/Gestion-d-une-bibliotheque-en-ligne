import Link from "next/link";

export default function NavBar() {
 return (
  <ul className="flex justify-center gap-x-8 flex-grow">
   <li>
    <Link href="/">
     <button className="text-white transform transition-transform duration-300 ease-in-out hover:scale-110 px-4 py-2 rounded">
      Accueil
     </button>
    </Link>
   </li>
   <li>
    <Link href="/catalogue">
     <button className="text-white transform transition-transform duration-300 ease-in-out hover:scale-110 px-4 py-2 rounded">
      Catalogue
     </button>
    </Link>
   </li>
   <li>
    <Link href="/contact">
     <button className="text-white transform transition-transform duration-300 ease-in-out hover:scale-110 px-4 py-2 rounded">
      Contact
     </button>
    </Link>
   </li>
   <li>
    <Link href="/deconnexion">
     <button className="text-white transform transition-transform duration-300 ease-in-out hover:scale-110 px-4 py-2 rounded">
      Deconnexion
     </button>
    </Link>
   </li>
  </ul>
 );
}
