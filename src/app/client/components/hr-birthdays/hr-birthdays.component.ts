import { Component, OnInit } from '@angular/core';
import { DataDriven, HrBirthday } from '../../models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-birthdays',
  templateUrl: './hr-birthdays.component.html',
  styleUrls: ['./hr-birthdays.component.scss']
})
export class HrBirthdaysComponent implements OnInit {

  birthdaysDataRows: HrBirthday[];
  filteredBirthdaysDataRows: HrBirthday[]; // test purpose

  isLoading = true;

  selectedMonth: DataDriven;

  months: DataDriven[];

  reportGeneratedDate: any;

  disableViewReportButton = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initMonths();
    this.selectedMonth = this.months.find(m => m.ID === new Date().getMonth().toString());

    setTimeout(() => {
      this.initHrBirthdayDataRow();
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  selectMonth(month: DataDriven) {
    this.selectedMonth = month;

     // Enable view report button when there is a change in dropdown
     this.disableViewReportButton = false;
  }

  /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {
    if (this.selectedMonth.ID !== '-1') {
      this.filteredBirthdaysDataRows = this.birthdaysDataRows.filter(b => b.birthday.getMonth().toString() === this.selectedMonth.ID);
    } else {
      this.filteredBirthdaysDataRows = this.birthdaysDataRows;
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
   * init months data driven
   */
  initMonths() {
    this.months = [{
      ID: '-1',
      Text: 'All Months'
    }, {
      ID: '0',
      Text: 'January'
    }, {
      ID: '1',
      Text: 'February'
    }, {
      ID: '2',
      Text: 'March'
    }, {
      ID: '3',
      Text: 'April'
    }, {
      ID: '4',
      Text: 'May'
    }, {
      ID: '5',
      Text: 'June'
    }, {
      ID: '6',
      Text: 'July'
    }, {
      ID: '7',
      Text: 'August'
    }, {
      ID: '8',
      Text: 'September'
    }, {
      ID: '9',
      Text: 'October'
    }, {
      ID: '10',
      Text: 'November'
    }, {
      ID: '11',
      Text: 'December'
    }];
  }

  initHrBirthdayDataRow() {
    this.birthdaysDataRows = [{
      name: 'Name 1',
      address: 'Address 1',
      city: 'city 1',
      state: 'state 1',
      zip: 'zip 1',
      birthday: new Date(2018, 0, 1)
    }, {
      name: 'Name 2',
      address: 'Address 2',
      city: 'city 2',
      state: 'state 2',
      zip: 'zip 2',
      birthday: new Date(2018, 1, 1)
    }, {
      name: 'Name 3',
      address: 'Address 3',
      city: 'city 3',
      state: 'state 3',
      zip: 'zip 3',
      birthday: new Date(2018, 2, 1)
    }, {
      name: 'Name 4',
      address: 'Address 4',
      city: 'city 4',
      state: 'state 4',
      zip: 'zip 4',
      birthday: new Date(2018, 3, 1)
    }, {
      name: 'Name 5',
      address: 'Address 5',
      city: 'city 5',
      state: 'state 5',
      zip: 'zip 5',
      birthday: new Date(2018, 4, 1)
    }, {
      name: 'Name 6',
      address: 'Address 6',
      city: 'city 6',
      state: 'state 6',
      zip: 'zip 6',
      birthday: new Date(2018, 5, 1)
    }, {
      name: 'Name 7',
      address: 'Address 7',
      city: 'city 7',
      state: 'state 7',
      zip: 'zip 7',
      birthday: new Date(2018, 6, 1)
    }, {
      name: 'Name 8',
      address: 'Address 8',
      city: 'city 8',
      state: 'state 8',
      zip: 'zip 8',
      birthday: new Date(2018, 7, 1)
    }, {
      name: 'Name 9',
      address: 'Address 9',
      city: 'city 9',
      state: 'state 9',
      zip: 'zip 9',
      birthday: new Date(2018, 8, 1)
    }, {
      name: 'Name 10',
      address: 'Address 10',
      city: 'city 10',
      state: 'state 10',
      zip: 'zip 10',
      birthday: new Date(2018, 9, 1)
    }, {
      name: 'Name 11',
      address: 'Address 11',
      city: 'city 11',
      state: 'state 11',
      zip: 'zip 11',
      birthday: new Date(2018, 10, 1)
    }, {
      name: 'Name 12',
      address: 'Address 12',
      city: 'city 12',
      state: 'state 12',
      zip: 'zip 12',
      birthday: new Date(2018, 11, 1)
    }];
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}
