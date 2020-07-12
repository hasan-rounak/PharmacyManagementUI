import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineSearchComponent } from './medicine-search/medicine-search.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'search',
  pathMatch: 'full'
},
{
  path: 'search',
  component: MedicineSearchComponent
},
{
  path: 'add',
  component: MedicineAddComponent
},
{
  path: '**',
  redirectTo: 'search',
  pathMatch: 'full'
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyManagementRoutingModule { }