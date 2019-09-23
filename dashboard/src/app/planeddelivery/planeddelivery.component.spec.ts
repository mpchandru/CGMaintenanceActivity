import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneddeliveryComponent } from './planeddelivery.component';

describe('PlaneddeliveryComponent', () => {
  let component: PlaneddeliveryComponent;
  let fixture: ComponentFixture<PlaneddeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneddeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneddeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
