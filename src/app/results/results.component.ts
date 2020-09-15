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
  // randomAdjective: number = Math.floor(
  //   Math.random() * this.feelingsArray.length
  // );
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
    this.getFeelings();
  }
  getFeelings = () => {
    this.service.getFeelings().subscribe((response) => {
      this.feelingsArray = response;
    });
  };

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

  getYoutube = (): any => {
    this.service.getYoutube(`cats`).subscribe((response) => {
      console.log(response);
      this.videoResults = response;
    });
  };
}
