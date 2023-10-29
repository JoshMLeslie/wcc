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
import { sixtyToCSS, twentyfourToCSS } from './clock-token.helper';

@Component({
  selector: 'app-clock-token',
  templateUrl: './clock-token.component.html',
  styleUrls: ['./clock-token.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClockTokenComponent implements OnInit, OnDestroy {
  @Input({ required: true }) data!: Location;
  @Output() delete = new EventEmitter<void>();

  @ViewChild('hourHand', { static: true })
  hourHand!: ElementRef<HTMLDivElement>;
  @ViewChild('minuteHand', { static: true })
  minuteHand!: ElementRef<HTMLDivElement>;
  @ViewChild('hourHandTwo', { static: true })
  hourHandTwo!: ElementRef<HTMLDivElement>;
  @ViewChild('minuteHandTwo', { static: true })
  minuteHandTwo!: ElementRef<HTMLDivElement>;

  destroy$ = new Subject<void>();

  location: string[] = [];
  utc = '';

  constructor(public timeService: TimeService) {
    timeService.currentByMin$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.setTime.bind(this));
  }

  ngOnInit(): void {
    const { zone } = this.data;
    this.location = zone.replace('_', ' ').split('/');
    this.utc = this.timeService.formatUTCOffset(zone);

    // trigger initial UI update before timeService updates
    setTimeout(() => {
      const { hour, minute } = DateTime.now().setZone(zone);
      this.setHourPosition(hour);
      this.setMinutePosition(minute);
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

  private setHourPosition(hour: number) {
    this.hourHand.nativeElement.style.transform = twentyfourToCSS(hour);
    this.hourHandTwo.nativeElement.style.transform = twentyfourToCSS(hour);
  }

  private setMinutePosition(min: number) {
    this.minuteHand.nativeElement.style.transform = sixtyToCSS(min);
    this.minuteHandTwo.nativeElement.style.transform = sixtyToCSS(min);
  }

  private setTime(d: DateTime) {
    const { hour, minute } = d.setZone(this.data.zone);
    // add / remove transition value to prevent crazy spinning when degrees reset
    if (minute > 59 || minute < 1) {
      this.minuteHand.nativeElement.style.transition = 'unset';
      this.minuteHandTwo.nativeElement.style.transition = 'unset';
    } else {
      this.minuteHand.nativeElement.style.transition =
        'transform 100ms ease-in-out';
      this.minuteHandTwo.nativeElement.style.transition =
        'transform 100ms ease-in-out';
    }
    this.setHourPosition(hour);
    this.setMinutePosition(minute);
  }
}
