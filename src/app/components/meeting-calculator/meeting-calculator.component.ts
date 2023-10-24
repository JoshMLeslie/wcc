import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { DateTime } from 'luxon';
import { pairwise } from 'rxjs';
import { Location } from 'src/app/interface/location';
import { TimeZone } from 'src/app/interface/time-zone';
import { TimeService } from 'src/app/service/time.service';

interface MeetingForm {
  selectedZone: TimeZone;
  selectedDateTime: DateTime;
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
    selectedDateTime: new FormControl(DateTime.now()),
  });
  addLocationForm = new FormControl();
  locations: DateTime[] = [];

  get mainTime(): string {
    return (
      this.startTimeForm
        .get('selectedDateTime')
        ?.value?.toLocaleString(DateTime.DATETIME_SHORT) || ''
    );
  }

  constructor(public timeService: TimeService) {
    this.startTimeForm.valueChanges
      .pipe(pairwise())
      .subscribe(([previous, latest]) => {
        const { selectedZone: prevZone } = previous as Required<MeetingForm>;
        const { selectedZone: zone, selectedDateTime } =
          latest as Required<MeetingForm>;

        if (prevZone !== zone) {
          this.startTimeForm.patchValue({
            selectedDateTime: selectedDateTime.setZone(zone),
          });
          this.utc = this.timeService.formatUTCOffset({ zone });
        }
      });
  }

  addClocks() {

  }
  
  addLocation() {
    const newLoc = DateTime.local({ zone: this.addLocationForm.value });
    this.locations.push(newLoc);
  }

  removeLocation(index: number): void {
    this.locations.splice(index, 1);
  }

  formatLocationTime(location: DateTime): string {
    return location.toLocaleString(DateTime.DATETIME_SHORT)
  }
}
