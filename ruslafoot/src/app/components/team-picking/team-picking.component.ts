import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-picking',
  templateUrl: './team-picking.component.html',
  styleUrls: ['./team-picking.component.scss']
})
export class TeamPickingComponent implements OnInit {

  @Input() show: boolean;


  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor() { }

  ngOnInit(): void {
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
