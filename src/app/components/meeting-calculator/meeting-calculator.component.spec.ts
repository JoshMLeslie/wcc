import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCalculatorComponent } from './meeting-calculator.component';

describe('MeetingCalculatorComponent', () => {
  let component: MeetingCalculatorComponent;
  let fixture: ComponentFixture<MeetingCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingCalculatorComponent]
    });
    fixture = TestBed.createComponent(MeetingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
