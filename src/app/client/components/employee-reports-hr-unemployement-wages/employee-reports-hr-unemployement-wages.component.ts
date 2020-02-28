import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataDriven, HrUnemploymentWages } from '../../models';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-employee-reports-hr-unemployement-wages',
  templateUrl: './employee-reports-hr-unemployement-wages.component.html',
  styleUrls: ['./employee-reports-hr-unemployement-wages.component.scss']
})
export class EmployeeReportsHrUnemployementWagesComponent implements OnInit {

  reportGeneratedDate: string;
  private employeeId: string;
  disableViewReportButton: boolean;

  private employeeIdSubscription: any;

  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  selectedTaxCode: DataDriven;
  stateTaxCodes: DataDriven[];
  dropdownOptions: any[];
  isLoading = true;

  filteredEmployeeUnempWagesDataRows: HrUnemploymentWages[];
  employeeUnempWagesDataRows: HrUnemploymentWages[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private reportsService: ReportsService) { }

  ngOnInit() {

    this.disableViewReportButton = false;
    this.initTaxCodes();
    this.initUnempWagesData();

    if (this.stateTaxCodes.length > 0) {
      this.selectedTaxCode = this.stateTaxCodes[0];
    }

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });

    const today = new Date();
    this.startDate = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    };
    this.endDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    setTimeout(() => {
      this.viewReport();

      // this.isLoading = false;
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
    this.employeeUnempWagesDataRows = [{
      taxCode: '02-24',
      taxCodeDesc: 'AK SUTA',
      ssn: '987-65-4321',
      employeeID: 'A17447',
      employeeName: 'DYLAN ABRAHAMS',
      grossWages: '5803.76',
      overLimit: '5803.76',
      sutaWages: '0.00',
      payDate: yesterday,
    }, {
      taxCode: '02-24',
      taxCodeDesc: 'AK SUTA',
      ssn: '987-65-4321',
      employeeID: 'R98845',
      employeeName: 'KEELEY ABRAMO',
      grossWages: '5803.76',
      overLimit: '5803.76',
      sutaWages: '0.00',
      payDate: yesterday,
    }];
  }

  viewReport() {

    this.isLoading = true;

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.filteredEmployeeUnempWagesDataRows = this.employeeUnempWagesDataRows
      .filter(s => (this.employeeId === s.employeeID) &&
      (this.selectedTaxCode.ID === 'ALL' || s.taxCode === this.selectedTaxCode.ID));

    this.isLoading = false;
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

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}
}
