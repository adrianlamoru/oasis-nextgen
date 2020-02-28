import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-earnings-summary',
  templateUrl: './employee-reports-earnings-summary.component.html',
  styleUrls: ['./employee-reports-earnings-summary.component.scss']
})
export class EmployeeReportsEarningsSummaryComponent implements OnInit {

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
