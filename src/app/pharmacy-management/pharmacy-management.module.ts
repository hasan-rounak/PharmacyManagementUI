import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineSearchComponent } from './medicine-search/medicine-search.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import {PharmacyManagementRoutingModule} from './pharmacy-management-routing.module';
import { IntlModule } from '@progress/kendo-angular-intl';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedicineSearchComponent, MedicineAddComponent],
  imports: [
    PharmacyManagementRoutingModule,
    IntlModule,
    CommonModule,
    FormsModule,
    GridModule
  ]
})
export class PharmacyManagementModule { }
