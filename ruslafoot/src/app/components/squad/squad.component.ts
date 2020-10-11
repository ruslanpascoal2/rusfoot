import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {
  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
