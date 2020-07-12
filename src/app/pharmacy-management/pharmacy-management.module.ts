import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineSearchComponent } from './medicine-search/medicine-search.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import {PharmacyManagementRoutingModule} from './pharmacy-management-routing.module';


@NgModule({
  declarations: [MedicineSearchComponent, MedicineAddComponent],
  imports: [
    PharmacyManagementRoutingModule,
    CommonModule
  ]
})
export class PharmacyManagementModule { }
