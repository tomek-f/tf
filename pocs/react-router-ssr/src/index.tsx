import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CustomRouter } from './router/CustomRouter/CustomRouter';
import { history } from './router/history';
import { Root } from './views/Root/Root';

import './index.css';

(() => {
  const root = document.getElementById('root');

  if (!root) {
    return;
  }

  createRoot(root).render(
    <StrictMode>
      <CustomRouter history={history}>
        <Root />
      </CustomRouter>
    </StrictMode>,
  );
})();
