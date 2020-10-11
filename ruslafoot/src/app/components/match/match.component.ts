import { Component, OnInit, Input } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

export interface TeamI {
  name: string;
  power: number;
}

export interface GameI {
  home: TeamI;
  away: TeamI;
  score: {h: number, a:number};
  time: number;
  percentages?: number[]
}

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  @Input() show: boolean;

  timer = 0 ;

  games: GameI[] = [
    {
      home: { name: 'Goiás', power: 70 },
      away: { name: 'Vila Nova', power: 30 },
      score: {h: 0, a: 0},
      time: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {
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
      debugger;
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
