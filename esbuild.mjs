import { build } from 'esbuild';

build( {
	entryPoints: [
		'src/index.js'
	],
	outfile: 'dist/esbuild.js',
	format: 'esm',
	bundle: true,
	legalComments: 'none',
	minify: true,
	logLevel: 'info'
} );
