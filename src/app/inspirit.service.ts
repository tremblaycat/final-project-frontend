import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InspiritService {
  apiUrl: string = 'https://api.unsplash.com/search/photos';
  clientID: string = 'iKevvcDauVZXBrlQ1HZg_DKN-naujnI7zD_5ZcVu-JU';
  // unsplash^^^
  databaseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // getUnsplash = (searchTerm: string) => {
  //   return this.http.get(this.apiUrl, {
  //     params: {
  //       client_id: this.clientID,
  //       query: searchTerm,
  //       page:
  //     },
  //   });
  // };
  // help ^^^

  getQuotes = (): any => {
    return this.http.get(`${this.databaseUrl}/quotes`);
  };
}
