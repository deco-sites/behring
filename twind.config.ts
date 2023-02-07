/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins:{
    "mask":{
      "-webkit-mask-image": 'url(/mascara.png)',
      "-webkit-mask-size": "contain",
      "-webkit-mask-repeat": "no-repeat",
      "-webkit-mask-position": "left center"
    }
  },
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "uw": "1900px"
      },
      colors: {
        primary: "#0E649F",
        "secondary": "#00B030",
        transparent: "transparent",
        "white": "white",
        "gray": "#707070",
        "black": "black"
      },
    },
  },
};
