import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastdeliveryComponent } from './lastdelivery.component';

describe('LastdeliveryComponent', () => {
  let component: LastdeliveryComponent;
  let fixture: ComponentFixture<LastdeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastdeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
