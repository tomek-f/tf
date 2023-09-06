import { resolve } from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { loadEnv, type UserConfig } from 'vite';

/**
 * Replace env variables in index.html
 * @see https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
 * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
 */
function htmlPlugin(env: ReturnType<typeof loadEnv>) {
    return {
        name: 'html-transform',
        transformIndexHtml: {
            order: 'pre',
            transform: (html: string) =>
                html.replace(/%(.*?)%/g, (match, p1: string) => env[p1] ?? match),
        },
    };
}

// loadEnv(mode as string, process.cwd(), 'VITE') === loadEnv(mode as string, '.', 'VITE')
// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => ({
    plugins: [
        react(),
        htmlPlugin(loadEnv(mode as string, process.cwd(), 'VITE')),
        // stats.html file sizes are messed up
        visualizer({
            // generates ./stats.html
            template: 'treemap',
            gzipSize: true,
            brotliSize: true,
            // open: true,
        }),
    ],
    resolve: {
        alias: {
            REACT_PG: resolve(__dirname, 'src'),
        },
    },
});
