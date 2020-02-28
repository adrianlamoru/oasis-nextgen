import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService, ReportsW2AddressChangeService } from '../../services';
import { ReportsW2AddressChange } from '../../models';

@Component({
  selector: 'app-reports-hr-w2-address-change',
  templateUrl: './reports-hr-w2-address-change.component.html',
  styleUrls: ['./reports-hr-w2-address-change.component.scss']
})
export class ReportsHrW2AddressChangeComponent implements OnInit {

  reportsW2AddressChangeReportData: ReportsW2AddressChange[];

  reportGeneratedDate: string;
  isLoading = true;
  dropdownOptions: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService,
    private reportsW2AddressChangeService: ReportsW2AddressChangeService
  ) { }

  ngOnInit() {
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.initW2AddressData();
      this.viewReport();
      this.isLoading = false;
    }, 1000);
  }

  initW2AddressData() {

  }

  viewReport() {

    this.isLoading = true;

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.reportsW2AddressChangeService.getHRW2AddressChangeData()
    .subscribe(reportsW2AddressChangeReportData => {
      this.reportsW2AddressChangeReportData = reportsW2AddressChangeReportData;
    });
  }

  goBack() {
    this.router.navigate(['/client/reports/']);
}

}
