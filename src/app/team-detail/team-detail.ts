import { Component, inject, input, computed } from '@angular/core';
import { TeamList } from '../team-list/team-list';
import { teamService } from '../services/teamService';

@Component({
  imports: [],
  selector: 'app-team-detail',
  styleUrl: './team-detail.css',
  templateUrl: './team-detail.html',
})
export class TeamDetail {
  private service = inject(teamService);

  id = input.required<string>();
  team = computed(() => this.service.teamList().find((t) => t.team.toString() === this.id()));
};
