import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-navbar',
  templateUrl: './payroll-navbar.component.html',
  styleUrls: ['./payroll-navbar.component.scss']
})
export class PayrollNavbarComponent implements OnInit {
  private disabledLink = true;

  constructor() { }

  ngOnInit() {
  }

}
