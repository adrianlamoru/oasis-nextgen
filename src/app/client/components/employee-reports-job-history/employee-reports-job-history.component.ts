import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeReportJobHistory } from '../../models/employee-reports-job-history.interface';
import { EmployeeReportJobHistoryService } from '../../services/employee-reports-job-history.service';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-employee-reports-job-history',
  templateUrl: './employee-reports-job-history.component.html',
  styleUrls: ['./employee-reports-job-history.component.scss']
})
export class EmployeeReportsJobHistoryComponent implements OnInit {

  employeeReportsJobHistory: EmployeeReportJobHistory[];

  reportGeneratedDate: string;
  dropdownOptions: any[];
  isLoading = true;

  private employeeId: string;
  private employeeIdSubscription: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private reportsService: ReportsService,
              private employeeReportJobHistoryService: EmployeeReportJobHistoryService) { }

  ngOnInit() {

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReportJobHistoryService.getEmployeeReportJobHistory()
    .subscribe(
      employeeReportsJobHistory => {
        this.employeeReportsJobHistory = employeeReportsJobHistory;
      }
    );

    });

    setTimeout(() => {
      this.viewReport();

      this.isLoading = false;
    }, 1000);

    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  viewReport() {}

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}
}
