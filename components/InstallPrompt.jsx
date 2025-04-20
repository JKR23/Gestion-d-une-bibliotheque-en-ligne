"use client";

import { MdOutlineInstallDesktop } from "react-icons/md";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
 const [installPrompt, setInstallPrompt] = useState(null);

 useEffect(() => {
  const getInstallPrompt = (event) => {
   event.preventDefault();
   setInstallPrompt(event);
  };

  window.addEventListener("beforeinstallprompt", getInstallPrompt);

  return () => {
   window.removeEventListener("beforeinstallprompt", getInstallPrompt);
  };
 }, []);

 const handleClose = () => setInstallPrompt(null);

 const handleInstall = async () => {
  installPrompt.prompt();
  const { outcome } = await installPrompt.userChoice;
  console.log(outcome);
  if (outcome === "accepted") {
   setInstallPrompt(null);
  }
 };

 return (
  installPrompt && (
   <div className="fixed bottom-4 left-4 right-4 md:right-auto md:left-4 bg-white border shadow-md p-4 rounded flex items-center justify-between z-50 max-w-sm">
    <div className="flex items-center gap-2">
     <MdOutlineInstallDesktop className="text-xl" />
     <button onClick={handleInstall} className="text-blue-600 hover:underline">
      Cliquer ici pour installer !
     </button>
    </div>
    <button onClick={handleClose} className="text-xl ml-4 hover:text-red-500">
     &times;
    </button>
   </div>
  )
 );
}
