// components/QuickLink
import NavBar from "../Header/NavBar.jsx";

export default function QuickLink() {
 return (
  <div>
   <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
   <ul className=" gap-x-8 flex-grow">
    <li>Accueil</li>
    <li>Catalogue</li>
    <li>Contact</li>
    <li>Deconnexion</li>
   </ul>
  </div>
 );
}
