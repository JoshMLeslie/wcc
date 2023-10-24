import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';
import { pairwise } from 'rxjs';
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
  form = new FormGroup({
    selectedZone: new FormControl(this.timeService.localZone),
    selectedDateTime: new FormControl(DateTime.now()),
  });

  get time(): string {
    return this.form.get('selectedDateTime')?.value?.toLocaleString(DateTime.DATETIME_SHORT) || '';
  }

  constructor(public timeService: TimeService) {
    this.form.valueChanges.pipe(pairwise()).subscribe(([previous, latest]) => {
      const { selectedZone: prevZone } = previous as Required<MeetingForm>;
      const { selectedZone: zone, selectedDateTime } =
        latest as Required<MeetingForm>;

      if (prevZone !== zone) {
        this.form.patchValue({
          selectedDateTime: selectedDateTime.setZone(zone),
        });
        this.utc = this.timeService.formatUTCOffset({ zone });
      }
    });
  }
}
