import { Component, OnInit } from '@angular/core';
import { ReportsPtoAbsenceSummary } from '../../models/reports-pto-absence-summary';
import { Router } from '@angular/router';
import { DataDriven } from '../../models';
import { ReportsService } from '../../services';
import { ReportsPtoAbsenceSummaryService } from '../../services/reports-pto-absence-summary.service';

@Component({
  selector: 'app-reports-payroll-pto-absence-summary',
  templateUrl: './reports-payroll-pto-absence-summary.component.html',
  styleUrls: ['./reports-payroll-pto-absence-summary.component.scss']
})
export class ReportsPayrollPtoAbsenceSummaryComponent implements OnInit {

  reportsPtoAbsenceSummaryReport: ReportsPtoAbsenceSummary[];
  filteredPtoAbsenceSummaryReport: ReportsPtoAbsenceSummary[];

  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay = 2018;
  reportGeneratedDate: any;
  disableViewReportButton = true;
  selectedStatus: DataDriven;
  status: DataDriven[];
  dropdownOptions: any[];

  isLoading = true;

  constructor(private reportsPtoAbsenceSummaryService: ReportsPtoAbsenceSummaryService,
              private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {
    this.initStatus();
    this.selectedStatus = this.status.find(s => s.ID === '-1');

    this.reportsPtoAbsenceSummaryReport = this.reportsPtoAbsenceSummaryService.getPtoAbsenceSummary();

    setTimeout(() => {
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  selectStatus(item: DataDriven) {
    this.disableViewReportButton = false;

    // Enable view report button when there is a change in dropdown
    this.selectedStatus = item;
  }

  filterDataRow() {
    if (this.selectedStatus.ID !== '-1') {
      this.filteredPtoAbsenceSummaryReport = this.reportsPtoAbsenceSummaryReport.filter(c => c.status === this.selectedStatus.ID);
    } else {
      this.filteredPtoAbsenceSummaryReport = this.reportsPtoAbsenceSummaryReport;
    }

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.disableViewReportButton = true;
  }

  getFilteredData() {
     this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

    this.isLoading = false;
    }, 1000);
  }

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
    }, {
      ID: '2',
      Text: 'On Paid Leave'
    }, {
      ID: '3',
      Text: 'On Unpaid Leave'
    }, {
      ID: '4',
      Text: 'Works Compensation'
    }];
  }

  initPtoAbsenceSummaryRow() {
    this.reportsPtoAbsenceSummaryReport = [];
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {

  }
}

