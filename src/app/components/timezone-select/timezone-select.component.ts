import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { tzToUIArr } from '../../helper/time-zone.helper';
import { TimeZone, UIZone } from '../../interface/time-zone';
import { CamelToNormPipe } from '../../pipe/camel-normal.pipe';

type OnChange = (tz: TimeZone) => any;

@Component({
  selector: 'app-timezone-select',
  templateUrl: './timezone-select.component.html',
  styleUrls: ['./timezone-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TimezoneSelectComponent),
    },
  ],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CamelToNormPipe,
  ],
})
export class TimezoneSelectComponent implements ControlValueAccessor {
  readonly timeZone = tzToUIArr();

  onChange: OnChange = () => null;
  onTouched: OnChange = () => null;

  selected?: TimeZone;

  selectZone(tz: UIZone) {
    this.selected = tz.full;
    this.onChange(tz.full);
  }

  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnChange): void {
    this.onTouched = fn;
  }
  writeValue(tz: UIZone): void {
    this.selected = tz.full;
  }
}
