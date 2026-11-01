import {Injectable, signal, effect, computed, inject } from '@angular/core';
import { Team, TEAMS_CONFIG } from '../Shared/Models/teams';
import { TeamList } from '../team-list/team-list';



@Injectable({ providedIn: 'root' })

// private config = inject(BREWERY_CONFIG);
export class teamService {
  private config = inject(TEAMS_CONFIG);
  private teams = signal<Team[]>([
  //TODO receive input from something
    { team: 1, name: 'Canadiens', city: 'Montreal', championships: 24, greatestPlayer: 'Maurice Richard', contender: true, },
    { team: 2, name: 'Lakers', city: 'Los Angeles', championships: 17, greatestPlayer: 'Kobe Bryant', contender: false, },
    { team: 3, name: 'Patriots', city: 'New England', championships: 6, greatestPlayer: 'Tom Brady', contender: false, },
    { team: 4, name: 'Yankees', city: 'New York', championships: 27, greatestPlayer: 'George Herman Ruth', contender: false, },
  ]);
  canadianCount = computed(() => this.teams().filter(c => c.city === 'Montreal').length);


  /**
   * computed (question 9) needs some sort of value transformation done to it
   *
   * take a look at my service file line 17
   *
   * If you wanted to count the instances in YOUR file of canadian teamService I would think you should
   * filter the array based off of isCanadian = true (I am guessing if that is your variable)
   * and then wrap that in a .length()
   */
}

  //private Teams = signal<teamService>[] => [...list, ]);
  //this.TeamList.update(teams =>[...teams newItem]);

  //teamService = computed (() =>
   // return this.Teams().filter(teamService.isCanadian == true);



//TeamsList
  /*private teamService = signal(<Team[]>[
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
  ]);

  teamList = this.teamService.asReadonly();

  addTeams(t: Team) :void{
    this.teamService.update((list:Team[]):Team[] => [...list, t]);
  }
}
*/
