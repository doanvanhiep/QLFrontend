/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KhoaHocServiceService } from './KhoaHocService.service';

describe('Service: KhoaHocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KhoaHocServiceService]
    });
  });

  it('should ...', inject([KhoaHocServiceService], (service: KhoaHocServiceService) => {
    expect(service).toBeTruthy();
  }));
});
