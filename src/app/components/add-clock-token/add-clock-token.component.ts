import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Location } from 'src/app/interface/location';
import { TimeZone } from 'src/app/interface/time-zone';

@Component({
  selector: 'app-add-clock-token',
  templateUrl: './add-clock-token.component.html',
  styleUrls: ['./add-clock-token.component.scss'],
})
export class AddClockTokenComponent {
  timeZone = TimeZone;
  selectedZone!: TimeZone;

  constructor(
    public matDialogRef: MatDialogRef<AddClockTokenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location
  ) {}

  submit() {
    this.matDialogRef.close({
      zone: this.selectedZone
    } as Location);
  }
}
