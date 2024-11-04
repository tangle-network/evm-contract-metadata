import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EVMContractMetadata',
      fileName: 'evm-contract-metadata',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['viem', '@hyperlane-xyz/sdk', '@hyperlane-xyz/utils'],
      output: {
        globals: {
          viem: 'Viem',
          '@hyperlane-xyz/sdk': 'HyperlaneSdk',
          '@hyperlane-xyz/utils': 'HyperlaneUtils'
        }
      }
    }
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
