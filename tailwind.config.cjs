const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        'pulse-border': {
          '0%': { boxShadow: '0 0 0 0 rgba(198, 92, 127, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(198, 92, 127, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(198, 92, 127, 0)' },
        },
      },
      animation: {
        'pulse-border': 'pulse-border 2s infinite',
      },
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