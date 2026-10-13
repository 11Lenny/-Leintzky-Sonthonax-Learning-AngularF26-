import { InjectionToken} from '@angular/core';

export interface TeamsConfig {
  apiBaseUr: string;
  defaultCity: string;
}

export const TEAMS_CONFIG = new InjectionToken<TeamsConfig>('teams.config');
export interface Team {
  team: number;
  name: string;
  city: string;
  championships: number;
  greatestPlayer: string;
  contender: boolean;
}
