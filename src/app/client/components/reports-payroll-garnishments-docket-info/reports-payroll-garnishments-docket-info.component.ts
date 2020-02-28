import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reports-payroll-garnishments-docket-info',
  templateUrl: './reports-payroll-garnishments-docket-info.component.html',
  styleUrls: ['./reports-payroll-garnishments-docket-info.component.scss']
})
export class ReportsPayrollGarnishmentsDocketInfoComponent implements OnInit {

  @Input() docketInformationData: any[];
  @Input() displayReport: boolean;

  constructor() { }

  ngOnInit() {
  }

}
