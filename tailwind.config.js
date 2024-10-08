module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
  	
    extend: {
      animation: {
      fadeIn: "fadeIn 2s ease-in forwards",
      menuIn: "menuDown .2s ease-in forwards",
      rotate: "rotate .1s ease-in forwards"
      },
      keyframes: {
        rotate: {
          "0%": {transform: 'scale(0.8) translate(100px, 100px) rotate(2deg)', opacity: 0},
          "100%": {transform: 'scale(1) translate(0, 0) rotate(0deg)', opacity: 1}
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }, 
        menuDown: {
          "0%": {transform: 'translate(0, -100px)', opacity:0},
          "100%": {transform: 'translate(0, 0)', opacity:1},
        },
      }
      ,
    	fontFamily: {
    		sans: ['"Poppins"', 'sans-serif'],
    		poppins: ['Poppins', 'sans'],
        smooch: ['"Smooch Sans"', 'sans'],
        unica: ['veneer', 'sans']
    	}
    },
  },
  variants: {
      animation: ["motion-safe"]
  },
  plugins: []
}