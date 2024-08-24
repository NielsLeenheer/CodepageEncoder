import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [
    // browser-friendly UMD build
	{
		input: 'src/codepage-encoder.js',
		output: {
			name: 'CodepageEncoder',
			file: 'dist/codepage-encoder.umd.js',
			sourcemap: true,
			format: 'umd'
		},
		plugins: [
			resolve(), 
			commonjs(),
            terser() 
		]
	},

	{
		input: 'src/codepage-encoder.js',
		output: { 
			file: 'dist/codepage-encoder.esm.js', 
			sourcemap: true,
			format: 'es' 
		},
		plugins: [
			resolve(),
			commonjs(),
            terser()
		]
	},
	
	{
		input: 'src/codepage-encoder.js',
		output: [
			{ file: 'dist/codepage-encoder.cjs', format: 'cjs' },
			{ file: 'dist/codepage-encoder.mjs', format: 'es' }
		]
	}
];
