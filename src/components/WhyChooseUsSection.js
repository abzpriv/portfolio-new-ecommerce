import React from "react";
import WhyImage from "../assests/whyus.jpg";

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-purple-50 to-orange-50 py-28 px-6 md:px-16 xl:px-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why choose us?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choose{" "}
            <span className="font-semibold text-[#7c3aed]">
              ABD Trading LLC
            </span>{" "}
            for our unmatched expertise, customer-centric approach, and
            commitment to excellence. We provide tailored solutions in
            eCommerce, wholesale, digital marketing, and business consulting to
            help you achieve your goals. With a proven track record across
            industries, we are dedicated to delivering results that drive your
            success.
          </p>
          <button className="w-fit bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105">
            Contact us
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={WhyImage}
            alt="Why choose us"
            className="rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
