import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  ViewChildren,
  forwardRef,
} from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';

type OnChange = (tz: TimeZone) => unknown;

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
    MatIconModule,
  ],
})
export class TimezoneSelectComponent implements ControlValueAccessor {
  @ViewChildren('zone') zoneChildren?: ElementRef<HTMLDivElement>[];

  readonly timeZone = tzToUIArr();

  onChange: OnChange = () => null;
  onTouched: OnChange = () => null;

  selected?: TimeZone;
  loading = false;

  constructor(public ngz: NgZone) {}

  selectZone(tz: UIZone) {
    if (!tz) {
      return;
    }
    this.selected = tz.full;
    this.onChange(tz.full);
  }

  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnChange): void {
    this.onTouched = fn;
  }
  writeValue(tz: TimeZone): void {
    this.selected = tz;
  }

  asyncCloseGroups() {
    setTimeout(() => this.toggleGroup(), 0);
  }

  // called on (click) to collapse all major zones
  toggleGroup(parentZone?: TimeZone) {
    this.loading = true;
    this.zoneChildren?.forEach((child) => {
      if (!child.nativeElement.parentElement) {
        return;
      }

      if (
        parentZone &&
        child.nativeElement.classList.value.includes(parentZone)
      ) {
        if (child.nativeElement.parentElement.style.display === 'none') {
          child.nativeElement.parentElement.style.display = 'inherit';
          console.log(child.nativeElement.parentElement.style.display);
        } else {
          child.nativeElement.parentElement.style.display = 'none';
        }
      } else {
        // one open at a time
        child.nativeElement.parentElement.style.display = 'none';
      }
    });
    this.loading = false;
  }
}
