import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InspiritService } from '../inspirit.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, AfterViewInit, OnDestroy {
  randomPhoto: any;
  videoResults: any;
  quoteResults: any;
  selectedResults: any;
  feelingsArray: any;
  name: string;
  nameText: string = 'friend';
  selectedFeeling: string;
<<<<<<< HEAD
  desktop: boolean;
  photoArray: any[] = [];
  quoteArray: any[] = [];
  favorites: any[] = [];
=======
>>>>>>> b6a4d8b3cac20961a691f308eae22db08b424898
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: InspiritService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  //Youtube start
  ngAfterViewInit(): void {
    this.favorites = this.service.getSaved();
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(
      this.demoYouTubePlayer.nativeElement.clientWidth,
      1200
    );
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  };

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
  //YouTube end

<<<<<<< HEAD
  save = (photo, quote) => {
    this.service.addSaved(photo, quote);
    console.log(photo, quote);
    this.favorites.some((item) => {
      if (item.quote.quote === quote.quote) {
        quote.favorite = true;
      }
    });
  };

=======
>>>>>>> b6a4d8b3cac20961a691f308eae22db08b424898
  ngOnInit(): void {
    this.getPhoto();
    this.getSelected();
    this.name = this.service.getName();
    this.spaceRemover();
  }

  getPhoto = (): any => {
    this.service.getUnsplash().subscribe((response) => {
      this.randomPhoto = response;
    });
  };

  spaceRemover = () => {
    if (this.name === undefined) {
      this.name = this.nameText;
    }
  };

  getSelected = (): any => {
    this.getRandomFeeling();
    this.service.getSelected(this.selectedFeeling).subscribe((response) => {
      this.selectedResults = response[0];
    });
  };

  getRandomFeeling = () => {
    this.feelingsArray = this.service.getFeelings();
    let randomNumber = Math.floor(Math.random() * this.feelingsArray.length);
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
