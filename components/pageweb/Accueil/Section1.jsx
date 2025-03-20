import Image from "next/image";

export default function Section1() {
 return (
  <div className="relative w-full h-full">
   <Image
    src="/images/phot_bib.jpg"
    alt="Description de l'image"
    className="object-cover"
    fill
    priority
   />
  </div>
 );
}
