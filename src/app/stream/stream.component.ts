import { Component, OnInit } from '@angular/core';
import { InspiritService } from '../inspirit.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements OnInit {
  randomPhoto: any;
  quoteResult: any;
  randomQuote: any;
  photoArray: any[] = [];
  quoteArray: any[] = [];
  constructor(private service: InspiritService) {}

  ngOnInit(): void {
    this.getQuotes();
    this.getPhoto();
  }

  getQuotes = (): any => {
    this.service.getStreamQuotes().subscribe((response) => {
      console.log(response);
      this.quoteArray = response;
    });
  };

  getPhoto = (): any => {
    this.service.getUnsplashStream().subscribe((response) => {
      console.log(response);
      this.photoArray.push(response);
      console.log(this.photoArray);
    });
  };

  save = () => {};

  // getPhoto = (): any => {
  //   this.service.getUnsplash().subscribe((response) => {
  //     console.log(response);
  //     this.randomPhoto = response;
  //     this.photoArray.push(this.randomPhoto);
  //     console.log(this.photoArray);
  //   });
  // };
  // getQuote = (): any => {
  //   this.service.getQuotes().subscribe((response) => {
  //     console.log(response);

  //     this.quoteArray = response;
  //     let randomNumber = Math.floor(Math.random() * this.quoteResult.length);
  //     let randomQuote = this.quoteResult[randomNumber];
  //     this.quoteArray.push(this.randomQuote);
  //     console.log(randomNumber);
  //     console.log(this.quoteArray);
  //   });
  // };
}
