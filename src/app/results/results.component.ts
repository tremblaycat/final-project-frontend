import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
isCollapsed: boolean = true;
  constructor() { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit(): void {
  }

}
