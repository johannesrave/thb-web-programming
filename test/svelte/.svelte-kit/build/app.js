import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\" class=\"w-screen\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n<!--\t\t<base href=\"informatik.th-brandenburg.de/%7erave/svelte_test/\">-->\n\t\t<link rel=\"icon\" href=\"/favicon.ico\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<title></title>\n\t\t" + head + "\n\t</head>\n\t<body class=\"w-screen\">\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

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
			file: "/~rave/test/svelte/build/_app/start-c1aeb12a.js",
			css: ["/~rave/test/svelte/build/_app/assets/start-b03585a8.css"],
			js: ["/~rave/test/svelte/build/_app/start-c1aeb12a.js","/~rave/test/svelte/build/_app/chunks/vendor-0a9c50a4.js","/~rave/test/svelte/build/_app/chunks/paths-45dac81d.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/~rave/test/svelte/build/_app/" + entry_lookup[id],
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
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1150,"type":"image/vnd.microsoft.icon"},{"file":"img/map/drawing.svg","size":100310,"type":"image/svg+xml"},{"file":"img/map/Municipalities_in_Baden-Württemberg.svg","size":3111077,"type":"image/svg+xml"},{"file":"img/Patagotitan.1K.JPG","size":760065,"type":"image/jpeg"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/$layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/about.svelte"],
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
	"src/routes/$layout.svelte": () => import("..\\..\\src\\routes\\$layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/about.svelte": () => import("..\\..\\src\\routes\\about.svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/~rave/test/svelte/build/_app/pages/$layout.svelte-6cd08ab9.js","css":["/~rave/test/svelte/build/_app/assets/pages/$layout.svelte-a0e0bbb9.css"],"js":["/~rave/test/svelte/build/_app/pages/$layout.svelte-6cd08ab9.js","/~rave/test/svelte/build/_app/chunks/vendor-0a9c50a4.js","/~rave/test/svelte/build/_app/chunks/paths-45dac81d.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/~rave/test/svelte/build/_app/error.svelte-a02ea909.js","css":[],"js":["/~rave/test/svelte/build/_app/error.svelte-a02ea909.js","/~rave/test/svelte/build/_app/chunks/vendor-0a9c50a4.js"],"styles":null},"src/routes/index.svelte":{"entry":"/~rave/test/svelte/build/_app/pages/index.svelte-3d340303.js","css":["/~rave/test/svelte/build/_app/assets/pages/index.svelte-1b8632ae.css","/~rave/test/svelte/build/_app/assets/Map-f7f56350.css"],"js":["/~rave/test/svelte/build/_app/pages/index.svelte-3d340303.js","/~rave/test/svelte/build/_app/chunks/vendor-0a9c50a4.js","/~rave/test/svelte/build/_app/chunks/Map-06f0eb3a.js"],"styles":null},"src/routes/about.svelte":{"entry":"/~rave/test/svelte/build/_app/pages/about.svelte-d6a6eb93.js","css":["/~rave/test/svelte/build/_app/assets/pages/index.svelte-1b8632ae.css","/~rave/test/svelte/build/_app/assets/Map-f7f56350.css"],"js":["/~rave/test/svelte/build/_app/pages/about.svelte-d6a6eb93.js","/~rave/test/svelte/build/_app/chunks/vendor-0a9c50a4.js","/~rave/test/svelte/build/_app/chunks/Map-06f0eb3a.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"/~rave/test/svelte/build/","assets":"/~rave/test/svelte/build"} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}