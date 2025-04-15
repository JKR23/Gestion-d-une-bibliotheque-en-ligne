import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Accueil() {
 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   {/* Section 1 */}
   <div className="w-full md:w-1/2 h-64 md:h-screen">
    <Section1 />
   </div>

   {/* Section 2 */}
   <div className="w-full md:w-1/2 h-full">
    <Section2 />
   </div>
  </div>
 );
}
