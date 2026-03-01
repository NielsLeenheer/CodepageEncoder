import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

/**
 * Clean up rollup-plugin-dts deduplication artifacts.
 * When bundling, dts renames types to avoid collisions (e.g., Codepage becomes Codepage$1)
 * and adds an alias (type Codepage = Codepage$1). This plugin inlines them back.
 */
function cleanDts() {
	return {
		name: 'clean-dts',
		renderChunk(code) {
			const aliases = [];
			const aliasPattern = /^type (\w+) = \1\$(\d+);$/gm;
			let match;
			while ((match = aliasPattern.exec(code)) !== null) {
				aliases.push({ name: match[1], n: match[2] });
			}

			for (const { name, n } of aliases) {
				code = code.replace(new RegExp(`\\b${name}\\$${n}\\b`, 'g'), name);
			}

			// Remove now-redundant "type X = X;" lines
			code = code.replace(/^type (\w+) = \1;\s*\n/gm, '');

			return code;
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
		plugins: [dts(), cleanDts()]
	}
];
