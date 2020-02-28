import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriven } from '../../models';
import { ReportsService } from '../../services';
import { ReportsGrossNetLastname } from '../../models/reports-gross-net-lastname.interface';

@Component({
  selector: 'app-reports-gross-net-lastname',
  templateUrl: './reports-gross-net-lastname.component.html',
  styleUrls: ['./reports-gross-net-lastname.component.scss']
})
export class ReportsGrossNetLastnameComponent implements OnInit {

  reportsGrossNetLastnameReport: any[];
  filteredGrossNetLastnameReport: any[];
  grandTotalsRow = {
    gtGrossPay: 0,
    gtTotalExpenses: 0,
    gtGrossEarnings: 0,
    gtTotalDeductions: 0,
    gtTotalTaxes: 0,
    gtTotalNetPay: 0
  };

  isLoading = true;
  reportGeneratedDate: any;
  simpleYears: number[];
  selectedYearDisplay = 2018;
  selectedYear: number;
  selectedBatch: DataDriven;
  dropdownOptions: any[];
  disableViewReportButton = true;
  batch: DataDriven[];

  constructor(private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {
    this.getYears();
    this.initBatch();
    this.selectedBatch = this.batch.find(s => s.ID === '-1');

    setTimeout(() => {
      this.initBatchDataRow();
      this.filterDataRow();

     this.isLoading = false;
    }, 1000);
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  filterDataRow() {

    this.filteredGrossNetLastnameReport = this.reportsGrossNetLastnameReport.filter(c => c.batch === this.selectedBatch.ID);
    this.selectedYear = this.selectedYearDisplay;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
    // this.calculateGrandTotals();
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

     this.isLoading = false;
    }, 1000);
  }

  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 3;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionChanged(year) {
    this.selectedYearDisplay = year;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = false;
  }

  selectBatch(item: DataDriven) {
    this.selectedBatch = item;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = false;
  }

  calculateGrandTotals(options) {
    // this.grandTotalsRow = {
    //   gtGrossPay: 0,
    //   gtTotalExpenses: 0,
    //   gtGrossEarnings: 0,
    //   gtTotalDeductions: 0,
    //   gtTotalTaxes: 0,
    //   gtTotalNetPay: 0
    // };
    // this.reportsGrossNetLastnameReport.forEach(item => {
    //   if (item.iD === 'Totals') {
    //     const temp  = Number(item.grossEarning);
    //     this.grandTotalsRow.gtGrossPay = 1150;
    //   }
    // });

    console.log(options);
    if (options.name === 'SelectedRowsSummary') {
        if (options.summaryProcess === 'start') {
            options.totalValue = 0;
        } else if (options.summaryProcess === 'calculate') {
            // if (options.component.isRowSelected(options.value.ID)) {
              console.log(typeof(options.value));
              if (typeof(options.value) === 'number') {
                options.totalValue = options.totalValue + Number(options.value);
              }
            // }
        }
    }
  }

  initBatch() {
    this.batch = [{
      ID: '-1',
      Text: '201852 09/13/2018 Test PTO'
    }, {
      ID: '0',
      Text: '201850 03/30/2018 BWMGR'
    }, {
      ID: '1',
      Text: '201840 03/16/2018 Biweekly'
    }, {
      ID: '2',
      Text: '201825 02/06/2018 Retro Corrections'
    }, {
      ID: '3',
      Text: '201817 01/22/2018 Retro Payments'
    }, {
      ID: '4',
      Text: '201816 01/22/2018 Manager Bonuses'
    }];
  }

