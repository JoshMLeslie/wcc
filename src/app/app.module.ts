import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectedClocksComponent } from './components/selected-clocks/selected-clocks.component';
import { PlanMeetingComponent } from './components/plan-meeting/plan-meeting.component';
import { ClockTokenComponent } from './components/clock-token/clock-token.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectedClocksComponent,
    PlanMeetingComponent,
    ClockTokenComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
