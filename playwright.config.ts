import { devices, type PlaywrightTestConfig } from '@playwright/test';

const viewport = { width: 1280, height: 720 };

const config: PlaywrightTestConfig = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    use: {
        screenshot: 'on',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'], viewport },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'], viewport },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'], viewport },
        },
    ],
    testMatch: 'e2e/**/*.spec.ts',
};

export default config;
