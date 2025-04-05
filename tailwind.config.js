module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all React files in src
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans files in components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Garamond", "serif"], // Custom Garamond font
      },
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out", // Adding the custom animation
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
