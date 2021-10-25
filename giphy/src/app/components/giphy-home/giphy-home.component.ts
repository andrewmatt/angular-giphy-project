import { Component } from '@angular/core';

@Component({
  selector: 'app-giphy-home',
  templateUrl: './giphy-home.component.html',
  styleUrls: ['./giphy-home.component.scss'],
})
export class GiphyHomeComponent {
  searchKeywords = '';

  search(value: string) {
    this.searchKeywords = value;
  }
}
