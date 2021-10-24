import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy-home',
  templateUrl: './giphy-home.component.html',
  styleUrls: ['./giphy-home.component.scss'],
})
export class GiphyHomeComponent {
  search(value: string) {
    console.log('here, value:', value);
  }
}
