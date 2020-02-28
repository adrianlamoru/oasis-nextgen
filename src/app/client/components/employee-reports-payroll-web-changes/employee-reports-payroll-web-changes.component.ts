import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-payroll-web-changes',
  templateUrl: './employee-reports-payroll-web-changes.component.html',
  styleUrls: ['./employee-reports-payroll-web-changes.component.scss']
})
export class EmployeeReportsPayrollWebChangesComponent implements OnInit {

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
