import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiphySearchComponent } from './giphy-search.component';

describe('GiphySearchComponent', () => {
  let component: GiphySearchComponent;
  let fixture: ComponentFixture<GiphySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphySearchComponent],
      providers: [HttpClient],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify searchGIFs function', () => {
    spyOn(component.newSearchEvent, 'emit');
    component.searchGIFs('Test');
    fixture.detectChanges();
    expect(component.newSearchEvent.emit).toHaveBeenCalledWith('Test');
  });
});
