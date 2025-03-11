// app/layout.js
import Home from "@/app/page.jsx";
import Header from "@/components/Header/Header.jsx"; // Si tu veux inclure le Header
import Footer from "@/components/Footer/Footer.jsx"; // Si tu veux inclure le Header
import "./globals.css"; // Import des styles globaux

export default function Layout({ children }) {
 return (
  <html lang="fr">
   <body>
    <Header />
    <main className="min-h-screen pt-16">
     <Home />
    </main>
    <Footer />
   </body>
  </html>
 );
}
