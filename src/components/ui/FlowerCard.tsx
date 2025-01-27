import React from "react";
import Image from "next/image";

interface FlowerCardProps {
  img: string; // Path to the image
  title: string; // Title of the flower
  price: string; // Price of the flower
}

const FlowerCard: React.FC<FlowerCardProps> = ({ img, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transition-transform hover:scale-105">
      {/* Ensure the image path is valid */}
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className="w-full object-cover"
        priority
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{price}</p>
        <button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FlowerCard;
