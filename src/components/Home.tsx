import React from "react";
import Button from "@/components/ui/Button"; // Adjust the path if necessary

const Home = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-900 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/flower(4).jpg')",
          backgroundColor: "rgba(0,0,0,0.5)", // Fallback for unsupported browsers
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <section className="relative z-10 text-white lg:w-2/3 w-full px-5 lg:px-20 space-y-8">
        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-shadow-md">
          Brighten Your Day with <span className="text-pink-300">Fresh Flowers</span>
        </h1>
        <p className="text-base lg:text-lg font-serif text-shadow-sm">
          "Like wildflowers, you must allow yourself to grow in all the places people thought you never would."
        </p>
        <div>
          <Button title="Order Now" />
        </div>
      </section>
    </main>
  );
};

export default Home;
