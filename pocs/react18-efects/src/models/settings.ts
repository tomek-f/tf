import { createModel } from '@rematch/core';

import type { RootModel } from '.';

interface SettingsState {
  isLightThemeOn: boolean;
}

const settingsModel = createModel<RootModel>()({
  state: {
    isLightThemeOn: true,
  } as SettingsState,
  reducers: {
    SET_THEME: (state: SettingsState, payload: 'light' | 'dark') => {
      state.isLightThemeOn = payload ? payload === 'light' : !state.isLightThemeOn;
    },
  },
});

export default settingsModel;
