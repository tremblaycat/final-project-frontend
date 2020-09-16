import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InspiritService } from '../inspirit.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  isCollapsed: boolean = true;
  randomPhoto: any;
  videoResults: any;
  quoteResults: any;
  feelingsArray: any;
  name: string;
  selectedFeeling: string;

  constructor(
    private route: ActivatedRoute,
    private service: InspiritService
  ) {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.getPhoto();
    this.getYoutube();
    this.getQuotes();
    this.feelingsArray = this.service.getFeelings();
    this.getRandomFeeling();
    this.name = this.service.getName();
    console.log(this.name);
  }

  getPhoto = (): any => {
    this.service.getUnsplash().subscribe((response) => {
      console.log(response);
      this.randomPhoto = response;
    });
  };

  getQuotes = (): any => {
    this.service.getQuotes().subscribe((response) => {
      console.log(response);
      this.quoteResults = response;
    });
  };

  getRandomFeeling = () => {
    let randomNumber = Math.floor(Math.random() * this.feelingsArray.length);
    console.log(this.feelingsArray[randomNumber]);
    this.selectedFeeling = this.feelingsArray[randomNumber];
    return this.selectedFeeling;
  };

  getYoutube = (): any => {
    this.service
      .getYoutube(`{{this.selectedFeeling}}`)
      .subscribe((response) => {
        console.log(response);
        this.videoResults = response;
      });
  };
}
