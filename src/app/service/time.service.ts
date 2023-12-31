import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { map, timer } from 'rxjs';
import { TimeZone } from '../interface/time-zone';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  static localZone = Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone;

  currentBySeconds$ = timer(1000 - DateTime.now().millisecond, 1000).pipe(
    map(() => DateTime.now())
  );
  currentSecondsString$ = this.currentBySeconds$.pipe(map((d) => d.toString()));
  currentByMin$ = timer(1000 * (60 - DateTime.now().second), 60000).pipe(
    map(() => DateTime.now())
  );

  currentDate = DateTime.now().toISODate();

  formatUTCOffset(zone: TimeZone, dt: DateTime): string {
    const offset = dt.setZone(zone).zone.formatOffset(dt.toMillis(), 'narrow');
    return `UTC${offset}`;
  }
}
