module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '375px',
			xl: '1440px'
		},
		colors: {
			primary: 'hsl(180, 66%, 49%)',
			secondary: 'hsl(257, 27%, 26%)',
			warning: 'hsl(0, 87%, 67%)',
			neutral: {
				100: 'hsl(0, 0%, 75%)',
				200: 'hsl(257, 7%, 63%)',
				700: 'hsl(255, 11%, 22%)',
				900: 'hsl(260, 8%, 14%)'
			}
		},
		extend: {}
	},
	plugins: []
};
