import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'medicine-add',
  templateUrl: './medicine-add.component.html'
})
export class MedicineAddComponent implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  BackToSearchResults() {
    this.router.navigate([
     "medicine/search",
    ]);
  }

}
