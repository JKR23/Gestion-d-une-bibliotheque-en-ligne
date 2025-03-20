import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";

export default function Accueil() {
 return (
  <div className="w-full h-screen flex">
   {/* Section 1 occupe 50% de la largeur et toute la hauteur */}
   <div className="w-1/2 h-full">
    <Section1 />
   </div>

   {/* Section 2 occupe 50% de la largeur et toute la hauteur */}
   <div className="w-1/2 h-full">
    <Section2 />
   </div>
  </div>
 );
}
