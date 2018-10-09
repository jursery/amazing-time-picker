import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHourComponent } from './example-hour.component';

describe('ExampleHourComponent', () => {
  let component: ExampleHourComponent;
  let fixture: ComponentFixture<ExampleHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
