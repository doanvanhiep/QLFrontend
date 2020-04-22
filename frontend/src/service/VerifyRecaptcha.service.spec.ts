/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerifyRecaptchaService } from './VerifyRecaptcha.service';

describe('Service: VerifyRecaptcha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyRecaptchaService]
    });
  });

  it('should ...', inject([VerifyRecaptchaService], (service: VerifyRecaptchaService) => {
    expect(service).toBeTruthy();
  }));
});
