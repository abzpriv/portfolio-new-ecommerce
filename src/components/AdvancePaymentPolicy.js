import React from "react";
import { Link } from "react-router-dom";

const AdvancePaymentPolicy = () => {
  return (
    <>
      {/* Top Bar Section */}
      <div className="w-full h-32 bg-[#2a1345]" />

      <section className="bg-[#f9f9f9] py-16 px-6 md:px-24 text-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold italic mb-2">
              Advance Payment Policy
            </h1>
            <nav className="text-sm text-gray-500">
              <Link to="/" className="hover:underline">
                Home
              </Link>{" "}
              <span className="mx-2">/</span>
              <span>Advance Payment Policy</span>
            </nav>
          </div>

          {/* Content */}
          <div className="text-base md:text-lg leading-relaxed space-y-6 bg-white p-6 md:p-10 rounded-2xl shadow-xl">
            <p>
              To ensure a smooth transaction process and protect both parties,
              we have established the following payment policies:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Wholesale Transactions:</strong> Full advance payment is
                required before shipment of any products.
              </li>
              <li>
                <strong>Digital Services:</strong> For digital services, we use
                a <strong>Full advance payment</strong> policy. These payment
                structures help ensure that we can focus on providing the best
                service and results for your business.
              </li>
            </ul>
            <p>
              Thank you for choosing <strong>ABD Trading LLC</strong>. We are
              here to support your success in both <strong>eCommerce</strong>{" "}
              and <strong>digital services</strong>. We look forward to being
              your trusted partner for growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancePaymentPolicy;
