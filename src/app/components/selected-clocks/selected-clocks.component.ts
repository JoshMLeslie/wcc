import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';
import { ClockToken } from '../../interface/clock-token';
import { TimeService } from 'src/app/service/time.service';

@Component({
  selector: 'app-selected-clocks',
  templateUrl: './selected-clocks.component.html',
  styleUrls: ['./selected-clocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedClocksComponent implements OnInit {
  clocks: ClockToken[] = [];
  currentDate;
  currentTime$;

  constructor(timeService: TimeService) {
    this.currentDate = timeService.currentDate;
    this.currentTime$ = timeService.currentSecondsString$;
  }

  ngOnInit(): void {
    this.clocks = JSON.parse(localStorage.getItem('clock-tokens') || '[]');
    // TEST
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    this.clocks.push({
      location: 'Australia',
      utc: 11,
    });
    // TEST
  }

  addClockToken() {
    // popup
  }
}
