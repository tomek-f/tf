import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RawIntlProvider } from 'react-intl';
import { Provider as ProviderRedux } from 'react-redux';

import config from './config';
import { ContextState, useValue } from './context-state';
import { augmentedIntl } from './i18n/intls';
import CustomRouter from './router/CustomRouter/CustomRouter';
import history from './router/history';
import { store } from './store';
import Root from './views/Root/Root';

import './themes-on-init';
import './index.css';

// TODO ? fix this
(async () => {
    const { language } = config;
    const { default: messages } = await import(
        `./i18n/locales/${language}.json`
    );
    const root = document.querySelector('#root');

    config.intl = augmentedIntl(language, messages);

    if (!root) {
        return;
    }

    const ProviderContextSelector = ({
        children,
    }: {
        children: React.ReactNode;
    }) => (
        <ContextState.Provider value={useValue()}>
            {children}
        </ContextState.Provider>
    );

    createRoot(root).render(
        <StrictMode>
            <HelmetProvider>
                <ProviderRedux store={store}>
                    <ProviderContextSelector>
                        {/* TODO ? fix this */}
                        {}
                        <RawIntlProvider value={config.intl}>
                            <CustomRouter history={history}>
                                <Root />
                            </CustomRouter>
                        </RawIntlProvider>
                    </ProviderContextSelector>
                </ProviderRedux>
            </HelmetProvider>
        </StrictMode>,
    );
})();
