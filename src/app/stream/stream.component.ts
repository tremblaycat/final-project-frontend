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
  photoArray: any;
  quoteArray: any;
  constructor(private service: InspiritService) {}

  ngOnInit(): void {
    this.getQuote();
    this.getPhoto();
  }

  getPhoto = (): any => {
    this.service.getUnsplash().subscribe((response) => {
      console.log(response);
      this.randomPhoto = response;
    });
    this.photoArray.push(this.randomPhoto);
  };
  getQuote = (): any => {
    this.service.getQuotes().subscribe((response) => {
      this.quoteResult = response;
      let randomNumber = Math.floor(Math.random() * this.quoteResult.length);
      console.log(this.quoteResult[randomNumber]);
    });
    this.quoteArray.push(this.quoteResult);
  };
}
