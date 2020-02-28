import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService, ReportsWcBillingHistoryService } from '../../services';
import { WcBillingHistory } from '../../models';

@Component({
  selector: 'app-reports-wc-billing-history',
  templateUrl: './reports-wc-billing-history.component.html',
  styleUrls: ['./reports-wc-billing-history.component.scss']
})
export class ReportsWcBillingHistoryComponent implements OnInit {

  reportGeneratedDate: string;
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  disableViewReportButton: boolean;
  dropdownOptions: any[];
  isLoading = true;

  wcBillingHistoryData: WcBillingHistory[];
  filteredWcBillingHistoryData: WcBillingHistory[];

  constructor(private router: Router,
              private reportsService: ReportsService,
              private reportWcBillingHistoryService: ReportsWcBillingHistoryService) { }

  ngOnInit() {

    this.disableViewReportButton = false;

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

      this.isLoading = false;
    }, 1000);


    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  viewReport() {
    this.isLoading = true;
    this.filteredWcBillingHistoryData = this.reportWcBillingHistoryService.getWcBillingHistory();

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

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {}

}
