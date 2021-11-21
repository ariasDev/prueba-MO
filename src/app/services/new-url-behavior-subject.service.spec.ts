import { TestBed } from '@angular/core/testing';

import { NewUrlBehaviorSubjectService } from './new-url-behavior-subject.service';

describe('NewUrlBehaviorSubjectService', () => {
  let service: NewUrlBehaviorSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUrlBehaviorSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
