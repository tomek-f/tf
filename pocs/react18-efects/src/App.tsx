import React, { useCallback, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';

import type { Dispatch, RootState } from './store';
import delay from './utils/delay';

const isDevelopmentRun = process.env.NODE_ENV === 'development';

// https://medium.com/@arm.ninoyan/fixed-react-18-useeffect-runs-twice-8480f0bd837f
const useLegacyEffect = (cb: () => void, deps: unknown[]) => {
  const isMountedRef = useRef(!isDevelopmentRun);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;

      return undefined;
    }

    return cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const App = ({ settingsState, gameState }: Props) => {
  const dispatch = useDispatch<Dispatch>();

  console.count('root');

  useLegacyEffect(() => {
    console.count('effect-1');
    console.log('effect log', {
      gameState,
      settingsState,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLegacyEffect(() => {
    (async () => {
      console.count('effect-2');
      console.log('effect dispatch.players.getPlayersEffect');

      await delay(1000);

      await dispatch.game.getPlayersEffect();
    })();
  }, [dispatch.game]);

  useLegacyEffect(() => {
    console.count('effect-3');

    const theme = settingsState.isLightThemeOn ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', theme);
  }, [settingsState.isLightThemeOn]);

  const checkTheme = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch.settings.SET_THEME('dark');
      } else {
        dispatch.settings.SET_THEME('light');
      }
    },
    [dispatch.settings],
  );

  return (
    <>
      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input
            checked={!settingsState.isLightThemeOn}
            id="checkbox"
            onChange={(e) => checkTheme(e)}
            type="checkbox"
          />
          <div className="slider round" />
        </label>
        <em>Enable Dark Mode!</em>
      </div>
      <h1>NBA Players:</h1>
      <div className="container">
        {!gameState.players.length ? (
          <div className="loader">Loading...</div>
        ) : (
          gameState.players.map((player) => (
            <div className="card" key={player.id}>
              <h5>
                {player.first_name} {player.last_name}
              </h5>
              <div>
                <p>
                  <b>Position: </b> {player.position}
                  <br />
                  <b>Team: </b> {player.team.full_name}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <h1>NBA Teams:</h1>
      <div className="container">
        {!gameState.teams.length ? (
          <div className="loader">Loading...</div>
        ) : (
          gameState.teams.map((team) => (
            <div className="card" key={team.id}>
              <h5>
                {team.full_name} | {team.name} | {team.abbreviation}
              </h5>
              <div>
                <p>
                  <b>city: </b> {team.city}
                  <br />
                  <b>conference: </b> {team.conference}
                  <br />
                  <b>division: </b> {team.division}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

const mapState = (state: RootState) => ({
  settingsState: state.settings,
  gameState: state.game,
});

const mapDispatch = (/* dispatch: Dispatch */) => ({
  // gameDispatch: dispatch.game,
  // settingsDispatch: dispatch.settings,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

export default connect(mapState, mapDispatch)(App);
