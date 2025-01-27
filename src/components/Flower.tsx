import React from "react";
import FlowerCard from "@/components/ui/FlowerCard"; // Ensure this path and component name are correct

const Flowers = () => {
  // Array of flowers with image paths, titles, and prices
  const flowers = [
    { img: "/flower(2).jpg", title: "Rose Bouquet", price: "$15.99" },
    { img: "/flower6.jpg", title: "Lily Elegance", price: "$19.99" },
    { img: "/flower7.jpg", title: "White Roses", price: "$19.99" },
    { img: "/flower11.jpg", title: "Roses Elegance", price: "$19.99" },
    { img: "/flower15.jpg", title: "Coquette", price: "$19.99" },
    { img: "/flower12.jpg", title: "Bellerina", price: "$19.99" },
    { img: "/flower1.jpg", title: "Feminine", price: "$19.99" },
    { img: "/flower(10).jpg", title: "Sunflower Charm", price: "$18.99" },
    { img: "/flower5.jpg", title: "Orchid Bliss", price: "$25.99" },
    { img: "/flower13.jpg", title: "Eulalie Elegance", price: "$19.99" },
    { img: "/flower14.jpg", title: "Ethereal", price: "$19.99" },
    { img: "/flower(3).jpg", title: "Tulip Delight", price: "$12.99" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Flowers
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {flowers.map((flower, index) => (
          <FlowerCard
            key={index}
            img={flower.img}
            title={flower.title}
            price={flower.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Flowers;
