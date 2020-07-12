import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  footerText = '';

  constructor() { }

  ngOnInit(): void {
    this.footerText = `Copyright © 2020 ABC Pharmacy's. All Rights Reserved.`;
  }
}
