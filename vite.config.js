import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'EVMContractMetadata',
      fileName: 'evm-contract-metadata',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['@hyperlane-xyz/sdk', '@hyperlane-xyz/utils'],
      output: {
        globals: {
          '@hyperlane-xyz/sdk': 'HyperlaneSdk',
          '@hyperlane-xyz/utils': 'HyperlaneUtils'
        }
      }
    }
  },
  test: {
    include: ['test/**/*.test.ts'],
    watch: false
  },
  plugins: [
    dts({
      include: ['src'],
      outDir: 'dist',
      rollupTypes: true,
      copyDtsFiles: true,
      insertTypesEntry: true,
      skipDiagnostics: false,
      logDiagnostics: true
    })
  ]
});
