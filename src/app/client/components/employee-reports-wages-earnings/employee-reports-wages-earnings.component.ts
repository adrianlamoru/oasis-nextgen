import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-wages-earnings',
  templateUrl: './employee-reports-wages-earnings.component.html',
  styleUrls: ['./employee-reports-wages-earnings.component.scss']
})
export class EmployeeReportsWagesEarningsComponent implements OnInit {

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
