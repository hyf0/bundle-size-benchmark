import { defineConfig } from '@rspack/cli';

// The commented out options are valid, but for some reason increase the bundle size by a lot.

export default defineConfig({
	entry: './src/index.js',
	devtool: false,
	// target: 'es2022',
	output: {
		// chunkFormat: 'module',
		// chunkLoading: 'import',
		filename: 'rspack.js',
		clean: false
	}
} );
