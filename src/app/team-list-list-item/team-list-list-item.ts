import { Component, input } from '@angular/core';
import { Teams } from '../Shared/Models/teams';

@Component({
  imports: [],
  selector: 'app-team-list-list-item',
  styleUrl: './team-list-list-item.css',
  templateUrl: './team-list-list-item.html',
})
export class TeamListListItem {teams = input.required<Teams>();}

