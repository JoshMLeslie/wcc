import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { tzToUIArr } from '../../helper/time-zone.helper';
import { TimeZone, UIZoneData } from '../../interface/time-zone';
import { CamelToNormPipe } from '../../pipe/camel-normal.pipe';

type OnChange = (tz?: TimeZone) => unknown;

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
  @ViewChild('ngselect', { static: true }) ngselect!: NgSelectComponent;
  @ViewChildren('zone') zoneChildren?: ElementRef<HTMLDivElement>[];

  readonly timeZone = tzToUIArr();

  onChange: OnChange = () => null;
  onTouched: OnChange = () => null;

  selected?: TimeZone;
  loading = false;

  selectZone(tz?: UIZoneData) {
    if (tz) {
      this.selected = tz.full;
      this.onChange(tz.full);
    } else {
      this.selected = undefined;
      this.onChange(undefined);
    }
  }

  expandOnSearch({ term, items }: { term: string; items: UIZoneData[] }): void {
    if (term.length > 2) {
      items.forEach(({ zone }) => {
        this.setGroupState(zone, 'show', false);
      });
    }
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

  onClear() {
    this.selectZone(undefined);
  }

  asyncCloseGroups() {
    setTimeout(this.setGroupState.bind(this), 0);
  }

  // called on (click) to collapse all major zones
  setGroupState(
    parentZone?: TimeZone,
    setStateTo?: 'show' | 'hide',
    collapseOthers = true
  ) {
    this.loading = true;
    this.zoneChildren?.forEach(
      ({ nativeElement: { parentElement, classList } }) => {
        if (!parentElement) {
          return;
        }

        if (parentZone && classList.value.includes(parentZone)) {
          if (setStateTo) {
            parentElement.style.display =
              setStateTo === 'show' ? 'inherit' : 'none';
          } else {
            // toggle by default
            parentElement.style.display =
              parentElement.style.display === 'none' ? 'inherit' : 'none';
          }
        } else if (collapseOthers) {
          // one open at a time
          parentElement.style.display = 'none';
        }
      }
    );
    this.loading = false;
  }
}
