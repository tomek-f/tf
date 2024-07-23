declare namespace NodeJS {
    interface ProcessEnv {
        readonly IS_DEVELOPMENT: string;
        readonly IS_NON_PRODUCTION: string;
        readonly IS_PREVIEW: string;
        readonly IS_PRODUCTION: string;

        readonly TURSO_TOKEN_1: string;
        readonly TURSO_TOKEN_2: string;
        readonly TURSO_URL_1: string;
        readonly TURSO_URL_2: string;
    }
}
