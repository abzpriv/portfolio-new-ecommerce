// src/components/SocialSliderSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import Facebook from "../assests/facebook.png";
import Instagram from "../assests/instagram.png";
import X from "../assests/x.png";
import TikTok from "../assests/tictok.png";
import Snapchat from "../assests/snapchat.png";
import Ebay from "../assests/ebay.png";
import Amazon from "../assests/amazon.png";
import Shopify from "../assests/shopify.png";

const platforms = [
  { id: 1, src: Facebook, alt: "Facebook" },
  { id: 2, src: Instagram, alt: "Instagram" },
  { id: 3, src: X, alt: "X" },
  { id: 4, src: TikTok, alt: "TikTok" },
  { id: 5, src: Snapchat, alt: "Snapchat" },
  { id: 6, src: Ebay, alt: "Ebay" },
  { id: 7, src: Amazon, alt: "Amazon" },
  { id: 8, src: Shopify, alt: "Shopify" },
];

const SocialSliderSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {platforms.map((platform) => (
            <div key={platform.id} className="flex justify-center">
              <img
                src={platform.src}
                alt={platform.alt}
                title={platform.alt}
                className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SocialSliderSection;
