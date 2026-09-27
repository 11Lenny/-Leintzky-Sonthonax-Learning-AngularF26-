import { Component } from '@angular/core';
import { Teams } from '../Shared/Models/teams';

@Component({
  imports: [],
  selector: 'app-team-list-list',
  styleUrl: './team-list-list.css',
  templateUrl: './team-list-list.html',
})
export class TeamListList {
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
  ];
}
