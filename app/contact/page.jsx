//app/contact/page.jsx
import Contact from "@/components/pageweb/Contact.jsx";

export default function Contacts() {
 return (
  <div
   className="flex justify-center items-center min-h-screen bg-cover bg-center"
   style={{
    backgroundImage: "url('/images/phot_bib.jpg')", // L'image utilisée comme fond
   }}
  >
   <Contact />
  </div>
 );
}
