import { createModel } from '@rematch/core';

import type { RootModel } from '.';
import delay from '../utils/delay';

export interface TeamModel {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface PlayerModel {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
  team: TeamModel;
}

interface GameState {
  players: PlayerModel[];
  teams: TeamModel[];
}

const gameModel = createModel<RootModel>()({
  state: {
    players: [],
    teams: [],
  } as GameState,
  reducers: {
    SET_PLAYERS: (state: GameState, players: PlayerModel[]) => {
      state.players = players;
    },
    SET_TEAMS: (state: GameState, teams: TeamModel[]) => {
      state.teams = teams;
    },
  },
  effects: (dispatch) => {
    const { game } = dispatch;

    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async getPlayersEffect(): Promise<any> {
        const response = await fetch('https://www.balldontlie.io/api/v1/players');
        const { data: palyers } = (await response.json()) as {
          data: PlayerModel[];
        };

        await delay(1000);

        const response2 = await fetch('https://www.balldontlie.io/api/v1/teams');
        const { data: teams } = (await response2.json()) as { data: TeamModel[] };

        await delay(1000);

        game.SET_PLAYERS(palyers);
        game.SET_TEAMS(teams);
      },
    };
  },
});

export default gameModel;
