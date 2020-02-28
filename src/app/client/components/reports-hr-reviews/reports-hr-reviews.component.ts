import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-reports-hr-reviews',
  templateUrl: './reports-hr-reviews.component.html',
  styleUrls: ['./reports-hr-reviews.component.scss']
})
export class ReportsHrReviewsComponent implements OnInit {

  monthsDD: any[];
  yearsDD: any[];
  employeeTypesDD: any[];
  divisionsDD: any[];
  locationsDD: any[];
  departmentsDD: any[];
  typeOfReviewsDD: any[];
  openReviewsDD: any[];

  selectedMonth: string;
  selectedYear: string;
  selectedEmployeeType: string;
  selectedDivision: string;
  selectedLocation: string;
  selectedDepartment: string;
  selectedTypeOfReview: string;
  selectedOpenReview: string;
  annualPayRangeMinValue: number;
  annualPayRangeMaxValue: number;
  validateAnnualPayRangeValues: boolean;

  disableViewReportButton: boolean;
  dropdownOptions: any[];
  displayReport: boolean;
  isLoading: boolean;
  reportGeneratedDate: string;

  filteredReviewsDataRows: any[];
  reviewsDataRows: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.displayReport = false;
    this.isLoading = true;
    this.dropdownOptions = this.reportsService.getDownloadOptions();
    this.disableViewReportButton = true;
    this.validateAnnualPayRangeValues = true;

    this.initDropDownsData();
    this.annualPayRangeMinValue = 0;
    this.annualPayRangeMaxValue = 0;

    setTimeout(() => {
      this.initReviewsData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  enableViewReportButton() {
    if ((this.selectedMonth === '' || this.selectedMonth === undefined) ||
        (this.selectedYear === '' || this.selectedYear === undefined) ||
        (this.selectedEmployeeType === '' || this.selectedEmployeeType === undefined) ||
        (this.selectedDivision === '' || this.selectedDivision === undefined) ||
        (this.selectedDepartment === '' || this.selectedDepartment === undefined) ||
        (this.selectedTypeOfReview === '' || this.selectedTypeOfReview === undefined) ||
        (this.selectedOpenReview === '' || this.selectedOpenReview === undefined) ||
        (this.validateAnnualPayRangeValues !== true)
        ) {
      this.disableViewReportButton = true;
    } else {
      this.disableViewReportButton = false;
    }
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
      this.displayReport = true;
    }, 3000);
  }

