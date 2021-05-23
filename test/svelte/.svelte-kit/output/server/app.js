import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, add_attribute} from "svelte/internal";
import {setContext, afterUpdate, onMount} from "svelte";
import {readable} from "svelte/store";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1gj78op{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$4 = {
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
  $$result.css.add(css$4);
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
const template = ({head, body}) => '<!DOCTYPE html>\r\n<html lang="en" class="w-screen">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n<!--		<base href="informatik.th-brandenburg.de/%7erave/svelte_test/">-->\r\n<!--		<link rel="icon" href="/favicon.ico" />-->\r\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\r\n		<link rel="preconnect" href="https://fonts.gstatic.com">\r\n		<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100..900" rel="stylesheet">\r\n		<link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@100..900" rel="stylesheet">\r\n		<title></title>\r\n		' + head + '\r\n	</head>\r\n	<body class="w-screen">\r\n		<div id="svelte">' + body + "</div>\r\n	</body>\r\n</html>\r\n";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-37bc4709.js",
      css: ["/./_app/assets/start-b03585a8.css"],
      js: ["/./_app/start-37bc4709.js", "/./_app/chunks/vendor-63b5ff16.js"]
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
      a: ["src/routes/__layout.svelte", "src/routes/search.svelte"],
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
    return index;
  }),
  "src/routes/search.svelte": () => Promise.resolve().then(function() {
    return search;
  }),
  "src/routes/shop.svelte": () => Promise.resolve().then(function() {
    return shop;
  })
};
const metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-c08a4bd6.js", "css": ["/./_app/assets/pages/__layout.svelte-100704f5.css"], "js": ["/./_app/pages/__layout.svelte-c08a4bd6.js", "/./_app/chunks/vendor-63b5ff16.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-5b0296e9.js", "css": [], "js": ["/./_app/error.svelte-5b0296e9.js", "/./_app/chunks/vendor-63b5ff16.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-b044d187.js", "css": [], "js": ["/./_app/pages/index.svelte-b044d187.js", "/./_app/chunks/vendor-63b5ff16.js"], "styles": null}, "src/routes/search.svelte": {"entry": "/./_app/pages/search.svelte-abf17c03.js", "css": ["/./_app/assets/pages/search.svelte-534312bb.css"], "js": ["/./_app/pages/search.svelte-abf17c03.js", "/./_app/chunks/vendor-63b5ff16.js"], "styles": null}, "src/routes/shop.svelte": {"entry": "/./_app/pages/shop.svelte-35b997f9.js", "css": [], "js": ["/./_app/pages/shop.svelte-35b997f9.js", "/./_app/chunks/vendor-63b5ff16.js"], "styles": null}};
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
var Nav_svelte_svelte_type_style_lang = "div.svelte-17dmhg6{width:100vw;height:100vh;display:grid;align-items:center;justify-content:end;padding:32px}a.svelte-17dmhg6{text-align:center;background-color:#2172cd;padding:.5rem}a.svelte-17dmhg6:hover{color:white;background-color:#094280}.flex.svelte-17dmhg6{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col.svelte-17dmhg6{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.place-items-stretch.svelte-17dmhg6{place-items:stretch}.w-64.svelte-17dmhg6{width:16rem}";
const css$3 = {
  code: "div.svelte-17dmhg6{width:100vw;height:100vh;display:grid;align-items:center;justify-content:end;padding:32px}a.svelte-17dmhg6{text-align:center;background-color:#2172cd;padding:.5rem}a.svelte-17dmhg6:hover{color:white;background-color:#094280}.flex.svelte-17dmhg6{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col.svelte-17dmhg6{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.place-items-stretch.svelte-17dmhg6{place-items:stretch}.w-64.svelte-17dmhg6{width:16rem}",
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<div>\\n  <nav class=\\"flex flex-col place-items-stretch w-64\\">\\n    <a href=\\"/\\"> INFO </a>\\n    <a href=\\"/search\\"> SUCHEN </a>\\n    <a href=\\"/shop\\"> KAUFEN </a>\\n  </nav>\\n</div>\\n\\n\\n<style>\\ndiv {\\n  width: 100vw;\\n  height: 100vh;\\n  display: grid;\\n  align-items: center;\\n  justify-content: end;\\n  padding: 32px;\\n}\\na {\\n  text-align: center;\\n  background-color: #2172cd;\\n  padding: .5rem;\\n}\\na:hover {\\n  color: white;\\n  background-color: #094280;\\n}\\n.flex {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: -webkit-flex;\\n  display: flex;\\n}\\n.flex-col {\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n  -ms-flex-direction: column;\\n  -webkit-flex-direction: column;\\n  flex-direction: column;\\n}\\n.place-items-stretch {\\n  place-items: stretch;\\n}\\n.w-64 {\\n  width: 16rem;\\n}\\n</style>"],"names":[],"mappings":"AAUA,GAAG,eAAC,CAAC,AACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,GAAG,CACpB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,CAAC,eAAC,CAAC,AACD,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,AAChB,CAAC,AACD,gBAAC,MAAM,AAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AACD,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,SAAS,eAAC,CAAC,AACT,kBAAkB,CAAE,QAAQ,CAC5B,qBAAqB,CAAE,MAAM,CAC7B,kBAAkB,CAAE,MAAM,CAC1B,sBAAsB,CAAE,MAAM,CAC9B,cAAc,CAAE,MAAM,AACxB,CAAC,AACD,oBAAoB,eAAC,CAAC,AACpB,WAAW,CAAE,OAAO,AACtB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,KAAK,CAAE,KAAK,AACd,CAAC"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"svelte-17dmhg6"}"><nav class="${"flex flex-col place-items-stretch w-64 svelte-17dmhg6"}"><a href="${"/"}" class="${"svelte-17dmhg6"}">INFO </a>
    <a href="${"/search"}" class="${"svelte-17dmhg6"}">SUCHEN </a>
    <a href="${"/shop"}" class="${"svelte-17dmhg6"}">KAUFEN </a></nav>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "#main-menu.svelte-1dvdttx{grid-area:1 / 1}#main-content.svelte-1dvdttx{grid-area:1 / 1}.grid.svelte-1dvdttx{display:-ms-grid;display:grid}.place-items-center.svelte-1dvdttx{place-items:center}.place-content-center.svelte-1dvdttx{place-content:center}.h-screen.svelte-1dvdttx{height:100vh}.overflow-hidden.svelte-1dvdttx{overflow:hidden}.w-screen.svelte-1dvdttx{width:100vw}.grid-cols-1.svelte-1dvdttx{grid-template-columns:repeat(1, minmax(0, 1fr))}";
const css$2 = {
  code: "#main-menu.svelte-1dvdttx{grid-area:1 / 1}#main-content.svelte-1dvdttx{grid-area:1 / 1}.grid.svelte-1dvdttx{display:-ms-grid;display:grid}.place-items-center.svelte-1dvdttx{place-items:center}.place-content-center.svelte-1dvdttx{place-content:center}.h-screen.svelte-1dvdttx{height:100vh}.overflow-hidden.svelte-1dvdttx{overflow:hidden}.w-screen.svelte-1dvdttx{width:100vw}.grid-cols-1.svelte-1dvdttx{grid-template-columns:repeat(1, minmax(0, 1fr))}",
  map: '{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Nav from \\"$lib/Nav.svelte\\";\\r\\n</script>\\n\\n<div class=\\"w-screen h-screen grid grid-cols-1 place-content-center place-items-center\\">\\n  <div id=\\"main-content\\" class=\\"w-screen h-screen overflow-hidden\\">\\n    <slot />\\n  </div>\\n\\n  <div id=\\"main-menu\\" class=\\"w-screen h-screen\\">\\n    <Nav />\\n  </div>\\n</div>\\n\\n\\n<style>\\n#main-menu {\\n  grid-area: 1 / 1;\\n}\\n#main-content {\\n  grid-area: 1 / 1;\\n}\\n.grid {\\n  display: -ms-grid;\\n  display: grid;\\n}\\n.place-items-center {\\n  place-items: center;\\n}\\n.place-content-center {\\n  place-content: center;\\n}\\n.h-screen {\\n  height: 100vh;\\n}\\n.overflow-hidden {\\n  overflow: hidden;\\n}\\n.w-screen {\\n  width: 100vw;\\n}\\n.grid-cols-1 {\\n  grid-template-columns: repeat(1, minmax(0, 1fr));\\n}\\n</style>"],"names":[],"mappings":"AAeA,UAAU,eAAC,CAAC,AACV,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,AAClB,CAAC,AACD,aAAa,eAAC,CAAC,AACb,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,AAClB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,QAAQ,CACjB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,mBAAmB,eAAC,CAAC,AACnB,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,qBAAqB,eAAC,CAAC,AACrB,aAAa,CAAE,MAAM,AACvB,CAAC,AACD,SAAS,eAAC,CAAC,AACT,MAAM,CAAE,KAAK,AACf,CAAC,AACD,gBAAgB,eAAC,CAAC,AAChB,QAAQ,CAAE,MAAM,AAClB,CAAC,AACD,SAAS,eAAC,CAAC,AACT,KAAK,CAAE,KAAK,AACd,CAAC,AACD,YAAY,eAAC,CAAC,AACZ,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClD,CAAC"}'
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"w-screen h-screen grid grid-cols-1 place-content-center place-items-center svelte-1dvdttx"}"><div id="${"main-content"}" class="${"w-screen h-screen overflow-hidden svelte-1dvdttx"}">${slots.default ? slots.default({}) : ``}</div>

  <div id="${"main-menu"}" class="${"w-screen h-screen svelte-1dvdttx"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
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
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Suchst du nach dem idealen Ticket f\xFCr deinen Bedarf?<br>
  Klicke SUCHEN -&gt; und wir sagen dir, was du kaufen solltest!
</p>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var Station_svelte_svelte_type_style_lang = "circle.svelte-bjmqbb{stroke:white;fill:#9f0d56}circle.svelte-bjmqbb:hover{fill:white}";
const css$1 = {
  code: "circle.svelte-bjmqbb{stroke:white;fill:#9f0d56}circle.svelte-bjmqbb:hover{fill:white}",
  map: '{"version":3,"file":"Station.svelte","sources":["Station.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\r\\nexport let x = \\"0\\";\\r\\nexport let y = \\"0\\";\\r\\nexport let name = \\"Unbekannte Station\\";\\r\\nlet root;\\r\\nonMount(() => {\\r\\n    console.log(\\"Station mounted at \\" + x + \\", \\" + y);\\r\\n    console.log(this);\\r\\n});\\r\\nfunction clickHandler() {\\r\\n    const options = {\\r\\n        target: root,\\r\\n        props: {\\r\\n            cx: x,\\r\\n            cy: y,\\r\\n        },\\r\\n    };\\r\\n    // const newStation = new StationPopup(options);\\r\\n    console.log(\\"clicked station\\");\\r\\n}\\r\\nfunction hoverHandler() {\\r\\n    root.setAttribute(\\"r\\", \\"14\\");\\r\\n    // console.log(root.getAttribute(\\"r\\"))\\r\\n}\\r\\nfunction unhoverHandler() {\\r\\n    root.setAttribute(\\"r\\", \\"10\\");\\r\\n    // console.log(root.getAttribute(\\"r\\"))\\r\\n}\\r\\nonMount(() => {\\r\\n    console.log(\\"mounted station\\");\\r\\n});\\r\\n</script>\\n\\n<circle bind:this=\\"{root}\\" on:mouseover=\\"{hoverHandler}\\" on:mouseout=\\"{unhoverHandler}\\" on:click=\\"{clickHandler}\\" cx=\\"{x}\\" cy=\\"{y}\\" r=\\"10\\" class=\\"station\\"> </circle>\\n\\n\\n<style>\\ncircle {\\n  stroke: white;\\n  fill: #9f0d56;\\n}\\ncircle:hover {\\n  fill: white;\\n}\\n</style>"],"names":[],"mappings":"AAqCA,MAAM,cAAC,CAAC,AACN,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,OAAO,AACf,CAAC,AACD,oBAAM,MAAM,AAAC,CAAC,AACZ,IAAI,CAAE,KAAK,AACb,CAAC"}'
};
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {x = "0"} = $$props;
  let {y = "0"} = $$props;
  let {name = "Unbekannte Station"} = $$props;
  let root;
  onMount(() => {
    console.log("Station mounted at " + x + ", " + y);
    console.log(void 0);
  });
  onMount(() => {
    console.log("mounted station");
  });
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$1);
  return `<circle${add_attribute("cx", x, 0)}${add_attribute("cy", y, 0)} r="${"10"}" class="${"station svelte-bjmqbb"}"${add_attribute("this", root, 1)}></circle>`;
});
const Netzplan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onMount(() => {
    {
      console.log("not loaded");
    }
  });
  return `${$$result.head += `<script src="${"./svg-pan-zoom.min.js"}" data-svelte="svelte-1j174ho">// svg-pan-zoom v3.6.1
