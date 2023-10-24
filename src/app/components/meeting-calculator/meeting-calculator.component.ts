import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { DateTime } from 'luxon';
import { pairwise, startWith } from 'rxjs';
import { Location } from 'src/app/interface/location';
import { TimeZone } from 'src/app/interface/time-zone';
import { TimeService } from 'src/app/service/time.service';

interface MeetingForm {
  selectedZone: TimeZone;
  selectedDate: DateTime;
  selectedTime: DateTime;
}

const updateDateTime = (old: DateTime, update: Partial<DateTime>): DateTime => {
  return DateTime.fromObject(
    {
      hour: update?.hour || old.hour,
      minute: update?.minute || old.minute,
      second: update?.second || old.second,
      millisecond: update?.millisecond || old.millisecond,
      day: update?.day || old.day,
      month: update?.month || old.month,
      year: update?.year || old.year,
    },
    {
      zone: update?.zone || old.zone,
    }
  );
};

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

  constructor(public timeService: TimeService) {
    this.startTimeForm.valueChanges
      .pipe(startWith({}), pairwise())
      .subscribe(([previous, latest]) => {
        // nb. time update is handled in updateTime since due to formatting constraints
        const {
          selectedZone: prevZone,
          selectedDate: prevDate,
        } = previous as Required<MeetingForm>;
        const {
          selectedZone: zone,
          selectedTime: time,
          selectedDate: date,
        } = latest as Required<MeetingForm>;

        if (prevZone !== zone) {
          this.startTimeForm.patchValue({
            selectedTime: time.setZone(zone),
            selectedDate: date.setZone(zone)
          });
          this.utc = this.timeService.formatUTCOffset({ zone });
        }

        if (+prevDate !== +date) {
          const newTime = time.set({
            day: date.day,
            month: date.month,
            year: date.year
          });
          this.startTimeForm.patchValue({
            selectedTime: newTime
          })
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

    this.startTimeForm.patchValue({ selectedTime: newTime });
  }

  addClocks() {}

  addLocation() {
    const newLoc = DateTime.local({ zone: this.addLocationForm.value });
    this.locations.push(newLoc);
  }

  removeLocation(index: number): void {
    this.locations.splice(index, 1);
  }

  formatLocationTime(location: DateTime): string {
    return location.toLocaleString(DateTime.DATETIME_SHORT);
  }
}
