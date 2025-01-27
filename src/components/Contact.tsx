import React from "react";
import Image from "next/image";
import { SiNotion } from "react-icons/si";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Contact Us
      </h1>

      {/* Card Container */}
      <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-8 w-full max-w-lg">
        {/* Profile Section */}
        <div className="text-center flex flex-col items-center gap-4">
          <Image
            className="rounded-full"
            src="/myimg.jpeg"
            width={188}
            height={188}
            alt="Aqsa's profile image"
            priority
          />
          <h2 className="text-black font-serif font-bold text-[20px]">Aqsa</h2>
          <p className="text-gray-600">Designer of this website</p>
          <p className="text-black font-serif text-sm">
            &apos;Welcome to my website! Salam, I am Aqsa, a 19-year-old student
            at GIAIC. I am excited to share this project/hackathon with you.
            This website is a reflection of my learning journey and my growing
            passion for Next.js.&apos;
          </p>
        </div>

        {/* Notion Link Section */}
        <div className="text-center mt-6">
          <p className="text-sm font-bold">Click on Notion For</p>
          <p className="text-xs text-black">Day 1 & Day 2 Brainstorming</p>
          <div className="mt-4 text-4xl">
            <a
              href="https://www.notion.so/beaniehijabi-hijibtis/Hackathon-3-187bf96cc13b80f2b94ddbf5038c5094?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-600 transition-colors flex justify-center items-center "
            >
              <SiNotion />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
