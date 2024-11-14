import Image from "next/image";
import HeroImage from "/public/images/hero.png";

export default function Header() {
  return (
    <section className="relative bg-[#f4f2fc] py-20 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        {/* Left Section */}
        <div className="flex flex-col max-w-lg">
          <span className="text-pink-500 font-medium text-sm mb-2">
            Best Furniture For Your Castle...
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            New Furniture Collection <br /> Trends in 2024
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white font-medium py-3 px-6 rounded-md hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center justify-center">
          {/* Discount Badge */}
          <div className="absolute top-0 right-0 bg-blue-200 text-blue-600 rounded-full px-4 py-2 text-sm font-bold -translate-x-1/2 translate-y-1/2">
            50% off
          </div>
          {/* Chair Image */}
          <Image
            src={HeroImage} // Replace with your actual image path
            alt="Chair"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
