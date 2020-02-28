import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataDriven, HrUnemploymentWages } from '../../models';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-hr-unemployment-wages',
  templateUrl: './hr-unemployment-wages.component.html',
  styleUrls: ['./hr-unemployment-wages.component.scss']
})
export class HrUnemploymentWagesComponent implements OnInit {

  disableViewReportButton: boolean;
  filteredUnempWagesDataRows: HrUnemploymentWages[];
  reportGeneratedDate: string;
  selectedEndDate: NgbDateStruct;
  selectedTaxCode: DataDriven;
  selectedStartDate: NgbDateStruct;
  stateTaxCodes: DataDriven[];
  unempWagesDataRows: HrUnemploymentWages[];
  dropdownOptions: any[];
  isLoading = true;

  constructor(private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {
    this.disableViewReportButton = true;
    this.initTaxCodes();
    this.initUnempWagesData();
    if (this.stateTaxCodes.length > 0) {
      this.selectedTaxCode = this.stateTaxCodes[0];
    }
    const today = new Date();
    this.selectedStartDate = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    setTimeout(() => {
      this.viewReport();

      this.isLoading = false;
    }, 1000);
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  selectTaxCode(taxCode: DataDriven) {
    this.selectedTaxCode = taxCode;
    this.disableViewReportButton = false;
  }

  initTaxCodes() {
    this.stateTaxCodes = [{
      ID: 'ALL',
      Text: 'ALL STATES'
    }, {
      ID: '02-24',
      Text: 'ALASKA'
    }, {
      ID: '06-24',
      Text: 'COLORADO'
    }, {
      ID: '10-24',
      Text: 'FLORIDA'
    }, {
      ID: '12-24',
      Text: 'LOUISIANA'
    }];
  }

  initUnempWagesData() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tenAgo = new Date();
    tenAgo.setDate(today.getDate() - 10);
    this.unempWagesDataRows = [{
      taxCode: '02-24',
      taxCodeDesc: 'AK SUTA',
      ssn: '987-65-4321',
      employeeID: 'F04687',
      employeeName: 'BRIAN JONES',
      grossWages: '5803.76',
      overLimit: '5803.76',
      sutaWages: '0.00',
      payDate: yesterday,
    }, {
      taxCode: '',
      taxCodeDesc: '',
      ssn: '321-21-4321',
      employeeID: 'R06448',
      employeeName: 'FREEMAN GORDON',
      grossWages: '11136.62',
      overLimit: '11136.62',
      sutaWages: '0.00',
      payDate: yesterday,
    }, {
      taxCode: '06-24',
      taxCodeDesc: 'CO SUTA',
      ssn: '753-55-9510',
      employeeID: 'B34511',
      employeeName: 'PARKER PETER',
      grossWages: '9540.36',
      overLimit: '9540.36',
      sutaWages: '0.00',
      payDate: today,
    }, {
      taxCode: '10-24',
      taxCodeDesc: 'FL SUTA',
      ssn: '001-02-0003',
      employeeID: 'W04582',
      employeeName: 'ASDF FRANK A',
      grossWages: '7201.12',
      overLimit: '7201.12',
      sutaWages: '0.00',
      payDate: tenAgo,
    }, {
      taxCode: '',
      taxCodeDesc: '',
      ssn: '101-22-3003',
      employeeID: 'Z04729',
      employeeName: 'BARNES ELSA',
      grossWages: '1203.56',
      overLimit: '0.00',
      sutaWages: '1203.56',
      payDate: tenAgo,
    }, {
      taxCode: '',
      taxCodeDesc: '',
      ssn: '123-45-6789',
      employeeID: 'Y04584',
      employeeName: 'BLUE TRUE A',
      grossWages: '9829.79',
      overLimit: '9829.79',
      sutaWages: '0.00',
      payDate: tenAgo,
    }];
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  viewReport() {
    this.filteredUnempWagesDataRows = this.unempWagesDataRows
      .filter(s => (this.selectedTaxCode.ID === 'ALL' || s.taxCode === this.selectedTaxCode.ID) &&
        this.compareDates(s.payDate, this.selectedStartDate) >= 0 &&
        this.compareDates(s.payDate, this.selectedEndDate) <= 0
      );
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
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

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

    this.isLoading = false;
    }, 1000);
  }

  selectedDownloadOption(item) {}
}
