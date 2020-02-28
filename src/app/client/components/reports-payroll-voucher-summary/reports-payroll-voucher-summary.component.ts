import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService, ReportsPayrollVoucherDetailService, ReportsPayrollVoucherSummaryService } from '../../services';
import { PayrollVoucherDetail } from '../../models';

@Component({
  selector: 'app-reports-payroll-voucher-summary',
  templateUrl: './reports-payroll-voucher-summary.component.html',
  styleUrls: ['./reports-payroll-voucher-summary.component.scss']
})
export class ReportsPayrollVoucherSummaryComponent implements OnInit {

  @Input() pageSource?: string;
  @Input() employeeId?: string;

  reportsPayrollVoucherSummaryReportData: PayrollVoucherDetail[];
  filteredPayrollVoucherSummaryReportData: PayrollVoucherDetail[];

  reportGeneratedDate: string;
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  disableViewReportButton: boolean;
  dropdownOptions: any[];
  PayrollVoucherDetail: PayrollVoucherDetail[];
  isLoading = true;

  constructor(private router: Router,
              private reportsService: ReportsService,
              private reportsPayrollVoucherSummaryService: ReportsPayrollVoucherSummaryService) { }

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

    if (this.pageSource !== 'employeeReports') {
      this.filteredPayrollVoucherSummaryReportData = this.reportsPayrollVoucherSummaryService.getVoucherSummary();
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.filteredPayrollVoucherSummaryReportData = this.reportsPayrollVoucherSummaryService.getEmployeeVoucherSummary(this.employeeId);
    }

    // this.reportsPayrollVoucherSummaryService.getVoucherSummary()
    // .subscribe(reportsPayrollVoucherSummaryReportData => {
    //     this.filteredPayrollVoucherSummaryReportData = reportsPayrollVoucherSummaryReportData;
    // });

    // generate timestamp of report
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
    this.disableViewReportButton = false;
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

  selectedDownloadOption(item) {}
}
