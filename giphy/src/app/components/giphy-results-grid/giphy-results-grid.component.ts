import { Component, Input, OnInit } from '@angular/core';
import { GifData } from 'src/app/models/gif';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-results-grid',
  templateUrl: './giphy-results-grid.component.html',
  styleUrls: ['./giphy-results-grid.component.scss'],
})
export class GiphyResultsGridComponent {
  @Input() searchKeywords = '';

  slicedGifData: GifData[] = [];
  totalGifData: GifData[] = [];
  page = 1;
  pageSize = 9;
  constructor(private giphyService: GiphyService) {}

  ngOnChanges(): void {
    this.page = 1;
    this.giphyService.getGifs(this.searchKeywords).subscribe((gifs) => {
      this.totalGifData = gifs.data;
      this.refreshGifs();
    });
  }

  refreshGifs(): void {
    this.slicedGifData = this.totalGifData.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
