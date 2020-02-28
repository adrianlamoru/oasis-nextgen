import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriven } from '../../models';
import { ReportsService } from '../../services';
import { FileService } from '../../../shared/services';

@Component({
  selector: 'app-reports-payroll-accounting-download',
  templateUrl: './reports-payroll-accounting-download.component.html',
  styleUrls: ['./reports-payroll-accounting-download.component.scss']
})
export class ReportsPayrollAccountingDownloadComponent implements OnInit {

  reportGeneratedDate: string;

  batchNumber: DataDriven[];
  selectedBatchNumber: DataDriven;

  selectedYear: any;
  simpleYears: number[];

  byYearValue: boolean;
  byBatchValue: boolean;

  dropdownOptions: any[];
  disableViewReportButton: boolean;

  constructor(private router: Router,
              private reportsService: ReportsService,
              private fileService: FileService) { }

  ngOnInit() {
    this.byYearValue = true;
    this.byBatchValue = true;

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.getYears();
    this.initBatchNumbers();

    this.dropdownOptions = this.reportsService.getDownloadOptions();
    this.disableViewReportButton = true;
  }

  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 4;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionYearChanged(year) {
    this.selectedYear = year;
    this.byYearValue = false;
  }

  selectBatch(batchNo: DataDriven) {
    this.selectedBatchNumber = batchNo;
    this.byBatchValue = false;
    this.disableViewReportButton = false;
  }

  initBatchNumbers() {

    this.batchNumber = [
      {
        ID: '123462',
        Text: '123462 09/28/2018 10/12/2018 BIWEEKLY'
      },
      {
        ID: '123463',
        Text: '123463 09/28/2018 10/12/2018 BIWEEKLY-MGR'
      },
      {
        ID: '123460',
        Text: '123460 09/13/2018 09/27/2018 BIWEEKLY'
      },
      {
        ID: '123461',
        Text: '123461 09/13/2018 09/27/2018 BIWEEKLY-MGR'
      },
      {
        ID: '123458',
        Text: '123458 08/29/2018 09/12/2018 BIWEEKLY'
      },
      {
        ID: '123459',
        Text: '123459 08/29/2018 09/12/2018 BIWEEKLY-MGR'
      },

      {
        ID: '123456',
        Text: '123456 08/14/2018 08/28/2018 BIWEEKLY'
      },
      {
        ID: '123457',
        Text: '123457 08/14/2018 08/28/2018 BIWEEKLY-MGR'
      }
    ];
    this.disableViewReportButton = false;
  }

  selectedDownloadOption(item) {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.fileService.downloadFileByUrl('/assets/csv/BenefitsPayrollRegister.csv', 'Accounting Download');
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }
}
