import { defineConfig } from '@rspack/cli';

export default defineConfig({
	entry: './src/index.js',
	devtool: false,
	output: {
		filename: 'rspack.js',
		clean: false
	}
} );
