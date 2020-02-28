import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-pto-hours-taken',
  templateUrl: './employee-reports-pto-hours-taken.component.html',
  styleUrls: ['./employee-reports-pto-hours-taken.component.scss']
})
export class EmployeeReportsPtoHoursTakenComponent implements OnInit {

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