  initBatchDataRow() {
    this.reportsGrossNetLastnameReport = [{
      iD: 'G85782',
      name: 'ACOSTA ANTON V',
      voucher: '004733',
      totalGrossPay: '',
      description: 'Personal',
      totalExpenses: '',
      grossEarning: '',
      units: 24.00,
      totalDeductions: '',
      unitRate: 14.600,
      totalTaxes: '',
      amount: 350.40,
      totalNetPay: '',
      batch: '-1'
    }, {
      iD: '',
      name: '',
      voucher: '004733',
      totalGrossPay: '',
      description: 'Reg Pay',
      totalExpenses: '',
      grossEarning: '',
      units: 56,
      totalDeductions: '',
      unitRate: 14.6,
      totalTaxes: '',
      amount: 817.60,
      totalNetPay: '',
      batch: '-1'
    }, {
      iD: '',
      name: '',
      voucher: '004733',
      totalGrossPay: '',
      description: 'Reg Pay',
      totalExpenses: '',
      grossEarning: '',
      units: 56,
      totalDeductions: '',
      unitRate: 14.6,
      totalTaxes: '',
      amount: 817.60,
      totalNetPay: '',
      batch: '-1'
    }, {
      iD: 'Totals',
      name: '',
      voucher: '',
      totalGrossPay: 1168.00,
      description: '',
      totalExpenses: 102.0,
      grossEarning: 1168.00,
      units: '',
      totalDeductions: 0.00,
      unitRate: '',
      totalTaxes: 166.81,
      amount: '',
      totalNetPay: 1001.19,
      batch: '-1'
    }, {
      iD: 'A04754',
      name: 'APSEY LOREN',
      voucher: '004733',
      totalGrossPay: '',
      description: 'Reg Pay',
      totalExpenses: '',
      grossEarning: '',
      units: 40,
      totalDeductions: '',
      unitRate: 144.23,
      totalTaxes: '',
      amount: 5769.23,
      totalNetPay: '',
      batch: '0'
    }, {
      iD: '',
      name: '',
      voucher: '004733',
      totalGrossPay: '',
      description: 'Federal Income	',
      totalExpenses: '',
      grossEarning: '' ,
      units: 1,
      totalDeductions: '',
      unitRate: -1531.57,
      totalTaxes: '',
      amount: -1531.57,
      totalNetPay: '',
      batch: '0'
    }, {
      iD: '',
      name: '',
      voucher: '004733',
      totalGrossPay: '',
      description: 'Fica-Medicare	',
      totalExpenses: '',
      grossEarning: '',
      units: 1,
      totalDeductions: '',
      unitRate: -81.57,
      totalTaxes: '',
      amount: -81.57,
      totalNetPay: '',
      batch: '0'
    }, {
      iD: 'Totals',
      name: '',
      voucher: '',
      totalGrossPay: 5769.23,
      description: '',
      totalExpenses: 123.56,
      grossEarning: 5769.23,
      units: '',
      totalDeductions: 125.00,
      unitRate: '',
      totalTaxes: 1963.35,
      amount: '',
      totalNetPay: 3680.88,
      batch: '0'
    }, {
      iD: 'Z04729',
      name: 'BARNE S ELSA',
      voucher: '004735',
      totalGrossPay: '',
      description: 'Reg Pay',
      totalExpenses: '',
      grossEarning: '',
      units: 40,
      totalDeductions: '',
      unitRate: 8.57,
      totalTaxes: '',
      amount: 340.00,
      totalNetPay: '',
      batch: '0'
    }, {
      iD: '',
      name: '',
      voucher: '004735',
      totalGrossPay: '',
      description: 'Federal Income',
      totalExpenses: '',
      grossEarning: '',
      units: 1,
      totalDeductions: '',
      unitRate: -9.77,
      totalTaxes: '',
      amount: -9.77,
      totalNetPay: '',
      batch: '0'
    }, {
      iD: 'Totals',
      name: '',
      voucher: '',
      totalGrossPay: 340.00,
      description: '',
      totalExpenses: 0.00,
      grossEarning: 340.00,
      units: '',
      totalDeductions: 0.00,
      unitRate: '',
      totalTaxes: 35.78,
      amount: '',
      totalNetPay: 304.22,
      batch: '0'
    }];
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {

  }

  print() {
   
    let printContents, popupWin;
    printContents = document.getElementById('contentToRender').outerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>    <script src="dist/styles.bundle.js"></script>

          <style>
          //........Customized style.......
          .header {
            font-weight: bold;
          }

          .content {
            table {
              border: 1px solid black;
            }
          }
          </style>

        </head>
        <body onload="window.print()">
          <div class="content">
            ${printContents}
          <div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }
}
