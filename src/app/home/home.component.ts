import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InspiritService } from '../inspirit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  feelingsArray: any = [];
  @Output() value = new EventEmitter<any>();
  constructor(private service: InspiritService) {}

  ngOnInit(): void {}

  getFeeling = (value: any) => {
    this.feelingsArray.push(value);
    // console.log(this.feels);
    this.service.feelings = this.feelingsArray;
    this.value.emit(this.feelingsArray);
    console.log(this.service.feelings);
  };
}
