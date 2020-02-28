import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService, EmployeeReportsEmployeeInformationService } from '../../services';
import { EmployeeReportsEmployeeInformationInquiry } from '../../models';

@Component({
  selector: 'app-employee-reports-personal-ee-info',
  templateUrl: './employee-reports-personal-ee-info.component.html',
  styleUrls: ['./employee-reports-personal-ee-info.component.scss']
})
export class EmployeeReportsPersonalEeInfoComponent implements OnInit {

  @Input() allTabSelected?: boolean;

  private employeeIdSubscription: any;
  private employeeId: string;

  employeeReportsEeInfoReport: EmployeeReportsEmployeeInformationInquiry;
  filteredEmployeeReportsEeInfoReport: EmployeeReportsEmployeeInformationInquiry[];

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private reportsService: ReportsService,
    private employeeReportsEmployeeInformationInquiryService: EmployeeReportsEmployeeInformationService
  ) { }

  ngOnInit() {

    window.scrollTo(0, 0);

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    this.viewReport();

  }

  viewReport() {

    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReportsEmployeeInformationInquiryService.getEmployeeInformationInquiry()
      .subscribe(employeeReportsEmployeeInformationInquiryReport => {
        this.filteredEmployeeReportsEeInfoReport = employeeReportsEmployeeInformationInquiryReport;

        this.filteredEmployeeReportsEeInfoReport = this.filteredEmployeeReportsEeInfoReport.
        filter(f => (this.employeeId === f.employeeId));
        this.isLoading = false;
      });
    });
  }

  selectedDownloadOption(item) {}

}
