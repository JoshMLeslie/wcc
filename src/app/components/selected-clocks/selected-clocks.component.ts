import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClockToken } from '../../interface/clock-token';
import { TimeService } from 'src/app/service/time.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddClockTokenComponent } from '../add-clock-token/add-clock-token.component';
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

  constructor(public matDialog: MatDialog, timeService: TimeService) {
    this.currentDate = timeService.currentDate;
    this.currentTime$ = timeService.currentSecondsString$;
  }

  ngOnInit(): void {
    this.clocks = JSON.parse(localStorage.getItem('clock-tokens') || '[]');
    this.clocks.push({
      zone: Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZone,
    });
  }

  addClockToken() {
    const ref = this.matDialog.open(AddClockTokenComponent);

    ref.afterClosed().subscribe((res: undefined | ClockToken) => {
      console.log(res);
      if (res) {
        this.clocks.push(res);
      }
    });
  }
}
