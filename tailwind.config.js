/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class", // Cambiado a 'class' para control manual del dark mode
  theme: {
    extend: {
      colors: {
        // Paleta de colores moderna inspirada en café
        primario: {
          DEFAULT: "#8B5A3C",
          light: "#A67C5D",
          dark: "#6B4423",
          50: "#F8F5F2",
          100: "#EDDCC9",
          200: "#D4B5A0",
          300: "#BB8E77",
          400: "#A67C5D",
          500: "#8B5A3C",
          600: "#6B4423",
          700: "#4D2F18",
          800: "#2F1D10",
          900: "#1A0F08",
        },
        cafe: {
          cream: "#F5E6D3",
          latte: "#D4A574",
          espresso: "#3E2723",
          beans: "#6D4C41",
        },
        blanco: "#ffffff",
        negro: "#0F0F0F",
        gris: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        heading: ['"PT Sans"', "sans-serif"],
        parrafos: ['"Open Sans"', "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(139, 90, 60, 0.5), 0 0 10px rgba(139, 90, 60, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(139, 90, 60, 0.8), 0 0 30px rgba(139, 90, 60, 0.5)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px rgba(139, 90, 60, 0.5)",
        "glow-lg": "0 0 40px rgba(139, 90, 60, 0.6)",
      },
    },
  },
  plugins: [],
};
