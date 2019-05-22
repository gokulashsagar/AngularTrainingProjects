import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumRremoteComponent } from './consum-rremote.component';

describe('ConsumRremoteComponent', () => {
  let component: ConsumRremoteComponent;
  let fixture: ComponentFixture<ConsumRremoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumRremoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumRremoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
