// src/components/FooterSection.jsx
import React from "react";
import { ChevronUp } from "lucide-react";
// import logo from "../assests/logo.svg";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="bg-[#2d1545] text-white pt-20 pb-10 px-6 md:px-20 xl:px-36 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {/* Logo + Address */}
        <div className="flex flex-col gap-4">
          {/* <img src={logo} alt="ABD Logo" className="h-12 w-auto" /> */}
          <p className="text-sm leading-relaxed text-white/80">
            7806 Muncaster
            <br />
            Mill Rd, Gaithersburg
            <br />
            MD, 20877
          </p>
        </div>

        {/* Help Center */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold border-b-2 border-pink-500 w-fit pb-1">
            Help Center
          </h3>
          <div>
            <p className="font-medium text-white">Call Us</p>
            <p className="text-sm text-white/90">+1 (301) 288–6275</p>
          </div>
          <div>
            <p className="font-medium text-white">E-mail</p>
            <p className="text-sm text-white/90">support@abdtradingllc.com</p>
          </div>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Our Policies</h3>
          <ul className="text-sm space-y-2 text-[#ff9e1b]">
            <li>
              <Link to="/advance-payment-policy" className="hover:underline">
                Advance Payment Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-condition" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
        <p>
          © 2024 All Right Reserved by{" "}
          <span className="font-semibold text-white">ABD TRADING LLC</span>
        </p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About us</li>
          <li className="hover:text-white cursor-pointer">Our Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
          <li className="hover:text-white cursor-pointer">
            <ChevronUp className="h-5 w-5" />
          </li>
        </ul>
      </div>

      {/* Accent Shapes */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#f97316] rounded-full blur-[180px] opacity-20 z-0" />
      <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-[#f97316] rounded-tr-[120px] rounded-tl-[0] rounded-br-[0] rounded-bl-[120px] z-0" />
    </footer>
  );
};

export default FooterSection;
