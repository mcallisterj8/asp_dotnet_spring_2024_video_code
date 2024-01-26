import { Component, OnInit, inject } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VEHICLES } from '../../mock-db/vehicles';
import { AsyncPipe, NgFor } from '@angular/common';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { VehicleService } from '../../services/vehicle.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, VehicleCardComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {  
  
  private vehicleService = inject(VehicleService);
  
  // public vehicles: Vehicle[] | [] = [];
  public vehicles: Observable<Vehicle[]> = of([]);

  ngOnInit(): void {
    // this.vehicleService.getVehicles()
    //   .subscribe(allVehicles => {
    //     this.vehicles = allVehicles;
    //   });

    this.vehicles = this.vehicleService.getVehicles();

  }

}
