module.exports = {
	content: [
		'./templates/**/*.html'
	],
	theme: {
		extend: {
			colors:{
				'gptgreen':'#F9F9F9',
				'btn-green':'#10A37F',
				'btn-dark':'#229677'
			}
		},
	
	},
	plugins: [],
}

// if there is appname
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app-name/templates/app-name/**/*.html',
//     // Add paths to other apps if necessary
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };