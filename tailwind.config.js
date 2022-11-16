/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: theme("colors.gray.100"),
              borderRadius: theme("borderRadius.sm"),
              paddingTop: theme("padding[1]"),
              paddingRight: theme("padding[1.5]"),
              paddingBottom: theme("padding[1]"),
              paddingLeft: theme("padding[1.5]"),
              fontWeight: "normal",
            },
            "code::before": {
              content: "normal",
            },
            "code::after": {
              content: "normal",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
