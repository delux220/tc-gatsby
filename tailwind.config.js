module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
  	fontFamily: {
    		sans: ['"Poppins"', 'sans-serif'],
    		poppins: ['Poppins', 'sans']
    	},
    extend: {
      fadeIn: "fadeIn 2s ease-in forwards",
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
    	fontFamily: {
    		sans: ['"Poppins"', 'sans-serif'],
    		poppins: ['Poppins', 'sans']
    	}
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
