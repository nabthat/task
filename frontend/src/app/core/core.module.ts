import { CommonModule } from '@angular/common';
import { NgModule, Optional } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { JsonApiModule } from 'nab-angular2-jsonapi';

import { DatastoreService } from './services/datastore.service';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    // angular
    CommonModule,
    FormsModule,
    //
    JsonApiModule
  ],
  declarations: [],
  providers: [
    DatastoreService
  ],
  exports: []
})
export class CoreModule { }
