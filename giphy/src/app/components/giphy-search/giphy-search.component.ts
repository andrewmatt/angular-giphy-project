import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss'],
})
export class GiphySearchComponent {
  @Output() newSearchEvent = new EventEmitter<string>();

  faSearch = faSearch;

  searchGIFs(value: string) {
    this.newSearchEvent.emit(value);
  }
}
