import { TestBed } from '@angular/core/testing';

import { YGuard } from './y.guard';

describe('YGuard', () => {
  let guard: YGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
