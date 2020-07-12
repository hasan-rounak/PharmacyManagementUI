import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {PharmacyManagementAPIService} from '../pharmacy-management-api.service';
import {MedicineData} from '../pharmacy-management.models'

@Component({
  selector: 'app-medicine-search',
  templateUrl: './medicine-search.component.html'
})
export class MedicineSearchComponent implements OnInit {
 inputName:string = '';
 medicines: MedicineData[]=[];
 constructor( private apiService: PharmacyManagementAPIService,private router: Router) { }

 ngOnInit(): void {
  this.SearchMedicine();
  }

  AddMedicine() {
    this.router.navigate([
     "medicine/add",
    ]);
  }
  SearchMedicine() {
    this.apiService.getMedicineByName(this.inputName)
      .subscribe((res: MedicineData[]) => this.medicines = res,err=> console.log(err));
  }
}
