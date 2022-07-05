import { Component, AfterViewInit, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment'
// services
import { DatastoreService } from '@core/services/datastore.service'
// models
import { Vehicle } from '@models/vehicle.model'

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
export class VehiclesShowComponent implements AfterViewInit {

  public vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private datastoreService: DatastoreService
  ) {
    this.vehicle = this.route.snapshot.data.vehicle
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy() {
  }

}
