import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [sveltePreprocess({ typescript: true })],
			onwarn(warning, defaultHandler) {
				// don't warn on <marquee> elements, cos they're cool
				if (warning.code === 'a11y-distracting-elements') return;

				// handle all other warnings normally
				defaultHandler(warning);
			},
			hot: true // true is dev mode. production code is false.
		}),
	],
	resolve: {
		alias: {
      $api: path.resolve('./src/api'),
      $components: path.resolve('./src/components'),
      $lib: path.resolve('./src/lib'),
      $mixins: path.resolve('./src/mixins'),
      $routes: path.resolve('./src/routes'),
      $styles: path.resolve('./src/styles'),
      $utils: path.resolve('./src/utils'),
      $entity: path.resolve('./src/entity'),
      $store: path.resolve('./src/stores')
    }
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
