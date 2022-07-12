import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment'
import { Location } from '@angular/common'
// services
import { DatastoreService } from '@core/services/datastore.service'
// models
import { Vehicle } from '@models/vehicle.model'

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Injectable()
export class VehicleResolver implements Resolve<Vehicle> {
  constructor(private datastoreService: DatastoreService) {}

  resolve(route: ActivatedRouteSnapshot) : Observable<any> {
    return this.datastoreService.findRecord(Vehicle, route.params.vin, {}, undefined, environment.apiUrl +  environment.apiPath + "/vehicles/" + route.params.vin)
  }
}

@Component({
  selector: 'app-vehicles-vehicles-show',
  templateUrl: './vehicles-show.component.html',
  styleUrls: ['./vehicles-show.component.scss']
})
export class VehiclesShowComponent implements OnInit {

  public vehicle: Vehicle;

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.vehicle = this.route.snapshot.data.vehicle
  }

  back(): void {
    this.location.back();
  }

  ngOnInit() {    }

}
