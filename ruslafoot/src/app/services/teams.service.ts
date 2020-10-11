import { Injectable } from '@angular/core';
import teams from '../../assets/db/teams.json';
import { Team } from '../models/team';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

teams: Team[] = [
    {
      name: 'Goiás',
      power: 70,
      colors: {
        primary: '#3db73d',
        secondary: 'white'
      }
    },
    {
      name: 'Atlético-GO',
      power: 70,
      colors: {
        primary: '#dc4f4f',
        secondary: 'black'
      }
    },
    {
      name: 'Vila Nova',
      power: 55,
      colors: {
        primary: '#dc4f4f',
        secondary: 'white'
      }
    },
    {
      name: 'Anapolina',
      power: 53,
      colors: {
        primary: '#dc4f4f',
        secondary: 'white'
      }
    },
    {
      name: 'Aparecidense',
      power: 60,
      colors: {
        primary: 'grey',
        secondary: 'white'
      }
    },
    {
      name: 'CRAC',
      power: 50,
      colors: {
        primary: 'turquoise',
        secondary: 'white'
      }
    }
  ]


  constructor() { }

  getTeams(){
    return this.teams;
  }

  generateSquads(){
    this.teams.map(x => {
      x.squad = [];
      let squadLength = Math.floor(Math.random() * 30) + 20;
      for (let i = 0; i < squadLength; i++) {
        let overall = Math.floor(Math.random() * 15) + 5;
        x.squad.push(new Player('Nome do jogador', overall, 'Centroavante'))
      }

    })
  }

}
