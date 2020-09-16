import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InspiritService } from '../inspirit.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  adjectives: string[] = [
    'sad',
    'happy',
    'anxious',
    'excited',
    'angry',
    'hopeful',
    'cheerful',
    'nostalgic',
    'creative',
    'depressed',
    'adventurous',
    'confused',
    'heartbroken',
    'remorseful',
    'guilty',
    'spiteful',
    'passionate',
    'joyful',
    'peaceful',
    'worried',
    'calm',
    'discouraged',
    'jealous',
    'comfortable',
    'confident',
    'thankful',
    'dull',
    'proud',
    'overwhelmed',
    'insignificant',
    'disconnected',
    'humble',
    'spiritual',
    'inspired',
  ];
  feelingsArray: any = [];

  name: string;

  constructor(private service: InspiritService, private router: Router) {}

  ngOnInit(): void {}

  getResults = () => {
    this.service.setUserName(this.name);
    this.router.navigate(['/results']);
  };

  addFeeling = (feeling: string) => {
    this.service.addToFeelings(feeling);
  };
}
