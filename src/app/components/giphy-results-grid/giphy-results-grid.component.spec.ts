import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GiphyService } from 'src/app/services/giphy.service';
import { Gif } from '../../models/gif';
import { GiphyResultsGridComponent } from './giphy-results-grid.component';

describe('GiphyResultsGridComponent', () => {
  let mockService: GiphyService;
  let component: GiphyResultsGridComponent;
  let fixture: ComponentFixture<GiphyResultsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyResultsGridComponent],
      providers: [HttpClient, HttpHandler, GiphyService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyResultsGridComponent);
    component = fixture.componentInstance;
    mockService = fixture.debugElement.injector.get<GiphyService>(
      GiphyService as Type<GiphyService>
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify ngOnChanges function', () => {
    const response: Gif = {
      data: [
        { username: '1', images: { original: { url: 'test1' } } },
        { username: '2', images: { original: { url: 'test2' } } },
        { username: '3', images: { original: { url: 'test3' } } },
        { username: '4', images: { original: { url: 'test4' } } },
      ],
    } as any;

    spyOn(mockService, 'getGifs').and.returnValue(of(response));

    component.ngOnChanges();
    fixture.detectChanges();

    expect(component.totalGifData).toEqual(response.data);
  });

  it('should verify refreshGifs function', () => {
    expect(component.slicedGifData).toEqual([]);
    component.page = 1;
    component.pageSize = 3;
    component.totalGifData = [
      { username: '1', images: { original: { url: 'test1' } } },
      { username: '2', images: { original: { url: 'test2' } } },
      { username: '3', images: { original: { url: 'test3' } } },
      { username: '4', images: { original: { url: 'test4' } } },
    ];

    component.refreshGifs();
    expect(component.slicedGifData).toEqual([
      { username: '1', images: { original: { url: 'test1' } } },
      { username: '2', images: { original: { url: 'test2' } } },
      { username: '3', images: { original: { url: 'test3' } } },
    ]);
  });
});
