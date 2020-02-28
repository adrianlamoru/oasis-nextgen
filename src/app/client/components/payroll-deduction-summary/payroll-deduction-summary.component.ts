import { Component, OnInit } from '@angular/core';
import { DataDriven } from '../../models';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { PayrollDeductionSummary } from '../../models/payroll-deduction-summary';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-payroll-deduction-summary',
  templateUrl: './payroll-deduction-summary.component.html',
  styleUrls: ['./payroll-deduction-summary.component.scss']
})
export class PayrollDeductionSummaryComponent implements OnInit {

  deductionCodeData: PayrollDeductionSummary[];
  deductionCodes: DataDriven[];
  disableViewReportButton: boolean;
  endDate: NgbDateStruct;
  filteredDeductionCodeData: PayrollDeductionSummary[];
  reportGeneratedDate: string;
  selectedDed: DataDriven;
  startDate: NgbDateStruct;
  dropdownOptions: any[];

  isLoading = true;

  constructor(private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {
    this.disableViewReportButton = false;
    this.initDeductions();

    if (this.deductionCodes.length > 0) {
      this.selectedDed = this.deductionCodes[0];
    }

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
      this.initDeductCodeData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);

    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  selectDeduction(deductionCode: DataDriven) {
    this.selectedDed = deductionCode;
    this.disableViewReportButton = false;
  }

  viewReport() {
    this.filteredDeductionCodeData = this.deductionCodeData
      .filter(e => (this.selectedDed.ID === 'ALL' || e.deductionCode === this.selectedDed.ID) &&
        this.compareDates(e.date, this.startDate) >= 0 &&
        this.compareDates(e.date, this.endDate) <= 0
      );

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }

  initDeductions() {
    this.deductionCodes = [{
      ID: 'ALL',
      Text: 'ALL'
    }, {
      ID: 'COHSA',
      Text: 'CLIENT HSA'
    }, {
      ID: 'COCRIT',
      Text: 'CLIENT CRITICAL ILLNESS'
    }, {
      ID: 'COLIFE',
      Text: 'CLIENT LIFE'
    }];
  }

  initDeductCodeData() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tenAgo = new Date();
    tenAgo.setDate(today.getDate() - 10);

    this.deductionCodeData = [{
      deductionCode: 'COHSA',
      description: 'CLIENT HSA',
      ssn: '###-##-1234',
      employeeName: 'GRAVES TOBIAS',
      amount: '6213.88',
      date: today,
      totalRow: false
    },
    {
      deductionCode: 'Total for deduction code COHSA',
      description: '',
      ssn: '',
      employeeName: '',
      amount: '6213.88',
      date: today,
      totalRow: true
    },
    {
      deductionCode: 'COCRIT',
      description: 'CLIENT CRITICAL ILLNESS',
      ssn: '###-##-1234',
      employeeName: 'GUY SAMANTHA',
      amount: '800.00',
      date: yesterday,
      totalRow: false
    },
    {
      deductionCode: 'COCRIT',
      description: 'CLIENT CRITICAL ILLNESS',
      ssn: '###-##-1234',
      employeeName: 'LI XUN',
      amount: '1201.36',
      date: yesterday,
      totalRow: false
    },
    {
      deductionCode: 'Total for deduction code COCRIT',
      description: '',
      ssn: '',
      employeeName: '',
      amount: '2001.36',
      date: yesterday,
      totalRow: true
    },
    {
      deductionCode: 'COLIFE',
      description: 'CLIENT LIFE',
      ssn: '###-##-1234',
      employeeName: 'PINTO ANA',
      amount: '903.55',
      date: tenAgo,
      totalRow: false
    },
    {
      deductionCode: 'COLIFE',
      description: 'CLIENT LIFE',
      ssn: '###-##-1234',
      employeeName: 'PRINCE JEFFREY',
      amount: '500.12',
      date: tenAgo,
      totalRow: false
    },
    {
      deductionCode: 'Total for deduction code COLIFE',
      description: '',
      ssn: '',
      employeeName: '',
      amount: '1403.67',
      date: tenAgo,
      totalRow: true
    }];
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
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
