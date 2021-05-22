import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\" class=\"w-screen\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n<!--\t\t<base href=\"informatik.th-brandenburg.de/%7erave/svelte_test/\">-->\n<!--\t\t<link rel=\"icon\" href=\"/favicon.ico\" />-->\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<title></title>\n\t\t" + head + "\n\t</head>\n\t<body class=\"w-screen\">\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-b740f1f0.js",
			css: ["/./_app/assets/start-b03585a8.css"],
			js: ["/./_app/start-b740f1f0.js","/./_app/chunks/vendor-d2289a14.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: null,
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"img/map/drawing.svg","size":100282,"type":"image/svg+xml"},{"file":"img/map/mapFromFigma.svg","size":1132,"type":"image/svg+xml"},{"file":"img/map/map_split.svg","size":2849,"type":"image/svg+xml"},{"file":"img/map/Municipalities_in_Baden-Württemberg.svg","size":3111077,"type":"image/svg+xml"},{"file":"img/Patagotitan.1K.JPG","size":760065,"type":"image/jpeg"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/search\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/search/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/shop\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/shop.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/search/index.svelte": () => import("..\\..\\src\\routes\\search\\index.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte"),"src/routes/shop.svelte": () => import("..\\..\\src\\routes\\shop.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-6859b4fe.js","css":["/./_app/assets/pages/__layout.svelte-d2ef15dc.css"],"js":["/./_app/pages/__layout.svelte-6859b4fe.js","/./_app/chunks/vendor-d2289a14.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-6a004ed2.js","css":["/./_app/assets/error.svelte-5daa43d5.css"],"js":["/./_app/error.svelte-6a004ed2.js","/./_app/chunks/vendor-d2289a14.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-1d8f7b2b.js","css":["/./_app/assets/pages/index.svelte-12c49848.css"],"js":["/./_app/pages/index.svelte-1d8f7b2b.js","/./_app/chunks/vendor-d2289a14.js"],"styles":null},"src/routes/search/index.svelte":{"entry":"/./_app/pages/search/index.svelte-f82823ac.js","css":["/./_app/assets/BGMap-5f771499.css"],"js":["/./_app/pages/search/index.svelte-f82823ac.js","/./_app/chunks/vendor-d2289a14.js","/./_app/chunks/BGMap-e6746b81.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-d0b5593d.js","css":["/./_app/assets/pages/about.svelte-e651a10f.css","/./_app/assets/BGMap-5f771499.css"],"js":["/./_app/pages/about.svelte-d0b5593d.js","/./_app/chunks/vendor-d2289a14.js","/./_app/chunks/BGMap-e6746b81.js"],"styles":null},"src/routes/shop.svelte":{"entry":"/./_app/pages/shop.svelte-029b039b.js","css":[],"js":["/./_app/pages/shop.svelte-029b039b.js","/./_app/chunks/vendor-d2289a14.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}