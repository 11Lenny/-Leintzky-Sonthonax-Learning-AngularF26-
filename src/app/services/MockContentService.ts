import {Injectable, signal, effect, computed, inject } from '@angular/core';
import { Team } from '../Shared/Models/teams';
import { TeamList } from '../team-list/team-list';
import { TeamListItem } from '../team-list-item/team-list-item';


@Injectable({ providedIn: 'root' })
export class MockContentService { provide: TeamList, useClass: MockContentService }

private TeamListItem = inject(MockContentService);
