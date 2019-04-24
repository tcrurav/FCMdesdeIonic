import { TestBed } from '@angular/core/testing';

import { FirebasetokenService } from './firebasetoken.service';

describe('FirebasetokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasetokenService = TestBed.get(FirebasetokenService);
    expect(service).toBeTruthy();
  });
});
