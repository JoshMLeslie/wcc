import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Location } from '../interface/location';

@Injectable({
  providedIn: 'root',
})
export class SelectedClocksService {
  selectedClocks = new BehaviorSubject<Location[]>([]);

  update(locations: Location[]) {
    this.selectedClocks.next(locations);
  }
}
