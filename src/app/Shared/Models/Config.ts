import { InjectionToken } from '@angular/core';
import { TeamsConfig } from './teams';

const TEAMS_CONFIG = new InjectionToken<TeamsConfig>('teamService.config');
