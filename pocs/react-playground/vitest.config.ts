import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

const vitestConfig = defineConfig({
    test: { environment: 'happy-dom' },
});

export default mergeConfig(viteConfig, vitestConfig);
