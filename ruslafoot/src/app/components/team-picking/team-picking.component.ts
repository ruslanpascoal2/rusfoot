import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-picking',
  templateUrl: './team-picking.component.html',
  styleUrls: ['./team-picking.component.scss']
})
export class TeamPickingComponent implements OnInit {

  @Input() show: boolean;
  @Output() screenSubmitted = new EventEmitter;
  @Output() teamSelected = new EventEmitter;
  teams: Team[];
  currentTeam: number = 0 ;

  constructor(private teamsService: TeamsService) {
    this.teams = this.teamsService.getTeams();
  }

  ngOnInit(): void {

  }

  right(){
    if(this.currentTeam == this.teams.length - 1){
      this.currentTeam = 0;
    }
    else{
      this.currentTeam++;
    }
  }

  left(){
    if(this.currentTeam == 0){
      this.currentTeam = this.teams.length - 1;
    }
    else{
      this.currentTeam--;
    }
  }

  submitScreen(){
    this.teamSelected.emit(this.teams[this.currentTeam]);
    this.screenSubmitted.emit(true);
  }


}
