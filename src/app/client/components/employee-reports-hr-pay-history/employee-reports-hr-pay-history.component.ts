import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeReportPayHistory } from '../../models/employee-reports-hr-pay-history.interface';
import { EmployeeReportPayHistoryService, ReportsService } from '../../services';

@Component({
  selector: 'app-employee-reports-hr-pay-history',
  templateUrl: './employee-reports-hr-pay-history.component.html',
  styleUrls: ['./employee-reports-hr-pay-history.component.scss']
})
export class EmployeeReportsHrPayHistoryComponent implements OnInit {

  private employeeIdSubscription: any;

  employeeReportsPayHistory: EmployeeReportPayHistory[];
  dropdownOptions: any[];

  reportGeneratedDate: string;
  private employeeId: string;

  isLoading = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private reportsService: ReportsService,
              private employeeReportPayHistoryService: EmployeeReportPayHistoryService) { }

  ngOnInit() {

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReportPayHistoryService.getEmployeeReportPayHistory()
    .subscribe(
      employeeReportsPayHistory => {
        this.employeeReportsPayHistory = employeeReportsPayHistory;
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
