import { Component } from '@angular/core';
import { Teams } from '../Shared/Models/teams';
import { TeamListListItem } from '../team-list-list-item/team-list-list-item';

@Component({
  imports: [TeamListListItem],
  selector: 'app-team-list',
  styleUrl: './team-list.css',
  templateUrl: './team-list.html',
})
export class TeamList {
  teamList: Teams[] = [
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
