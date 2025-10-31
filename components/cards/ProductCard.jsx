import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white border border-gray-200 shadow-sm hover:shadow-md p-3 transition">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={product?.image || "/images/product-fallback-toy.jpg"}
          alt={product?.category || "Product image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain"
          priority={false}
        />
      </div>
      <p className="text-sm font-medium text-gray-800 mb-1 truncate">
        {product?.title}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">${product?.price}</p>
        <IoIosHeartEmpty
          size={20}
          className=" text-gray-500 hover:text-red-500 cursor-pointer transition"
        />
      </div>
    </div>
  );
};

export default ProductCard;
