import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Leintzky-Sonthonax-Learning-AngularF26');

  team: {name: string} & {city: string} = {
    name: 'Canadiens',
    city: 'Montreal'
  };
  championships: {titles: number} & {finalsAppearances: number} = {
    titles: 24,
    finalsAppearances: 33
  };
}
