import React from "react";
import personImage from "../assests/person.jpg";
import warehouseImage from "../assests/warehouse.jpg";
import { BadgeCheck, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-r from-[#7c3aed] to-[#f97316] text-white">
      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto items-start">
        {/* Left Panel */}
        <div className="flex flex-col items-center gap-8 text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-white">
            Can I help you?
          </h3>
          <img
            src={personImage}
            alt="Support"
            className="w-52 h-52 rounded-full object-cover shadow-xl transition-all duration-300 hover:scale-105"
          />
          <div className="bg-[#ffece5] text-[#7a2e1e] text-base px-6 py-4 rounded-2xl font-medium shadow-xl transform transition-all hover:scale-105">
            Here to help you succeed—let us know how!
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center md:text-left flex flex-col gap-8">
          <h2 className="text-5xl font-black text-[#7c3aed] border-b-4 border-[#7c3aed] w-fit pb-3">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-white">
            Welcome to{" "}
            <span className="font-semibold text-[#ffbf47]">
              ABD Trading LLC
            </span>
            , your trusted partner for eCommerce, wholesale solutions, digital
            marketing, and business consulting. We provide tailored services to
            help businesses achieve their goals with excellence and a
            customer-focused approach.
          </p>
          <img
            src={warehouseImage}
            alt="Warehouse"
            className="w-full max-w-md mx-auto md:mx-0 rounded-3xl shadow-2xl transform transition-all hover:scale-105"
          />
          <button className="mt-6 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-full font-semibold w-fit transition-all duration-300 shadow-xl hover:scale-105">
            Read more about us
          </button>
        </div>

        {/* Right Feature Boxes */}
        <div className="flex flex-col gap-8">
          <div className="bg-[#7c3aed] rounded-3xl px-6 py-6 shadow-lg transform transition-all hover:scale-105 flex items-center gap-4">
            <BadgeCheck className="text-white shrink-0" size={28} />
            <p className="text-white font-semibold text-lg">
              Digital Marketing & Advertising
            </p>
          </div>
          <div className="bg-[#f97316] rounded-3xl px-6 py-6 shadow-lg transform transition-all hover:scale-105 flex items-center gap-4">
            <Users className="text-white shrink-0" size={28} />
            <p className="text-white font-semibold text-lg">
              Wholesale Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
