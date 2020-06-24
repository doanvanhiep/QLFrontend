/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LienheService } from './lienhe.service';

describe('Service: Lienhe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LienheService]
    });
  });

  it('should ...', inject([LienheService], (service: LienheService) => {
    expect(service).toBeTruthy();
  }));
});
