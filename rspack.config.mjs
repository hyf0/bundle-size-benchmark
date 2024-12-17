import { defineConfig } from '@rspack/cli';

export default defineConfig({
	entry: './src/index.js',
	devtool: false,
	target: 'es2022',
	output: {
		chunkFormat: 'module',
		filename: 'rspack.js',
		clean: false
	}
} );
