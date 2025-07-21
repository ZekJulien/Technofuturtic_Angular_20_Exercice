import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { connectedGuardGuard } from './connected.guard-guard';

describe('connectedGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => connectedGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