  viewReport() {
    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.filteredReviewsDataRows = this.reviewsDataRows;

    this.disableViewReportButton = true;

  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  initDropDownsData() {
    this.monthsDD = [
      {
        ID: 0,
        Text: 'All Months'
      }, {
        ID: 1,
        Text: 'January'
      }, {
        ID: 2,
        Text: 'February'
      }, {
        ID: 3,
        Text: 'March'
      }, {
        ID: 4,
        Text: 'April'
      }, {
        ID: 5,
        Text: 'May'
      }, {
        ID: 6,
        Text: 'June'
      }, {
        ID: 7,
        Text: 'July'
      }, {
        ID: 8,
        Text: 'August'
      }, {
        ID: 9,
        Text: 'September'
      }, {
        ID: 10,
        Text: 'October'
      }, {
        ID: 11,
        Text: 'November'
      }, {
        ID: 12,
        Text: 'December'
      }
    ];

    // Years Dropdown
    const currentYear = new Date().getFullYear();
    this.yearsDD = [];
    for (let i = 0; i < 6; i++) {
      const item = {
        ID: i,
        Text: currentYear - i
      };
      this.yearsDD.push(item);
   }

   // Employee Type Dropdown

    this.employeeTypesDD = [
      {
        ID: 0,
        Text: 'All'
      }, {
        ID: 1,
        Text: 'Full-Time'
      }, {
        ID: 2,
        Text: 'Part-Time'
      }
    ];

    // Divisions Dropdown
    this.divisionsDD = [
      {
        ID: 0,
        Text: 'All Divisions'
      }, {
        ID: 1,
        Text: 'Bi-Weekly Web'
      }, {
        ID: 2,
        Text: 'Bi-Weekly Managers'
      }
    ];

    // Locations Dropdown
    this.locationsDD = [
      {
        ID: 0,
        Text: 'All Locations'
      }, {
        ID: 1,
        Text: 'Main'
      }
    ];

    // Departments Dropdown
    this.departmentsDD = [
      {
        ID: 0,
        Text: 'All Departments'
      }, {
        ID: 1,
        Text: 'F & B Service'
      }, {
        ID: 2,
        Text: 'Serv Staff'
      }, {
        ID: 3,
        Text: 'Locker Room'
      }
    ];

    // Type of Reviews Dropdown
    this.typeOfReviewsDD = [
      {
        ID: 1,
        Text: 'Performance'
      }, {
        ID: 2,
        Text: 'Rate'
      }
    ];

    // Open Reviews Dropdown
    this.openReviewsDD = [
      {
        ID: 1,
        Text: 'No'
      }, {
        ID: 2,
        Text: 'Yes'
      }
    ];
  }

  initReviewsData() {
    this.reviewsDataRows = [
      {
        dateDue: '03/02/2019',
        department: 'F & B Service',
        division: 'Bi-Weekly Web',
        location: 'Main',
        employeeType: 'Full-Time',
        typeOfReview: 'Performance',
        openReview: 'No',
        employeeName: 'KEELEY ABRAMO',
        jobTitle: 'Catering A',
        currentPay: '10.5',
        payMethod: 'Hourly',
        supervisor: 'MARIO AGUILAR',
        exempt: '',
        lastChangeAmount: '-8423.00',
        lastChangePercent: '-98.3',
        lastPerfReview: '10/11/2018',
        nextPerfReview: '10/31/2018',
        nextPayReview: '10/10/2018'
      },
      {
        dateDue: '10/02/2019',
        department: 'F & B Service',
        division: 'Bi-Weekly Managers',
        location: 'Main',
        employeeType: 'Full-Time',
        typeOfReview: 'Performance',
        openReview: 'No',
        employeeName: 'DYLAN ABRAHAMS',
        jobTitle: 'Accounting',
        currentPay: '20.5',
        payMethod: 'Hourly',
        supervisor: 'MARIO AGUILAR',
        exempt: '',
        lastChangeAmount: '1385.00',
        lastChangePercent: '49.3',
        lastPerfReview: '10/15/2018',
        nextPerfReview: '10/31/2018',
        nextPayReview: '12/10/2018'
      },
      {
        dateDue: '10/02/2019',
        department: 'Serv Staff',
        division: 'Bi-Weekly Managers',
        location: 'Main',
        employeeType: 'Full-Time',
        typeOfReview: 'Performance',
        openReview: 'No',
        employeeName: 'ANTON ACOSTA',
        jobTitle: 'Cook',
        currentPay: '16.5',
        payMethod: 'Hourly',
        supervisor: 'LUKE RHEAULT',
        exempt: '',
        lastChangeAmount: '1040.00',
        lastChangePercent: '3.4',
        lastPerfReview: '10/15/2018',
        nextPerfReview: '10/31/2018',
        nextPayReview: '12/10/2018'
      }
    ];
  }

  onSelectionMonth(item) {
    this.selectedMonth = item.Text;

    this.enableViewReportButton();
  }

  onSelectionYear(item) {
    this.selectedYear = item.Text;

    this.enableViewReportButton();
  }

  onSelectionEmployeeType(item) {
    this.selectedEmployeeType = item.Text;

    this.enableViewReportButton();
  }

  onSelectionDivision(item) {
    this.selectedDivision = item.Text;

    this.enableViewReportButton();
  }

  onSelectionLocation(item) {
    this.selectedLocation = item.Text;

    this.enableViewReportButton();
  }

  onSelectionDepartment(item) {
    this.selectedDepartment = item.Text;

    this.enableViewReportButton();
  }

  onSelectionTypeOfReview(item) {
    this.selectedTypeOfReview = item.Text;

    this.enableViewReportButton();
  }

  onSelectionOpenReview(item) {
    this.selectedOpenReview = item.Text;

    this.enableViewReportButton();
  }

  modelChangedAnnualPayRangeMinValue(event) {
    if (this.annualPayRangeMinValue !== undefined && this.annualPayRangeMaxValue !== undefined) {
      this.validateAnnualPayRangeValues = this.annualPayRangeMinValue <= this.annualPayRangeMaxValue;
      this.enableViewReportButton();
    } else {
      return true;
    }
  }

  modelChangedAnnualPayRangeMaxValue(event) {
    if (this.annualPayRangeMinValue !== undefined && this.annualPayRangeMaxValue !== undefined) {
      this.validateAnnualPayRangeValues = this.annualPayRangeMinValue <= this.annualPayRangeMaxValue;
      this.enableViewReportButton();
    } else {
      return true;
    }

  }
}
