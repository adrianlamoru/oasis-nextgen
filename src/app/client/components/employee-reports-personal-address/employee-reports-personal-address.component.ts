import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService, EmployeeReportsPersonalInformationService } from '../../services';
import { EmployeeReportsEmployeePersonalInformation } from '../../models';

@Component({
  selector: 'app-employee-reports-personal-address',
  templateUrl: './employee-reports-personal-address.component.html',
  styleUrls: ['./employee-reports-personal-address.component.scss']
})
export class EmployeeReportsPersonalAddressComponent implements OnInit {

  @Input() allTabSelected?: boolean;

  employeeReportsPersonalAddressReport: EmployeeReportsEmployeePersonalInformation;
  filteredEmployeeReportsPersonalAddressReport: EmployeeReportsEmployeePersonalInformation[];

  private employeeIdSubscription: any;
  private employeeId: string;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  isLoading = true;

  constructor(private route: ActivatedRoute,
              private reportsService: ReportsService,
              private employeeReportsEmployeeAddressService: EmployeeReportsPersonalInformationService) { }

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

      this.filteredEmployeeReportsPersonalAddressReport = this.employeeReportsEmployeeAddressService.getEmployeeAddress();
      console.log(this.filteredEmployeeReportsPersonalAddressReport);
      this.filteredEmployeeReportsPersonalAddressReport = this.filteredEmployeeReportsPersonalAddressReport.
        filter(f => (this.employeeId === f.employeeId));

      this.isLoading = false;
    });
  }

  selectedDownloadOption() {}
}
