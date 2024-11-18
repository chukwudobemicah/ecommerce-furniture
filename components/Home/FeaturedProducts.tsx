import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  code: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Cantilever chair",
    code: "Y523201",
    price: "$42.00",
    image: "/images/chair1.png",
  },
  {
    id: 2,
    name: "Cantilever chair",
    code: "Y523202",
    price: "$45.00",
    image: "/images/chair2.png",
  },
  {
    id: 3,
    name: "Cantilever chair",
    code: "Y523203",
    price: "$48.00",
    image: "/images/chair3.png",
  },
  {
    id: 4,
    name: "Cantilever chair",
    code: "Y523204",
    price: "$50.00",
    image: "/images/chair4.png",
  },
  {
    id: 5,
    name: "Cantilever chair",
    code: "Y523205",
    price: "$55.00",
    image: "/images/chair5.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group relative bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                {/* Product Image */}
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500">Code - {product.code}</p>
                <p className="text-xl font-bold text-gray-900 mt-2">
                  {product.price}
                </p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg">
                  <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4">
                    View Details
                  </button>
                  <div className="flex space-x-4 text-white">
                    <button className="hover:text-gray-300">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="hover:text-gray-300">
                      <i className="fas fa-search"></i>
                    </button>
                    <button className="hover:text-gray-300">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
