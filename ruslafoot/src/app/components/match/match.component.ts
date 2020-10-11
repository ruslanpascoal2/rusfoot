import { Component, OnInit, Input } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Match } from 'src/app/models/match';
import { Team } from 'src/app/models/team';



@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  @Input() show: boolean;

  timer = 0 ;

  games: Match[] = [
    {
      home: new Team('Goiás', 70, { primary: 'green', secondary: '#fff'} ),
      away: new Team('Atletico-GO', 70, { primary: 'black', secondary: 'red'} ),
      score: {h: 0, a: 0},
      time: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.games[0].home);

    this.calculatePercentages(this.games);
    const timerInterval$ = interval(1000);
    const timer$ = timer(90000);
    const times = 91;
    const time = 91;
    const countDown$ = timerInterval$.pipe(take(times));
    countDown$.subscribe((x) => {
      this.timer = x;
      this.generateEvents(this.games, x);
    });
  }

  generateEvents(games, time) {
    const chancesOfEventHappen = 0.3;
    const randomChances = Math.random() * 10;

    if(chancesOfEventHappen < randomChances){
      return;
    }
    else{
      const randomGoal  = Math.floor(Math.random() * 100) + 0;
      if(randomGoal > 7){
        games[0].score.h += 1;
      }
      else{
        games[0].score.a += 1;
      }
    }

  }

  calculatePercentages(games){
    games.map(
      x => {
        x.percentages = [(x.home.power / (x.home.power + x.away.power)), (x.home.away / (x.home.power + x.away.power))]
      }
    )
  }
}
