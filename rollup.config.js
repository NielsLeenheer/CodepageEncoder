export default [
    {
		input: 'src/codepage-encoder.js',
		output: [
			{ file: 'dist/codepage-encoder.cjs', format: 'cjs' },
			{ file: 'dist/codepage-encoder.mjs', format: 'es' }
		]
	}
];
