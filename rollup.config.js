import { html } from 'rollup-plugin-html';
export default {
    input: 'dist/index.js',
    sourceMap: true,
    external: ['@angular/core', '@angular/platform-browser'],
    output: {
        dir: 'output',
        file: 'test.umd.js',
        name: 'test',
        format: 'umd',
        moduleName: 'test',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/platform-browser': 'ng.platformBrowser'
        }
    }
}
