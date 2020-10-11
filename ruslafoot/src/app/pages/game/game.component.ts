import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  user: any;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {}

  currentScreen: string = 'welcome';

  screens = [
    { title: 'welcome' },
    { title: 'team-picking' },
    { title: 'squad' },
    { title: 'match' },
    {},
    {},
    {},
  ];

  setUser(user) {
    this.user = user;
  }

  setTeam(team) {
    this.user.team = team;
    this.teamsService.generateSquads();
  }

  manageScreens() {
    switch (this.currentScreen) {
      case 'welcome':
        this.currentScreen = 'team-picking';
        break;
      case 'team-picking':
        this.currentScreen = 'squad';
        break;
      default:
        break;
    }
  }
}
