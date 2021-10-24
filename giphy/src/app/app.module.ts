import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GiphySearchComponent } from './components/giphy-search/giphy-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GiphyHomeComponent } from './components/giphy-home/giphy-home.component';
import { GiphyResultsGridComponent } from './components/giphy-results-grid/giphy-results-grid.component';

@NgModule({
  declarations: [AppComponent, GiphySearchComponent, GiphyHomeComponent, GiphyResultsGridComponent],
  imports: [BrowserModule, NgbModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
