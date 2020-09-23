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
  favorites: any[] = [];
  constructor(private service: InspiritService) {}

  ngOnInit(): void {
    this.getQuotes();
    this.getPhoto();
    this.favorites = this.service.getSaved();
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

  save = (photo, quote) => {
    this.service.addSaved(photo, quote);
    console.log(photo, quote);
    this.favorites.some((item) => {
      if (item.quote.quote === quote.quote) {
        quote.favorite = true;
      }
    });
  };
}
