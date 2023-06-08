import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ProviderRedux } from 'react-redux';

import { CustomRouter } from './router/CustomRouter/CustomRouter';
import { history } from './router/history';
import { store } from './store';
import { Root } from './views/Root/Root';

import './index.scss';

(() => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <ProviderRedux store={store}>
          <CustomRouter history={history}>
            <Root />
          </CustomRouter>
        </ProviderRedux>
      </HelmetProvider>
    </StrictMode>,
  );
})();
