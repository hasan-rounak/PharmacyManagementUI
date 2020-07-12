import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PharmacyManagementModule} from './pharmacy-management/pharmacy-management.module'


const routes: Routes = [{
  path: 'medicine',
  loadChildren: './pharmacy-management/pharmacy-management.module#PharmacyManagementModule'
},
{
  path: '',
  redirectTo: 'medicine/search',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'medicine/search',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
