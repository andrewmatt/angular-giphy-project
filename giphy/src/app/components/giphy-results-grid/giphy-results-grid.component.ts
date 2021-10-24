import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/models/gif';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-results-grid',
  templateUrl: './giphy-results-grid.component.html',
  styleUrls: ['./giphy-results-grid.component.scss'],
})
export class GiphyResultsGridComponent implements OnInit {
  gifs: Gif[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.giphyService.getGifs('word').subscribe((gifs) => {
      this.gifs = gifs;
    });
  }
}
