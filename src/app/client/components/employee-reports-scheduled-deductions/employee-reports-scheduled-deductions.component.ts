import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService, EmployeeReportScheduledDeductionService } from '../../services';
import { EmployeeReportScheduledDeductions } from '../../models';

@Component({
  selector: 'app-employee-reports-scheduled-deductions',
  templateUrl: './employee-reports-scheduled-deductions.component.html',
  styleUrls: ['./employee-reports-scheduled-deductions.component.scss']
})
export class EmployeeReportsScheduledDeductionsComponent implements OnInit {

  employeeReportsScheduledDeductions: EmployeeReportScheduledDeductions[];

  private employeeIdSubscription: any;
  private employeeId: string;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reportsService: ReportsService,
    private employeeReportScheduledDeductionService: EmployeeReportScheduledDeductionService
  ) { }

  ngOnInit() {

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReportScheduledDeductionService.getEmployeeReportScheduledDeductions()
      .subscribe(
        employeeReportsScheduledDeductions => {
          this.employeeReportsScheduledDeductions = employeeReportsScheduledDeductions;
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
