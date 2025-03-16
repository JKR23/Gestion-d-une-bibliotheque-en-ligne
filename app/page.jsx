//represente la page d'acceuil
// app/page.js

import Accueil from "@/components/pageweb/Accueil/Accueil.jsx";
import PageAdmin from "@/components/pageweb/Admin/pageAdministrateur";
export default function Home() {
 return (
  <div>
   <main>
    <div className="text-2xl font-semibold">
     <PageAdmin />
    </div>
   </main>
  </div>
 );
}
