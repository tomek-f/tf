// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly IS_DEVELOPMENT?: boolean;
    readonly IS_NON_PRODUCTION?: boolean;
    readonly IS_PREVIEW?: boolean;
    readonly IS_PRODUCTION?: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
