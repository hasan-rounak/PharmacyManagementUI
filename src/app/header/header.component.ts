import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  userName:string = 'Rounak';
  companyName:string='ABC Pharmacy';
  constructor() { }

  ngOnInit(): void {
  }

}
