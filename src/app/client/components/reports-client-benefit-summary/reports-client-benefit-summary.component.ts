import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientBenefitSummary } from '../../models/index';
import { ClientBenefitSummaryReportService } from '../../services';
// import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';

const now = new Date();

@Component({
  selector: 'app-reports-client-benefit-summary',
  templateUrl: './reports-client-benefit-summary.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reports-client-benefit-summary.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class ReportsClientBenefitSummaryComponent implements OnInit {

  effectiveDatePicker: any;
  clientBenefitSummaryReport: ClientBenefitSummary[];
  reportGeneratedDate: any;
  selectedEffectiveDate: NgbDateStruct;

  isLoading = true;

  disableViewReportButton = true;

  nowNgbDate: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  constructor(
    // public i18n: NgbDatepickerI18n,
    private clientBenefitSummaryReportService: ClientBenefitSummaryReportService,
    private router: Router
  ) { }

  ngOnInit() {
    const today = new Date();

    this.selectedEffectiveDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.clientBenefitSummaryReportService.getClientBenefitSummary()
    .subscribe(
      clientBenefitSummaryReport => {
        this.clientBenefitSummaryReport = clientBenefitSummaryReport;
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
