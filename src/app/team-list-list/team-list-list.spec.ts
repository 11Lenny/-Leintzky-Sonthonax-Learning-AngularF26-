import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamListList } from './team-list-list';

describe('TeamListList', () => {
  let component: TeamListList;
  let fixture: ComponentFixture<TeamListList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamListList],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
