import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService, EmployeeReportsEmployeeInformationService } from '../../services';
import { EmployeeReportsEmployeePersonalInformation } from '../../models';
import { EmployeeReportsPersonalInformationService } from '../../services/employee-reports-personal-information.service';

@Component({
  selector: 'app-employee-reports-personal-employment-info',
  templateUrl: './employee-reports-personal-employment-info.component.html',
  styleUrls: ['./employee-reports-personal-employment-info.component.scss']
})
export class EmployeeReportsPersonalEmploymentInfoComponent implements OnInit {

  @Input() allTabSelected?: boolean;

  employeeReportsEmployementInfoReport: EmployeeReportsEmployeePersonalInformation;
  filteredEmployeeReportsEmployementInfoReport: EmployeeReportsEmployeePersonalInformation[];

  private employeeIdSubscription: any;
  private employeeId: string;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(private route: ActivatedRoute,
    private reportsService: ReportsService,
    private employeeReportsEmployeeEmployementInfoService: EmployeeReportsPersonalInformationService) { }

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

      this.filteredEmployeeReportsEmployementInfoReport = this.employeeReportsEmployeeEmployementInfoService.getEmployeeEmployementInfo();

      this.filteredEmployeeReportsEmployementInfoReport = this.filteredEmployeeReportsEmployementInfoReport.
        filter(f => (this.employeeId === f.employeeId));

      this.isLoading = false;
    });
  }

  selectedDownloadOption() {}

}
