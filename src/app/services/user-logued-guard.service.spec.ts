import { TestBed } from '@angular/core/testing';

import { UserLoguedGuardService } from './user-logued-guard.service';

describe('UserLoguedGuardService', () => {
  let service: UserLoguedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoguedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
