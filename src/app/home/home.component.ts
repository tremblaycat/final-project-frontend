import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InspiritService } from '../inspirit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  adjectives: string[] = ['sad', 'happy', 'anxious', 'excited', 'angry', 'hopeful', 'cheerful', 'nostalgic', 'creative', 'depressed', 'adventurous', 'confused', 'heartbroken', 'remorseful', 'guilty', 'spiteful', 'passionate', 'joyful', 'peaceful', 'worried', 'calm', 'discouraged', 'jealous', 'comfortable', 'confident', 'thankful', 'dull', 'proud', 'overwhelmed', 'insignificant', 'disconnected', 'humble', 'petty', 'spiritual', 'inspired'];
  feelingsArray: any = [];
  @Output() value = new EventEmitter<any>();
  constructor(private service: InspiritService) {}

  ngOnInit(): void {}

  addFeeling = (feeling: string) => {
    this.service.addToFeelings(feeling);
  }
  getFeeling = (value: any) => {
    this.feelingsArray.push(value);
    // console.log(this.feels);
    this.service.feelings = this.feelingsArray;
    this.value.emit(this.feelingsArray);
    console.log(this.service.feelings);
  };
}
