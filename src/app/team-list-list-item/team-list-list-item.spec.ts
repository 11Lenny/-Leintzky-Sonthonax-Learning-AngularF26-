import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamListListItem } from './team-list-list-item';

describe('TeamListListItem', () => {
  let component: TeamListListItem;
  let fixture: ComponentFixture<TeamListListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamListListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
