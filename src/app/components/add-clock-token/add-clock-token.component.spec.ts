import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClockTokenComponent } from './add-clock-token.component';

describe('AddClockTokenComponent', () => {
  let component: AddClockTokenComponent;
  let fixture: ComponentFixture<AddClockTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClockTokenComponent]
    });
    fixture = TestBed.createComponent(AddClockTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
