import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ReportsService, ReportsPayrollBenefitsBillingService } from '../../services';

@Component({
  selector: 'app-reports-payroll-benefits-billing',
  templateUrl: './reports-payroll-benefits-billing.component.html',
  styleUrls: ['./reports-payroll-benefits-billing.component.scss']
})
export class ReportsPayrollBenefitsBillingComponent implements OnInit {

  benfitsBillingReportData: any[];
  filteredbenfitsBillingReportData: any[];

  reportGeneratedDate: string;

  startDate: NgbDateStruct;
  endDate: NgbDateStruct;

  invalidDateRanges: boolean;

  disableViewReportButton: boolean;
  dropdownOptions: any[];
  isLoading = true;

  constructor(private router: Router,
              private reportsService: ReportsService,
              private reportsPayrollBenefitsBillingService: ReportsPayrollBenefitsBillingService) { }

  ngOnInit() {

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

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);
  }

  viewReport() {
    this.isLoading = true;
    this.filteredbenfitsBillingReportData = this.reportsPayrollBenefitsBillingService.getBenefitsBillingData();

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.disableViewReportButton = true;

    this.isLoading = false;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 1000);
  }

  enableViewReportButton() {
    if ((this.startDate.year === null || this.startDate === undefined) ||
        (this.endDate.year === null || this.endDate === undefined)) {
          this.disableViewReportButton = true;
    } else {
      this.disableViewReportButton = false;
    }
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  validateDateRanges() {
    const dateRangeResult = this.compareNgDates(this.startDate, this.endDate);

    if (dateRangeResult <= 0) {
      this.invalidDateRanges = false;
      this.enableViewReportButton();
    } else {
      this.invalidDateRanges = true;
      this.disableViewReportButton = true;
    }
  }

  compareNgDates(startDate: NgbDateStruct, endDate: NgbDateStruct) {
    if (startDate.year > endDate.year) {
      return 1;
    } else if (startDate.year < endDate.year) {
      return -1;
    } else {
      if (startDate.month > endDate.month) {
        return 1;
      } else if (startDate.month < endDate.month) {
        return -1;
      } else {
        if (startDate.day > endDate.day) {
          return 1;
        } else if (startDate.day < endDate.day) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }

  selectedDownloadOption(item) {}

}
