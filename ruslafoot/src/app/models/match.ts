import { Team } from './team';

export class Match {
  home: Team;
  away: Team;
  score: {h: number, a:number};
  time: number;
  percentages?: number[]

  constructor(){

  }
}
