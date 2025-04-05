import React from "react";
import {
  ShoppingCart,
  Warehouse,
  Megaphone,
  ArrowRight,
  Settings,
  Users2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "eCommerce",
    description:
      "We sell premium products on top platforms like Amazon, eBay, and TikTok Shop.",
    icon: <ShoppingCart className="h-10 w-10 text-[#f97316]" />,
  },
  {
    id: 2,
    title: "Wholesale Solutions",
    description:
      "We offer bulk sales and transportation solutions for wholesale products.",
    icon: <Warehouse className="h-10 w-10 text-[#f97316]" />,
  },
  {
    id: 3,
    title: "Digital Marketing & Advertising",
    description:
      "Boost your business with targeted ads on Meta, Snapchat, and TikTok.",
    icon: <Megaphone className="h-10 w-10 text-[#f97316]" />,
  },
  {
    id: 4,
    title: "Operations and Management Services",
    description:
      "Optimize your operations with our virtual assistant and support services.",
    icon: <Settings className="h-10 w-10 text-[#f97316]" />,
  },
  {
    id: 5,
    title: "eCommerce and Private Label Consulting",
    description:
      "Get expert guidance on launching and growing your eCommerce or private label brand.",
    icon: <Users2 className="h-10 w-10 text-[#f97316]" />,
  },
];

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const ServicesSection = () => {
  return (
    <section className="w-full bg-white py-28 px-4 md:px-20 xl:px-40">
      <div className="max-w-[1440px] mx-auto text-center">
        <p className="text-[#aa1a7b] font-semibold text-sm uppercase tracking-wide underline underline-offset-4">
          Our services
        </p>
        <h2 className="text-5xl xl:text-6xl font-extrabold text-gray-900 mt-4">
          What we can do for you?
        </h2>

        <div className="mt-20 grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group rounded-3xl border border-gray-200 shadow-xl p-10 flex flex-col gap-6 items-start hover:shadow-orange-200 transition duration-300 bg-white"
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
            >
              {service.icon}
              <h3 className="text-2xl font-bold text-gray-900">
                {service.id}. {service.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-auto flex items-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-full font-medium hover:bg-[#ea580c] transition text-sm xl:text-base">
                Read More <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
