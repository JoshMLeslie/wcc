import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMeetingComponent } from './plan-meeting.component';

describe('PlanMeetingComponent', () => {
  let component: PlanMeetingComponent;
  let fixture: ComponentFixture<PlanMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanMeetingComponent]
    });
    fixture = TestBed.createComponent(PlanMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
