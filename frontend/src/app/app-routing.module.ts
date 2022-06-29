import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard', loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'vehicles', loadChildren: () => import('@features/vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
