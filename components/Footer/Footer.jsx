import AboutFooter from "@/components/Footer/About";
import QuickLink from "@/components/Footer/QuickLink";
import ContactFooter from "@/components/Footer/Contact";

export default function Footer() {
 return (
  <footer className="bg-footerBg text-footerText">
   <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {" "}
     {/* Réduire à 3 colonnes */}
     <div className="flex flex-col items-center">
      <QuickLink />
     </div>
     <div className="flex flex-col items-center">
      <AboutFooter />
     </div>
     <div className="flex flex-col items-center">
      <ContactFooter />
     </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
     <p>© 2025 BibliOnLine. Tous droits réservés.</p>
    </div>
   </div>
  </footer>
 );
}
