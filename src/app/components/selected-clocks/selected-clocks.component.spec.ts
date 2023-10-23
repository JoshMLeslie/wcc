import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedClocksComponent } from './selected-clocks.component';

describe('SelectedClocksComponent', () => {
  let component: SelectedClocksComponent;
  let fixture: ComponentFixture<SelectedClocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedClocksComponent]
    });
    fixture = TestBed.createComponent(SelectedClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
