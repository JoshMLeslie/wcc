import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
