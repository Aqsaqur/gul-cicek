import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black font-serif rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        {/* Company Information */}
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Gul Çiçek</h1>
          <p className="text-sm">
            Work more effectively. By understanding what motivates you, you can
            find ways to work in a way that is more aligned with your natural tendencies.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/flowers"
            >
              Flowers
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/about"
            >
              About
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/contact"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* About Me Section */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Me</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:aqsaqurayshi@gmail.com"
            >
              aqsaqurayshi@gmail.com
            </a>
            <span className="text-sm">Roll no. 00136849</span>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4">
        © Developed by <span className="text-brightColor">AQSA</span> | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
