import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';
import { pairwise, startWith, take } from 'rxjs';
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

@Component({
  selector: 'app-meeting-calculator',
  templateUrl: './meeting-calculator.component.html',
  styleUrls: ['./meeting-calculator.component.scss'],
})
export class MeetingCalculatorComponent {
  readonly timeZone = TimeZone;
  utc = this.timeService.formatUTCOffset({ zone: this.timeService.localZone });
  startTimeForm = new FormGroup({
    selectedZone: new FormControl(this.timeService.localZone),
    selectedDate: new FormControl(DateTime.now()),
    selectedTime: new FormControl(DateTime.now()),
  });
  addLocationForm = new FormControl();
  locations: DateTime[] = [];

  get mainTime(): string {
    return (
      this.startTimeForm
        .get('selectedTime')
        ?.value?.toLocaleString(DateTime.DATETIME_SHORT) || ''
    );
  }

  get formattedTime(): string {
    return (
      this.startTimeForm
        .get('selectedTime')
        ?.value?.toLocaleString(DateTime.TIME_24_SIMPLE) || ''
    );
  }

  constructor(
    public selectedClocksService: SelectedClocksService,
    public timeService: TimeService
  ) {
    this.startTimeForm.valueChanges
      .pipe(startWith({}), pairwise())
      .subscribe(([previous, latest]) => {
        // nb. time update is handled in updateTime since due to formatting constraints
        const { selectedZone: prevZone, selectedDate: prevDate } =
          previous as Required<MeetingForm>;
        const {
          selectedZone: zone,
          selectedTime: time,
          selectedDate: date,
        } = latest as Required<MeetingForm>;

        if (prevZone !== zone) {
          this.startTimeForm.patchValue({
            selectedTime: time.setZone(zone),
            selectedDate: date.setZone(zone),
          });
          this.utc = this.timeService.formatUTCOffset({ zone });
        }

        if (+prevDate !== +date) {
          const newTime = time.set({
            day: date.day,
            month: date.month,
            year: date.year,
          });
          this.startTimeForm.patchValue({
            selectedTime: newTime,
          });

          this.locations = this.locations.map((loc) =>
            newTime.setZone(loc.zone)
          );
        }
      });
  }

  // input based on `get formattedTime()`
  updateTime(event: any) {
    const [hour, minute] = event.target.value.split(':');

    const selectedTime =
      this.startTimeForm.get('selectedTime')?.value || DateTime.now();
    const newTime = selectedTime.set({
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
          const newTime =
            this.startTimeForm.get('selectedTime')?.value || DateTime.now();
          return newTime.setZone(c.zone);
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
    this.locations.push(DateTime.local({ zone }));
    // async scroll after update
    scrollToBottom();
  }

  removeLocation(index: number): void {
    this.locations.splice(index, 1);
  }

  formatLocationTime(location: DateTime): string {
    return location.toLocaleString(DateTime.DATETIME_SHORT);
  }
}