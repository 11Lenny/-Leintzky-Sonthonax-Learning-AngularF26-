import { InjectionToken} from '@angular/core';
import { TeamList } from '../../team-list/team-list';


//TODO this should probably be in its own file in the models as well
export interface TeamsConfig {
  apiBaseUrl: string;
  defaultCity: string;
}
//TODO go to own file in the shared folder
 //const TEAMS_CONFIG = new InjectionToken<TeamsConfig>('teamService.config');


//TODO this belong in the seervice
//private config: TEAMS_CONFIG = inject(TEAMS_CONFIG);

//This stays here
export interface Team {
  team: number;
  name: string;
  city: string;
  championships: number;
  greatestPlayer: string;
  contender: boolean;
}
