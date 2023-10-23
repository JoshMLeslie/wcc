import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ClockToken } from '../../interface/clock-token';
import { TimeService } from 'src/app/service/time.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-clock-token',
  templateUrl: './clock-token.component.html',
  styleUrls: ['./clock-token.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClockTokenComponent {
  @Input() data: ClockToken = { location: '', utc: 0 };
  currentTime$;

  constructor(timeService: TimeService) {
    this.currentTime$ = timeService.currentByMin$.pipe(map((d) => {
      d
    }))
  }
}
