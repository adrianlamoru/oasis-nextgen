import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-payroll-voucher-summary',
  templateUrl: './employee-reports-payroll-voucher-summary.component.html',
  styleUrls: ['./employee-reports-payroll-voucher-summary.component.scss']
})
export class EmployeeReportsPayrollVoucherSummaryComponent implements OnInit {

  private employeeId: string;
  private employeeIdSubscription: any;
  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
  }

}
