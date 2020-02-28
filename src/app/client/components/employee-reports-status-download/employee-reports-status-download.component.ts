import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-reports-status-download',
  templateUrl: './employee-reports-status-download.component.html',
  styleUrls: ['./employee-reports-status-download.component.scss']
})
export class EmployeeReportsStatusDownloadComponent implements OnInit {

  private employeeId: string;
  private employeeIdSubscription: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
  }

}
