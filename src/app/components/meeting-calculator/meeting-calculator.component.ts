import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';
import { Observable, pairwise, startWith, take } from 'rxjs';
import { tzToUIArr } from '../../helper/time-zone.helper';
import { TimeZone } from '../../interface/time-zone';
import { SelectedClocksService } from '../../service/selected-clocks.service';
import { TimeService } from '../../service/time.service';

const scrollToBottom = (): void => {
  setTimeout(
    () =>
      window.scrollTo({
        behavior: 'smooth',
        top: window.document.body.scrollHeight,
      }),
    100
  );
};

interface MeetingForm {
  selectedZone: TimeZone;
  selectedDate: DateTime;
  selectedTime: DateTime;
}

const FormDefault = {
  selectedZone: TimeService.localZone,
  selectedDate: DateTime.local(),
  selectedTime: DateTime.local(),
};

@Component({
  selector: 'app-meeting-calculator',
  templateUrl: './meeting-calculator.component.html',
  styleUrls: ['./meeting-calculator.component.scss'],
})
export class MeetingCalculatorComponent {
  readonly timeZone = TimeZone;
  readonly timeZoneObj = tzToUIArr();

  startTimeForm = new FormGroup({
    selectedZone: new FormControl(FormDefault.selectedZone),
    selectedDate: new FormControl(FormDefault.selectedDate),
    selectedTime: new FormControl(FormDefault.selectedTime),
  });

  utc = this.timeService.formatUTCOffset(
    TimeService.localZone,
    DateTime.local()
  );
  addLocationForm = new FormControl();
  locations: DateTime[] = [];

  get selectedTime(): DateTime {
    return this.startTimeForm.get('selectedTime')?.value || DateTime.now();
  }
  get shortTime(): string {
    return this.selectedTime.toLocaleString(DateTime.DATETIME_SHORT) || '';
  }
  get milTime(): string {
    return this.selectedTime.toLocaleString(DateTime.TIME_24_SIMPLE) || '';
  }

  constructor(
    public selectedClocksService: SelectedClocksService,
    public timeService: TimeService
  ) {
    (this.startTimeForm.valueChanges as Observable<MeetingForm>)
      .pipe(
        startWith({
          selectedZone: FormDefault.selectedZone,
          selectedDate: FormDefault.selectedDate,
          selectedTime: FormDefault.selectedTime,
        }),
        pairwise()
      )
      .subscribe(([previous, latest]) => {
        // nb. time update is handled in updateTime due to formatting constraints
        this.updateZone(
          previous as Required<MeetingForm>,
          latest as Required<MeetingForm>
        );
        this.updateDate(
          previous as Required<MeetingForm>,
          latest as Required<MeetingForm>
        );
        this.utc = this.timeService.formatUTCOffset(
          latest.selectedZone,
          latest.selectedDate
        );
      });
  }

  updateZone(previous: MeetingForm, latest: MeetingForm) {
    const { selectedZone: prevZone } = previous;
    const { selectedTime: time, selectedDate: date } = latest;
    let { selectedZone: zone } = latest;

    if (prevZone !== zone) {
      if (!zone) {
        zone = DateTime.now().zoneName as TimeZone;
      }
      this.startTimeForm.patchValue({
        selectedTime: time.setZone(zone),
        selectedDate: date.setZone(zone),
      });
    }
  }

  updateDate(previous: MeetingForm, latest: MeetingForm) {
    const { selectedDate: prevDate } = previous;
    const { selectedTime: time, selectedDate: date } = latest;

    if (+prevDate !== +date) {
      const newTime = time.set({
        day: date.day,
        month: date.month,
        year: date.year,
      });
      this.startTimeForm.patchValue({
        selectedTime: newTime,
      });

      this.locations = this.locations.map((loc) => newTime.setZone(loc.zone));
    }
  }

  // input based on `get formattedTime()`
  updateTime(event: any) {
    const [hour, minute] = event.target.value.split(':');

    const newTime = this.selectedTime.set({
      hour: +hour,
      minute: +minute,
    });

    this.locations = this.locations.map((loc) => newTime.setZone(loc.zone));

    this.startTimeForm.patchValue({ selectedTime: newTime });
  }

  addClocks() {
    this.selectedClocksService.selectedClocks
      .pipe(take(1))
      .subscribe((clocks) => {
        const selectedClocks = clocks.map((c) => {
          return this.selectedTime.setZone(c.zone);
        });
        this.locations.push(...selectedClocks);
      });
    scrollToBottom();
  }

  addLocation() {
    const zone = this.addLocationForm.value;
    if (!zone) {
      return;
    }
    this.locations.push(this.selectedTime.setZone(zone));
    this.addLocationForm.reset();
    scrollToBottom();
  }

  addLocationOnEnter(event: KeyboardEvent): boolean {
    if (event.key === 'Enter') {
      this.addLocation();
      return false;
    }
    return true;
  }

  removeLocation(index: number): void {
    this.locations.splice(index, 1);
  }

  formatLocationTime(location: DateTime): string {
    return (
      this.timeService.formatUTCOffset(
        location.zoneName as TimeZone,
        location
      ) +
      ' ' +
      location.toLocaleString(DateTime.DATETIME_SHORT)
    );
  }

  dragDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.locations, event.previousIndex, event.currentIndex);
  }

  refresh(): void {
    this.startTimeForm.reset({
      selectedZone: TimeService.localZone,
      selectedDate: DateTime.now(),
      selectedTime: DateTime.now(),
    });
  }
}
