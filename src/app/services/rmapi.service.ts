import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RMApiService {

  private API_URL: string = "https://rickandmortyapi.com/api/character";
  
  constructor(private http: HttpClient) { }

  getCharacters(){
    return this.http.get(this.API_URL, {
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': '*',
      }
    });
  }
}
