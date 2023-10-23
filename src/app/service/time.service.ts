import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import {
  asapScheduler,
  combineLatest,
  interval,
  map,
  merge,
  mergeMap,
  startWith,
  take,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  currentBySeconds$ = timer(1000 - DateTime.now().millisecond, 1000).pipe(
    map(() => DateTime.now())
  );
  currentSecondsString$ = this.currentBySeconds$.pipe(map((d) => d.toString()));
  currentByMin$ = timer(1000 * (60 - DateTime.now().second), 60000).pipe(
    map(() => DateTime.now())
  );

  currentDate = DateTime.now().toISODate();
}
