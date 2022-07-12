import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JsonApiModule } from 'nab-angular2-jsonapi';
import { DatastoreService } from './services/datastore.service';


@NgModule({
  imports: [
    // angular
    CommonModule,
    JsonApiModule
  ],
  declarations: [],
  providers: [
    DatastoreService
  ],
  exports: []
})
export class CoreModule { }
