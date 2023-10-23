import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTokenComponent } from './clock-token.component';

describe('ClockTokenComponent', () => {
  let component: ClockTokenComponent;
  let fixture: ComponentFixture<ClockTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockTokenComponent]
    });
    fixture = TestBed.createComponent(ClockTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
