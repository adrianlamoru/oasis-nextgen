import { Component, OnInit, Input } from '@angular/core';
import { EmployeeReportsEmployeePersonalInformation } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { ReportsService, EmployeeReportsPersonalInformationService } from '../../services';

@Component({
  selector: 'app-employee-reports-personal-tax',
  templateUrl: './employee-reports-personal-tax.component.html',
  styleUrls: ['./employee-reports-personal-tax.component.scss']
})
export class EmployeeReportsPersonalTaxComponent implements OnInit {

  @Input() allTabSelected?: boolean;

  employeeReportsFedTaxReport: EmployeeReportsEmployeePersonalInformation;
  filteredEmployeeReportsFedTaxReport: EmployeeReportsEmployeePersonalInformation[];

  employeeReportsStateTaxReport: EmployeeReportsEmployeePersonalInformation;
  filteredEmployeeReportsStateTaxReport: EmployeeReportsEmployeePersonalInformation[];

  private employeeIdSubscription: any;
  private employeeId: string;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private reportsService: ReportsService,
    private employeeReportsEmployeeTaxService: EmployeeReportsPersonalInformationService) { }

  ngOnInit() {
    this.dropdownOptions = this.reportsService.getDownloadOptions();
    this.viewReport();
  }

  viewReport() {

    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.filteredEmployeeReportsFedTaxReport = this.employeeReportsEmployeeTaxService.getEmployeeFedTax();
        this.filteredEmployeeReportsFedTaxReport = this.filteredEmployeeReportsFedTaxReport.
          filter(f => (this.employeeId === f.employeeId));

      this.filteredEmployeeReportsStateTaxReport = this.employeeReportsEmployeeTaxService.getEmployeeStateTax();
      this.filteredEmployeeReportsStateTaxReport = this.filteredEmployeeReportsStateTaxReport.
        filter(f => (this.employeeId === f.employeeId));

        this.isLoading = false;

    });
  }

  selectedDownloadOption() {}

}
