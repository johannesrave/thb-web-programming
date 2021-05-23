import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\" class=\"w-screen\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n<!--\t\t<base href=\"informatik.th-brandenburg.de/%7erave/svelte_test/\">-->\r\n<!--\t\t<link rel=\"icon\" href=\"/favicon.ico\" />-->\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Exo+2:wght@100..900\" rel=\"stylesheet\">\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@100..900\" rel=\"stylesheet\">\r\n\t\t<title></title>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body class=\"w-screen\">\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";

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
			file: "/./_app/start-37bc4709.js",
			css: ["/./_app/assets/start-b03585a8.css"],
			js: ["/./_app/start-37bc4709.js","/./_app/chunks/vendor-63b5ff16.js"]
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
						a: ["src/routes/__layout.svelte", "src/routes/search.svelte"],
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
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/search.svelte": () => import("..\\..\\src\\routes\\search.svelte"),"src/routes/shop.svelte": () => import("..\\..\\src\\routes\\shop.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-c08a4bd6.js","css":["/./_app/assets/pages/__layout.svelte-100704f5.css"],"js":["/./_app/pages/__layout.svelte-c08a4bd6.js","/./_app/chunks/vendor-63b5ff16.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-5b0296e9.js","css":[],"js":["/./_app/error.svelte-5b0296e9.js","/./_app/chunks/vendor-63b5ff16.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-b044d187.js","css":[],"js":["/./_app/pages/index.svelte-b044d187.js","/./_app/chunks/vendor-63b5ff16.js"],"styles":null},"src/routes/search.svelte":{"entry":"/./_app/pages/search.svelte-abf17c03.js","css":["/./_app/assets/pages/search.svelte-534312bb.css"],"js":["/./_app/pages/search.svelte-abf17c03.js","/./_app/chunks/vendor-63b5ff16.js"],"styles":null},"src/routes/shop.svelte":{"entry":"/./_app/pages/shop.svelte-35b997f9.js","css":[],"js":["/./_app/pages/shop.svelte-35b997f9.js","/./_app/chunks/vendor-63b5ff16.js"],"styles":null}};

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