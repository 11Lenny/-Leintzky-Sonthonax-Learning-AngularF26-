import { Component } from '@angular/core';
import { Team } from '../Shared/Models/teams';
import { TeamListItem } from '../team-list-item/team-list-item';

@Component({
  imports: [TeamListItem],
  selector: 'app-team-list',
  styleUrl: './team-list.css',
  templateUrl: './team-list.html',
})
export class TeamList {
  teamList: Team[] = [
    {
      team: 1,
      name: 'Canadiens',
      city: 'Montreal',
      championships: 24,
      greatestPlayer: 'Maurice Richard',
      contender: true,
    },
    {
      team: 2,
      name: 'Lakers',
      city: 'Los Angeles',
      championships: 17,
      greatestPlayer: 'Kobe Bryant',
      contender: false,
    },
    {
      team: 3,
      name: 'Patriots',
      city: 'New England',
      championships: 6,
      greatestPlayer: 'Tom Brady',
      contender: false,
    },
    {
      team: 4,
      name: 'Yankees',
      city: 'New York',
      championships: 27,
      greatestPlayer: 'George Herman Ruth',
      contender: false,
    },
  ];
}
export interface ContentEvent {
  clickedTeam: number;
  clicked: 'opened' | 'favourited';

}
