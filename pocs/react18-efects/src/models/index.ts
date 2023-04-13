import type { Models } from '@rematch/core';

import game from './game';
import settings from './settings';

export interface RootModel extends Models<RootModel> {
  game: typeof game;
  settings: typeof settings;
}

export const models: RootModel = {
  game,
  settings,
};
