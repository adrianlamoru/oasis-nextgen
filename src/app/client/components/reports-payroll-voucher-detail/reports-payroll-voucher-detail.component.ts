import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriven, PayrollVoucherDetail } from '../../models';
import { ReportsPayrollVoucherDetailService, ReportsService } from '../../services';

@Component({
  selector: 'app-reports-payroll-voucher-detail',
  templateUrl: './reports-payroll-voucher-detail.component.html',
  styleUrls: ['./reports-payroll-voucher-detail.component.scss']
})
export class ReportsPayrollVoucherDetailComponent implements OnInit {

  reportsPayrollVoucherDetailReportData: PayrollVoucherDetail;
  filteredPayrollVoucherDetailReportData: PayrollVoucherDetail[];

  batchNumber: DataDriven[];
  selectedBatchNumber: DataDriven;

  simpleYears: number[];
  selectedYear: any;

  byYearValue: boolean;
  byBatchValue: boolean;
  dropdownOptions: any[];
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  isLoading = true;

  constructor(
    private router: Router,
    private reportsPayrollVoucherDetailService: ReportsPayrollVoucherDetailService,
    private reportsService: ReportsService,
  ) { }

  ngOnInit() {

    this.byYearValue = true;
    this.byBatchValue = true;

    const today = new Date();
    this.disableViewReportButton = false;

    this.getYears();
    this.initBatchNumbers();

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);

  }

  // Get simpleYears array
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

  }

  viewReport() {

    this.isLoading = true;

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.reportsPayrollVoucherDetailService.getVoucherDetail()
    .subscribe(reportsPayrollVoucherDetailReportData => {
        this.filteredPayrollVoucherDetailReportData = reportsPayrollVoucherDetailReportData;


      this.filteredPayrollVoucherDetailReportData = this.filteredPayrollVoucherDetailReportData.
      filter(e => this.selectedBatchNumber.ID === e.batchNo)

      this.isLoading = false;

    });

    this.disableViewReportButton = true;

  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  calculateSelectedRow(options) {
    if (options.name === 'TotalsFooterEmpName') {
        if (options.summaryProcess === 'start') {
            options.totalValue = 0;
        } else if (options.summaryProcess === 'calculate') {
                options.totalValue = options.value.empName;
        }
    }

    if (options.name === 'TotalsFooterEmpId') {
      if (options.summaryProcess === 'start') {
          options.totalValue = 0;
      } else if (options.summaryProcess === 'calculate') {
              options.totalValue = options.value.empId;
      }
    }
  }

  print() {
    let printContents, popupWin;
    printContents = document.getElementById('contentToRender').outerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        ${this.getHeadHtml(document)}
        <body onload="window.print()">
          <div class="content">
            ${printContents}
          <div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }

  getHeadHtml = (document: Document): string => {
    const head: string[] = [];

    const styleElements = document.getElementsByTagName('head');
    for (let idx = 0; idx < styleElements.length; idx++) {
      head.push(styleElements[idx].outerHTML);
    }

    return head.join('\r\n');
  }

  selectedDownloadOption(item) {}

}
