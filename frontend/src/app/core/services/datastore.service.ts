import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'nab-angular2-jsonapi';
import { environment } from "@environments/environment";

import { Vehicle } from '@models/vehicle.model'
import { Location } from '@models/location.model'

const config: DatastoreConfig = {
  baseUrl: [environment.apiUrl, environment.apiPath].join(''),
  models: {
    vehicle: Vehicle,
    location: Location,
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore {

}
