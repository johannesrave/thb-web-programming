/** @type {import('@sveltejs/kit').Config} */
import adapter_static from '@sveltejs/adapter-static';
import windicss from 'svelte-windicss-preprocess';
import sveltePreprocess from 'svelte-preprocess';

const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],

	kit: {
		adapter: adapter_static({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		appDir: '_app',
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		hydrate: true,
		paths: {
			assets: '',
			base: '/~rave/test/svelte/build/'
		},
		prerender: {
			crawl: true,
			enabled: true,
			force: false,
			pages: ['*']
		},
		router: true,
		ssr: true,
		// target: null,
		vite: () => ({})
	},

	// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
	preprocess: [
		windicss.preprocess({
			kit: true,
			config: "windi.config.cjs",
		}),
		sveltePreprocess()],
};

export default config;
/*
const windicss = require("svelte-windicss-preprocess").preprocess;
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';
import adapter_static from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
/*
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
*/
