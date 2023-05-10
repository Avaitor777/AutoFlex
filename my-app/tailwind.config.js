module.exports = {
  purge: ["./src/**/*.{js.jsx,ts,tsx}*, *./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "640px",
       // => @media (min.width: 640px) { ... }

      md: "760px",
       // => @media (min.width: 760px) { ... }
      
      lg:  "1024px",
       // => @media (min.width: 1024px) { ... }

      xl: "1280px", 
       // => @media (min.width: 1280px) { ... }

      "Zxl": "1536px",
       // => @media (min.width: 1536px) { ... }
      },
  },
  variants: {
     extend: {}
  },
  plugins: [],
};

// again too reference from git hub to set up this style. darly

