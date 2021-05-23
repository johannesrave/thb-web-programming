const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\search.svelte"),
	() => import("..\\..\\..\\src\\routes\\shop.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/search.svelte
	[/^\/search\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/shop.svelte
	[/^\/shop\/?$/, [c[0], c[4]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];