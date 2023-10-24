import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DateTime } from 'luxon';
import { take, timer } from 'rxjs';
import { ClockToken } from '../../interface/clock-token';
import { TimeZone } from '../../interface/time-zone';
import { TimeService } from '../../service/time.service';

const minToDeg = (min: number): number => 360 * (min / 60) - 180; // 180 is 0:00;
// hr is 24hr based
const hrToDeg = (hr: number): number => 360 * (Math.abs(12 - hr) / 12) - 180; // 180 is 0:00;
const minToCSSTransform = (min: number): string =>
  `translate(0, 12px) rotate(${minToDeg(min)}deg)`;
const hrToCSSTransform = (hr: number): string =>
  `translate(0, 8px) rotate(${hrToDeg(hr)}deg)`;

const IANA_TEST = TimeZone['AMERICA/LOS_ANGELES'];

@Component({
  selector: 'app-clock-token',
  templateUrl: './clock-token.component.html',
  styleUrls: ['./clock-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClockTokenComponent implements OnInit, OnDestroy {
  @Input() data: undefined | ClockToken;
  @ViewChild('hourHand') hourHand!: ElementRef<HTMLDivElement>;
  @ViewChild('minuteHand') minuteHand!: ElementRef<HTMLDivElement>;

  currentTime$;

  set time(d: DateTime) {
    d = d.setZone(this.data?.zone);
    const { minute, hour } = d;
    const hrTransform = hrToCSSTransform(hour);
    this.hourHand.nativeElement.style.transform = hrTransform;
    this.minuteHand.nativeElement.style.transform = minToCSSTransform(minute);
  }

  utc: string = '';

  constructor(timeService: TimeService) {
    timer(500)
      .pipe(take(1))
      .subscribe(() => {
        this.time = DateTime.now();
      });
    this.currentTime$ = timeService.currentByMin$.subscribe((d) => {
      this.time = d;
    });

    // update transition speed after initial load for _aesthetics_
    setTimeout(() => {
      this.hourHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
      this.minuteHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
    }, 5000);
  }

  ngOnInit(): void {
    let d = DateTime.now();
    d = d.setZone(this.data?.zone);
    const offset = d.offset / 60;
    let offsetSpacer = ' ';
    if (offset > 0) {
      offsetSpacer = '+';
    } else if (offset < 0) {
      offsetSpacer = '';
    }
    this.utc = `UTC${offsetSpacer}${offset}`;
  }

  ngOnDestroy(): void {
    this.currentTime$.unsubscribe();
  }
}