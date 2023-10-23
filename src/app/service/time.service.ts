import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  currentBySeconds$ = timer(0, 1000).pipe(map(() => DateTime.now()));
  currentSecondsString$ = this.currentBySeconds$.pipe(map((d) => d.toString()));
  currentByMin$ = timer(0, 60000).pipe(map(() => DateTime.now()));

  currentDate = DateTime.now().toISODate();
}
