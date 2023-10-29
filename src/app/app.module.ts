import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { AddClockTokenComponent } from './components/add-clock-token/add-clock-token.component';
import { ClockTokenComponent } from './components/clock-token/clock-token.component';
import { MeetingCalculatorComponent } from './components/meeting-calculator/meeting-calculator.component';
import { PlanMeetingComponent } from './components/plan-meeting/plan-meeting.component';
import { SelectedClocksComponent } from './components/selected-clocks/selected-clocks.component';
import { CamelToNormPipe } from './pipe/camel-normal.pipe';
import { TimezoneSelectComponent } from './components/timezone-select/timezone-select.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectedClocksComponent,
    PlanMeetingComponent,
    ClockTokenComponent,
    AddClockTokenComponent,
    MeetingCalculatorComponent,
  ],
  imports: [
    CamelToNormPipe,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDatepickerModule,
    MatLuxonDateModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    NgSelectModule,
    TimezoneSelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
