import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-reports-payroll-pay-and-job-overrides',
  templateUrl: './employee-reports-payroll-pay-and-job-overrides.component.html',
  styleUrls: ['./employee-reports-payroll-pay-and-job-overrides.component.scss']
})
export class EmployeeReportsPayrollPayAndJobOverridesComponent implements OnInit {
  private employeeId: string;
  private employeeIdSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
  }

}
