"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiFlowerPot } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="fixed w-full z-10">
        <div className="flex justify-between items-center p-5 md:px-32 px-5 bg-white shadow-md">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <span className="text-pink-500">
              <GiFlowerPot size={32} />
            </span>
            <h1 className="ml-2 text-xl font-bold">Gul Çiçek</h1>
          </div>

          {/* Desktop Links Section */}
          <div className="hidden md:flex items-center text-lg font-medium gap-6 text-black">
            <Link href="/" className="cursor-pointer hover:text-gray-500 transition">
              Home
            </Link>
            <Link href="#Flower" className="cursor-pointer hover:text-gray-500 transition">
              Flowers
            </Link>
            <Link href="#About" className="cursor-pointer hover:text-gray-500 transition">
              About
            </Link>
            <Link href="#Contact" className="cursor-pointer hover:text-gray-500 transition">
              Contact Us
            </Link>
            <Button title="Login" />
            <BiChevronDown className="cursor-pointer" size={25} />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            {menuOpen ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-serif text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link href="/" className="cursor-pointer hover:text-gray-500 transition">
            Home
          </Link>
          <Link href="#Flower" className="cursor-pointer hover:text-gray-500 transition">
            Flowers
          </Link>
          <Link href="#About" className="cursor-pointer hover:text-gray-500 transition">
            About
          </Link>
          <Link href="#Contact" className="cursor-pointer hover:text-gray-500 transition">
            Contact Us
          </Link>
          <Button title="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
