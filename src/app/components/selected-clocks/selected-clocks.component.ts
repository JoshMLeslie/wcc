import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimeZone } from 'src/app/interface/time-zone';
import { TimeService } from 'src/app/service/time.service';
import { ClockToken } from '../../interface/clock-token';
import { AddClockTokenComponent } from '../add-clock-token/add-clock-token.component';

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

  constructor(public matDialog: MatDialog, timeService: TimeService) {
    this.currentDate = timeService.currentDate;
    this.currentTime$ = timeService.currentSecondsString$;
  }

  ngOnInit(): void {
    try {
      const clocks = localStorage.getItem('clock-tokens');
      if (clocks) {
        this.clocks = JSON.parse(clocks);
      }
    } catch {}
  
    if (!this.clocks.length) {
      this.clocks.push({
        zone: Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone,
      });
    }
  }

  addClockToken() {
    const ref = this.matDialog.open(AddClockTokenComponent);

    ref.afterClosed().subscribe((res: undefined | ClockToken) => {
      if (res) {
        this.clocks.push(res);
        localStorage.setItem('clock-tokens', JSON.stringify(this.clocks))
      }
    });
  }
}
