import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// import { loadEnv, type UserConfig } from 'vite';

// not needed for VITE prefix https://vitejs.dev/guide/env-and-mode.html#html-env-replacement
// /**
//  * Replace env variables in index.html
//  * @see https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
//  * @see https://vitejs.dev/guide/api-plugin.html#transformindexhtml
//  */
// function htmlPlugin(environment: ReturnType<typeof loadEnv>) {
//     return {
//         name: 'html-transform',
//         transformIndexHtml: {
//             order: 'pre',
//             transform: (html: string) =>
//                 // TODO ? fix this
//                 html.replace(
//                     /%(.*?)%/g,
//                     (match, p1: string) => environment[p1] ?? match,
//                 ),
//         },
//     };
// }

// loadEnv(mode as string, process.cwd(), 'VITE') === loadEnv(mode as string, '.', 'VITE')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // htmlPlugin(loadEnv(mode as string, process.cwd(), 'VITE')),
        // stats.html file sizes are messed up
        visualizer({
            brotliSize: true,
            gzipSize: true,
            // generates ./stats.html
            template: 'treemap',
            // open: true,
        }),
        tsconfigPaths(),
    ],
});
