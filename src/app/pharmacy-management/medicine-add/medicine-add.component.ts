import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'medicine-add',
  templateUrl: './medicine-add.component.html'
})
export class MedicineAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BackToSearchResults() {
    this.router.navigate([
     "medicine/search",
    ]);
  }

}
