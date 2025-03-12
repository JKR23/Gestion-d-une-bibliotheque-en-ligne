//represente la page d'acceuil
// app/page.js

import Accueil from "@/components/pageweb/Accueil/Accueil.jsx";

export default function Home() {
 return (
  <div>
   <main>
    <div className="text-2xl font-semibold">
     <Accueil />
    </div>
   </main>
  </div>
 );
}
