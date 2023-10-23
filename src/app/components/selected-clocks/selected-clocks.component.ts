import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';
import { ClockToken } from '../../interface/clock-token';
import { TimeService } from 'src/app/service/time.service';
import { TimeZone } from 'src/app/interface/time-zone';

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
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    this.clocks.push({
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    this.clocks.push({
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    this.clocks.push({
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    this.clocks.push({
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    this.clocks.push({
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    this.clocks.push({
      location: TimeZone['AUSTRALIA/BRISBANE'],
    });
    // TEST
  }

  addClockToken() {
    // popup
  }
}
