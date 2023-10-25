import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectedClocksService } from '../../service/selected-clocks.service';
import { TimeService } from '../../service/time.service';
import { Location } from '../../interface/location';
import { AddClockTokenComponent } from '../add-clock-token/add-clock-token.component';

@Component({
  selector: 'app-selected-clocks',
  templateUrl: './selected-clocks.component.html',
  styleUrls: ['./selected-clocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedClocksComponent implements OnInit {
  clocks: Location[] = [];
  currentDate;
  currentTime$;

  constructor(
    public matDialog: MatDialog,
    public selectedClocksService: SelectedClocksService,
    public timeService: TimeService
  ) {
    this.currentDate = timeService.currentDate;
    this.currentTime$ = timeService.currentSecondsString$;
  }

  ngOnInit(): void {
    try {
      const clocks = localStorage.getItem('clock-tokens');

      if (typeof clocks === 'string' && clocks !== '[]') {
        this.clocks.push(...JSON.parse(clocks));
      } else {
        this.clocks.push({
          zone: this.timeService.localZone,
        });
      }
      
      this.selectedClocksService.update(this.clocks);
    } catch {}
  }

  addClockToken() {
    const ref = this.matDialog.open(AddClockTokenComponent, {
      panelClass: 'fix-mat-dialog-ng-select'
    });

    ref.afterClosed().subscribe((res: undefined | Location) => {
      if (res?.zone) {
        this.clocks.push(res);
        this.updateStorage();
      }
    });
  }

  deleteToken(index: number) {
    this.clocks.splice(index, 1);
    this.updateStorage();
  }

  dragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.clocks, event.previousIndex, event.currentIndex);
    this.updateStorage();
  }

  private updateStorage() {
    this.selectedClocksService.update(this.clocks);
    localStorage.setItem('clock-tokens', JSON.stringify(this.clocks));
  }
}
