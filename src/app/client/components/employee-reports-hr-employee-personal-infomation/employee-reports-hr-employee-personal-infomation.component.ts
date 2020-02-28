import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-reports-hr-employee-personal-infomation',
  templateUrl: './employee-reports-hr-employee-personal-infomation.component.html',
  styleUrls: ['./employee-reports-hr-employee-personal-infomation.component.scss']
})
export class EmployeeReportsHrEmployeePersonalInfomationComponent implements OnInit {

  private employeeId: string;
  private employeeIdSubscription: any;
  reportGeneratedDate: string;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }
}
