import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from "path";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$api: path.resolve('./src/api'),
			$components: path.resolve('./src/components'),
			$lib: path.resolve('./src/lib'),
			$mixins: path.resolve('./src/mixins'),
			$routes: path.resolve('./src/routes'),
			$styles: path.resolve('./src/styles'),
			$utils: path.resolve('./src/utils'),
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
