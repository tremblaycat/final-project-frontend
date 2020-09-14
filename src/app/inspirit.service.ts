import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InspiritService {
  apiUrl: string = 'https://api.unsplash.com/search/photos';
  clientID: string = 'iKevvcDauVZXBrlQ1HZg_DKN-naujnI7zD_5ZcVu-JU';
  constructor(private http: HttpClient) { }
}
