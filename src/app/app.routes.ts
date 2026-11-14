import { Routes } from '@angular/router';
import { TeamList } from './team-list/team-list';
import { TeamDetail } from './team-detail/team-detail';

export const routes: Routes = [{ path: 'teams', component: TeamList },
  { path: 'teams/:id', component: TeamDetail, }];
