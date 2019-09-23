import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdannoncementComponent } from './bdannoncement.component';

describe('BdannoncementComponent', () => {
  let component: BdannoncementComponent;
  let fixture: ComponentFixture<BdannoncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdannoncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdannoncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
