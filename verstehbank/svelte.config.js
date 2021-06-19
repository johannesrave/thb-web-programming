import adapter_static from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

const dev = process.env.NODE_ENV == 'development';
const base = dev ? '' : '/~rave/verstehbank/build';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter_static({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        paths: {
            base: base
        },
        vite: {
            resolve: {
                alias: {
                    $root: path.resolve(base)
                }
            }
        }
    }
}

export default config;
