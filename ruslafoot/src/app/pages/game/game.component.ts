import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  user: any;

  constructor() { }

  ngOnInit(): void {
  }

  currentScreen: string = 'match';

  screens = [
    {title: 'welcome'},
    {title: 'team-picking'},
    {title: 'squad'},
    {title: 'match'},
    {},
    {},
    {},
  ]

  setUser(user){
    this.user = user;
  }

  manageScreens(screen){
    switch (this.currentScreen) {
      case 'welcome':
        this.currentScreen = 'match'
        break;

      default:
        break;
    }
  }
}
