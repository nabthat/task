import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialAllModule } from '../../../material.module';

// components
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesShowComponent, VehicleResolver } from './vehicles-show/vehicles-show.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListComponent,
  },
  {
    path: ':vin',
    component: VehiclesShowComponent,
    resolve: { vehicle: VehicleResolver }
  },
]

@NgModule({
  declarations: [
    VehiclesListComponent,
    VehiclesShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialAllModule
  ],
  providers: [
    VehicleResolver
  ]
})
export class VehiclesModule { }
