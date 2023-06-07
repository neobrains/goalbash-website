/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'tt-norms-pro': ['TT Norms Pro', 'sans-serif']
			},
			fontWeight: {
				thin: 100,
				extralight: 200,
				regular: 400,
				medium: 500,
				bold: 700,
				extrabold: 800,
				black: 900,
				extrablack: 950
			},
			colors: {}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
