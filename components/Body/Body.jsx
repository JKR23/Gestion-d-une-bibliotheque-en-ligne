"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useMyContext } from "@/provider/MyContextProvider";

export default function Body({ children }) {
 const { theme } = useMyContext();

 return (
  <body
   className={`flex flex-col min-h-screen ${
    theme === "light" ? "bg-white" : "bg-black"
   } text-${theme === "light" ? "black" : "white"}`}
  >
   <Header />
   <main className="flex-1">{children}</main>
   <Footer />
  </body>
 );
}
