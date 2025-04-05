import React, { useEffect, useState } from "react";
import { Phone, ArrowDownRight } from "lucide-react";
import LandingImage1 from "../assests/LandingImage1.png";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-[100vh] bg-[#2d1545] text-white bg-no-repeat bg-cover bg-fixed bg-center overflow-hidden scrollbar-hide"
      style={{ backgroundImage: `url(${LandingImage1})` }}
    >
      <div className="absolute inset-0 bg-[#2d1545]/30 backdrop-blur-[1px] z-0"></div>

      {/* <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-16 ${
          scrolled
            ? "bg-[#2d1545]/90 py-3 shadow-lg backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
            <div className="text-left">
              <h1 className="text-2xl font-extrabold leading-tight tracking-wide">
                ABD
                <br />
                TRADING LLC
              </h1>
              <p className="text-sm text-purple-200 uppercase tracking-widest">
                Solutions That Drive Success
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 font-medium text-sm">
            <a href="#home" className="hover:text-[#ff9e1b] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#ff9e1b] transition">
              About us
            </a>
            <a href="#services" className="hover:text-[#ff9e1b] transition">
              Our Services
            </a>
            <a href="#contact" className="hover:text-[#ff9e1b] transition">
              Contact us
            </a>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#4f326a] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#ff9e1b] hover:text-[#2d1545] transition-all duration-300">
              Do you need help?
            </button>
          </div>
        </div>
      </nav> */}

      <div className="relative z-10 flex flex-col items-start justify-center h-[calc(110vh-96px)] px-6 md:px-20 lg:max-w-3xl gap-6 pt-32">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
          Your Trusted Partner for eCommerce,
          <br />
          Wholesale, and Business Solutions
        </h2>
        <p className="text-lg md:text-xl text-purple-200 max-w-xl">
          Empowering Businesses with Expert Solutions in Digital Marketing,
          Operations, and Consulting.
        </p>
        <button className="mt-4 bg-white text-[#2d1545] font-semibold px-8 py-3 rounded-full hover:bg-[#ff9e1b] hover:text-white transition duration-300 shadow-md">
          Read more
        </button>
      </div>

      <div className="z-10 absolute bottom-8 right-6 md:right-16 flex flex-col md:flex-row items-start md:items-center gap-8 text-sm">
        <div className="flex items-center gap-2 text-white">
          <Phone size={18} className="text-[#ff9e1b]" />
          <div className="leading-tight">
            <p className="text-xs text-gray-300 uppercase">Contact Number</p>
            <p className="text-[#ff9e1b] font-bold">+1 (301) 288-6275</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 border-l border-gray-400 pl-6">
          <ArrowDownRight size={18} className="text-[#ff9e1b]" />
          <p className="uppercase text-xs text-gray-300">Scroll for more</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
