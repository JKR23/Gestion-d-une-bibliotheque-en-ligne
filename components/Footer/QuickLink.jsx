export default function QuickLink() {
 return (
  <div className="text-center md:text-left">
   <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
   <ul className="space-y-2 text-gray-400">
    <li>
     <a href="#" className="hover:text-white transition-colors">
      Accueil
     </a>
    </li>
    <li>
     <a href="#" className="hover:text-white transition-colors">
      Catalogue
     </a>
    </li>
    <li>
     <a href="#" className="hover:text-white transition-colors">
      Contact
     </a>
    </li>
    <li>
     <a href="#" className="hover:text-white transition-colors">
      Déconnexion
     </a>
    </li>
   </ul>
  </div>
 );
}
