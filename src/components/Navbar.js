import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-16 ${
        scrolled
          ? "md:bg-[#2d1545]/90 md:backdrop-blur-md py-2 md:shadow-lg bg-[#2d1545]"
          : "md:bg-transparent py-4 bg-[#2d1545]"
      }`}
    >
      <div className="flex items-center text-white justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto md:h-12" />
          <div className="text-left leading-tight">
            <h1 className="text-lg font-bold md:text-2xl">
              ABD
              <br />
              TRADING LLC
            </h1>
            <p className="text-xs md:text-sm text-purple-200 uppercase tracking-widest">
              Solutions That Drive Success
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 font-medium text-sm relative">
          <a href="/" className="hover:text-[#ff9e1b] transition">
            Home
          </a>
          <a href="/about" className="hover:text-[#ff9e1b] transition">
            About us
          </a>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#ff9e1b] transition">
              Our Services <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-[#2d1545] rounded-xl shadow-xl p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
              <ul className="space-y-3 font-medium">
                <li>
                  <a
                    href="/services-eCommerce"
                    className="hover:text-[#ff9e1b]"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a href="/service-Wholesale" className="hover:text-[#ff9e1b]">
                    Wholesale Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/service-digitalMarketing"
                    className="hover:text-[#ff9e1b]"
                  >
                    Digital Marketing & Advertising
                  </a>
                </li>
                <li>
                  <a
                    href="/service-operations"
                    className="hover:text-[#ff9e1b]"
                  >
                    Operations and Management Services
                  </a>
                </li>
                <li>
                  <a
                    href="/service-PrivateLabel"
                    className="hover:text-[#ff9e1b]"
                  >
                    eCommerce and Private Label Consulting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/contact" className="hover:text-[#ff9e1b] transition">
            Contact us
          </a>
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-[#4f326a] text-white font-semibold rounded-full px-6 py-2 hover:bg-[#ff9e1b] hover:text-[#2d1545] transition-all duration-300">
              Do you need help?
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Backdrop with mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[998]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleCloseMobileMenu}
          />
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-[#28113d] z-[999] transform transition-transform duration-300 ease-in-out p-6 text-white translate-x-0`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={handleCloseMobileMenu}>
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-3 font-medium text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "eCommerce", to: "/services-eCommerce" },
                { label: "Wholesale", to: "/service-Wholesale" },
                { label: "Marketing", to: "/service-digitalMarketing" },
                { label: "Ops & Mgmt", to: "/service-operations" },
                { label: "Private Label", to: "/service-PrivateLabel" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <a
                    href={item.to}
                    onClick={handleCloseMobileMenu}
                    className="block hover:text-[#ff9e1b]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="/contact">
                <button className="w-full bg-[#ff9e1b] text-[#2d1545] font-semibold py-2 rounded-full hover:bg-white hover:text-[#4f326a] transition-all duration-300">
                  Need Help?
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
