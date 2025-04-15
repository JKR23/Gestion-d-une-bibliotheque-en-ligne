import Image from "next/image";

export default function Section1() {
 return (
  <div className="relative w-full h-full">
   <Image
    src="/images/phot_bib.jpg"
    alt="Image de bibliothèque"
    className="object-cover"
    fill
    priority
   />
  </div>
 );
}
