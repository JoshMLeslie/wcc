import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectedClocksComponent } from './components/selected-clocks/selected-clocks.component';
import { PlanMeetingComponent } from './components/plan-meeting/plan-meeting.component';
import { ClockTokenComponent } from './components/clock-token/clock-token.component';
import { AddClockTokenComponent } from './components/add-clock-token/add-clock-token.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MeetingCalculatorComponent } from './components/meeting-calculator/meeting-calculator.component';

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
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
