import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReportsService, EmployeeReportsEmployeeInformationService } from '../../services';
import { EmployeeReportsEmployeeInformationInquiry } from '../../models/index';

@Component({
  selector: 'app-employee-reports-employee-information-inquiry',
  templateUrl: './employee-reports-employee-information-inquiry.component.html',
  styleUrls: ['./employee-reports-employee-information-inquiry.component.scss']
})
export class EmployeeReportsEmployeeInformationInquiryComponent implements OnInit {

  private employeeIdSubscription: any;
  private employeeId: string;

  employeeReportsEmployeeInformationInquiryReport: EmployeeReportsEmployeeInformationInquiry;
  filteredEmployeeReportEmployeeInformationInquiryReport: EmployeeReportsEmployeeInformationInquiry[];

  dropdownOptions: any[];
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportsService: ReportsService,
    private employeeReportsEmployeeInformationInquiryService: EmployeeReportsEmployeeInformationService
  ) { }

  ngOnInit() {

    this.disableViewReportButton = false;
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);

  }

  viewReport() {

    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReportsEmployeeInformationInquiryService.getEmployeeInformationInquiry()
      .subscribe(employeeReportsEmployeeInformationInquiryReport => {
        this.filteredEmployeeReportEmployeeInformationInquiryReport = employeeReportsEmployeeInformationInquiryReport;

        this.filteredEmployeeReportEmployeeInformationInquiryReport = this.filteredEmployeeReportEmployeeInformationInquiryReport.
        filter(f => (this.employeeId === f.employeeId));

        this.isLoading = false;
      });
    });

    this.disableViewReportButton = true;

  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}


}
