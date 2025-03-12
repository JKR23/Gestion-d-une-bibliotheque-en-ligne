import Image from "next/image";

export default function Section2() {
 return (
  <div className="flex w-full h-[50vh]">
   {/* Partie gauche avec l'image */}
   <div className="bg-gray-300 border-4 border-green-500 w-1/2 relative">
    {/* Image avec layout="fill" et conteneur relatif pour garantir qu'elle occupe toute la largeur */}
    <div className="relative w-full h-full">
     <Image
      src="/images/carr-biblietcie.png" // Remplacez par le chemin de votre image
      alt="Description de l'image"
      className="object-cover"
      fill
      priority
     />
    </div>
   </div>

   {/* Partie droite avec le texte */}
   <div className="bg-orange-300 border-4 border-blue-500 w-1/2">
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
     odio vitae vestibulum. Nunc faucibus, urna sit amet viverra auctor, erat
     risus fermentum nisl, non fermentum nulla sapien id enim. Aenean nec
     placerat lorem, eu venenatis nisl.
    </p>
   </div>
  </div>
 );
}
