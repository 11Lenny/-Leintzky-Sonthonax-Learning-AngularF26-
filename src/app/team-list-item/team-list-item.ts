import { Component, input, output } from '@angular/core';
import { Team} from '../Shared/Models/teams';

@Component({
  imports: [],
  selector: 'app-team-list-item',
  styleUrl: './team-list-item.css',
  templateUrl: './team-list-item.html',
})
export class TeamListItem {
  teams = input.required<Team>();
  opened = output<ContentEvent>();
  onClick(): void {
    this.opened.emit({ clickedTeam: this.teams() .team, clicked: 'opened'});

  }
}

export interface ContentEvent {
  clickedTeam: number;
  clicked: 'opened' | 'favourited';

}


