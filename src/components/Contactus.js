// Contactus.jsx
import React from "react";
import { Phone, Mail } from "lucide-react";
import BgImage from "../assests/LandingImage1.png";
import AboutImage from "../assests/Contact.png";

const Contactus = () => {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0 bg-[#2d1545]/30 backdrop-blur-[1px] z-0" />

        <div className="relative z-10 max-w-[1440px] w-full grid lg:grid-cols-2 items-stretch px-6 md:px-20 py-36 gap-0">
          <div className="relative overflow-hidden rounded-tl-[4rem] shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
            <img
              src={AboutImage}
              alt="Contact Us"
              className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          <div className="bg-white text-[#1e1e1e] flex flex-col justify-center px-10 py-20 lg:py-32 rounded-bl-[5rem] shadow-2xl">
            <p className="text-[#aa1a7b] text-lg font-semibold underline underline-offset-4 mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Feel free to contact us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-white py-24 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#aa1a7b] mb-2 underline underline-offset-4">
                Our address
              </h3>
              <p className="text-gray-800">
                7806 Muncaster Mill Rd, Gaithersburg, MD, 20877
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#aa1a7b] mb-2 underline underline-offset-4">
                Call us
              </h3>
              <div className="flex items-center gap-2 text-[#f97316]">
                <Phone size={20} />
                <span className="text-gray-800">+1 (301) 288 6275</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#aa1a7b] mb-2 underline underline-offset-4">
                E-mail
              </h3>
              <div className="flex items-center gap-2 text-[#f97316]">
                <Mail size={20} />
                <span className="text-gray-800">support@abdtradingllc.com</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="space-y-6">
            <h3 className="text-2xl font-bold text-[#aa1a7b] mb-2 underline underline-offset-4">
              Send us a message
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-gray-100 text-sm text-gray-800 px-5 py-3 rounded-full w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your e-mail"
                className="bg-gray-100 text-sm text-gray-800 px-5 py-3 rounded-full w-full focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-100 text-sm text-gray-800 px-5 py-3 rounded-full w-full focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="bg-gray-100 text-sm text-gray-800 px-5 py-3 rounded-2xl w-full focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
            >
              Send a message
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
            Can’t find our location?
          </h2>
          <p className="text-lg text-[#9333ea] font-medium mb-8">
            <a
              href="https://www.google.com/maps/place/7806+Muncaster+Mill+Rd,+Gaithersburg,+MD+20877"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#ff9e1b]"
            >
              Click here for directions.
            </a>
          </p>
          <div className="w-full aspect-video overflow-hidden rounded-3xl border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.3282605441466!2d-77.1482053846504!3d39.15824397952747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b62c80ad379c65%3A0x2a6d728bf295e538!2s7806%20Muncaster%20Mill%20Rd%2C%20Gaithersburg%2C%20MD%2020877%2C%20USA!5e0!3m2!1sen!2sin!4v1712317091864!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              title="ABD Trading LLC Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
