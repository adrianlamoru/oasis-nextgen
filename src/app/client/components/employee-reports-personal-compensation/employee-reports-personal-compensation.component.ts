import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService, EmployeeReportsPersonalInformationService } from '../../services';
import { EmployeeReportsEmployeePersonalInformation } from '../../models';

@Component({
  selector: 'app-employee-reports-personal-compensation',
  templateUrl: './employee-reports-personal-compensation.component.html',
  styleUrls: ['./employee-reports-personal-compensation.component.scss']
})
export class EmployeeReportsPersonalCompensationComponent implements OnInit {

  @Input() allTabSelected?: boolean;

  employeeReportsPersonalCompensationReport: EmployeeReportsEmployeePersonalInformation;
  filteredEmployeeReportsPersonalCompensationReport: EmployeeReportsEmployeePersonalInformation[];

  private employeeIdSubscription: any;
  private employeeId: string;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(private route: ActivatedRoute,
              private reportsService: ReportsService,
              private employeeReportsEmployeeCompensationService: EmployeeReportsPersonalInformationService) { }

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

      this.filteredEmployeeReportsPersonalCompensationReport = this.employeeReportsEmployeeCompensationService.getEmployeeCompensation();
      console.log(this.filteredEmployeeReportsPersonalCompensationReport);
      this.filteredEmployeeReportsPersonalCompensationReport = this.filteredEmployeeReportsPersonalCompensationReport.
        filter(f => (this.employeeId === f.employeeId));

      this.isLoading = false;
    });
  }

  selectedDownloadOption() {}
}
