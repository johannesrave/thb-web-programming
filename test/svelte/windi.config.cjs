const colors = require('windicss/colors');
const plugin = require('windicss/plugin');

module.exports = {
	darkMode: "class", // or 'media'
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		colors: {
			gray: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,
		},
		fontFamily: {
			sans: ['Fira Code', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		}
	},
	variants: {},
	plugins: []
}