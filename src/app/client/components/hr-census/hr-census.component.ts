import { Component, OnInit } from '@angular/core';
import { DataDriven, HrCensus } from '../../models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-census',
  templateUrl: './hr-census.component.html',
  styleUrls: ['./hr-census.component.scss']
})
export class HrCensusComponent implements OnInit {

  censusDataRows: HrCensus[];
  filteredCensusDataRows: HrCensus[]; // test purpose
  selectedStatus: DataDriven;

  isLoading = true;

  status: DataDriven[];

  reportGeneratedDate: any;

  disableViewReportButton = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initStatus();
    this.selectedStatus = this.status.find(s => s.ID === '-1');

    setTimeout(() => {
      this.initHrCensusDataRow();
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  selectStatus(month: DataDriven) {
    this.disableViewReportButton = false;

    // Enable view report button when there is a change in dropdown
    this.selectedStatus = month;
  }

  /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {
    if (this.selectedStatus.ID !== '-1') {
      this.filteredCensusDataRows = this.censusDataRows.filter(c => c.status === this.selectedStatus.ID);
    } else {
      this.filteredCensusDataRows = this.censusDataRows;
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

  /**
   * init status data driven
   */
  initStatus() {
    this.status = [{
      ID: '-1',
      Text: 'All'
    }, {
      ID: '0',
      Text: 'Active'
    }, {
      ID: '1',
      Text: 'Inactive'
    }];
  }

  initHrCensusDataRow() {
    this.censusDataRows = [{
      id: 'A04754',
      name: 'APSEY LOREN',
      ssn: '589-36-9241',
      birthday: new Date(),
      gender: 'M',
      maritalStatus: 'S',
      state: 'FL',
      lastHire: new Date(),
      payRate: 5769.23,
      payMethod: 'S',
      status: '0'
    }, {
      id: 'W04582',
      name: 'ASDF FRANK A',
      ssn: '998-35-6525',
      birthday: new Date(),
      gender: 'M',
      maritalStatus: 'S',
      state: 'FL',
      lastHire: new Date(),
      payRate: 46000,
      payMethod: 'H',
      status: '0'
    }, {
      id: 'Z04729',
      name: 'BARNES ELSA',
      ssn: '124-88-8888',
      birthday: new Date(),
      gender: 'M',
      maritalStatus: 'M',
      state: 'FL',
      lastHire: new Date(),
      payRate: 8.5,
      payMethod: 'H',
      status: '1'
    }, {
      id: 'Y04584',
      name: 'BLUE TRUE A',
      ssn: '222--87-3145',
      birthday: new Date(),
      gender: 'F',
      maritalStatus: 'M',
      state: 'FL',
      lastHire: new Date(),
      payRate: 5.15,
      payMethod: 'H',
      status: '1'
    }, {
      id: 'F04687',
      name: 'BRIAN JONES',
      ssn: '332-44-1666',
      birthday: new Date(),
      gender: 'M',
      maritalStatus: 'M',
      state: 'FL',
      lastHire: new Date(),
      payRate: 29.00,
      payMethod: 'H',
      status: '1'
    }];
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}
