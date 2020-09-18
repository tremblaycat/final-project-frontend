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
  selectedResults: any;
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
    // this.getQuotes();
    this.getSelected();
    this.name = this.service.getName();
    console.log(this.name);
  }

  getPhoto = (): any => {
    this.service.getUnsplash().subscribe((response) => {
      console.log(response);
      this.randomPhoto = response;
    });
  };

  // getQuotes = (): any => {
  //   this.service.getQuotes().subscribe((response) => {
  //     console.log(response);
  //     this.quoteResults = response;
  //   });
  // };

  getSelected = (): any => {
    this.getRandomFeeling();
    this.service.getSelected(this.selectedFeeling).subscribe((response) => {
      this.selectedResults = response[0];
      console.log(response[0]);
    });
  };

  getRandomFeeling = () => {
    this.feelingsArray = this.service.getFeelings();
    let randomNumber = Math.floor(Math.random() * this.feelingsArray.length);
    console.log(this.feelingsArray[randomNumber]);
    this.selectedFeeling = this.feelingsArray[randomNumber];
    this.getYoutube();
  };

  getYoutube = (): any => {
    this.service
      .getYoutube(`self-help-for-feeling-${this.selectedFeeling}`)
      .subscribe((response) => {
        console.log(response);
        this.videoResults = response;
      });
  };
}
