import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-gross-net-sort-options',
  templateUrl: './employee-reports-gross-net-sort-options.component.html',
  styleUrls: ['./employee-reports-gross-net-sort-options.component.scss']
})
export class EmployeeReportsGrossNetSortOptionsComponent implements OnInit {
  private employeeId: string;
  private employeeIdSubscription: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
  }

}
