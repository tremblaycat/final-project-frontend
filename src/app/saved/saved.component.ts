import { Component, OnInit } from '@angular/core';
import { InspiritService } from '../inspirit.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  saved: any[] = [];
  constructor(private service: InspiritService) {}

  ngOnInit(): void {
    this.getSaved();
  }

  getSaved = () => {
    this.saved = this.service.saved;
    console.log(this.saved);
  };
}
