/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-light": ["Roboto-Light"],
        "roboto-regular": ["Roboto-Regular"],
        "roboto-medium": ["Roboto-Medium"],
        "roboto-bold": ["Roboto-Bold"],
        "roboto-black": ["Roboto-Black"],
        "outfit-light": ["Outfit-Light"],
        "outfit-regular": ["Outfit-Regular"],
        "outfit-medium": ["Outfit-Medium"],
        "outfit-bold": ["Outfit-Bold"],
        "outfit-black": ["Outfit-Black"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
