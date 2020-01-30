import { TestBed } from '@angular/core/testing';

import { ThoughtResolverService } from './thought-resolver.service';

describe('ThoughtResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThoughtResolverService = TestBed.get(ThoughtResolverService);
    expect(service).toBeTruthy();
  });
});
