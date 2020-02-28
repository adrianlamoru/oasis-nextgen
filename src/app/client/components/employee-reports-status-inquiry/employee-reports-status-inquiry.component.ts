import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService } from '../../services';
import { EmployeeReportStatusInquiry } from '../../models';
import { EmployeeReportStatusInquiryService } from '../../services/employee-reports-status-inquiry.service';

@Component({
  selector: 'app-employee-reports-status-inquiry',
  templateUrl: './employee-reports-status-inquiry.component.html',
  styleUrls: ['./employee-reports-status-inquiry.component.scss']
})
export class EmployeeReportsStatusInquiryComponent implements OnInit {

  employeeReportsStatusInquiry: EmployeeReportStatusInquiry[];

  reportGeneratedDate: string;
  dropdownOptions: any[];
  isLoading = true;

  private employeeId: string;
  private employeeIdSubscription: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private reportsService: ReportsService,
              private employeeReportStatusInquiryService: EmployeeReportStatusInquiryService) { }

  ngOnInit() {

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReportStatusInquiryService.getEmployeeReportStatusInquiry()
    .subscribe(
      employeeReportsStatusInquiry => {
        this.employeeReportsStatusInquiry = employeeReportsStatusInquiry;
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

  selectedDownloadOption() {}
}
