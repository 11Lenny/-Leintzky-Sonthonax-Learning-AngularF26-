import { Component, numberAttribute, signal } from '@angular/core';
import {Teams} from './Shared/Models/teams';
import { TeamList } from './team-list/team-list';

@Component({
  imports: [TeamList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Leintzky-Sonthonax-Learning-AngularF26');

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
