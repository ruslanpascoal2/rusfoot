import { Player } from './player';

export class Team {
    name: string;
    power: number;
    colors: {primary: string, secondary: string}
    squad?: Player[];

    constructor(name, power, colors){
      this.name = name;
      this.power = power;
      this.colors = colors;
    }
}


