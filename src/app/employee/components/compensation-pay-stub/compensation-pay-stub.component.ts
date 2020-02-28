import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CurrentValueFormat, CurrentValueType } from '../../../shared/models/index';
import { PayrollAnalyticsInvoice } from '../../../client/models';
import { EmployeeDetail } from '../../models/employee-detail.interface';

@Component({
  selector: 'app-compensation-pay-stub',
  templateUrl: './compensation-pay-stub.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./compensation-pay-stub.component.scss']
})
export class CompensationPayStubComponent implements OnInit {

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  showDetails: boolean;

  employee: EmployeeDetail = {
    firstName: 'John',
    lastName: 'Doe',
    code: 'Z05065'
  };

  summaryDataRows: CurrentValueFormat[] = [{
      label: 'CHECK NUMBER',
      value: '4818',
      type: CurrentValueType.string
    }, {
      label: 'PAY DATE',
      value: new Date(2018, 5, 15),
      type: CurrentValueType.date
    }, {
      label: 'PERIOD START',
      value: new Date(2017, 12, 30),
      type: CurrentValueType.date
    }, {
      label: 'PERIOD END',
      value: new Date(2018, 5, 2),
      type: CurrentValueType.date
    }, {
      label: 'NET PAY',
      value: 3680.20,
      type: CurrentValueType.currency
    }
  ];

  taxWithholdingDataRows: CurrentValueFormat[] = [{
      label: 'TAX AUTHORITY',
      value: 'FEDERAL GOVERMENT',
      type: CurrentValueType.string
    }, {
      label: 'WITHHOLDING STATUS',
      value: 'S',
      type: CurrentValueType.string
    }, {
      label: 'ALLOWANCES',
      value: '0',
      type: CurrentValueType.string
    }, {
      label: 'ADDITIONAL AMOUNT',
      value: '0.00',
      type: CurrentValueType.string
    }
  ];

  earningsTippedHoursDataRow: CurrentValueFormat[] = [{
      label: 'RATE',
      value: 144.23,
      type: CurrentValueType.currency
    }, {
      label: 'HOURS',
      value: 40,
      type: CurrentValueType.number
    }, {
      label: 'AMOUNT',
      value: 5769.23,
      type: CurrentValueType.currency
  }];

  earningsCashTipsDataRow: CurrentValueFormat[] = [{
      label: 'RATE',
      value: 144.23,
      type: CurrentValueType.currency
    }, {
      label: 'HOURS',
      value: 40,
      type: CurrentValueType.number
    }, {
      label: 'AMOUNT',
      value: 5769.23,
      type: CurrentValueType.currency
  }];

  earningsDataTotal = 11538.46;

  deductionDataRow: CurrentValueFormat[] = [{
    label: 'DENTAL 125',
    value: 2.88,
    type: CurrentValueType.currency
    }];

  deductionDataTotal = 2.88;

  taxesDataRow: CurrentValueFormat[] = [{
      label: 'FEDERAL INCOME TAX',
      value: 72.69,
      type: CurrentValueType.currency
    }, {
      label: 'FICA MEDICARE',
      value: 8.50,
      type: CurrentValueType.currency
    }, {
      label: 'FICA OASDI',
      value: 36.34,
      type: CurrentValueType.currency
  }];

  taxesDataTotal = 117.53;

  erContributionsDataRow: CurrentValueFormat[] = [{
      label: 'DENTAL',
      value: 7.87,
      type: CurrentValueType.currency
    }, {
      label: 'AETNA HMO LO',
      value: 47.50,
      type: CurrentValueType.currency
    }, {
      label: 'VISION',
      value: 1.63,
      type: CurrentValueType.currency
  }];

  erContributionsDataTotal = 57.00;

  paidTimeOffDataRows: CurrentValueFormat[] = [{
      label: 'DESCRIPTION',
      value: 'PTO',
      type: CurrentValueType.string
    }, {
      label: 'CARRY OVER',
      value: '0.00',
      type: CurrentValueType.string
    }, {
      label: 'ACCRUED',
      value: '0.00',
      type: CurrentValueType.string
    }, {
      label: 'USED',
      value: '0.00',
      type: CurrentValueType.string
    }, {
      label: 'AVAILABLE',
      value: '0.00',
      type: CurrentValueType.string
    }
  ];

  ytdEarningsTipCreditDataRow: CurrentValueFormat[] = [{
      label: 'HRS/UNITS',
      value: 1.00,
      type: CurrentValueType.currency
    }, {
      label: 'AMOUNT',
      value: 118.80,
      type: CurrentValueType.currency
  }];

  ytdEarningsTippedHoursDataRow: CurrentValueFormat[] = [{
      label: 'HRS/UNITS',
      value: 321.50,
      type: CurrentValueType.currency
    }, {
      label: 'AMOUNT',
      value: 1578.57,
      type: CurrentValueType.currency
  }];

  ytdEarningsCashTipsDataRow: CurrentValueFormat[] = [{
      label: 'HRS/UNITS',
      value: 8.00,
      type: CurrentValueType.currency
    }, {
      label: 'AMOUNT',
      value: 2340.00,
      type: CurrentValueType.currency
  }];

  ytdEarningsHalfTimeDataRow: CurrentValueFormat[] = [{
      label: 'HRS/UNITS',
      value: 6.00,
      type: CurrentValueType.currency
    }, {
      label: 'AMOUNT',
      value: 20.70,
      type: CurrentValueType.currency
  }];

  ytdEarningsDataTotal = 4058.14;

  ytdDeductionsDataRow: CurrentValueFormat[] = [{
      label: 'DENTAL SECTION 125',
      value: 11.52,
      type: CurrentValueType.currency
  }];

  ytdDeductionsDataTotal = 11.52;

  ytdTaxesDataRow: CurrentValueFormat[] = [{
      label: 'FEDERAL INCOME TAX',
      value: 485.24,
      type: CurrentValueType.currency
    }, {
      label: 'FICA - MEDICARE',
      value: 58.68,
      type: CurrentValueType.currency
    }, {
      label: 'FICA - OASDI',
      value: 250.89,
      type: CurrentValueType.currency
  }];

  ytdTaxesDataTotal = 794.81;

  ytdERContributionsDataRow: CurrentValueFormat[] = [{
      label: 'AETNA DENTAL',
      value: 31.48,
      type: CurrentValueType.currency
    }, {
      label: 'AETNA US HEALTH',
      value: 190.00,
      type: CurrentValueType.currency
    }, {
      label: 'VISION CARE PLA',
      value: 6.52,
      type: CurrentValueType.currency
  }];

  ytdERContributionsDataTotal = 228.00;

  constructor() { }

  ngOnInit() {
    console.log('on PayStubsComponent!!');
    this.showDetails = true;
  }

  activeTabDetails(active: boolean) {
    this.showDetails = active;
  }

  electronicPayStatement() {
    // TODO
  }

  printYTD() {
    let printContents, popupWin;
    printContents = document.getElementById('ytdPrintContent').outerHTML;
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

  printPayStub() {
    let printContents, popupWin;
    printContents = document.getElementById('payStubPrintContent').outerHTML;
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

  onClickElectronicPayStatement() {
    window.open('https://www.google.com', '_blank');
  }

  getHeadHtml = (document: Document): string => {
    const head: string[] = [];

    const styleElements = document.getElementsByTagName('head');
    for (let idx = 0; idx < styleElements.length; idx++) {
      head.push(styleElements[idx].outerHTML);
    }

    return head.join('\r\n');
  }

}
