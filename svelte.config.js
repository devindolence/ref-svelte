import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // preprocess: preprocess(),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  vite: {
    resolve: {
      alias: {
        $api: path.resolve('./src/api'),
        $components: path.resolve('./src/components'),
        $lib: path.resolve('./src/lib'),
        $mixins: path.resolve('./src/mixins'),
        $routes: path.resolve('./src/routes'),
        $styles: path.resolve('./src/styles'),
        $theme: path.resolve('./src/theme'),
        $utils: path.resolve('./src/utils'),
      }
    }
  }
};

export default config;
