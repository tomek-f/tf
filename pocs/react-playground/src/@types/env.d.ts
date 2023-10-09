/* eslint-disable unicorn/prevent-abbreviations */
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // more env variables…
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
