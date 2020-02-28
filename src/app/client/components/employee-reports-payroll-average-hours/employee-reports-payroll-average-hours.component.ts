import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService, ReportsAverageHoursService } from '../../services';
import { AverageHours } from '../../models';

@Component({
  selector: 'app-employee-reports-payroll-average-hours',
  templateUrl: './employee-reports-payroll-average-hours.component.html',
  styleUrls: ['./employee-reports-payroll-average-hours.component.scss']
})
export class EmployeeReportsPayrollAverageHoursComponent implements OnInit {

  filteredEmployeeReportsAverageHoursDataRows: AverageHours[];
  employeeReportsAverageHoursDataRows: AverageHours[];

  reportGeneratedDate: string;
  private employeeId: string;

  private employeeIdSubscription: any;

  selectedBeginningDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;
  disableViewReportButton = true;
  dropdownOptions: any[];
  isLoading = true;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private reportsService: ReportsService,
              private employeeReportsAverageHoursReportService: ReportsAverageHoursService) { }

  ngOnInit() {

    const today = new Date();
    this.selectedBeginningDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });

    setTimeout(() => {
      // this.initEmployeeReportsAverageHoursDataRow();
      this.filterDataRow();

      // this.isLoading = false;
    }, 1000);

    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  filterDataRow() {

    this.isLoading = true;

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

    this.employeeReportsAverageHoursReportService.getEmployeeAverageHours()
    .subscribe(employeeReportsAverageHoursReport => {
      this.filteredEmployeeReportsAverageHoursDataRows = employeeReportsAverageHoursReport;

    this.filteredEmployeeReportsAverageHoursDataRows = this.filteredEmployeeReportsAverageHoursDataRows
      .filter(c => (this.employeeId === c.employeeId));

      this.isLoading = false;
    });
    });
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

    this.isLoading = false;
    }, 1000);
  }

  compareDates(date: Date, dateNg: NgbDateStruct) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (year > dateNg.year) {
      return 1;
    } else if (year < dateNg.year) {
      return -1;
    } else {
      if (month > dateNg.month) {
        return 1;
      } else if (month < dateNg.month) {
        return -1;
      } else {
        if (day > dateNg.day) {
          return 1;
        } else if (day < dateNg.day) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}

}
