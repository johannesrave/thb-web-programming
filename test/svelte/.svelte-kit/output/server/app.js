import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, add_attribute} from "svelte/internal";
import {setContext, afterUpdate, onMount} from "svelte";
import {readable} from "svelte/store";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1gj78op{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$7 = {
  code: "#svelte-announcer.svelte-1gj78op{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: '{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<script>\\nimport { setContext, afterUpdate, onMount } from \\"svelte\\";\\n\\n// stores\\nexport let stores;\\nexport let page;\\n\\nexport let components;\\nexport let props_0 = null;\\nexport let props_1 = null;\\nexport let props_2 = null;\\n\\nsetContext(\\"__svelte__\\", stores);\\n\\n$: stores.page.set(page);\\nafterUpdate(stores.page.notify);\\n\\nlet mounted = false;\\nlet navigated = false;\\nlet title = null;\\n\\nonMount(() => {\\n  const unsubscribe = stores.page.subscribe(() => {\\n    if (mounted) {\\n      navigated = true;\\n      title = document.title || \\"untitled page\\";\\n    }\\n  });\\n\\n  mounted = true;\\n  return unsubscribe;\\n});\\n</script>\\n\\n<svelte:component this=\\"{components[0]}\\" {...props_0 || {}}>\\n  {#if components[1]}\\n    <svelte:component this=\\"{components[1]}\\" {...props_1 || {}}>\\n      {#if components[2]}\\n        <svelte:component this=\\"{components[2]}\\" {...props_2 || {}} />\\n      {/if}\\n    </svelte:component>\\n  {/if}\\n</svelte:component>\\n\\n{#if mounted}\\n  <div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n    {#if navigated}\\n      {title}\\n    {/if}\\n  </div>\\n{/if}\\n\\n\\n<style>\\n#svelte-announcer {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  clip: rect(0 0 0 0);\\n  clip-path: inset(50%);\\n  overflow: hidden;\\n  white-space: nowrap;\\n  width: 1px;\\n  height: 1px;\\n}\\n</style>"],"names":[],"mappings":"AAsDA,iBAAiB,eAAC,CAAC,AACjB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACb,CAAC"}'
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$7);
  {
    stores.page.set(page);
  }
  return `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1gj78op"}">${navigated ? `${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en" class="w-screen">\n	<head>\n		<meta charset="utf-8" />\n<!--		<base href="informatik.th-brandenburg.de/%7erave/svelte_test/">-->\n<!--		<link rel="icon" href="/favicon.ico" />-->\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		<title></title>\n		' + head + '\n	</head>\n	<body class="w-screen">\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-b740f1f0.js",
      css: ["/./_app/assets/start-b03585a8.css"],
      js: ["/./_app/start-b740f1f0.js", "/./_app/chunks/vendor-d2289a14.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: null,
    template,
    trailing_slash: "never"
  };
}
const empty = () => ({});
const manifest = {
  assets: [{"file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon"}, {"file": "img/map/drawing.svg", "size": 100282, "type": "image/svg+xml"}, {"file": "img/map/mapFromFigma.svg", "size": 1132, "type": "image/svg+xml"}, {"file": "img/map/map_split.svg", "size": 2849, "type": "image/svg+xml"}, {"file": "img/map/Municipalities_in_Baden-W\xFCrttemberg.svg", "size": 3111077, "type": "image/svg+xml"}, {"file": "img/Patagotitan.1K.JPG", "size": 760065, "type": "image/jpeg"}, {"file": "robots.txt", "size": 67, "type": "text/plain"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/search\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/search/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/shop\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/shop.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
const module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index$1;
  }),
  "src/routes/search/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/shop.svelte": () => Promise.resolve().then(function() {
    return shop;
  })
};
const metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-6859b4fe.js", "css": ["/./_app/assets/pages/__layout.svelte-d2ef15dc.css"], "js": ["/./_app/pages/__layout.svelte-6859b4fe.js", "/./_app/chunks/vendor-d2289a14.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-6a004ed2.js", "css": ["/./_app/assets/error.svelte-5daa43d5.css"], "js": ["/./_app/error.svelte-6a004ed2.js", "/./_app/chunks/vendor-d2289a14.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-1d8f7b2b.js", "css": ["/./_app/assets/pages/index.svelte-12c49848.css"], "js": ["/./_app/pages/index.svelte-1d8f7b2b.js", "/./_app/chunks/vendor-d2289a14.js"], "styles": null}, "src/routes/search/index.svelte": {"entry": "/./_app/pages/search/index.svelte-f82823ac.js", "css": ["/./_app/assets/BGMap-5f771499.css"], "js": ["/./_app/pages/search/index.svelte-f82823ac.js", "/./_app/chunks/vendor-d2289a14.js", "/./_app/chunks/BGMap-e6746b81.js"], "styles": null}, "src/routes/about.svelte": {"entry": "/./_app/pages/about.svelte-d0b5593d.js", "css": ["/./_app/assets/pages/about.svelte-e651a10f.css", "/./_app/assets/BGMap-5f771499.css"], "js": ["/./_app/pages/about.svelte-d0b5593d.js", "/./_app/chunks/vendor-d2289a14.js", "/./_app/chunks/BGMap-e6746b81.js"], "styles": null}, "src/routes/shop.svelte": {"entry": "/./_app/pages/shop.svelte-029b039b.js", "css": [], "js": ["/./_app/pages/shop.svelte-029b039b.js", "/./_app/chunks/vendor-d2289a14.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
var Nav_svelte_svelte_type_style_lang = "a.svelte-1xq5am0{align-self:center;width:100%;text-align:center;background-color:#2172cd;padding:.5rem}a.svelte-1xq5am0:hover{color:white;background-color:#094280}.flex.svelte-1xq5am0{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col.svelte-1xq5am0{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.place-self-center.svelte-1xq5am0{-ms-grid-row-align:center;-ms-grid-column-align:center;place-self:center}";
const css$6 = {
  code: "a.svelte-1xq5am0{align-self:center;width:100%;text-align:center;background-color:#2172cd;padding:.5rem}a.svelte-1xq5am0:hover{color:white;background-color:#094280}.flex.svelte-1xq5am0{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col.svelte-1xq5am0{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.place-self-center.svelte-1xq5am0{-ms-grid-row-align:center;-ms-grid-column-align:center;place-self:center}",
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<nav class=\\"flex flex-col place-self-center\\">\\n  <a href=\\"/\\"> INFO </a>\\n  <a href=\\"/search\\"> SUCHEN </a>\\n  <a href=\\"/shop\\"> KAUFEN </a>\\n</nav>\\n\\n\\n<style>\\na {\\n  align-self: center;\\n  width: 100%;\\n  text-align: center;\\n  background-color: #2172cd;\\n  padding: .5rem;\\n}\\na:hover {\\n  color: white;\\n  background-color: #094280;\\n}\\n.flex {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: -webkit-flex;\\n  display: flex;\\n}\\n.flex-col {\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n  -ms-flex-direction: column;\\n  -webkit-flex-direction: column;\\n  flex-direction: column;\\n}\\n.place-self-center {\\n  -ms-grid-row-align: center;\\n  -ms-grid-column-align: center;\\n  place-self: center;\\n}\\n</style>"],"names":[],"mappings":"AAQA,CAAC,eAAC,CAAC,AACD,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,AAChB,CAAC,AACD,gBAAC,MAAM,AAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AACD,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,SAAS,eAAC,CAAC,AACT,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CAC7B,kBAAkB,CAAE,MAAM,CAC1B,sBAAsB,CAAE,MAAM,CAC9B,cAAc,CAAE,MAAM,AACxB,CAAC,AACD,kBAAkB,eAAC,CAAC,AAClB,kBAAkB,CAAE,MAAM,CAC1B,qBAAqB,CAAE,MAAM,CAC7B,UAAU,CAAE,MAAM,AACpB,CAAC"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<nav class="${"flex flex-col place-self-center svelte-1xq5am0"}"><a href="${"/"}" class="${"svelte-1xq5am0"}">INFO </a>
  <a href="${"/search"}" class="${"svelte-1xq5am0"}">SUCHEN </a>
  <a href="${"/shop"}" class="${"svelte-1xq5am0"}">KAUFEN </a>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "#main-menu.svelte-i094co{grid-area:1 / 1;justify-self:end;align-self:center}#main-content.svelte-i094co{grid-area:1 / 1;justify-self:center;align-self:center}.grid.svelte-i094co{display:-ms-grid;display:grid}.place-items-center.svelte-i094co{place-items:center}.place-content-center.svelte-i094co{place-content:center}.h-screen.svelte-i094co{height:100vh}.h-full.svelte-i094co{height:100%}.overflow-hidden.svelte-i094co{overflow:hidden}.p-8.svelte-i094co{padding:2rem}.w-screen.svelte-i094co{width:100vw}.w-full.svelte-i094co{width:100%}.grid-cols-1.svelte-i094co{grid-template-columns:repeat(1, minmax(0, 1fr))}";
const css$5 = {
  code: "#main-menu.svelte-i094co{grid-area:1 / 1;justify-self:end;align-self:center}#main-content.svelte-i094co{grid-area:1 / 1;justify-self:center;align-self:center}.grid.svelte-i094co{display:-ms-grid;display:grid}.place-items-center.svelte-i094co{place-items:center}.place-content-center.svelte-i094co{place-content:center}.h-screen.svelte-i094co{height:100vh}.h-full.svelte-i094co{height:100%}.overflow-hidden.svelte-i094co{overflow:hidden}.p-8.svelte-i094co{padding:2rem}.w-screen.svelte-i094co{width:100vw}.w-full.svelte-i094co{width:100%}.grid-cols-1.svelte-i094co{grid-template-columns:repeat(1, minmax(0, 1fr))}",
  map: '{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Nav from \\"$lib/Nav.svelte\\";\\r\\n</script>\\n\\n<div class=\\"w-screen h-screen grid grid-cols-1 place-content-center place-items-center\\">\\n  <div id=\\"main-content\\" class=\\"w-full h-full overflow-hidden\\">\\n    <slot />\\n  </div>\\n\\n  <div id=\\"main-menu\\" class=\\"p-8\\">\\n    <Nav />\\n  </div>\\n</div>\\n\\n\\n<style>\\n#main-menu {\\n  grid-area: 1 / 1;\\n  justify-self: end;\\n  align-self: center;\\n}\\n#main-content {\\n  grid-area: 1 / 1;\\n  justify-self: center;\\n  align-self: center;\\n}\\n.grid {\\n  display: -ms-grid;\\n  display: grid;\\n}\\n.place-items-center {\\n  place-items: center;\\n}\\n.place-content-center {\\n  place-content: center;\\n}\\n.h-screen {\\n  height: 100vh;\\n}\\n.h-full {\\n  height: 100%;\\n}\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n.p-8 {\\n  padding: 2rem;\\n}\\n.w-screen {\\n  width: 100vw;\\n}\\n.w-full {\\n  width: 100%;\\n}\\n.grid-cols-1 {\\n  grid-template-columns: repeat(1, minmax(0, 1fr));\\n}\\n</style>"],"names":[],"mappings":"AAeA,UAAU,cAAC,CAAC,AACV,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAChB,YAAY,CAAE,GAAG,CACjB,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,aAAa,cAAC,CAAC,AACb,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAChB,YAAY,CAAE,MAAM,CACpB,UAAU,CAAE,MAAM,AACpB,CAAC,AACD,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,QAAQ,CACjB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,mBAAmB,cAAC,CAAC,AACnB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,qBAAqB,cAAC,CAAC,AACrB,aAAa,CAAE,MAAM,AACvB,CAAC,AACD,SAAS,cAAC,CAAC,AACT,MAAM,CAAE,KAAK,AACf,CAAC,AACD,OAAO,cAAC,CAAC,AACP,MAAM,CAAE,IAAI,AACd,CAAC,AACD,gBAAgB,cAAC,CAAC,AAChB,QAAQ,CAAE,MAAM,AAClB,CAAC,AACD,IAAI,cAAC,CAAC,AACJ,OAAO,CAAE,IAAI,AACf,CAAC,AACD,SAAS,cAAC,CAAC,AACT,KAAK,CAAE,KAAK,AACd,CAAC,AACD,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,IAAI,AACb,CAAC,AACD,YAAY,cAAC,CAAC,AACZ,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClD,CAAC"}'
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"w-screen h-screen grid grid-cols-1 place-content-center place-items-center svelte-i094co"}"><div id="${"main-content"}" class="${"w-full h-full overflow-hidden svelte-i094co"}">${slots.default ? slots.default({}) : ``}</div>

  <div id="${"main-menu"}" class="${"p-8 svelte-i094co"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
</div>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({error: error2, status}) {
  return {props: {error: error2, status}};
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<p>${escape(error2.message)}</p>

${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error,
  load
});
var index_svelte_svelte_type_style_lang = "main.svelte-1oxdy1j{width:100vw}.flex.svelte-1oxdy1j{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.place-items-center.svelte-1oxdy1j{place-items:center}";
const css$4 = {
  code: "main.svelte-1oxdy1j{width:100vw}.flex.svelte-1oxdy1j{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.place-items-center.svelte-1oxdy1j{place-items:center}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\"></script>\\n\\n<main class=\\"flex place-items-center\\">\\n  <p>Suchst du nach dem idealen Ticket f\xFCr deinen Bedarf? Klicke SUCHEN -> und wir sagen dir, was du kaufen solltest!</p>\\n</main>\\n\\n\\n<style>\\nmain {\\n  width: 100vw;\\n}\\n.flex {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: -webkit-flex;\\n  display: flex;\\n}\\n.place-items-center {\\n  place-items: center;\\n}\\n</style>"],"names":[],"mappings":"AAQA,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,KAAK,AACd,CAAC,AACD,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,mBAAmB,eAAC,CAAC,AACnB,WAAW,CAAE,MAAM,AACrB,CAAC"}'
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<main class="${"flex place-items-center svelte-1oxdy1j"}"><p>Suchst du nach dem idealen Ticket f\xFCr deinen Bedarf? Klicke SUCHEN -&gt; und wir sagen dir, was du kaufen solltest!</p>
</main>`;
});
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var StationPopup_svelte_svelte_type_style_lang = "circle.svelte-x3pl1h{fill:#ceff03}";
const css$3 = {
  code: "circle.svelte-x3pl1h{fill:#ceff03}",
  map: '{"version":3,"file":"StationPopup.svelte","sources":["StationPopup.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let cx = \\"0\\";\\r\\nexport let cy = \\"0\\";\\r\\n</script>\\n\\n<circle cx=\\"{cx}\\" cy=\\"{cy}\\" r=\\"20\\" class=\\"station\\"> </circle>\\n\\n\\n<style>\\ncircle {\\n  fill: #ceff03;\\n}\\n</style>"],"names":[],"mappings":"AAQA,MAAM,cAAC,CAAC,AACN,IAAI,CAAE,OAAO,AACf,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {cx = "0"} = $$props;
  let {cy = "0"} = $$props;
  if ($$props.cx === void 0 && $$bindings.cx && cx !== void 0)
    $$bindings.cx(cx);
  if ($$props.cy === void 0 && $$bindings.cy && cy !== void 0)
    $$bindings.cy(cy);
  $$result.css.add(css$3);
  return `<circle${add_attribute("cx", cx, 0)}${add_attribute("cy", cy, 0)} r="${"20"}" class="${"station svelte-x3pl1h"}"></circle>`;
});
var Station_svelte_svelte_type_style_lang = "circle.svelte-bjmqbb{stroke:white;fill:#9f0d56}circle.svelte-bjmqbb:hover{fill:white}";
const css$2 = {
  code: "circle.svelte-bjmqbb{stroke:white;fill:#9f0d56}circle.svelte-bjmqbb:hover{fill:white}",
  map: '{"version":3,"file":"Station.svelte","sources":["Station.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\r\\nimport StationPopup from \\"../lib/StationPopup.svelte\\";\\r\\nexport let x = \\"0\\";\\r\\nexport let y = \\"0\\";\\r\\nexport let name = \\"Unbekannte Station\\";\\r\\nlet root;\\r\\nfunction clickHandler() {\\r\\n    const options = {\\r\\n        target: root,\\r\\n        props: {\\r\\n            cx: x,\\r\\n            cy: y,\\r\\n        },\\r\\n    };\\r\\n    const newStation = new StationPopup(options);\\r\\n    console.log(\\"clicked station\\");\\r\\n}\\r\\nfunction hoverHandler() {\\r\\n    root.setAttribute(\\"r\\", \\"14\\");\\r\\n    // console.log(root.getAttribute(\\"r\\"))\\r\\n}\\r\\nfunction unhoverHandler() {\\r\\n    root.setAttribute(\\"r\\", \\"10\\");\\r\\n    // console.log(root.getAttribute(\\"r\\"))\\r\\n}\\r\\nonMount(() => {\\r\\n    console.log(\\"mounted station\\");\\r\\n});\\r\\n</script>\\n\\n<symbol bind:this=\\"{root}\\" on:mouseover=\\"{hoverHandler}\\" on:mouseout=\\"{unhoverHandler}\\" x=\\"{x}\\" y=\\"{y}\\">\\n  <circle on:click=\\"{clickHandler}\\" r=\\"10\\" class=\\"station\\"> </circle>\\n</symbol>\\n\\n\\n<style>\\ncircle {\\n  stroke: white;\\n  fill: #9f0d56;\\n}\\ncircle:hover {\\n  fill: white;\\n}\\n</style>"],"names":[],"mappings":"AAoCA,MAAM,cAAC,CAAC,AACN,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,OAAO,AACf,CAAC,AACD,oBAAM,MAAM,AAAC,CAAC,AACZ,IAAI,CAAE,KAAK,AACb,CAAC"}'
};
const Station = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {x = "0"} = $$props;
  let {y = "0"} = $$props;
  let {name = "Unbekannte Station"} = $$props;
  let root;
  onMount(() => {
    console.log("mounted station");
  });
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$2);
  return `<symbol${add_attribute("x", x, 0)}${add_attribute("y", y, 0)}${add_attribute("this", root, 1)}><circle r="${"10"}" class="${"station svelte-bjmqbb"}"></circle></symbol>`;
});
let planData = {
  west: {
    adjacent: ["nord", "sued", "zentrum"],
    stations: {
      19: {
        x: 48,
        y: 291
      },
      20: {
        x: 229,
        y: 264
      },
      21: {
        x: 283,
        y: 152
      },
      23: {
        x: 369,
        y: 278
      },
      24: {
        x: 360,
        y: 377
      },
      25: {
        x: 266,
        y: 480
      }
    }
  },
  nord: {
    adjacent: ["west", "nordost", "zentrum"],
    stations: {
      18: {
        x: 414,
        y: 197
      },
      22: {
        x: 335,
        y: 115
      }
    }
  },
  nordost: {
    adjacent: ["nord", "ost", "zentrum"],
    stations: {
      26: {
        x: 594,
        y: 152
      },
      16: {
        x: 838,
        y: 152
      },
      17: {
        x: 715,
        y: 78
      }
    }
  },
  ost: {
    adjacent: ["suedost", "nordost", "zentrum"],
    stations: {
      6: {
        x: 715,
        y: 253
      },
      7: {
        x: 813,
        y: 244
      },
      8: {
        x: 909,
        y: 273
      },
      9: {
        x: 900,
        y: 358
      }
    }
  },
  suedost: {
    adjacent: ["ost", "sued", "zentrum"],
    stations: {
      10: {
        x: 863,
        y: 434
      },
      11: {
        x: 715,
        y: 517
      },
      14: {
        x: 661,
        y: 425
      }
    }
  },
  sued: {
    adjacent: ["suedost", "west", "zentrum"],
    stations: {
      12: {
        x: 526,
        y: 460
      },
      13: {
        x: 586,
        y: 422
      },
      15: {
        x: 569,
        y: 338
      }
    }
  },
  zentrum: {
    adjacent: ["west", "nord", "nordost", "ost", "suedost", "sued"],
    stations: {
      2: {
        x: 557,
        y: 203
      },
      5: {
        x: 565,
        y: 264
      },
      3: {
        x: 652,
        y: 273
      },
      4: {
        x: 436,
        y: 244
      }
    }
  }
};
readable(planData, null);
var BGMap_svelte_svelte_type_style_lang = "svg.svelte-1q7x1ru path.svelte-1q7x1ru{fill:#a80c60;stroke:white;stroke-width:2px}svg.svelte-1q7x1ru path.svelte-1q7x1ru:hover{fill:#DA4567}";
const css$1 = {
  code: "svg.svelte-1q7x1ru path.svelte-1q7x1ru{fill:#a80c60;stroke:white;stroke-width:2px}svg.svelte-1q7x1ru path.svelte-1q7x1ru:hover{fill:#DA4567}",
  map: '{"version":3,"file":"Map.svelte","sources":["Map.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Station from \\"../lib/Station.svelte\\";\\r\\nimport { onMount } from \\"svelte\\";\\r\\nimport { planData } from \\"$lib/stores\\";\\r\\nlet plan;\\r\\nonMount(() => {\\r\\n    console.log(\\"mounted map\\");\\r\\n    const stadtteile = plan.children;\\r\\n    for (let stadtteil of stadtteile) {\\r\\n        const stadtteilName = stadtteil.classList[1];\\r\\n        for (let [station, coords] of Object.entries(planData[stadtteilName].stations)) {\\r\\n            const options = {\\r\\n                target: stadtteil,\\r\\n                props: {\\r\\n                    x: coords.x.toString(),\\r\\n                    y: coords.y.toString(),\\r\\n                },\\r\\n            };\\r\\n            // console.log(options)\\r\\n            const newStation = new Station(options);\\r\\n        }\\r\\n    }\\r\\n});\\r\\n</script>\\n\\n<main>\\n  <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 1002 558\\">\\n    <g bind:this=\\"{plan}\\" class=\\"map_split\\">\\n      <g class=\\"stadtteil west\\">\\n        <path stroke-width=\\"4\\" d=\\"M429 293L315.5 503.5h-68l-40-109.5L68 415.5l-65-151L225 244l40.5-147.5 148.5 132 15 64.5z\\" class=\\"west background\\"></path>\\n      </g>\\n      <g class=\\"stadtteil nordost\\">\\n        <path stroke-width=\\"4\\" d=\\"M566.5 171L669 230.078 798.5 205.5l71 44 106.5-21-100-104L716.5 56 577 111l-10.5 60z\\" class=\\"nordost background\\"></path>\\n      </g>\\n      <g class=\\"stadtteil nord\\">\\n        <path stroke-width=\\"4\\" d=\\"M566.5 171l10.5-60-97-25.5-49.5-69-95-13.5-70 93.5 148.5 132L566.5 171z\\" class=\\"nord background\\"></path>\\n      </g>\\n      <g class=\\"stadtteil ost\\">\\n        <path stroke-width=\\"4\\" d=\\"M680 316l-11-85.922L798.5 205.5l71 44 106.5-21 23 96-66.5 34-38 72L680 316z\\" class=\\"ost background\\"></path>\\n      </g>\\n      <g class=\\"stadtteil suedost\\">\\n        <path stroke-width=\\"4\\" d=\\"M680 316l-71 42.5 96.5 196 176-42 13-82L680 316z\\" class=\\"suedost background\\"></path>\\n      </g>\\n      <g class=\\"stadtteil sued\\">\\n        <path stroke-width=\\"4\\" d=\\"M429 293l102.5-10 77.5 75.5 96.5 196L429 465l-113.5 38.5L429 293z\\" class=\\"sued background\\"></path>\\n      </g>\\n      <g class=\\"stadtteil zentrum\\">\\n        <path stroke-width=\\"4\\" d=\\"M566.5 171L669 230.078 680 316l-71 42.5-77.5-75.5L429 293l-15-64.5L566.5 171z\\" class=\\"zentrum background\\"></path>\\n      </g>\\n    </g>\\n  </svg>\\n</main>\\n\\n\\n<style>\\nsvg path {\\n  fill: #a80c60;\\n  stroke: white;\\n  stroke-width: 2px;\\n}\\nsvg path:hover {\\n  fill: #DA4567;\\n}\\n</style>"],"names":[],"mappings":"AAsDA,kBAAG,CAAC,IAAI,eAAC,CAAC,AACR,IAAI,CAAE,OAAO,CACb,MAAM,CAAE,KAAK,CACb,YAAY,CAAE,GAAG,AACnB,CAAC,AACD,kBAAG,CAAC,mBAAI,MAAM,AAAC,CAAC,AACd,IAAI,CAAE,OAAO,AACf,CAAC"}'
};
const BGMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plan;
  onMount(() => {
    console.log("mounted map");
    const stadtteile = plan.children;
    for (let stadtteil of stadtteile) {
      const stadtteilName = stadtteil.classList[1];
      for (let [station, coords] of Object.entries(planData[stadtteilName].stations)) {
        const options2 = {
          target: stadtteil,
          props: {
            x: coords.x.toString(),
            y: coords.y.toString()
          }
        };
        new Station(options2);
      }
    }
  });
  $$result.css.add(css$1);
  return `<main><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1002 558"}" class="${"svelte-1q7x1ru"}"><g class="${"map_split"}"${add_attribute("this", plan, 1)}><g class="${"stadtteil west"}"><path stroke-width="${"4"}" d="${"M429 293L315.5 503.5h-68l-40-109.5L68 415.5l-65-151L225 244l40.5-147.5 148.5 132 15 64.5z"}" class="${"west background svelte-1q7x1ru"}"></path></g><g class="${"stadtteil nordost"}"><path stroke-width="${"4"}" d="${"M566.5 171L669 230.078 798.5 205.5l71 44 106.5-21-100-104L716.5 56 577 111l-10.5 60z"}" class="${"nordost background svelte-1q7x1ru"}"></path></g><g class="${"stadtteil nord"}"><path stroke-width="${"4"}" d="${"M566.5 171l10.5-60-97-25.5-49.5-69-95-13.5-70 93.5 148.5 132L566.5 171z"}" class="${"nord background svelte-1q7x1ru"}"></path></g><g class="${"stadtteil ost"}"><path stroke-width="${"4"}" d="${"M680 316l-11-85.922L798.5 205.5l71 44 106.5-21 23 96-66.5 34-38 72L680 316z"}" class="${"ost background svelte-1q7x1ru"}"></path></g><g class="${"stadtteil suedost"}"><path stroke-width="${"4"}" d="${"M680 316l-71 42.5 96.5 196 176-42 13-82L680 316z"}" class="${"suedost background svelte-1q7x1ru"}"></path></g><g class="${"stadtteil sued"}"><path stroke-width="${"4"}" d="${"M429 293l102.5-10 77.5 75.5 96.5 196L429 465l-113.5 38.5L429 293z"}" class="${"sued background svelte-1q7x1ru"}"></path></g><g class="${"stadtteil zentrum"}"><path stroke-width="${"4"}" d="${"M566.5 171L669 230.078 680 316l-71 42.5-77.5-75.5L429 293l-15-64.5L566.5 171z"}" class="${"zentrum background svelte-1q7x1ru"}"></path></g></g></svg>
</main>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(BGMap, "BGMap").$$render($$result, {}, {}, {})}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Search
});
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(BGMap, "BGMap").$$render($$result, {}, {}, {})}
</main>`;
});
var about_svelte_svelte_type_style_lang = ".grid.svelte-1m0zubt{display:-ms-grid;display:grid}";
const css = {
  code: ".grid.svelte-1m0zubt{display:-ms-grid;display:grid}",
  map: '{"version":3,"file":"about.svelte","sources":["about.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Map from \\"../lib/Map.svelte\\";\\r\\n</script>\\n\\n<main class=\\"grid grid-rows-[50px,800px]\\">\\n  <div>\\n    <h1>Willkommen beim Digitalen Ticketverkauf DTV!</h1>\\n  </div>\\n\\n  <Map />\\n</main>\\n\\n\\n<style>\\n.grid {\\n  display: -ms-grid;\\n  display: grid;\\n}\\n.grid-rows-\\\\[50px\\\\2c 800px\\\\] {\\n  grid-template-rows: 50px 800px;\\n}\\n</style>"],"names":[],"mappings":"AAaA,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,QAAQ,CACjB,OAAO,CAAE,IAAI,AACf,CAAC"}'
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"grid grid-rows-[50px,800px] svelte-1m0zubt"}"><div><h1>Willkommen beim Digitalen Ticketverkauf DTV!</h1></div>

  ${validate_component(Map, "Map").$$render($$result, {}, {}, {})}
</main>`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About
});
const Shop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>SHOP</h1>`;
});
var shop = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Shop
});
export {init, render};
