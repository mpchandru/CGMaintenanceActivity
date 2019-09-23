import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamchallengeComponent } from './teamchallenge.component';

describe('TeamchallengeComponent', () => {
  let component: TeamchallengeComponent;
  let fixture: ComponentFixture<TeamchallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamchallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
