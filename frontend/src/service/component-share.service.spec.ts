/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentShareService } from './component-share.service';

describe('Service: ComponentShare', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentShareService]
    });
  });

  it('should ...', inject([ComponentShareService], (service: ComponentShareService) => {
    expect(service).toBeTruthy();
  }));
});
