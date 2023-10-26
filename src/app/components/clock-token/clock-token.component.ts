import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';
import { Location } from '../../interface/location';
import { TimeService } from '../../service/time.service';

const sixtyToDeg = (min: number): number => {
  const deg = (360 * min) / 60 + 180; // 180 is 0:00;
  return deg;
};
// hr is 24hr based
const twentyfourToDeg = (hr: number): number =>
  Math.abs(360 * (Math.abs(12 - hr) / 12) + 180); // 180 is 0:00;
const sixtyToCSSTransform = (min: number): string =>
  `translate(0, 12px) rotate(${sixtyToDeg(min)}deg)`;
const twentyfourToCSSTransform = (hr: number): string =>
  `translate(0, 8px) rotate(${twentyfourToDeg(hr)}deg)`;

@Component({
  selector: 'app-clock-token',
  templateUrl: './clock-token.component.html',
  styleUrls: ['./clock-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClockTokenComponent implements OnInit, OnDestroy {
  @Input() data?: Location;
  @Output() delete = new EventEmitter<void>();

  @ViewChild('hourHand', { static: true })
  hourHand!: ElementRef<HTMLDivElement>;
  @ViewChild('minuteHand', { static: true })
  minuteHand!: ElementRef<HTMLDivElement>;

  destroy$ = new Subject<void>();
  runSeconds$ = new Subject<void>();
  secondToggle$ = new Subject<void>();

  location: string[] = [];
  utc: string = '';


  constructor(public timeService: TimeService) {
    timeService.currentByMin$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.setTime.bind(this));
  }

  ngOnInit(): void {
    if (!this.data?.zone) {
      return;
    }

    const { zone } = this.data;
    this.location = zone.replace('_', ' ').split('/');
    this.utc = this.timeService.formatUTCOffset({ zone });

    // trigger initial UI update before timeService updates
    setTimeout(() => {
      const { hour, minute } = DateTime.now().setZone(this.data?.zone);
      this.hourHand.nativeElement.style.transform =
        twentyfourToCSSTransform(hour);
      this.minuteHand.nativeElement.style.transform =
        sixtyToCSSTransform(minute);
    }, 1000);

    setTimeout(() => {
      this.hourHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
    }, 3000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  emitDelete(): void {
    this.delete.next();
  }

  private setTime(d: DateTime) {
    const { hour, minute } = d.setZone(this.data?.zone);
    // add / remove transition value to prevent crazy spinning
    if (minute > 59 || minute < 1) {
      this.minuteHand.nativeElement.style.transition = 'unset';
    } else {
      this.minuteHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
    }
    this.hourHand.nativeElement.style.transform =
      twentyfourToCSSTransform(hour);
    this.minuteHand.nativeElement.style.transform = sixtyToCSSTransform(minute);
  }
}
