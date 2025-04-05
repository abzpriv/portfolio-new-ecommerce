// AboutUsHero.jsx
import React from "react";
import { ArrowDownRight, CheckCircle } from "lucide-react";
import BgImage from "../assests/LandingImage1.png";
import AboutImage from "../assests/opertaionlanding.png";
import PerfumeImg from "../assests/Meta.jpg";
import EssentialsImg from "../assests/Snapchat.jpg";
import VitaminsImg from "../assests/Tiktok iamge.jpg";
import ElectronicsImg from "../assests/seo.jpg";
import DirectTVImg from "../assests/DirecTv.jpg";
import DishTVImg from "../assests/DishTv.png";
import XfinityImg from "../assests/Xfinity.jpg";
import SpectrumImg from "../assests/Specrrum.jpg";
import OptimumImg from "../assests/Optimum.jpg";

const Operations = () => {
  return (
    <>
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-[#2d1545]/30 backdrop-blur-[1px] z-0" />

        <div className="relative z-10 max-w-[1440px] w-full grid lg:grid-cols-2 items-stretch px-6 md:px-20 py-36 gap-0">
          <div className="relative overflow-hidden rounded-tl-[4rem] shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
            <img
              src={AboutImage}
              alt="E-commerce laptop"
              className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          <div className="bg-white text-[#1e1e1e] flex flex-col justify-center px-10 py-20 lg:py-32 rounded-bl-[5rem] shadow-2xl">
            <p className="text-[#aa1a7b] text-lg font-semibold underline underline-offset-4 mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Operations and Management Services
            </h1>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white via-[#f9f9ff] to-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start animate-fadeInUp">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1e1e] mb-6 leading-tight">
              Operations & Management Services
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our Virtual Assistant Services are designed to streamline the
              day-to-day operations of your eCommerce and Private Label Stores.
              We assist with:
            </p>
            <ul className="space-y-5 text-base text-gray-800">
              {[
                "Product listings and inventory management",
                "Order fulfillment and customer support",
                "Marketing and promotional activities",
                "Operational support for smooth business management",
              ].map((service, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-[#f97316] shrink-0 mt-1"
                    size={22}
                  />
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600 text-base">
              Additionally, we operate customer support centers for notable
              telecommunication providers worldwide.
            </p>
          </div>

          <div className="rounded-3xl shadow-2xl bg-white p-10 border border-purple-100 transition duration-500 hover:shadow-purple-200">
            <h3 className="text-xl font-semibold mb-4 text-[#1e1e1e]">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              From order management to marketing execution, our expert VAs offer
              end-to-end operational assistance tailored to your store’s growth
              goals.
            </p>
            <button className="mt-4 inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </div>

        {/* Grid for Partners */}
        <div className="max-w-7xl mx-auto pt-20">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {[
              { img: DirectTVImg, name: "DirecTV" },
              { img: DishTVImg, name: "Dish TV" },
              { img: XfinityImg, name: "Xfinity" },
              { img: SpectrumImg, name: "Spectrum" },
              { img: OptimumImg, name: "Optimum" },
            ].map((partner, i) => (
              <div key={i} className="text-center">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-full h-52 object-cover rounded-2xl shadow-md mb-3"
                />
                <h4 className="font-semibold text-lg text-[#1e1e1e]">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Operations;
