/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme : {
    extend : {
      fontFamily : {
        Urbanist : ["Urbanist", 'san-serif']
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFE41C",

          secondary: "#F8f8fa",

          accent: "#C5c4ca",

          neutral: "#1E293B",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
