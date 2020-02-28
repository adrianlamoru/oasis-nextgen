import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-reports-hr-employee-personal-change',
  templateUrl: './employee-reports-hr-employee-personal-change.component.html',
  styleUrls: ['./employee-reports-hr-employee-personal-change.component.scss']
})
export class EmployeeReportsHrEmployeePersonalChangeComponent implements OnInit {

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
