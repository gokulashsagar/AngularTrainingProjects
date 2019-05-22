import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1ConsumeComponent } from './service1-consume.component';

describe('Service1ConsumeComponent', () => {
  let component: Service1ConsumeComponent;
  let fixture: ComponentFixture<Service1ConsumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service1ConsumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service1ConsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