// https://github.com/ariutta/svg-pan-zoom
!function s(r,a,l){function u(e,t){if(!a[e]){if(!r[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(h)return h(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=a[e]={exports:{}};r[e][0].call(i.exports,function(t){return u(r[e][1][t]||t)},i,i.exports,s,r,a,l)}return a[e].exports}for(var h="function"==typeof require&&require,t=0;t<l.length;t++)u(l[t]);return u}({1:[function(t,e,o){var s=t("./svg-utilities");e.exports={enable:function(t){var e=t.svg.querySelector("defs");if(e||(e=document.createElementNS(s.svgNS,"defs"),t.svg.appendChild(e)),!e.querySelector("style#svg-pan-zoom-controls-styles")){var o=document.createElementNS(s.svgNS,"style");o.setAttribute("id","svg-pan-zoom-controls-styles"),o.setAttribute("type","text/css"),o.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(o)}var n=document.createElementNS(s.svgNS,"g");n.setAttribute("id","svg-pan-zoom-controls"),n.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),n.setAttribute("class","svg-pan-zoom-control"),n.appendChild(this._createZoomIn(t)),n.appendChild(this._createZoomReset(t)),n.appendChild(this._createZoomOut(t)),t.svg.appendChild(n),t.controlIcons=n},_createZoomIn:function(t){var e=document.createElementNS(s.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(s.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(s.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},_createZoomReset:function(t){var e=document.createElementNS(s.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(s.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(s.svgNS,"path");n.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n);var i=document.createElementNS(s.svgNS,"path");return i.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},_createZoomOut:function(t){var e=document.createElementNS(s.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(s.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(s.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}}},{"./svg-utilities":5}],2:[function(t,e,o){function n(t,e){this.init(t,e)}var i=t("./svg-utilities"),r=t("./utilities");n.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=r.proxy(this.updateCTM,this),this.requestAnimationFrame=r.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()},n.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\\s\\,]/).filter(function(t){return t}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()},n.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height},n.prototype.getViewBox=function(){return r.extend({},this.viewBox)},n.prototype.processCTM=function(){var t,e=this.getCTM();(this.options.fit||this.options.contain)&&(t=this.options.fit?Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),e.a=t,e.d=t,e.e=-this.viewBox.x*t,e.f=-this.viewBox.y*t);if(this.options.center){var o=.5*(this.options.width-(this.viewBox.width+2*this.viewBox.x)*e.a),n=.5*(this.options.height-(this.viewBox.height+2*this.viewBox.y)*e.a);e.e=o,e.f=n}return this.originalState.zoom=e.a,this.originalState.x=e.e,this.originalState.y=e.f,e},n.prototype.getOriginalState=function(){return r.extend({},this.originalState)},n.prototype.getState=function(){return r.extend({},this.activeState)},n.prototype.getZoom=function(){return this.activeState.zoom},n.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom},n.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom},n.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}},n.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t},n.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(!1===this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var n=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),i=!1,s=!1;!1===n?(t.e=this.getPan().x,t.f=this.getPan().y,i=s=!0):r.isObject(n)&&(!1===n.x?(t.e=this.getPan().x,i=!0):r.isNumber(n.x)&&(t.e=n.x),!1===n.y?(t.f=this.getPan().y,s=!0):r.isNumber(n.y)&&(t.f=n.y)),i&&s||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}},n.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a},n.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f},n.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f},n.prototype.pendingUpdate=!1,n.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))},n.prototype.updateCTM=function(){var t=this.getCTM();i.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)},e.exports=function(t,e){return new n(t,e)}},{"./svg-utilities":5,"./utilities":7}],3:[function(t,e,o){var n,i=t("./svg-pan-zoom.js");n=window,document,"function"==typeof define&&define.amd?define("svg-pan-zoom",function(){return i}):void 0!==e&&e.exports&&(e.exports=i,n.svgPanZoom=i)},{"./svg-pan-zoom.js":4}],4:[function(t,e,o){function i(t,e){this.init(t,e)}var n=t("./uniwheel"),s=t("./control-icons"),r=t("./utilities"),a=t("./svg-utilities"),l=t("./shadow-viewport"),u={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},h={passive:!0};i.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),a.setupSvgAttributes(this.svg),this.options=r.extend(r.extend({},u),e),this.state="none";var n=a.getBoundingClientRectNormalized(t);this.width=n.width,this.height=n.height,this.viewport=l(a.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(t,e){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(t,e)},onZoom:function(t){if(o.viewport&&o.options.onZoom)return o.options.onZoom(t)},beforePan:function(t,e){if(o.viewport&&o.options.beforePan)return o.options.beforePan(t,e)},onPan:function(t){if(o.viewport&&o.options.onPan)return o.options.onPan(t)},onUpdatedCTM:function(t){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(t)}});var i=this.getPublicInstance();i.setBeforeZoom(this.options.beforeZoom),i.setOnZoom(this.options.onZoom),i.setBeforePan(this.options.beforePan),i.setOnPan(this.options.onPan),i.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&s.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()},i.prototype.setupHandlers=function(){var o=this,n=null;if(this.eventListeners={mousedown:function(t){var e=o.handleMouseDown(t,n);return n=t,e},touchstart:function(t){var e=o.handleMouseDown(t,n);return n=t,e},mouseup:function(t){return o.handleMouseUp(t)},touchend:function(t){return o.handleMouseUp(t)},mousemove:function(t){return o.handleMouseMove(t)},touchmove:function(t){return o.handleMouseMove(t)},mouseleave:function(t){return o.handleMouseUp(t)},touchleave:function(t){return o.handleMouseUp(t)},touchcancel:function(t){return o.handleMouseUp(t)}},null!=this.options.customEventsHandler){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var t=this.options.customEventsHandler.haltEventListeners;if(t&&t.length)for(var e=t.length-1;0<=e;e--)this.eventListeners.hasOwnProperty(t[e])&&delete this.eventListeners[t[e]]}for(var i in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(i,this.eventListeners[i],!this.options.preventMouseEventsDefault&&h);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())},i.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var e=this;this.wheelListener=function(t){return e.handleMouseWheel(t)};var t=!this.options.preventMouseEventsDefault;n.on(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!0}},i.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;n.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}},i.prototype.handleMouseWheel=function(t){if(this.options.zoomEnabled&&"none"===this.state){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,n=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&0===t.deltaMode&&t.wheelDelta&&(e=0===t.deltaY?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(0<e?1:-1)*Math.log(Math.abs(e)+10)/n;var i=this.svg.getScreenCTM().inverse(),s=a.getEventPoint(t,this.svg).matrixTransform(i),r=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(r,s)}},i.prototype.zoomAtPoint=function(t,e,o){var n=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*n.zoom,Math.min(this.options.maxZoom*n.zoom,t)),t/=this.getZoom()):this.getZoom()*t<this.options.minZoom*n.zoom?t=this.options.minZoom*n.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*n.zoom&&(t=this.options.maxZoom*n.zoom/this.getZoom());var i=this.viewport.getCTM(),s=e.matrixTransform(i.inverse()),r=this.svg.createSVGMatrix().translate(s.x,s.y).scale(t).translate(-s.x,-s.y),a=i.multiply(r);a.a!==i.a&&this.viewport.setCTM(a)},i.prototype.zoom=function(t,e){this.zoomAtPoint(t,a.getSvgCenterPoint(this.svg,this.width,this.height),e)},i.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)},i.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),"SVGPoint"!==r.getType(e)){if(!("x"in e&&"y"in e))throw new Error("Given point is invalid");e=a.createSVGPoint(this.svg,e.x,e.y)}this.zoomAtPoint(t,e,o)},i.prototype.getZoom=function(){return this.viewport.getZoom()},i.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()},i.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom},i.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)},i.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())},i.prototype.reset=function(){this.resetZoom(),this.resetPan()},i.prototype.handleDblClick=function(t){var e;if((this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled)&&-1<(t.target.getAttribute("class")||"").indexOf("svg-pan-zoom-control"))return!1;e=t.shiftKey?1/(2*(1+this.options.zoomScaleSensitivity)):2*(1+this.options.zoomScaleSensitivity);var o=a.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(e,o)},i.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),r.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&r.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=a.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))},i.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),"pan"===this.state&&this.options.panEnabled){var e=a.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}},i.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),"pan"===this.state&&(this.state="none")},i.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)},i.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)},i.prototype.center=function(){var t=this.viewport.getViewBox(),e=.5*(this.width-(t.width+2*t.x)*this.getZoom()),o=.5*(this.height-(t.height+2*t.y)*this.getZoom());this.getPublicInstance().pan({x:e,y:o})},i.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()},i.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)},i.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)},i.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}},i.prototype.resize=function(){var t=a.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())},i.prototype.destroy=function(){var e=this;for(var t in this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,(this.onUpdatedCTM=null)!=this.options.customEventsHandler&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()}),this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(t,this.eventListeners[t],!this.options.preventMouseEventsDefault&&h);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),c=c.filter(function(t){return t.svg!==e.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}},i.prototype.getPublicInstance=function(){var o=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return o.options.panEnabled=!0,o.pi},disablePan:function(){return o.options.panEnabled=!1,o.pi},isPanEnabled:function(){return!!o.options.panEnabled},pan:function(t){return o.pan(t),o.pi},panBy:function(t){return o.panBy(t),o.pi},getPan:function(){return o.getPan()},setBeforePan:function(t){return o.options.beforePan=null===t?null:r.proxy(t,o.publicInstance),o.pi},setOnPan:function(t){return o.options.onPan=null===t?null:r.proxy(t,o.publicInstance),o.pi},enableZoom:function(){return o.options.zoomEnabled=!0,o.pi},disableZoom:function(){return o.options.zoomEnabled=!1,o.pi},isZoomEnabled:function(){return!!o.options.zoomEnabled},enableControlIcons:function(){return o.options.controlIconsEnabled||(o.options.controlIconsEnabled=!0,s.enable(o)),o.pi},disableControlIcons:function(){return o.options.controlIconsEnabled&&(o.options.controlIconsEnabled=!1,s.disable(o)),o.pi},isControlIconsEnabled:function(){return!!o.options.controlIconsEnabled},enableDblClickZoom:function(){return o.options.dblClickZoomEnabled=!0,o.pi},disableDblClickZoom:function(){return o.options.dblClickZoomEnabled=!1,o.pi},isDblClickZoomEnabled:function(){return!!o.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return o.enableMouseWheelZoom(),o.pi},disableMouseWheelZoom:function(){return o.disableMouseWheelZoom(),o.pi},isMouseWheelZoomEnabled:function(){return!!o.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(t){return o.options.zoomScaleSensitivity=t,o.pi},setMinZoom:function(t){return o.options.minZoom=t,o.pi},setMaxZoom:function(t){return o.options.maxZoom=t,o.pi},setBeforeZoom:function(t){return o.options.beforeZoom=null===t?null:r.proxy(t,o.publicInstance),o.pi},setOnZoom:function(t){return o.options.onZoom=null===t?null:r.proxy(t,o.publicInstance),o.pi},zoom:function(t){return o.publicZoom(t,!0),o.pi},zoomBy:function(t){return o.publicZoom(t,!1),o.pi},zoomAtPoint:function(t,e){return o.publicZoomAtPoint(t,e,!0),o.pi},zoomAtPointBy:function(t,e){return o.publicZoomAtPoint(t,e,!1),o.pi},zoomIn:function(){return this.zoomBy(1+o.options.zoomScaleSensitivity),o.pi},zoomOut:function(){return this.zoomBy(1/(1+o.options.zoomScaleSensitivity)),o.pi},getZoom:function(){return o.getRelativeZoom()},setOnUpdatedCTM:function(t){return o.options.onUpdatedCTM=null===t?null:r.proxy(t,o.publicInstance),o.pi},resetZoom:function(){return o.resetZoom(),o.pi},resetPan:function(){return o.resetPan(),o.pi},reset:function(){return o.reset(),o.pi},fit:function(){return o.fit(),o.pi},contain:function(){return o.contain(),o.pi},center:function(){return o.center(),o.pi},updateBBox:function(){return o.updateBBox(),o.pi},resize:function(){return o.resize(),o.pi},getSizes:function(){return{width:o.width,height:o.height,realZoom:o.getZoom(),viewBox:o.viewport.getViewBox()}},destroy:function(){return o.destroy(),o.pi}}),this.publicInstance};var c=[];e.exports=function(t,e){var o=r.getSvg(t);if(null===o)return null;for(var n=c.length-1;0<=n;n--)if(c[n].svg===o)return c[n].instance.getPublicInstance();return c.push({svg:o,instance:new i(o,e)}),c[c.length-1].instance.getPublicInstance()}},{"./control-icons":1,"./shadow-viewport":2,"./svg-utilities":5,"./uniwheel":6,"./utilities":7}],5:[function(t,e,o){var l=t("./utilities"),s="unknown";document.documentMode&&(s="ie"),e.exports={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(!(o=l.isElement(e)?e:t.querySelector(e))){var n=Array.prototype.slice.call(t.childNodes||t.children).filter(function(t){return"defs"!==t.nodeName&&"#text"!==t.nodeName});1===n.length&&"g"===n[0].nodeName&&null===n[0].getAttribute("transform")&&(o=n[0])}if(!o){var i="viewport-"+(new Date).toISOString().replace(/\\D/g,"");(o=document.createElementNS(this.svgNS,"g")).setAttribute("id",i);var s=t.childNodes||t.children;if(s&&0<s.length)for(var r=s.length;0<r;r--)"defs"!==s[s.length-r].nodeName&&o.appendChild(s[s.length-r]);t.appendChild(o)}var a=[];return o.getAttribute("class")&&(a=o.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),o.setAttribute("class",a.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),null!==t.parentNode){var e=t.getAttribute("style")||"";-1===e.toLowerCase().indexOf("overflow")&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:l.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var n=t[o];n.parentNode.insertBefore(n,n)}},this?this.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var n=this,i="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",i),"transform"in t.style?t.style.transform=i:"-ms-transform"in t.style?t.style["-ms-transform"]=i:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=i),"ie"===s&&o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){n.refreshDefsGlobal()},n.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return l.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var n=t.createSVGPoint();return n.x=e,n.y=o,n}}},{"./utilities":7}],6:[function(t,e,o){function n(t,e,o,n){var i;i="wheel"===a?o:function(t,o){function e(t){var e={originalEvent:t=t||window.event,target:t.target||t.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==t.type?0:1,deltaX:0,delatZ:0,preventDefault:function(){t.preventDefault?t.preventDefault():t.returnValue=!1}};return"mousewheel"==a?(e.deltaY=-.025*t.wheelDelta,t.wheelDeltaX&&(e.deltaX=-.025*t.wheelDeltaX)):e.deltaY=t.detail,o(e)}return u.push({element:t,fn:e}),e}(t,o),t[s](l+e,i,!!n&&h)}function i(t,e,o,n){var i;i="wheel"===a?o:function(t){for(var e=0;e<u.length;e++)if(u[e].element===t)return u[e].fn;return function(){}}(t),t[r](l+e,i,!!n&&h),function(t){for(var e=0;e<u.length;e++)if(u[e].element===t)return u.splice(e,1)}(t)}var s,r,a,l,u,h;e.exports=(u=[],h={passive:!(l="")},window.addEventListener?(s="addEventListener",r="removeEventListener"):(s="attachEvent",r="detachEvent",l="on"),a="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",{on:function(t,e,o){n(t,a,e,o),"DOMMouseScroll"==a&&n(t,"MozMousePixelScroll",e,o)},off:function(t,e,o){i(t,a,e,o),"DOMMouseScroll"==a&&i(t,"MozMousePixelScroll",e,o)}})},{}],7:[function(t,e,o){function n(e){return function(t){window.setTimeout(t,e)}}e.exports={extend:function(t,e){for(var o in t=t||{},e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else{if(!("string"==typeof t||t instanceof String))throw new Error("Provided selector is not an HTML object nor String");if(!(e=document.querySelector(t)))throw new Error("Provided selector did not find any elements. Selector: "+t)}if("svg"===e.tagName.toLowerCase())o=e;else if("object"===e.tagName.toLowerCase())o=e.contentDocument.documentElement;else{if("embed"!==e.tagName.toLowerCase())throw"img"===e.tagName.toLowerCase()?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");o=e.getSVGDocument().documentElement}return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\\[object\\s/,"").replace(/\\]$/,"")},mouseAndTouchNormalize:function(t,e){if(void 0===t.clientX||null===t.clientX)if(t.clientX=0,void(t.clientY=0)!==t.touches&&t.touches.length){if(void 0!==t.touches[0].clientX)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(void 0!==t.touches[0].pageX){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else void 0!==t.originalEvent&&void 0!==t.originalEvent.clientX&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(2===t.detail)return!0;if(null==e)return!1;var o=t.timeStamp-e.timeStamp,n=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&n<10},now:Date.now||function(){return(new Date).getTime()},throttle:function(o,n,i){var s,r,a,l=this,u=null,h=0;i=i||{};function c(){h=!1===i.leading?0:l.now(),u=null,a=o.apply(s,r),u||(s=r=null)}return function(){var t=l.now();h||!1!==i.leading||(h=t);var e=n-(t-h);return s=this,r=arguments,e<=0||n<e?(clearTimeout(u),u=null,h=t,a=o.apply(s,r),u||(s=r=null)):u||!1===i.trailing||(u=setTimeout(c,e)),a}},createRequestAnimationFrame:function(t){var e=null;return"auto"!==t&&t<60&&1<t&&(e=Math.floor(1e3/t)),null===e?window.requestAnimationFrame||n(33):n(e)}}},{}]},{},[3]);</script>`, ""}

<svg fill="${"none"}" viewBox="${"0 0 884 1037"}"><g id="${"liniennetzplan"}"><g id="${"background"}"><path id="${"river Rhein"}" stroke="${"#A8DFF3"}" stroke-miterlimit="${"3.86"}" stroke-width="${"20"}" d="${"M268.35 3.46l79.5 309.32s3.73 24.84 26.1 38.5c22.36 13.67 98.17 53.29 98.17 53.29s27.28 15.26 68.1 15.04l343.08-23.6"}"></path></g><g id="${"bahnen paths"}" stroke-miterlimit="${"3.86"}" stroke-width="${"4"}"><path id="${"bahn 17"}" stroke="${"#00ADEF"}" stroke-dasharray="${"4.9 1.7"}" stroke-linejoin="${"round"}" d="${"M390.76 157.36v92.38c0 9.77 4.23 18.55 4.23 18.55s7.49 14.32 12.37 23.1c4.88 8.8-4.23 14.32-4.23 14.32l-33.52 18.88c-25.71 13.99-26.7 42.3-26.7 42.3v58.9c0 13.67-7.78 28.94-7.78 28.94L262.52 581.5s-3.94 6.72-3.94 12.43v250.93"}"></path><path id="${"bahn 16"}" stroke="${"#A6CE39"}" stroke-linecap="${"round"}" d="${"M328.6 374.59v53.2c0 4.81 1.28 9.97 4.75 13.81 3.03 3.34 4.31 8.55 4.31 8.55s1.07 2.6 1.62 6.4c.81 5.7-2.8 10.2-2.8 10.2l-22.46 39.08s-3.71 6.62 2.7 10.54l17.74 10.42c4.87 2.88 2.36 7.4 2.36 7.4l-16.25 29.34s-8.25 13.84 4.6 22.18l114.76 67.3s5.55 4.05 5.55 11.35v32.1s-.17 5.58 6.02 9.73l56.96 33.52a11.42 11.42 0 01-5.79 21.28h-95.01"}"></path><path id="${"bahn 15"}" stroke="${"#00A650"}" stroke-linecap="${"round"}" d="${"M415.83 452.5c-5.16-5.56-1.18-10.61-1.18-10.61 6.97-12.07 79.22-135.93 79.22-135.93 3.68-6.8 1.66-9.41.22-11.77-3.12-5.14-10.72-.73-10.72-.73L383.3 349.73c-10.34 5.62-11.64 16.98-11.75 18.2v55.75c0 .27 0 .9.5 1.21l.09.05 29.74 17.09c3.42 1.99 28.13 17.17 37.81 46.13 0 0 2.69 7.32 2.69 19.78l-.02 116.19s.14 4.88-3 6.86c-4.46 2.81-10.01-.81-10.01-.81l-19.88-11.7s-5.35-3.2-7.74 1.18c-2.39 4.37-37.57 64.6-37.57 64.6s-3.97 5.96-3.97 12.12c0 6.16.2 52.27.2 52.27S358.98 761 372.5 761h35.16"}"></path><path id="${"bahn 14"}" stroke="${"#F5821F"}" stroke-linecap="${"round"}" d="${"M394.76 205.05h41.75c6.75 0 10.53 7.35 10.53 7.35l34.71 60.63c5.73 10.8-4.1 15.5-4.1 15.5l-97.78 54.91c-13.84 7.54-15.36 22.49-15.49 24.13v56.11c0 5.57 4.34 7.56 4.34 7.56l29.55 16.97c3.14 1.83 25.86 15.79 34.66 42.33 0 0 3.05 9.64 12.11 4.5l23.38-13.52c8.28-4.3 16.92.93 16.92.93L567.7 531s8.34 5.97 8.34 13.72v54.85s.1 8.34 6.56 12.53l188.58 110.93"}"></path><path id="${"bahn E11"}" stroke="${"#F15A35"}" stroke-dasharray="${"4.9 1.7"}" stroke-linejoin="${"round"}" d="${"M498.67 962.44l-14.01-23.62a16 16 0 01-2.17-7.7c0-3.39 1.38-5.47 1.63-5.81l-.1.12.28-.36.29-.48 78.26-134.88c6.16-10.85 6.34-19.88 6.34-20.88v-34.09a24.56 24.56 0 00-11.68-20.9L328.68 579.47c-6.48-4.05-1.92-12.36-1.87-12.44l16.17-29.56s5.64-10.48-4.67-16.4l-17.9-10.76c-.63-.3-.2-.82-.2-.82l35.4-61.16s3.09-6.2 10.73-1.99l24.74 14.25c2.66 1.54 21.15 12.93 28.25 34.36l-.05-.1c.8 2.5 4.1 10.98 13.24 14.58a20.54 20.54 0 008.17 1.41c5.95 0 8.84 3.08 8.84 10.04l-.03 120.7s-.38 8.4 5.46 11.9"}"></path><path id="${"bahn 11"}" stroke="${"#ED1C24"}" stroke-linecap="${"round"}" d="${"M239.53 191.37l83.68 141.08c14.9 28.03 12.55 40.55 12.55 40.55v55.72c0 8.46 7.59 12.41 7.59 12.41 6.38 3.83 43.78 25.43 44.16 25.65l-.18-.1c.36.2 27.6 15.37 27.6 45.58 0 9.04-2.43 19.43-8.77 31.17l-8.13 14.97-.26.46-.27.37a12.27 12.27 0 00-2.4 6.55c-.02.4.04 1.28.12 1.67.13.67.45 2.68 3.9 4.9.47.26 54.87 32 55.37 32.3 5.4 3.34 11.98 8.2 11.98 18.2 0 7.85-.08 42.47-.08 42.47s-.27 2.94 2.2 4.45c5.5 3.36 73.2 43.14 85.38 50.3 0 0 8.07 4.58 8.07 14.67v34.1s0 7.82-5.37 17.28c0 0-43.23 74.62-78.26 134.88 0 0-6.9 8.74 0 21.3l41.05 69.23"}"></path><path id="${"bahn 10"}" stroke="${"#FFCB05"}" stroke-linecap="${"round"}" d="${"M76.63 867.9h162.5c12.32 0 12.3-12.71 12.3-12.71V593.92c0-7.44 4.41-15.2 4.92-16.05l72.58-126.7s4.23-7.8 10.74-3.9c6.5 3.9 44.26 25.7 44.26 25.7s40.35 21.81 15.94 67.04l-8.13 14.97s-10.74 14.32 3.58 23.43L451.18 611s8.13 4.04 8.13 11.85v42.92s-.79 6.07 5.4 9.97c5.55 3.5 71.71 42.34 85.2 50.24 0 0 6.27 3.8 18.57 3.8h34.13s16.27-1.2 16.27 13.49V931.6"}"></path><path id="${"bahn 8"}" stroke="${"#F173AC"}" stroke-linecap="${"round"}" d="${"M397.92 177.56c0-7.76-11.04-8.09-11.04-8.09h-5.86a16.9 16.9 0 1116.9-16.9v97.17c0 7.91 2.51 12.92 3.58 15.56 1.1 2.09 7.72 14.7 12.12 22.62a17.5 17.5 0 012.35 8.56c0 7.04-4.76 12.7-9.13 15.35l-.2.12-33.6 18.92c-21.39 11.64-22.89 34.67-22.97 36.21v58.71c0 6.57-1.53 13.34-3.3 18.97 0 0-4.45 12.54 5.31 18.05 12.44 7.22 27.3 15.8 28.27 16.36l.15.08c.09.05 8.9 4.99 14.78 14.54a34.66 34.66 0 015.28 18.48c0 7.59-2.33 15.72-6.98 24.34l-7.93 14.59s-6.36 16.72-21.72 9.5L237.4 486.4s-6.41-4.08-10.39 2.28l-8.25 13.61c-4.37 7.16-9.54 10.34-9.54 10.34l-91.66 51.61"}"></path><path id="${"bahn 6"}" stroke="${"#0072BC"}" stroke-linecap="${"round"}" d="${"M771.2 114.85l-394.75 222.3c-17.61 9.6-19.12 28.54-19.22 30.15v70.1c-.17 7.95 1.36 8.74 1.56 13.71.2 4.97-2.59 9.94-2.59 9.94l-15.3 26.63c-.98 1.84-4.3 8.6-12.43 3.94-8.13-4.66-69.07-39.32-69.07-39.32s-9.84-5.36-18.93-5.51c-5.37-.09-101.53 0-101.53 0s-8 .16-12.79 8.65l-49.55 86"}"></path><path id="${"bahn 3"}" stroke="${"#384EA1"}" stroke-linecap="${"round"}" d="${"M136.96 306.89l257.72 147.5c2.84 1.66 23.48 14.34 31.45 38.35l-.02-.05c.4 1.24 2.67 7.58 9.03 10.08 2.9 1.15 7.58 1.81 13.43-1.5l34.19-19.86s4.31-3.14 16.08-3.14h266.44"}"></path><path id="${"bahn 2"}" stroke="${"#A68352"}" stroke-linecap="${"round"}" d="${"M217.24 597.83l21.06-35.57s4.1-5.82 9.8-2.4l24.92 14.63c4.55 2.28 10.25 1.92 10.25 1.92h37.27c9.03 0 12.84-6.34 12.84-6.34L347.95 543c3-6.01 9.62-2.43 9.62-2.43l11.32 6.45c.74.4 2.76.81 3.58-1.26l3.62-6.95.14-.26.13-.2c.15-.23 2.66-4.29 2.66-9.27 0-2.1-.45-4.37-1.7-6.59l-6.93-12.12.55.83a19.02 19.02 0 01-.66-21.36c3.8-6.27 116.82-200.86 116.82-200.86s3.25-7.86 13-13.2l79.79-44.9"}"></path><path id="${"bahn 1"}" stroke="${"#835338"}" stroke-linejoin="${"round"}" d="${"M377.8 550.84c.58-.91.98-1.74 1.19-2.24 0 0 1.77-3.38 3.38-6.36 0 0 7.7-11.74 1.16-23.28l-6.93-12.13s-4.62-5.96-.2-13.28c3.93-6.48 117.88-202.68 117.88-202.68s1.93-4.38 8.95-8.63l35.54-20m-144-57.19H350.7s-101.45-4.82-101.45 86.26v99.98s-.04 10.35-6.23 21.22l-23.33 40.16s-6.7 11.19 5.11 18.12l142.32 83.49c3.65 1.66 5.56.94 6.2.7 1.91-.76 3.45-2.57 4.46-4.14"}"></path></g><g id="${"stationen"}" fill="${"white"}" stroke="${"black"}" stroke-miterlimit="${"3.86"}"><path id="${"Bahnhof_SBB"}" d="${"M368.42 552.54a5.08 5.08 0 014.94-8.89l25.8 13.83a5.08 5.08 0 11-4.9 8.91l-25.84-13.85z"}"></path><path id="${"Kirschgarten"}" d="${"M373.9 513.24a5.09 5.09 0 01-5.15-8.77l3.16-1.88a5.08 5.08 0 115.2 8.74l-3.22 1.9z"}"></path><path id="${"Bankverein"}" d="${"M379.57 482.2a5.08 5.08 0 01-5.15-8.77l39.2-23.5a5.09 5.09 0 115.2 8.74l-39.25 23.53z"}"></path><path id="${"Markthalle"}" d="${"M330.41 548.2a5.09 5.09 0 01.11-10.17l19.62.1a5.08 5.08 0 11-.06 10.17l-19.67-.1z"}"></path><path id="${"Heuwaage"}" d="${"M321.79 465.53a5.08 5.08 0 015.09-8.8l23.05 12.66a5.09 5.09 0 11-5.05 8.83l-23.1-12.69z"}"></path><path id="${"Theater"}" d="${"M309.66 486.6a5.09 5.09 0 015.1-8.8l18.87 10.68a5.09 5.09 0 11-5.05 8.83l-18.92-10.71z"}"></path><path id="${"Barf\xFCsserplatz"}" d="${"M328.96 430.75a5.08 5.08 0 01.11-10.17l42.74.09a5.08 5.08 0 11-.06 10.17l-42.79-.1z"}"></path><path id="${"Marktplatz"}" d="${"M328.96 405a5.08 5.08 0 01.11-10.17l42.74.1a5.08 5.08 0 11-.06 10.17l-42.79-.1z"}"></path><path id="${"Schiffl\xE4nde"}" d="${"M328.96 379.27a5.09 5.09 0 01.11-10.17l42.74.09a5.08 5.08 0 11-.06 10.17l-42.79-.1z"}"></path><path id="${"Rheingasse"}" d="${"M401.53 338.64a5.09 5.09 0 01-9.14 4.46l-13.42-23.04a5.09 5.09 0 118.74-5.2l13.82 23.78z"}"></path><path id="${"Claraplatz"}" d="${"M426.58 324.63a5.09 5.09 0 01-9.14 4.46l-13.42-23.04a5.09 5.09 0 118.74-5.2l13.82 23.78z"}"></path><path id="${"Clarastr."}" d="${"M460.58 305.83a5.09 5.09 0 01-9.14 4.46l-6.43-10.99a5.09 5.09 0 118.74-5.2l6.83 11.73z"}"></path><path id="${"Messeplatz"}" d="${"M499.54 293.29a5.09 5.09 0 01-9.14 4.46l-11.53-20.38a5.09 5.09 0 118.74-5.2l11.93 21.12z"}"></path><path id="${"Kunstmuseum"}" d="${"M418.23 408.77a5.08 5.08 0 015.2-8.74l11.39 6.49a5.08 5.08 0 11-5.16 8.76l-11.43-6.5z"}"></path><path id="${"Wettsteinplatz"}" d="${"M455.2 344.97a5.09 5.09 0 015.2-8.74l11.4 6.49a5.08 5.08 0 11-5.16 8.76l-11.44-6.5z"}"></path><path id="${"Kaserne"}" d="${"M403 279.7a5.08 5.08 0 01-4.97-8.88l3.2-1.81a5.08 5.08 0 115 8.85L403 279.7z"}"></path><path id="${"Feldbergstr."}" d="${"M392.36 255.13a5.09 5.09 0 01.16-10.17l3.68.04a5.08 5.08 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Bl\xE4siring"}" d="${"M392.36 232.5a5.09 5.09 0 01.16-10.17l3.68.04a5.08 5.08 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Brombacherstr."}" d="${"M432.53 208.83a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Musical_Theater"}" d="${"M455.99 231.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Riehenring"}" d="${"M468.51 253.55a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Dreirosenbr\xFCcke"}" d="${"M392.36 209.87a5.08 5.08 0 01.16-10.17l3.68.05a5.08 5.08 0 11-.1 10.17l-3.75-.05z"}"></path><path id="${"Ciba"}" d="${"M392.36 186.98a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Wiesenplatz"}" d="${"M392.36 161.99a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Kleinh\xFCningen"}" d="${"M381.02 139.46a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Inselstr."}" d="${"M364.58 160.13a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Universit\xE4t"}" d="${"M309.42 409.1a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Spalentor"}" d="${"M289.73 398.14a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Pilgerstr."}" d="${"M270.05 387.18a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Burgfelderplatz"}" d="${"M254.75 370.27a5.08 5.08 0 01-8.92 4.9l-1.78-3.23a5.08 5.08 0 118.9-4.94l1.8 3.27z"}"></path><path id="${"Hegenheimerstr."}" d="${"M248.47 402.22a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Birmannsgasse"}" d="${"M238.53 423.88a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Sch\xFCtzenmattstr."}" d="${"M284.84 470.6a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.55z"}"></path><path id="${"Holbeinstr."}" d="${"M259.4 456.08a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Brausebad"}" d="${"M222.15 441.46a5.08 5.08 0 014.9 8.91l-3.23 1.8a5.08 5.08 0 11-4.94-8.89l3.27-1.82z"}"></path><path id="${"Universit\xE4tsspital"}" d="${"M321.5 333.3a3.78 3.78 0 100-7.54 3.78 3.78 0 000 7.55z"}"></path><path id="${"Johanniter-Br\xFCcke"}" d="${"M307.94 310.47a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"St._Johanns-Tor"}" d="${"M294.38 287.63a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"M\xFChlhauserstr."}" d="${"M280.83 264.8a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Voltaplatz"}" d="${"M272.23 239.47a5.09 5.09 0 01-10.17-.16l.04-3.68a5.08 5.08 0 1110.17.1l-.04 3.74z"}"></path><path id="${"Novartis_Campus"}" d="${"M289.9 222.6a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"H\xFCningerstr."}" d="${"M253.15 218.06a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"St._Louis_Grenze"}" d="${"M239.53 195.15a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Kannenfeld-platz"}" d="${"M249.2 334.77a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Strassburgerallee"}" d="${"M219.75 358.16a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Felix-Platter-Spital"}" d="${"M191.96 342.24a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Luzernerring"}" d="${"M164.17 326.32a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Burgfelden_Grenze"}" d="${"M136.38 310.4a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Morgartenring"}" d="${"M170.4 450.42a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Lindenplatz"}" d="${"M146.7 450.42a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Merkurstr."}" d="${"M126.15 459.22a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Kirche"}" d="${"M116.25 476.42a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Ziegelei"}" d="${"M106.34 493.62a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Allschwilerplatz"}" d="${"M194.1 450.42a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Gartenstr."}" d="${"M96.44 510.82a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Binningerstr."}" d="${"M86.53 528.02a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Allschwil"}" d="${"M76.63 545.22a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Zoo_Bachletten"}" d="${"M268.16 502.43a5.09 5.09 0 01-8.84-5.04l1.82-3.2a5.08 5.08 0 118.86 5l-1.84 3.24z"}"></path><path id="${"Sch\xFCtzenhaus"}" d="${"M237.1 485.99a5.09 5.09 0 01-8.84-5.04l2.64-4.44a5.09 5.09 0 118.86 5l-2.66 4.48z"}"></path><path id="${"Bundesplatz"}" d="${"M219.15 505.27a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Bernerring"}" d="${"M198.81 522.27a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Laupenring"}" d="${"M178.48 533.67a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Neubad"}" d="${"M158.15 545.08a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Im_langen_Loh"}" d="${"M137.81 556.48a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Neuweilerstr."}" d="${"M117.48 567.88a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Denkmal"}" d="${"M444.1 544.59a5.08 5.08 0 01.16-10.17l3.69.04a5.08 5.08 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Grosspeterstr."}" d="${"M444.1 580.6a5.08 5.08 0 01.16-10.17l3.69.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Peter_Merian"}" d="${"M420.21 590.84a5.09 5.09 0 01-8.84-5.04l1.82-3.2a5.08 5.08 0 118.86 5l-1.84 3.24z"}"></path><path id="${"Gasstr./Bahnhof_St._Johann"}" d="${"M249.2 297.6a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Solothurnerstr."}" d="${"M375.24 612.99a5.08 5.08 0 01-8.84-5.04l1.81-3.2a5.08 5.08 0 118.86 5l-1.83 3.24z"}"></path><path id="${"Tellplatz"}" d="${"M402.45 628.82a5.09 5.09 0 01-8.84-5.04l1.82-3.21a5.08 5.08 0 118.86 5l-1.84 3.25z"}"></path><path id="${"Zoo_Dorenbach"}" d="${"M243.7 562.62a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Hohle_Gasse"}" d="${"M229.48 580.83a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Binningen_Kronenplatz"}" d="${"M217.24 601.6a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.56z"}"></path><path id="${"Margarethen"}" d="${"M292.8 580.2a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"IWB"}" d="${"M319.34 580.6a5.09 5.09 0 01.11-10.17l10.83.09a5.08 5.08 0 11-.06 10.17l-10.88-.1z"}"></path><path id="${"Zoo"}" d="${"M284.93 539.07a5.08 5.08 0 01-5.04 8.83l-3.21-1.8a5.09 5.09 0 115-8.86l3.25 1.83z"}"></path><path id="${"Bahnhofeingang_Gundeldingen"}" d="${"M348.02 597.16a5.09 5.09 0 01-8.84-5.04l1.81-3.2a5.09 5.09 0 118.86 5l-1.83 3.24z"}"></path><path id="${"Gewerbeschule"}" d="${"M519.95 272.4a5.09 5.09 0 01-9.14 4.46l-6.43-10.98a5.09 5.09 0 118.74-5.2l6.83 11.72z"}"></path><path id="${"Badischer_Bahnhof"}" d="${"M543.28 259.44a5.08 5.08 0 01-9.14 4.46l-6.43-10.99a5.08 5.08 0 118.74-5.2l6.83 11.73z"}"></path><path id="${"Hirzbrunnen-Claraspital"}" d="${"M561.78 239.04a5.09 5.09 0 01-8.88 4.96l-1.8-3.2a5.09 5.09 0 118.85-5l1.83 3.24z"}"></path><path id="${"Eglisee"}" d="${"M583.25 226.87a5.09 5.09 0 01-8.88 4.96l-1.81-3.2a5.09 5.09 0 118.85-5l1.84 3.24z"}"></path><path id="${"Habermatten"}" d="${"M597.44 216.6a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.55z"}"></path><path id="${"Niederholzboden"}" d="${"M616.75 205.7a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.56z"}"></path><path id="${"Burgstrasse"}" d="${"M636.05 194.82a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Pfaffenloh"}" d="${"M655.36 183.94a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Bettingerstrasse"}" d="${"M674.66 173.05a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Riehen_Dorf"}" d="${"M693.97 162.17a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Fondation_Beyeler"}" d="${"M713.28 151.28a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.56z"}"></path><path id="${"Weilstr."}" d="${"M732.59 140.4a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"L\xF6rracherstr."}" d="${"M751.9 129.52a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Riehen_Grenze"}" d="${"M771.2 118.63a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Binningen"}" d="${"M253.61 659.51a5.08 5.08 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Binningen_Oberdorf"}" d="${"M253.61 637.93a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Dorenbach"}" d="${"M253.61 616.35a5.09 5.09 0 01.16-10.17l3.68.04a5.08 5.08 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Bottmingerm\xFChle"}" d="${"M253.61 681.1a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Batteriestr."}" d="${"M253.61 702.68a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Bottmingen"}" d="${"M253.22 724.26a5.09 5.09 0 01.16-10.17l3.68.04a5.08 5.08 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Stallen"}" d="${"M253.22 745.84a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Oberwil"}" d="${"M253.22 767.43a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"H\xFCslimatt"}" d="${"M253.22 789a5.09 5.09 0 01.16-10.17l3.68.05a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Therwil"}" d="${"M253.22 810.59a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"K\xE4nelmatt"}" d="${"M253.22 832.17a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Ettingen"}" d="${"M253.22 853.75a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.75-.04z"}"></path><path id="${"Sonnenrain"}" d="${"M231.87 871.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Witterswil"}" d="${"M200.82 871.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"B\xE4ttwil"}" d="${"M169.77 871.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Fl\xFCh"}" d="${"M138.72 871.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Leymen"}" d="${"M107.68 871.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Rodersdorf"}" d="${"M76.63 871.68a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Ruchfeld"}" d="${"M563.82 748.96a5.09 5.09 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Schaulager"}" d="${"M563.82 768.08a5.08 5.08 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Loogstrasse"}" d="${"M556.82 796.19a5.08 5.08 0 01-5.04 8.83l-3.2-1.8a5.09 5.09 0 115-8.86l3.24 1.83z"}"></path><path id="${"Spengler"}" d="${"M566.3 779.78a5.08 5.08 0 01-5.04 8.84l-3.2-1.81a5.09 5.09 0 115-8.86l3.24 1.83z"}"></path><path id="${"Gartenstadt"}" d="${"M547.34 812.59a5.08 5.08 0 01-5.04 8.83l-3.2-1.8a5.09 5.09 0 115-8.86l3.24 1.83z"}"></path><path id="${"Surbaum"}" d="${"M518.91 861.8a5.08 5.08 0 01-5.04 8.83l-3.2-1.81a5.09 5.09 0 115-8.86l3.24 1.84z"}"></path><path id="${"Landhof"}" d="${"M509.43 878.2a5.08 5.08 0 01-5.04 8.83l-3.2-1.8a5.09 5.09 0 115-8.86l3.24 1.83z"}"></path><path id="${"Lochacker"}" d="${"M499.95 894.6a5.08 5.08 0 01-5.04 8.83l-3.2-1.8a5.09 5.09 0 115-8.86l3.25 1.83z"}"></path><path id="${"Aesch"}" d="${"M519.42 1015.34a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Vogesenstr."}" d="${"M487.2 954a5.09 5.09 0 01-4.96-8.88l3.2-1.81a5.09 5.09 0 115 8.85L487.2 954z"}"></path><path id="${"Reinach_S\xFCd"}" d="${"M496.67 970.15a5.08 5.08 0 01-4.96-8.88l3.2-1.8a5.09 5.09 0 115 8.85l-3.24 1.83z"}"></path><path id="${"Arlesheimerstr."}" d="${"M501.58 985.23a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Herrenweg"}" d="${"M510.5 1000.28a3.77 3.77 0 100-7.55 3.77 3.77 0 000 7.55z"}"></path><path id="${"Heiligholz"}" d="${"M537.87 829a5.08 5.08 0 01-5.04 8.84l-3.21-1.82a5.09 5.09 0 115-8.86l3.25 1.83z"}"></path><path id="${"Reinacherhof"}" d="${"M528.39 845.4a5.08 5.08 0 01-5.04 8.83l-3.2-1.81a5.09 5.09 0 115-8.86l3.24 1.83z"}"></path><path id="${"Reinach_Dorf"}" d="${"M476.78 936.58a5.08 5.08 0 01.16-10.17l3.68.04a5.09 5.09 0 11-.1 10.17l-3.74-.04z"}"></path><path id="${"Landererstr."}" d="${"M490.48 911a5.08 5.08 0 01-5.04 8.83l-3.2-1.8a5.09 5.09 0 115-8.86l3.24 1.83z"}"></path><path id="${"Heiliggeistkirche"}" d="${"M428.06 647.87a5.09 5.09 0 01-5.15-8.77L446.1 625a5.08 5.08 0 115.2 8.74l-23.25 14.12z"}"></path><path id="${"Zwinglihaus"}" d="${"M445.45 696.98a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"M\xF6nchsbergerstr."}" d="${"M469.3 720.38a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Leimgrubenweg"}" d="${"M514.1 753.34a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Hechtliacker"}" d="${"M460.88 764.76a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Bruderholz"}" d="${"M407.66 764.76a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Hauensteinstr."}" d="${"M434.27 764.76a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Airolostr."}" d="${"M381.05 764.76a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Jakobsberg"}" d="${"M487.49 764.76a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Bruderholzstr."}" d="${"M381.82 658.05a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Wolfschlucht"}" d="${"M366.3 684.73a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Lerchenstrasse"}" d="${"M360.35 711.4a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.56z"}"></path><path id="${"Studio_Basel"}" d="${"M360.38 738.09a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Dreispitz"}" d="${"M548.4 723.5a5.09 5.09 0 01-8.84-5.04l5.57-9.99a5.09 5.09 0 118.86 5l-5.6 10.04z"}"></path><path id="${"M_Parc"}" d="${"M515.42 704.1a5.09 5.09 0 01-8.84-5.04l5.58-10a5.08 5.08 0 118.86 5l-5.6 10.04z"}"></path><path id="${"M\xFCnchensteinerstr."}" d="${"M482.45 684.7a5.09 5.09 0 01-8.84-5.04l5.58-10a5.08 5.08 0 118.86 5l-5.6 10.04z"}"></path><path id="${"Neuewelt/Gr\xFCn_80"}" d="${"M618.88 754.17a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Birseckstr."}" d="${"M618.88 770.65a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Zollweiden"}" d="${"M618.88 787.12a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Hofmatt"}" d="${"M618.88 803.6a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.55z"}"></path><path id="${"Elektra_Birseck"}" d="${"M618.88 820.07a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"M\xFCnchenstein_Dorf"}" d="${"M618.88 836.54a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Dornach_Bahnhof"}" d="${"M618.88 935.38a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Stollenrain"}" d="${"M618.88 918.9a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Arlesheim_Dorf"}" d="${"M618.88 902.43a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Im_Lee"}" d="${"M618.88 885.96a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Baselstrasse"}" d="${"M618.88 869.49a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Brown_Boveri"}" d="${"M618.88 853.01a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Hardstr."}" d="${"M465.3 489.72a5.09 5.09 0 01-8.88 4.96l-1.8-3.2a5.09 5.09 0 118.85-5l1.83 3.24z"}"></path><path id="${"Sevogelplatz"}" d="${"M514.63 503.49a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Karl_Barth-Platz"}" d="${"M566.2 533.9a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.55z"}"></path><path id="${"Zeughaus"}" d="${"M576.09 554.51a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Freidorf"}" d="${"M586.91 618.4a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.55z"}"></path><path id="${"Sch\xFCtzenstrasse"}" d="${"M642.2 650.91a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Muttenz_Dorf"}" d="${"M660.63 661.75a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Zum_Park"}" d="${"M623.77 640.07a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"K\xE4ppeli"}" d="${"M605.34 629.23a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Sch\xE4nzli"}" d="${"M576.13 598.39a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"St._Jakob"}" d="${"M576.26 576.45a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Rothausstrasse"}" d="${"M679.06 672.6a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.55z"}"></path><path id="${"Lachmatt"}" d="${"M697.49 683.43a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"K\xE4steli"}" d="${"M715.91 694.27a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Pratteln"}" d="${"M771.2 726.79a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Bahnhofstrasse"}" d="${"M752.77 715.95a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Grellingerstr."}" d="${"M540.42 518.69a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Gempenstrasse"}" d="${"M734.34 705.11a3.78 3.78 0 100-7.55 3.78 3.78 0 000 7.55z"}"></path><path id="${"Aeschenplatz"}" d="${"M403.15 509.92a5.09 5.09 0 01-5.15-8.77l36.5-21.81a5.08 5.08 0 115.2 8.74l-36.55 21.84z"}"></path><path id="${"St._Alban-Tor"}" d="${"M514.63 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Waldenburgerstr."}" d="${"M556.4 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Breite"}" d="${"M598.18 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"B\xE4ren"}" d="${"M639.95 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Schulstr."}" d="${"M681.73 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Salinenstr."}" d="${"M723.5 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path><path id="${"Birsfelden_Hard"}" d="${"M765.28 482.05a3.78 3.78 0 100-7.56 3.78 3.78 0 000 7.56z"}"></path></g></g></svg>`;
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
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let netzplan;
  onMount(() => {
    console.log(netzplan.id);
    console.log("mounted map");
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Netzplan, "Netzplan").$$render($$result, {this: netzplan}, {
      this: ($$value) => {
        netzplan = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
var search_svelte_svelte_type_style_lang = "main.svelte-1lwmifi{width:100vw;height:100vh;display:grid;align-items:center;justify-content:center}section.svelte-1lwmifi{width:100vw;height:100vh;grid-area:1 / 1}aside.svelte-1lwmifi{grid-area:1 / 1;display:grid;align-items:center;justify-content:start;padding:32px}div.svelte-1lwmifi{width:16rem}button.svelte-1lwmifi{align-self:center;width:100%;text-align:center;background-color:#2172cd;padding:.5rem}button.svelte-1lwmifi:hover{color:white;background-color:#094280}";
const css = {
  code: "main.svelte-1lwmifi{width:100vw;height:100vh;display:grid;align-items:center;justify-content:center}section.svelte-1lwmifi{width:100vw;height:100vh;grid-area:1 / 1}aside.svelte-1lwmifi{grid-area:1 / 1;display:grid;align-items:center;justify-content:start;padding:32px}div.svelte-1lwmifi{width:16rem}button.svelte-1lwmifi{align-self:center;width:100%;text-align:center;background-color:#2172cd;padding:.5rem}button.svelte-1lwmifi:hover{color:white;background-color:#094280}",
  map: '{"version":3,"file":"search.svelte","sources":["search.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Map from \\"$lib/Map.svelte\\";\\r\\n</script>\\n\\n<main>\\n  <section>\\n    <Map />\\n  </section>\\n\\n  <aside>\\n    <div>\\n      <button> NUTZUNG </button>\\n      <button> TAGESZEIT </button>\\n      <button> ZEITRAUM </button>\\n      <button> ZUSAMMENFASSUNG </button>\\n    </div>\\n  </aside>\\n</main>\\n\\n\\n<style>\\nmain {\\n  width: 100vw;\\n  height: 100vh;\\n  display: grid;\\n  align-items: center;\\n  justify-content: center;\\n}\\nsection {\\n  width: 100vw;\\n  height: 100vh;\\n  grid-area: 1 / 1;\\n}\\naside {\\n  grid-area: 1 / 1;\\n  display: grid;\\n  align-items: center;\\n  justify-content: start;\\n  padding: 32px;\\n}\\ndiv {\\n  width: 16rem;\\n}\\nbutton {\\n  align-self: center;\\n  width: 100%;\\n  text-align: center;\\n  background-color: #2172cd;\\n  padding: .5rem;\\n}\\nbutton:hover {\\n  color: white;\\n  background-color: #094280;\\n}\\n</style>"],"names":[],"mappings":"AAoBA,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AACzB,CAAC,AACD,OAAO,eAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,AAClB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,GAAG,eAAC,CAAC,AACH,KAAK,CAAE,KAAK,AACd,CAAC,AACD,MAAM,eAAC,CAAC,AACN,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,AAChB,CAAC,AACD,qBAAM,MAAM,AAAC,CAAC,AACZ,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,OAAO,AAC3B,CAAC"}'
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1lwmifi"}"><section class="${"svelte-1lwmifi"}">${validate_component(Map, "Map").$$render($$result, {}, {}, {})}</section>

  <aside class="${"svelte-1lwmifi"}"><div class="${"svelte-1lwmifi"}"><button class="${"svelte-1lwmifi"}">NUTZUNG </button>
      <button class="${"svelte-1lwmifi"}">TAGESZEIT </button>
      <button class="${"svelte-1lwmifi"}">ZEITRAUM </button>
      <button class="${"svelte-1lwmifi"}">ZUSAMMENFASSUNG </button></div></aside>
</main>`;
});
var search = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Search
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
