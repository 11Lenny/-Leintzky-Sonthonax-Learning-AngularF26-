import { TestBed } from '@angular/core/testing';
import { Team } from './teamService';
import { inject } from '@angular/core';

private config: TEAMS_CONFIG = inject(TEAMS_CONFIG);

describe('Teams', () => {
  let service: Team;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Team);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
