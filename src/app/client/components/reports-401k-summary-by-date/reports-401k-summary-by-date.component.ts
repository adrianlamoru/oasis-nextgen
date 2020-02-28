import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ReportsEmployee401kSummary } from '../../models/index';
import { Reports401kSummaryReportByDateService } from '../../services';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';

const now = new Date();

@Component({
  selector: 'app-reports-401k-summary-by-date',
  templateUrl: './reports-401k-summary-by-date.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports-401k-summary-by-date.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class Reports401kSummaryByDateComponent implements OnInit {

  reports401kSummaryByDateReport: ReportsEmployee401kSummary[];
  selectedBeginningDate: NgbDateStruct;

  isLoading = true;

  selectedEndDate: NgbDateStruct;
  reportGeneratedDate: any;
  disableViewReportButton = true;

  constructor(
    private reports401kSummaryReportService: Reports401kSummaryReportByDateService,
    private router: Router,
  ) { }

  ngOnInit() {
    const today = new Date();
    this.selectedBeginningDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.reports401kSummaryReportService.get401kSummary()
    .subscribe(
      reports401kSummaryReport => {
        this.reports401kSummaryByDateReport = reports401kSummaryReport;
        this.isLoading = false;
      }
    );

    this.filterDataRow();
  }

  /**
   * test purpose - simulating service filter accion
   */
  filterDataRow() {

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

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}
