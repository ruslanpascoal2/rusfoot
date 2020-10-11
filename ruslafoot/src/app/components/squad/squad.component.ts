import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {
  @Input() show: boolean;
  @Input() user: any;

  displayedColumns: string[] = ['name', 'position', 'overall'];
  dataSource;

  constructor() { }

  ngOnInit(): void {
   this.dataSource = this.user.team.players;
  }

}
