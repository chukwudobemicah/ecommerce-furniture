import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/utils/sanity/sanity.client";
type Product = {
  _id: string;
  name: string;
  code: string;
  price: string;
  image: {
    asset: {
      url: string;
    };
  };
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  // const products = client.fetch(query);
  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = groq`*[_type == "product"]{
    _id,
    name,
    code,
    price,
    "image": image.asset->url
  } | order(_createdAt desc)`;
      const productsData = await client.fetch(query);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

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
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <div className="group relative bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                {/* Product Image */}
                <div className="flex items-center justify-center mb-6">
                  {product.image && (
                    <Image
                      src={product.image ?? ""}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  )}
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
