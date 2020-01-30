import { TestBed } from '@angular/core/testing';

import { ThoughtsResolverService } from './thoughts-resolver.service';

describe('ThoughtsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThoughtsResolverService = TestBed.get(ThoughtsResolverService);
    expect(service).toBeTruthy();
  });
});
