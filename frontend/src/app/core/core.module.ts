import { CommonModule } from '@angular/common';
import { NgModule, Optional } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { JsonApiModule } from 'nab-angular2-jsonapi';

import { DatastoreService } from './services/datastore.service';

import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    // angular
    CommonModule,
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
    //
    JsonApiModule
  ],
  declarations: [],
  providers: [
    DatastoreService
  ],
  exports: [
    // angular
    FormsModule,

    // material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,

    FontAwesomeModule
  ]
})
export class CoreModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons();
  }
}
