import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataDriven, HrEmployeePersonalChange } from '../../models/index';
import { Router } from '@angular/router';
import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';

@Component({
  selector: 'app-hr-employee-personal-change',
  templateUrl: './hr-employee-personal-change.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./hr-employee-personal-change.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class HrEmployeePersonalChangeComponent implements OnInit {

  @Input() pageSource?: string;
  @Input() employeeId?: string;

  employeesPersonalChangeDataRows: HrEmployeePersonalChange[];
  filteredEmployeesPersonalChangeDataRows: HrEmployeePersonalChange[]; // test purpose

  isLoading = true;

  selectedBeginningDate: NgbDateStruct;

  selectedEndDate: NgbDateStruct;

  reportGeneratedDate: any;

  disableViewReportButton = true;

  constructor(private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);
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

    setTimeout(() => {
      this.initEmployeePersonalChangeDataRow();
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {

    if (this.pageSource !== 'employeeReports') {
      this.filteredEmployeesPersonalChangeDataRows = this.employeesPersonalChangeDataRows;
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.filteredEmployeesPersonalChangeDataRows = this.employeesPersonalChangeDataRows.filter(item => {
        return item.employeeID === this.employeeId;
      });
    }

    this.filteredEmployeesPersonalChangeDataRows = this.employeesPersonalChangeDataRows;

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

     this.isLoading = false;
    }, 3000);
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  initEmployeePersonalChangeDataRow() {
    this.employeesPersonalChangeDataRows = [{
      name: 'APSEY LOREN',
      afterValue: 2,
      beforeValue: 1,
      fieldName: 'Status',
      dateChanged: new Date()
    }, {
      name: 'ASDF FRANK A',
      afterValue: 2,
      beforeValue: 1,
      fieldName: 'Status',
      dateChanged: new Date()
    }, {
      name: 'BARNES ELSA',
      afterValue: 2,
      beforeValue: 1,
      fieldName: 'Status',
      dateChanged: new Date()
    }, {
      name: 'BLUE TRUE A',
      afterValue: 2,
      beforeValue: 1,
      fieldName: 'Status',
      dateChanged: new Date()
    }, {
      name: 'BRIAN JONES',
      afterValue: 2,
      beforeValue: 1,
      fieldName: 'Status',
      dateChanged: new Date()
    }];
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
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
    }
  }

}
