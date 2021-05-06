const windicss = require("svelte-windicss-preprocess").preprocess;
const sveltePreprocess = require('svelte-preprocess');
// const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
const adapter_static = require('@sveltejs/adapter-static');


/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		windicss({
			kit: true,
			config: "windi.config.cjs",
		}),
		sveltePreprocess()],
	kit: {
		adapter: adapter_static(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		paths: {
			assets: '',
			base: '/~rave/test/svelte/build/'
			// base: ''
		},
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
