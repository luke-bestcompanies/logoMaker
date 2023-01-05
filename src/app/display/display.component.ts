import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  rankNumber: number = 75;
  year: number = 2022;

  backgroundColor: string = 'red';

  topLine: string = "Yorkshire & The Humber's";
  textLineOne: string = "Best Companies";
  textLineTwo: string = "To Work For";
  website: string = "cert.b.co.uk";

  rankStyle: string = 'top';

  constructor() { }

  ngOnInit(): void {
  }

}
