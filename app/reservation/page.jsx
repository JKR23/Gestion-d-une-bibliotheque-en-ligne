import Reservation from "@/components/pageweb/Reservation";

export default function Deconnexion() {
 return (
  <div
   className="flex justify-center items-center bg-cover bg-center min-h-screen"
   style={{ backgroundImage: "url('/images/phot_bib.jpg')" }}
  >
   <div className="p-12 bg-white min-h-screen border border-gray-300 shadow-lg rounded-lg">
    <Reservation />
   </div>
  </div>
 );
}
