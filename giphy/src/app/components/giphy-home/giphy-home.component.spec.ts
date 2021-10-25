import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiphyHomeComponent } from './giphy-home.component';

describe('GiphyHomeComponent', () => {
  let component: GiphyHomeComponent;
  let fixture: ComponentFixture<GiphyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyHomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify search function', () => {
    expect(component.searchKeywords).toBe('');
    component.search('Test');
    expect(component.searchKeywords).toBe('Test');
    component.search('');
    expect(component.searchKeywords).toBe('');
  });
});
