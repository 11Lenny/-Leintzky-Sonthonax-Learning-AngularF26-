import { TestBed } from '@angular/core/testing';
import { teamService } from './teamService';
import { inject } from '@angular/core';



describe('Teams', () => {
  let service: teamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(teamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
