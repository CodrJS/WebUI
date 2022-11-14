const disabledCss = {
  "code::before": "",
  "code::after": "",
  "blockquote p:first-of-type::before": "",
  "blockquote p:last-of-type::after": "",
  pre: "",
  code: "",
  "pre code": "",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: disabledCss,
        sm: disabledCss,
        lg: disabledCss,
        xl: disabledCss,
        "2xl": disabledCss,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
