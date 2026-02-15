// src/components/RightShowcase.tsx
import Image from "next/image";

const images = [
  { src: "/images/eiffel.jpg", alt: "Eiffel Tower, Paris", caption: "Eiffel Tower" },
  { src: "/images/statue_of_liberty.jpg", alt: "Statue of Liberty, New York", caption: "Statue of Liberty" },
  { src: "/images/harvard.jpg", alt: "Harvard University", caption: "Harvard" },
  { src: "/images/mit.jpg", alt: "MIT", caption: "MIT" },
  { src: "/images/oxford.jpg", alt: "University of Oxford", caption: "Oxford" },
  { src: "/images/cambridge.jpg", alt: "University of Cambridge", caption: "Cambridge" },
];

export default function RightShowcase() {
  return (
    // yashirin mobil uchun, faqat md+ ko'rinadi
    <aside className="hidden md:flex md:flex-col md:items-end md:gap-4">
      {/* Ikkita katta bino yuqorida */}
      <div className="flex flex-col gap-3 items-end">
        <div className="w-44 h-28 relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
          <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
        </div>
        <div className="w-44 h-28 relative rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition">
          <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" />
        </div>
      </div>

      {/* To'rt university rasmi grid */}
      <div className="grid grid-cols-2 gap-2 mt-3">
        {images.slice(2).map((img) => (
          <div key={img.src} className="w-20 h-20 relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </aside>
  );
}