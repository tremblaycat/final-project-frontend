import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InspiritService {
  apiUrl: string = 'https://api.unsplash.com/photos/random';
  clientID: string = 'y_3z3WhDc7C_SPHhZoOuYWwWEPV-zAtJb9P6IxLXE8Q';
  // unsplash^^^
  youtubeKey: string = 'AIzaSyDU4joJlDxavDm3eHutikmLh8NmDpVvvhs';
  youtubeUrl: string = 'https://www.googleapis.com/youtube/v3/search';
  databaseUrl: string = 'http://localhost:3000';
  feelings: string[] = [];
  name: string;
  constructor(private http: HttpClient) {}

  getFeelings = () => {
    return this.feelings;
  };

  addToFeelings = (feeling: string) => {
    this.feelings.push(feeling);
    console.log(this.feelings);
  };

  limitFeels = (feelings) => {
    return this.feelings.slice(0, 3);
  };

  getUnsplash = () => {
    return this.http.get(this.apiUrl, {
      params: {
        client_id: this.clientID,
        collections: '827743',
      },
    });
  };

  getPhoto() {
    return this.http.get(`${this.apiUrl}`);
  }

  getQuotes = (): any => {
    return this.http.get(`${this.databaseUrl}/results`);
  };

  getYoutube = (searchTerm: string): any => {
    return this.http.get(this.youtubeUrl, {
      params: {
        key: this.youtubeKey,
        part: 'snippet',
        maxResults: '1',
        q: searchTerm,
      },
    });
  };

  setUserName = (name: string) => {
    this.name = name;
    console.log(this.name);
  };

  getName = () => {
    return this.name;
  };
}
