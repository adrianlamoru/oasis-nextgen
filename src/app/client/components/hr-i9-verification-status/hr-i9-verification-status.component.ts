import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrI9VerificationStatus, DataDriven } from '../../models';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hr-i9-verification-status',
  templateUrl: './hr-i9-verification-status.component.html',
  styleUrls: ['./hr-i9-verification-status.component.scss']
})
export class HrI9VerificationStatusComponent implements OnInit {

  departmentCodes: DataDriven[];
  disableViewReportButton: boolean;
  filteredI9DataRows: HrI9VerificationStatus[];
  i9DataRows: HrI9VerificationStatus[];
  locationCodes: DataDriven[];
  renewalDateThrough: NgbDateStruct;
  reportGeneratedDate: string;
  selectedDept: DataDriven;
  selectedLoc: DataDriven;

  isLoading = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.disableViewReportButton = false;
    this.initLocations();
    this.initDepartments();

    if (this.departmentCodes.length > 0) {
      this.selectedDept = this.departmentCodes[0];
    }
    if (this.locationCodes.length > 0) {
      this.selectedLoc = this.locationCodes[0];
    }

    const today = new Date();
    this.renewalDateThrough = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    setTimeout(() => {
      this.initI9Data();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  selectLocation(locationCode: DataDriven) {
    this.selectedLoc = locationCode;
    this.disableViewReportButton = false;
  }

  selectDepartment(departmentCode: DataDriven) {
    this.selectedDept = departmentCode;
    this.disableViewReportButton = false;
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  viewReport() {
    this.filteredI9DataRows = this.i9DataRows
      .filter(e => (this.selectedLoc.ID === 'LOC.ALL' || e.location === this.selectedLoc.ID) &&
        (this.selectedDept.ID === 'DEP.ALL' || e.department === this.selectedDept.ID) &&
        this.compareDates(e.renewDate, this.renewalDateThrough) <= 0
      );

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
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

  initDepartments() {
    this.departmentCodes = [{
      ID: 'DEP.ALL',
      Text: 'ALL DEPARTMENTS'
    }, {
      ID: '1001',
      Text: '1001 - GENERAL EDUCATION'
    }, {
      ID: '1044',
      Text: '1044 - GRANTS'
    }, {
      ID: '1049',
      Text: '1049 - ADMIN'
    }, {
      ID: '1059',
      Text: '1059 - ATHLETICS'
    }];
  }

  initLocations() {
    this.locationCodes = [{
      ID: 'LOC.ALL',
      Text: 'ALL LOCATIONS'
    }, {
      ID: '230',
      Text: '230 - PEMBROKE PINES'
    }, {
      ID: '340',
      Text: '340 - CLEARWATER'
    }, {
      ID: '900',
      Text: '900 - OFFICE OF THE CHANCELLOR'
    }];
  }

  initI9Data() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tenAgo = new Date();
    tenAgo.setDate(today.getDate() - 10);
    const twentyAgo = new Date();
    twentyAgo.setDate(today.getDate() - 20);
    const hundredAgo = new Date();
    hundredAgo.setDate(today.getDate() - 100);
    const twoHundredAgo = new Date();
    twoHundredAgo.setDate(today.getDate() - 200);

    this.i9DataRows = [{
      location: '230',
      department: '1001',
      employeeName: 'GRAVES TOBIAS',
      ssn: '###-##-0294',
      lastHireDate: twentyAgo,
      renewDate: today,
      i9Form: 'Y',
      alienRegNo: 'A011254374'
    },
    {
      location: '900',
      department: '1059',
      employeeName: 'GUY SAMANTHA',
      ssn: '###-##-6351',
      lastHireDate: hundredAgo,
      renewDate: tenAgo,
      i9Form: 'Y',
      alienRegNo: '648541003'
    },
    {
      location: '900',
      department: '1059',
      employeeName: 'LI XUN',
      ssn: '###-##-0770',
      lastHireDate: twoHundredAgo,
      renewDate: twentyAgo,
      i9Form: 'Y',
      alienRegNo: ''
    },
    {
      location: '340',
      department: '1049',
      employeeName: 'PINTO ANA',
      ssn: '###-##-9728',
      lastHireDate: tenAgo,
      renewDate: today,
      i9Form: 'Y',
      alienRegNo: 'A649553714'
    },
    {
      location: '340',
      department: '1044',
      employeeName: 'PRINCE JEFFREY',
      ssn: '###-##-7998',
      lastHireDate: hundredAgo,
      renewDate: twentyAgo,
      i9Form: 'Y',
      alienRegNo: ''
    }];
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }
}
