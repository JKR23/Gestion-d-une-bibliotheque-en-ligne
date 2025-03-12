import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";

export default function Accueil() {
 return (
  <div className="w-full h-screen ">
   {/* Section 1 occupe toute la largeur et la moitié de la hauteur */}
   <div className="w-full h-1/2">
    <Section1 />
   </div>

   {/* Section 2 occupe toute la largeur et l'autre moitié de la hauteur */}
   <div className="w-full h-1/2">
    <Section2 />
   </div>
  </div>
 );
}
