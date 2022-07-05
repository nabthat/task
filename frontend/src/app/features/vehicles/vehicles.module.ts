import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,

    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    VehicleResolver
  ]
})
export class VehiclesModule { }
