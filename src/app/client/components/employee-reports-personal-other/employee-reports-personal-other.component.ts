import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService, EmployeeReportsPersonalInformationService } from '../../services';
import { EmployeeReportsEmployeePersonalInformation } from '../../models';

@Component({
  selector: 'app-employee-reports-personal-other',
  templateUrl: './employee-reports-personal-other.component.html',
  styleUrls: ['./employee-reports-personal-other.component.scss']
})
export class EmployeeReportsPersonalOtherComponent implements OnInit {

  @Input() allTabSelected?: boolean;

  employeeReportsOtherReport: EmployeeReportsEmployeePersonalInformation;
  filteredEmployeeReportsOtherReport: EmployeeReportsEmployeePersonalInformation[];

  private employeeIdSubscription: any;
  private employeeId: string;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private reportsService: ReportsService,
    private employeeReportsEmployeeOtherService: EmployeeReportsPersonalInformationService
  ) { }

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

      this.filteredEmployeeReportsOtherReport = this.employeeReportsEmployeeOtherService.getEmployeeOther();
      this.filteredEmployeeReportsOtherReport = this.filteredEmployeeReportsOtherReport.
        filter(f => (this.employeeId === f.employeeId));

    this.isLoading = false;

    });
  }

  selectedDownloadOption() {}

}
