import Link from "next/link";
//flex justify-center space-x-8 : le notre
//hidden md:flex justify-center gap-x-8 flex-grow
export default function NavBar() {
 return (
  <ul className="flex justify-center gap-x-8 flex-grow">
   <li>
    <Link
     href="/"
     className="text-white text-lg font-semibold hover:scale-110 transform transition duration-300"
    >
     Accueil
    </Link>
   </li>
   <li>
    <Link
     href="/catalogue"
     className="text-white text-lg font-semibold hover:scale-110 transform transition duration-300"
    >
     Catalogue
    </Link>
   </li>
   <li>
    <Link
     href="/contact"
     className="text-white text-lg font-semibold hover:scale-110 transform transition duration-300"
    >
     Contact
    </Link>
   </li>
   <li>
    <Link
     href="/deconnexion"
     className="text-white text-lg font-semibold hover:scale-110 transform transition duration-300"
    >
     Deconnexion
    </Link>
   </li>
  </ul>
 );
}
