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
			base: ''
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