const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/libs/foundation-native',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-native', 'react/jsx-runtime'],
    format: ['esm', 'cjs'],
    assets: [{ input: '.', output: '.', glob: '*.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
    plugins: [
      url({
        limit: 10000, // 10kB
      }),
    ],
    output: {
      interop: 'auto',
      sourcemap: false,
    },
  }
);
