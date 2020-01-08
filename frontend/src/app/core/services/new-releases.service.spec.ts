import { TestBed } from '@angular/core/testing';

import { NewReleasesService } from './new-releases.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewReleasesService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule,
    ],
    providers:[ NewReleasesService]
    });
  });

  it('should be created', () => {
    const service: NewReleasesService = TestBed.get(NewReleasesService);
    expect(service).toBeTruthy();
  });
});
