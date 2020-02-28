import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataDriven, HrEmployeeChange } from '../../models/index';
import { Router } from '@angular/router';
import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';

@Component({
  selector: 'app-hr-employee-change',
  templateUrl: './hr-employee-change.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./hr-employee-change.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class HrEmployeeChangeComponent implements OnInit {

  employeesChangeDataRows: HrEmployeeChange[];
  filteredEmployeesChangeDataRows: HrEmployeeChange[]; // test purpose

  isLoading = true;

  selectedBeginningEffectiveDate: NgbDateStruct;

  selectedEndEffectiveDate: NgbDateStruct;

  selectedUse: DataDriven;

  uses: DataDriven[];

  reportGeneratedDate: any;

  disableViewReportButton = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initUses();
    this.selectedUse = this.uses.find(s => s.ID === '-1');
    const today = new Date();
    this.selectedBeginningEffectiveDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.selectedEndEffectiveDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    setTimeout(() => {
      this.initEmployeeChangeDataRow();
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  selectUse(use: DataDriven) {
    this.selectedUse = use;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = false;
  }

  /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {
    if (this.selectedUse.ID !== '-1') {
      this.filteredEmployeesChangeDataRows = this.employeesChangeDataRows
        .filter(c => c.use === this.selectedUse.ID && ((this.compareDates(c.effectiveDate, this.selectedBeginningEffectiveDate) == 1
          && this.compareDates(c.effectiveDate, this.selectedEndEffectiveDate) == -1) ||
          this.compareDates(c.effectiveDate, this.selectedBeginningEffectiveDate) == 0 ||
          this.compareDates(c.effectiveDate, this.selectedEndEffectiveDate) == 0)
        );
    } else {
      this.filteredEmployeesChangeDataRows = this.employeesChangeDataRows
        .filter(c => ((this.compareDates(c.effectiveDate, this.selectedBeginningEffectiveDate) == 1
          && this.compareDates(c.effectiveDate, this.selectedEndEffectiveDate) == -1) ||
          this.compareDates(c.effectiveDate, this.selectedBeginningEffectiveDate) == 0 ||
          this.compareDates(c.effectiveDate, this.selectedEndEffectiveDate) == 0));
    }

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

  /**
   * init use data driven
   */
  initUses() {
    this.uses = [{
      ID: '-1',
      Text: 'All'
    }, {
      ID: '0',
      Text: 'Normal'
    }, {
      ID: '1',
      Text: 'Average'
    }];
  }

  initEmployeeChangeDataRow() {
    this.employeesChangeDataRows = [{
      id: 'A04754',
      name: 'APSEY LOREN',
      lastHireDate: new Date(),
      changeType: 'USD',
      effectiveDate: new Date(),
      entryDate: new Date(),
      valueAfter: 1,
      valueBefore: 2,
      use: '0'
    }, {
      id: 'W04582',
      name: 'ASDF FRANK A',
      lastHireDate: new Date(),
      changeType: 'USD',
      effectiveDate: new Date(),
      entryDate: new Date(),
      valueAfter: 1,
      valueBefore: 2,
      use: '1'
    }, {
      id: 'Z04729',
      name: 'BARNES ELSA',
      lastHireDate: new Date(),
      changeType: 'USD',
      effectiveDate: new Date(),
      entryDate: new Date(),
      valueAfter: 1,
      valueBefore: 2,
      use: '1'
    }, {
      id: 'Y04584',
      name: 'BLUE TRUE A',
      lastHireDate: new Date(),
      changeType: 'USD',
      effectiveDate: new Date(),
      entryDate: new Date(),
      valueAfter: 1,
      valueBefore: 2,
      use: '1'
    }, {
      id: 'F04687',
      name: 'BRIAN JONES',
      lastHireDate: new Date(),
      changeType: 'USD',
      effectiveDate: new Date(),
      entryDate: new Date(),
      valueAfter: 1,
      valueBefore: 2,
      use: '0'
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
    this.router.navigate(['/client/reports/']);
  }
}
