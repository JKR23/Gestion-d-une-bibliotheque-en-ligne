//represente la page d'acceuil
// app/page.js
import Accueil from "@/components/onglets/Accueil/Accueil.jsx";

export default function Home() {
 return (
  <div>
   <main className="p-8">
    <div className="text-2xl font-semibold">
     <Accueil />
    </div>
   </main>
  </div>
 );
}
