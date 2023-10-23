import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ClockToken } from 'src/app/interface/clock-token';

@Component({
  selector: 'app-clock-token',
  templateUrl: './clock-token.component.html',
  styleUrls: ['./clock-token.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClockTokenComponent {
  @Input() data: ClockToken = { location: '', utc: 0 };
}
