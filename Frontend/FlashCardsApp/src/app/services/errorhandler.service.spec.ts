import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './errorhandler.service';

describe('ErrorhandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandlerService = TestBed.get(ErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
