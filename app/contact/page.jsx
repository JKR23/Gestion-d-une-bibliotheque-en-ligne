import Contact from "@/components/onglets/Contact.jsx";

export default function Contacts() {
 return (
  <div
   className="flex justify-center items-center min-h-screen bg-cover bg-center"
   style={{
    backgroundImage: "url('/images/backGrnd.webp')", // L'image utilisée comme fond
   }}
  >
   <Contact />
  </div>
 );
}
