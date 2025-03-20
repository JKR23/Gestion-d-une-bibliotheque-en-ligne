//HeaderWelcome.jsx
import React from "react";

export default function HeaderWelcome() {
 return (
  <header className="bg-gradient-to-r from-blue-500 to-teal-400 p-8 shadow-md border-b-2 border-teal-600">
   <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-2xl font-bold">BibliOnLine</div>
    <div className="flex space-x-4">
     <span className="text-white text-lg">Welcome</span>
     <span className="text-white text-lg">|</span>
     <span className="text-white text-lg">Irasshaimase</span>
    </div>
   </div>
  </header>
 );
}
