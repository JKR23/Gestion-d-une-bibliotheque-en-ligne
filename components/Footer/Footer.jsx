import AboutFooter from "@/components/Footer/About";
import QuickLink from "@/components/Footer/QuickLink";
import ContactFooter from "@/components/Footer/Contact";

export default function Footer() {
 return (
  <footer className="bg-footerBg text-footerText">
   <div className="max-w-7xl mx-auto px-4 py-12">
    {/* Grille responsive */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     <QuickLink />
     <AboutFooter />
     <ContactFooter />
    </div>

    {/* Bas de page */}
    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
     © 2025 BibliOnLine. Tous droits réservés.
    </div>
   </div>
  </footer>
 );
}
