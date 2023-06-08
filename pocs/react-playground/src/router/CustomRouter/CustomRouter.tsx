import { useLayoutEffect, useState } from 'react';
import type { BrowserHistory } from 'history';
import { Router } from 'react-router-dom';

interface Props {
  basename?: string;
  children: React.ReactNode;
  history: BrowserHistory;
}

const CustomRouter = ({ basename, children, history }: Props) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default CustomRouter;
