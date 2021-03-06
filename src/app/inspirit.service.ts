import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InspiritService {
  private readonly BASE_URL = environment.apiBaseUrl;
  apiUrl: string = 'https://api.unsplash.com/photos/random';
  // clientID: string = 'iKevvcDauVZXBrlQ1HZg_DKN-naujnI7zD_5ZcVu-JU';
  clientID: string = 'y_3z3WhDc7C_SPHhZoOuYWwWEPV-zAtJb9P6IxLXE8Q';
  // unsplash^^^
  // youtubeKey: string = 'AIzaSyBbHtzOLdUDWwkNFIY4C_0dql7ANSISraE';
  youtubeKey: string = 'AIzaSyCHCNU93rxTqjzU0ljej9vxQztHFIJZjgc';
  youtubeUrl: string = 'https://www.googleapis.com/youtube/v3/search';
  databaseUrl: string = 'http://localhost:3000';
  feelings: string[] = [];
  name: string;
  saved: any = [];
  constructor(private http: HttpClient) {}

  getFeelings = () => {
    return this.feelings;
  };

  addToFeelings = (feeling: string) => {
    if (this.feelings.length < 3) {
      this.feelings.push(feeling);
      console.log(this.feelings);
    }
  };

  getUnsplash = () => {
    return this.http.get(this.apiUrl, {
      params: {
        client_id: this.clientID,
        collections: '827743',
      },
    });
  };

  getUnsplashStream = () => {
    return this.http.get(this.apiUrl, {
      params: {
        client_id: this.clientID,
        collections: '827743',
        count: '20',
      },
    });
  };

  getPhoto() {
    return this.http.get(`${this.apiUrl}`);
  }

  getQuotes = (): any => {
    return this.http.get(`${this.BASE_URL}/results`);
  };

  getStreamQuotes = (): any => {
    return this.http.get(`${this.BASE_URL}/stream`);
  };

  getSelected = (selectedFeeling: any): any => {
    return this.http.get(`${this.BASE_URL}/selected`, {
      params: {
        selectedFeeling: selectedFeeling,
      },
    });
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

  getSaved = () => {
    return this.saved;
  };

  addSaved = (photo, quote) => {
    let newSave = { photo: photo, quote: quote, isFavorite: true };
    if (!this.checkDuplicate(newSave)) {
      this.saved.push(newSave);
    }
  };

  checkDuplicate = (favorite: any) => {
    return this.saved.some((item) => {
      return item.quote.quote === favorite.quote.quote;
    });
  };
}
