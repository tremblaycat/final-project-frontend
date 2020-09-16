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
    this.getQuotes();
    this.getSelected();
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

  getSelected = (): any => {
    this.service.getSelected(this.selectedFeeling).subscribe((response) => {
      this.selectedResults = response;
      console.log(this.selectedResults);
    });
  };

  // getFeelingQuote=(selectedFeeling:string): any => {
  //   let databaseInfo=this.service.getQuotes();
  //   let results=databaseInfo.filter(selectedFeeling)
  //   let randomNumber = Math.floor(Math.random() * this.databaseInfo.length)

  // }

  getRandomFeeling = () => {
    let randomNumber = Math.floor(Math.random() * this.feelingsArray.length);
    console.log(this.feelingsArray[randomNumber]);
    this.selectedFeeling = this.feelingsArray[randomNumber];
    // this.getYoutube();
  };

  // getYoutube = (): any => {
  //   this.service
  //     .getYoutube(`self-help-for-feeling-${this.selectedFeeling}`)
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.videoResults = response;
  //     });
  // };
}
