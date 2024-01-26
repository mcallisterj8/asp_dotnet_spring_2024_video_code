import { Injectable } from '@angular/core';
import { VEHICLES } from '../mock-db/vehicles';
import { Vehicle } from '../models/vehicle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  public getVehicles(): Observable<Vehicle[]> {
    return of(VEHICLES);
  }

}
