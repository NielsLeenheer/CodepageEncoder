import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

/**
 * Add Codepage to the type exports.
 * The Codepage type is inlined from the generated module by rollup-plugin-dts,
 * but because it's imported via @import (not @typedef), it isn't re-exported automatically.
 */
function exportCodepage() {
	return {
		name: 'export-codepage',
		renderChunk(code) {
			return code.replace(
				'export type { AutoEncodeFragment',
				'export type { AutoEncodeFragment, Codepage'
			);
		}
	};
}

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
	},

	// Bundle TypeScript declarations
	{
		input: 'dist/tmp/src/codepage-encoder.d.ts',
		output: {
			file: 'dist/codepage-encoder.d.ts',
			format: 'es'
		},
		plugins: [dts(), exportCodepage()]
	}
];
