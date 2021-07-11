import adapter_static from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {resolve} from 'path';

const dev = process.env.NODE_ENV === 'development';
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
        files:{
            assets: 'static'
        },
        vite: {
            resolve: {
                alias: {
                    $banking: resolve('./src/banking'),
                    $util: resolve('./src/util'),
                    $login: resolve('./src/login'),
                }
            }
        }
    }
}

export default config;
