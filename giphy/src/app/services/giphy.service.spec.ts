import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Gif } from '../models/gif';
import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  let service: GiphyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GiphyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify getGifs function', () => {
    const giphyApiKey = '6RfLn6fq3dVFx1uU84BvIM0RDIisK8n7';
    const giphyApiUrl = `https://api.giphy.com/v1/gifs/search`;
    const paginationLimit = 50;

    const response: Gif = {
      data: [
        { username: '1', images: { original: { url: 'test1' } } },
        { username: '2', images: { original: { url: 'test2' } } },
        { username: '3', images: { original: { url: 'test3' } } },
        { username: '4', images: { original: { url: 'test4' } } },
      ],
    } as any;

    const testUrl = `${giphyApiUrl}?api_key=${giphyApiKey}&q=test&limit=${paginationLimit}`;

    service.getGifs('test').subscribe();

    const req = httpMock.expectOne({
      method: 'GET',
      url: testUrl,
    });
    req.flush(response);

    httpMock.verify();
  });
});
