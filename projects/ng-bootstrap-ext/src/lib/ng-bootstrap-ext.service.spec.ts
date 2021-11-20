import { TestBed } from '@angular/core/testing';

import { NgBootstrapExtService } from './ng-bootstrap-ext.service';

describe('NgBootstrapExtService', () => {
  let service: NgBootstrapExtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBootstrapExtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
