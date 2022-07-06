import { Component, AfterViewInit, Injectable, Inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment'
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
export class VehiclesShowComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

}
