// src/components/EcommerceHero.jsx
import React from "react";
import { ArrowDownRight, CheckCircle } from "lucide-react";
import BgImage from "../assests/LandingImage1.png";
import AboutImage from "../assests/warehouselanding.png";
import PerfumeImg from "../assests/Bulkimage.jpg";
import EssentialsImg from "../assests/TransporatationImage.jpg";

const WholeSalesolutions = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-[#2d1545]/30 backdrop-blur-[1px] z-0" />

        <div className="relative z-10 max-w-[1440px] w-full grid lg:grid-cols-2 items-stretch px-6 md:px-20 py-36 gap-0">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-tl-[4rem] shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
            <img
              src={AboutImage}
              alt="E-commerce laptop"
              className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Right Content */}
          <div className="bg-white text-[#1e1e1e] flex flex-col justify-center px-10 py-20 lg:py-32 rounded-bl-[5rem] shadow-2xl">
            <p className="text-[#aa1a7b] text-lg font-semibold underline underline-offset-4 mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Wholesale Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* eCommerce Categories Section */}
      <section className="bg-white w-full px-6 md:px-20 xl:px-40 py-24">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-xl md:text-2xl text-gray-800">
            With an established network of suppliers and distributors, ABD
            Trading can assist your business in the purchase and transportation
            of wholesale products. Our services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Card Item */}
          {[
            {
              img: PerfumeImg,
              title: "Bulk Product Sales",
              desc: "A range of consumer products in bulk are available for resale in eCommerce marketplaces",
            },
            {
              img: EssentialsImg,
              title: "Home Essentials",
              desc: "ABD Trading can help you manage the transportation of your wholesale product to your desired location. With experience in shipping bulk products both domestically and internationally, we can assist you in making sure your inventory gets to where it needs to be, when it needs to be there.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[280px] object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-[#1e1e1e]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 bg-gray-100 py-14 px-4 text-center rounded-3xl">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6">
            We have experience in arranging for the transportation of products
            as small as computer mouses, to products as large as heavy
            construction machinery. If you are interested in a wholesale
            solution for your business, please visit the “contact” page and
            submit an inquiry.
          </p>
          <button className="mt-4 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-full font-semibold shadow-md">
            Contact us
          </button>
        </div>
      </section>
    </>
  );
};

export default WholeSalesolutions;
