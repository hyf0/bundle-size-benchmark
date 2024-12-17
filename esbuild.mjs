import { build } from 'esbuild';

build( {
	entryPoints: [
		'src/index.js'
	],
	outfile: 'dist/esbuild.js',
	format: 'esm',
	target: 'es2022',
	bundle: true,
	legalComments: 'none',
	minify: true,
	logLevel: 'info'
} );
