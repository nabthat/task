import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListComponent,
  }
]

@NgModule({
  declarations: [
    VehiclesListComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [ ]
})
export class VehiclesModule { }
