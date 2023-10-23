import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';
import { ClockToken } from 'src/app/interface/clock-token';

@Component({
  selector: 'app-selected-clocks',
  templateUrl: './selected-clocks.component.html',
  styleUrls: ['./selected-clocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedClocksComponent implements OnInit {
  clocks: ClockToken[] = [];
  currentTime = timer(0, 1000).pipe(map(() => new Date()));

  ngOnInit(): void {
    this.clocks = JSON.parse(localStorage.getItem('clock-tokens') || '[]');
    // TEST
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    this.clocks.push({
      location: "Australia",
      utc: 11
    })
    // TEST
  }

  addClockToken() {
    // popup
  }
}
