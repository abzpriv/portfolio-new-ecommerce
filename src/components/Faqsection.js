import React from "react";
import { ChevronDown } from "lucide-react";
import { Disclosure } from "@headlessui/react";
import faqImage from "../assests/Imagefaq.jpg";

const faqs = [
  {
    question: "What eCommerce platforms does ABD Trading LLC operate on?",
    answer:
      "We operate across Amazon, eBay, TikTok Shop, and several niche marketplaces to maximize exposure and sales.",
  },
  {
    question: "Do you offer dropshipping services for wholesale products?",
    answer:
      "Yes, we provide efficient dropshipping and fulfillment solutions for bulk wholesale buyers globally.",
  },
  {
    question: "What digital marketing services do you provide?",
    answer:
      "We offer Meta ads, TikTok ads, influencer campaigns, SEO, email marketing and analytics reporting.",
  },
  {
    question: "Can you help start a private label or eCommerce business?",
    answer:
      "Absolutely! From sourcing to branding and selling, we guide your entire private label journey.",
  },
  {
    question: "What operational and management services do you offer?",
    answer:
      "Our team handles virtual assistant management, product listings, order fulfillment and customer support.",
  },
];

const FaqSection = () => {
  return (
    <section className="w-full bg-[#8b2c6d] text-white py-20 px-4 sm:px-6 md:px-10 xl:px-36">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* FAQ Left Content */}
        <div>
          <p className="text-orange-300 font-medium tracking-wide underline underline-offset-4 text-base sm:text-lg">
            Do you have any problem?
          </p>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold mt-4 mb-10 leading-tight">
            Questions and answers
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Disclosure key={i}>
                {({ open }) => (
                  <div className="bg-[#9d3d80] rounded-xl">
                    <Disclosure.Button className="flex justify-between w-full items-center text-left px-5 sm:px-6 py-5 font-semibold text-white hover:text-orange-300 transition">
                      <span className="text-sm sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5 sm:px-6 pb-5 pt-1 text-sm text-white text-opacity-90">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src={faqImage}
            alt="FAQ"
            className="rounded-3xl w-full max-w-md mx-auto shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
