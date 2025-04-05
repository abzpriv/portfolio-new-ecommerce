import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      {" "}
      {/* Top Bar */}
      <div className="w-full h-32 bg-[#2a1345]" />
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-24 text-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold italic mb-2">
              Privacy Policy
            </h1>
            <nav className="text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Privacy Policy</span>
            </nav>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Who we are
            </h2>

            <p className="text-base md:text-lg mb-6">
              Our website address is:{" "}
              <a
                href="https://abdtradingllc.com"
                className="text-[#ff9e1b] hover:underline"
              >
                https://abdtradingllc.com/
              </a>
            </p>

            <p className="text-base md:text-lg mb-4">
              At <strong>ABD Trading LLC</strong>, we are committed to
              protecting your privacy. We prioritize the security of your
              personal and business information, ensuring compliance with all
              applicable privacy laws and regulations. Our privacy policy
              explains how we collect, use, and protect your data:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
              <li>
                We collect only the necessary information for order processing
                and improving your experience.
              </li>
              <li>
                Without your consent, we do not sell or share your data with
                third parties.
              </li>
              <li>
                All personal information is securely stored using advanced
                encryption methods.
              </li>
            </ul>

            <p className="text-base md:text-lg mt-6">
              For full details, please review our{" "}
              <strong>Privacy Policy</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
