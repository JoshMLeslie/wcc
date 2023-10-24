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
import { ClockToken } from '../../interface/clock-token';
import { TimeService } from '../../service/time.service';

const minToDeg = (min: number): number => {
  const deg = (360 * min) / 60 + 180; // 180 is 0:00;
  return deg;
};
// hr is 24hr based
const hrToDeg = (hr: number): number =>
  Math.abs(360 * (Math.abs(12 - hr) / 12) + 180); // 180 is 0:00;
const minToCSSTransform = (min: number): string =>
  `translate(0, 12px) rotate(${minToDeg(min)}deg)`;
const hrToCSSTransform = (hr: number): string =>
  `translate(0, 8px) rotate(${hrToDeg(hr)}deg)`;

@Component({
  selector: 'app-clock-token',
  templateUrl: './clock-token.component.html',
  styleUrls: ['./clock-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClockTokenComponent implements OnInit, OnDestroy {
  @Input() data?: ClockToken;
  @ViewChild('hourHand', { static: true })
  hourHand!: ElementRef<HTMLDivElement>;
  @ViewChild('minuteHand', { static: true })
  minuteHand!: ElementRef<HTMLDivElement>;

  currentTime$;
  location?: string[];
  utc: string = '';

  constructor(timeService: TimeService) {
    this.currentTime$ = timeService.currentByMin$.subscribe((d) =>
      this.setTime(d)
    );
  }

  ngOnInit(): void {
    if (!this.data?.zone) {
      return;
    }

    const { zone } = this.data;

    this.location = zone.replace('_', ' ').split('/');

    const d = DateTime.now().setZone(zone);
    const offset = d.offset / 60;
    this.utc = `UTC${offset >= 0 ? '+' : ''}${offset}`;

    setTimeout(() => {
      const { minute, hour } = DateTime.now().setZone(this.data?.zone);
      this.hourHand.nativeElement.style.transform = hrToCSSTransform(hour);
      this.minuteHand.nativeElement.style.transform = minToCSSTransform(minute);
    }, 1000);

    setTimeout(() => {
      this.hourHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
    }, 3000);
  }

  ngOnDestroy(): void {
    this.currentTime$.unsubscribe();
  }

  private setTime(d: DateTime) {
    const { minute, hour } = d.setZone(this.data?.zone);
    // add / remove transition value to prevent crazy spinning
    if (minute > 59 || minute < 1) {
      this.minuteHand.nativeElement.style.transition = 'unset';
    } else {
      this.minuteHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
    }
    this.hourHand.nativeElement.style.transform = hrToCSSTransform(hour);
    this.minuteHand.nativeElement.style.transform = minToCSSTransform(minute);
  }
}
