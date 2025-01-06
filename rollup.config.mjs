import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser';

export default {
  input: './src/calendar.ts',
  output: [
    {
      file: './dist/calendar.js',
      format: 'umd',
      name: 'calendar'
    },
    {
      file: './dist/calendar.mjs',
      format: 'es'
    }
  ],
  plugins: [
    typescript({
      outDir: 'dist',
      declaration: true,
      declarationDir: 'dist'
    }),
    terser()
  ]
}
