import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-reports-payroll-garnishments',
  templateUrl: './reports-payroll-garnishments.component.html',
  styleUrls: ['./reports-payroll-garnishments.component.scss']
})
export class ReportsPayrollGarnishmentsComponent implements OnInit {

  docketsDD: any[];

  selectedDocket: string;

  disableViewReportButton: boolean;
  displayReport: boolean;
  isLoading: boolean;
  reportGeneratedDate: string;

  docketInformationData: any[];
  filteredDocketInformationData: any[];
  historyData: any[];
  filteredHistoryData: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.displayReport = false;
    this.disableViewReportButton = true;

    this.initDropDownsData();

    setTimeout(() => {
      this.initGarnishmentsDocketInfoData();
      this.initGarnishmentsHistoryData();
    }, 1000);
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
      this.displayReport = false;

      this.viewReport();
      this.isLoading = false;
      this.displayReport = true;
    }, 3000);
  }

  viewReport() {
    this.isLoading = true;
    this.displayReport = false;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.filteredDocketInformationData = this.docketInformationData;

    this.filteredHistoryData = this.historyData;

    this.disableViewReportButton = true;

  }

  initDropDownsData() {
    this.docketsDD = [
      {
        ID: 1,
        Text: 'Aristile, Saint (W09641-1)'
      },
      {
        ID: 2,
        Text: 'Bean, Matthew (W09642-1)'
      },
      {
        ID: 3,
        Text: 'Bravo, Jonathan (W09643-1)'
      },
      {
        ID: 4,
        Text: 'Classen, Line (W09644-1)'
      },
      {
        ID: 1,
        Text: 'De, John (W09645-1)'
      },
      {
        ID: 1,
        Text: 'Coval, Saint (W09646-1)'
      }
    ];

  }

  initGarnishmentsDocketInfoData() {
    this.docketInformationData = [
      {
        fieldName: 'Employee Docket Number',
        value: 'W09641-1'
      }, {
        fieldName: 'Receipt Date',
        value: '03/01/2010'
      }, {
        fieldName: 'Issuing Authority',
        value: 'Internal Revenue Service'
      }, {
        fieldName: 'Category',
        value: 'I'
      }, {
        fieldName: 'Garnishment Limit',
        value: '8188.00'
      }, {
        fieldName: 'Flat Amount',
        value: '305.77'
      }, {
        fieldName: 'Start Date',
        value: ''
      }, {
        fieldName: 'Stop Date',
        value: '04/01/2011'
      }, {
        fieldName: 'Pay Period Limit',
        value: ''
      }, {
        fieldName: 'Payee ID',
        value: 'PA57'
      }, {
        fieldName: 'Deduction Code',
        value: 'IRSL'
      }, {
        fieldName: 'Garnishment Fee',
        value: '2.00'
      }, {
        fieldName: 'Maximum Garnishment %',
        value: ''
      }, {
        fieldName: 'Maximum Basis',
        value: 'S'
      }, {
        fieldName: 'Supress Pay Types',
        value: ''
      }, {
        fieldName: 'Annotation',
        value: '(w) Tax Year 1998; Tax Payer Sa'
      }, {
        fieldName: 'Annotation',
        value: ''
      }, {
        fieldName: 'Override Amount',
        value: '10.05'
      }, {
        fieldName: 'Override Start Date',
        value: ''
      }, {
        fieldName: 'Override Stop Date',
        value: ''
      }
    ];
  }

  initGarnishmentsHistoryData() {
    this.historyData = [
      {
        voucherNumber: '012332',
        voucherDate: '10/10/2018',
        voucherDue: '888.11',
        payeeId: 'PA123',
        paidOn: '10/15/2018',
        paidCheck: 'K124321',
        checkAmount: '888.11'
      }, {
        voucherNumber: '98754',
        voucherDate: '10/15/2018',
        voucherDue: '801.65',
        payeeId: 'PA123',
        paidOn: '10/24/2018',
        paidCheck: 'K234562',
        checkAmount: '801.65'
      }, {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '122.71',
        payeeId: 'PA123',
        paidOn: '11/31/2018',
        paidCheck: 'K75214',
        checkAmount: '122.71'
      },  {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '122.71',
        payeeId: 'PA123',
        paidOn: '11/31/2018',
        paidCheck: 'K45631',
        checkAmount: '122.71'
      },  {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '122.71',
        payeeId: 'PA123',
        paidOn: '11/31/2018',
        paidCheck: 'K45632',
        checkAmount: '122.71'
      }, {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '130.64',
        payeeId: 'PA123',
        paidOn: '11/31/2018',
        paidCheck: 'K45633',
        checkAmount: '130.64'
      }, {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '113.71',
        payeeId: 'PA125',
        paidOn: '11/31/2018',
        paidCheck: 'K45634',
        checkAmount: '113.71'
      }, {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '130.64',
        payeeId: 'PA123',
        paidOn: '11/31/2018',
        paidCheck: 'K45633',
        checkAmount: '130.64'
      }, {
        voucherNumber: '54456',
        voucherDate: '10/30/2018',
        voucherDue: '113.71',
        payeeId: 'PA125',
        paidOn: '11/31/2018',
        paidCheck: 'K45634',
        checkAmount: '113.71'
      }
    ];
  }

  onSelectionDocket(item) {
    this.selectedDocket = item.Text;
    this.enableViewReportButton();
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}
