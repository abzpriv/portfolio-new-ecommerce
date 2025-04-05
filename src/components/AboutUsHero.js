// AboutUsHero.jsx
import React from "react";
import { ArrowDownRight, CheckCircle } from "lucide-react";
import BgImage from "../assests/LandingImage1.png";
import AboutImage from "../assests/laptop.png";
import PeopleImage from "../assests/people.jpg"; // add your people image

const AboutUsHero = () => {
  return (
    <>
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
              About us
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              What we can do for you?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Unlock success with tailored solutions in eCommerce, marketing,
              logistics & business ops. Our expert team brings strategy & action
              to elevate your brand beyond expectations.
            </p>
            <button className="mt-10 inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300">
              Explore our services <ArrowDownRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* New Section Below Hero */}
      <section className="w-full bg-gradient-to-b from-white via-orange-50 to-purple-50 py-24 px-6 md:px-20 xl:px-40">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 items-center gap-20">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl xl:text-5xl font-extrabold text-[#2d1545] mb-4 leading-tight tracking-tight">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
              Welcome to{" "}
              <span className="text-[#aa1a7b] font-semibold">
                ABD Trading LLC
              </span>
              , your trusted partner for eCommerce, wholesale solutions, digital
              marketing, and business consulting. With a customer-centric
              approach and a dedication to excellence, we help individuals and
              businesses achieve their goals across various industries. Our
              offerings include:
            </p>
            <ul className="grid gap-4 pl-2">
              {[
                "eCommerce",
                "Wholesale Solutions",
                "Digital Marketing & Advertising",
                "Operations and Management Services",
                "eCommerce and Private Label Consulting",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#f97316] mt-1" size={20} />
                  <span className="text-base text-gray-800 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-gray-600 max-w-xl">
              For more information regarding each of our offerings, please visit
              the relevant page. If you are interested in a product or service
              we have to offer, please visit the “contact” page and reach out to
              us today.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-80 max-w-md mx-auto lg:mx-0 rounded-[1.5rem] overflow-hidden shadow-xl hover:shadow-purple-200 transition-shadow duration-500">
            <img
              src={PeopleImage}
              alt="Professional discussion"
              className="w-80 h-96 object-cover scale-[1.01] hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsHero;
