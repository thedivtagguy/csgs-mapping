const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        divpurple: "#623cea",
        divorange: "#f85e00"
        // ...
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        lora: ["Lora", "serif"]
    }
  },
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [
    require('flowbite/plugin')
  ],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production // disable purge in dev
  }
};