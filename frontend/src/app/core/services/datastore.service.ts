import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'nab-angular2-jsonapi';
import { environment } from "@environments/environment";

import { Vehicle } from '@models/vehicle.model'

const config: DatastoreConfig = {
  baseUrl: [environment.apiUrl, environment.apiPath].join(''),
  models: {
    vehicle: Vehicle,
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore {

}
