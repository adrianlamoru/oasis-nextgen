import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-reports-deduction-code-detail',
  templateUrl: './reports-deduction-code-detail.component.html',
  styleUrls: ['./reports-deduction-code-detail.component.scss']
})
export class ReportsDeductionCodeDetailComponent implements OnInit {

  yearsDD: any[];
  batchTypesDD: any[];
  divisionsDD: any[];
  departmentsDD: any[];
  locationsDD: any[];

  selectedYear: string;
  selectedBatchType: string;
  selectedDivision: string;
  selectedDepartment: string;
  selectedLocation: string;

  reportGeneratedDate: string;
  displayReport: boolean;
  disableViewReportButton: boolean;
  dropdownOptions: any[];
  isLoading: boolean;

  filteredDeductionCodeDetailRows: any[];
  deductionCodeDetailDataRows: any[];

  constructor(private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.displayReport = false;
    this.isLoading = true;
    this.dropdownOptions = this.reportsService.getDownloadOptions();
    this.disableViewReportButton = true;
    this.initDropDownsData();

    setTimeout(() => {
      this.initDeductionCodeDetailsData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  enableViewReportButton() {
    if ((this.selectedYear === '' || this.selectedYear === undefined) ||
        (this.selectedBatchType === '' || this.selectedBatchType === undefined)) {
      this.disableViewReportButton = true;
    } else {
      this.disableViewReportButton = false;
    }
  }


  viewReport() {
    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.filteredDeductionCodeDetailRows = this.deductionCodeDetailDataRows;

    this.disableViewReportButton = true;

  }


  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
      this.displayReport = true;
    }, 1000);
  }

  initDropDownsData() {

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

  //  Batch Type Dropdown
  this.batchTypesDD = [
    {
      ID: 0,
      Text: '2017179 12/22/2017 BWMGR'
    }, {
      ID: 1,
      Text: '2017178 12/22/2017 BIWEEKLY'
    }, {
      ID: 2,
      Text: '2017174 12/15/2017 YEAR END '
    }
  ];

  // Divisions Dropdown
  this.divisionsDD = [
    {
      ID: 0,
      Text: 'ALL'
    }, {
      ID: 1,
      Text: 'BI-WEEKLY-WEB'
    }, {
      ID: 2,
      Text: 'BI-WEEKLY-MANAGERS'
    }
  ];

    // Departments Dropdown
    this.departmentsDD = [
    {
      ID: 0,
      Text: 'ALL'
    }, {
      ID: 1,
      Text: 'F & B SERVICE'
    }, {
      ID: 2,
      Text: 'SERV STAFF'
    }, {
      ID: 3,
      Text: 'LOCKER ROOM'
    }
  ];

  // Locations Dropdown
  this.locationsDD = [
    {
      ID: 0,
      Text: 'ALL'
    }, {
      ID: 1,
      Text: 'MAIN'
    }
  ];

  }

  initDeductionCodeDetailsData() {
    this.deductionCodeDetailDataRows = [
      {
        dedCode: 'ACCIDENT',
        dedDesc: 'ACCIDENT INSURANCE',
        location: 'MAIN',
        division: 'BI-WEEKLY-WEB',
        department: 'F & B SERVICE',
        ssn: '123-456-7890',
        empName: 'ROSS DEBORAH C',
        payDate: '12/24/2015',
        vouNumber: 319631,
        dedAmount: 28.80
      },
      {
        dedCode: 'CO401K',
        dedDesc: 'CLIENT 401(K)',
        location: 'MAIN',
        division: 'BI-WEEKLY-MANAGERS',
        department: 'SERV STAFF',
        ssn: '123-456-7890',
        empName: 'LAMBERT MARSHALL F',
        payDate: '12/31/2015',
        vouNumber: 319637,
        dedAmount: 58.19
      },
      {
        dedCode: 'CO401KC',
        dedDesc: 'CLIENT 401K CATCH-UP',
        location: 'MAIN',
        division: 'BI-WEEKLY-WEB',
        department: 'LOCKER ROOM',
        ssn: '123-456-7890',
        empName: 'CRAIN MICHAEL S',
        payDate: '12/24/2015',
        vouNumber: 319635,
        dedAmount: 0.00
      }
    ];
  }


  onSelectionYear(item) {
    this.selectedYear = item.Text;

    this.enableViewReportButton();
  }

  onSelectionBatchType(item) {
    this.selectedBatchType = item.Text;

    this.enableViewReportButton();
  }

  onSelectionDivision(item) {
    this.selectedDivision = item.Text;

    this.enableViewReportButton();
  }

  onSelectionDepartment(item) {
    this.selectedDepartment = item.Text;

    this.enableViewReportButton();
  }

  onSelectionLocation(item) {
    this.selectedLocation = item.Text;

    this.enableViewReportButton();
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption() {}

}
