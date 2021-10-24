import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyResultsGridComponent } from './giphy-results-grid.component';

describe('GiphyResultsGridComponent', () => {
  let component: GiphyResultsGridComponent;
  let fixture: ComponentFixture<GiphyResultsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyResultsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyResultsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
