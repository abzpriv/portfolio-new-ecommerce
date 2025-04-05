import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
      <div className="w-full h-32 bg-[#2a1345]" />
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-24 text-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold italic mb-2">
              Terms And Conditions
            </h1>
            <nav className="text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Terms & Conditions</span>
            </nav>

            <p className="text-base md:text-lg mb-6">
              By using our services, you agree to our{" "}
              <strong>Terms and Conditions</strong>, which govern the use of our
              website and services.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Terms:</h2>

            <ul className="list-disc pl-6 space-y-4 text-base md:text-lg">
              <li>
                <strong>E-Commerce Orders:</strong> We require{" "}
                <strong>50/50 advance payment</strong> for digital services and
                e-commerce orders. Half of the payment is due upfront, and the
                remainder is due upon completion of the service or order.
              </li>
              <li>
                <strong>Wholesale Orders:</strong> For wholesale transactions,
                we require <strong>full advance payment</strong> before
                shipment.
              </li>
              <li>
                <strong>Digital Services:</strong> A{" "}
                <strong>Full Advance payment</strong> policy applies to all
                digital services to ensure the quality and timely delivery of
                services.
              </li>
              <li>
                <strong>Order Fulfillment:</strong> We strive to fulfill all
                orders promptly. Should any delays occur, we will notify you in
                advance.
              </li>
            </ul>

            <p className="mt-6 text-base md:text-lg">
              Please review our full <strong>Terms and Conditions</strong> for
              further details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
