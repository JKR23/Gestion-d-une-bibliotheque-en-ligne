import Catalogue from "@/components/pageweb/Catalogue";
import Image from "next/image";

export default function Catalogues() {
 return (
  <div
   className="flex justify-center items-center bg-cover bg-center min-h-screen"
   style={{ backgroundImage: "url('/images/phot_bib.jpg')" }}
  >
   <div className="p-12 bg-white min-h-screen border border-gray-300 shadow-lg rounded-lg">
    <Catalogue />
   </div>
  </div>
 );
}
