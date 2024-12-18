import { defineConfig } from 'rolldown';

export default defineConfig( {
	input: 'src/index.js',
	output: {
		file: 'rolldown.js',
		dir: 'dist',
		format: 'es',
		minify: false,
		comments: 'none'
	}
} );
