import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-medicine-search',
  templateUrl: './medicine-search.component.html'
})
export class MedicineSearchComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  AddMedicine() {
    this.router.navigate([
     "medicine/add",
    ]);
  }
}
