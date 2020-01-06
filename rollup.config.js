module.exports = {
  input: './src/index.js',
  output: [{
    file: 'dist/index.cjs.js',
    format: 'cjs',
    sourcemap: true
  }, {
    file: 'dist/index.es.js',
    format: 'es',
    sourcemap: true
  }, {
    file: 'dist/index.js',
    name: 'prosemirror.menu',
    format: 'umd',
    sourcemap: true,
    exports: 'named',
    amd: { id: 'prosemirror-menu' }
  }],
  plugins: [require('@rollup/plugin-buble')()],
  external(id) { return !/^[\.\/]/.test(id) }
}
