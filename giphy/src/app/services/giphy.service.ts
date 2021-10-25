import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gif } from '../models/gif';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  giphyApiKey = '6RfLn6fq3dVFx1uU84BvIM0RDIisK8n7';
  giphyApiUrl = `https://api.giphy.com/v1/gifs/search`;
  paginationLimit = 50;

  constructor(private http: HttpClient) {}

  getGifs(value?: string): Observable<Gif> {
    return this.http.get<Gif>(
      `${this.giphyApiUrl}?api_key=${this.giphyApiKey}&q=${value}&limit=${this.paginationLimit}`
    );
  }
}
