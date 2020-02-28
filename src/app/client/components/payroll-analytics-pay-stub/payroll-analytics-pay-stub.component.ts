import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PayrollAnalyticsInvoice } from '../../models/index';
import { CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { CurrentValueFormat, CurrentValueType } from '../../../shared/models/index';

@Component({
  selector: 'app-payroll-analytics-pay-stub',
  templateUrl: './payroll-analytics-pay-stub.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-analytics-pay-stub.component.scss']
})
export class PayrollAnalyticsPayStubComponent implements OnInit {

  @Input() payrollInvoice: PayrollAnalyticsInvoice;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

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

  earningsDataRow: CurrentValueFormat[] = [{
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

  earningsDataTotal = 5769.23;

  deductionDataRow: CurrentValueFormat[] = [{
    label: 'CHECK NUMBER',
    value: 125,
    type: CurrentValueType.currency
    }];

  deductionDataTotal = 125;

  taxesDataRow: CurrentValueFormat[] = [{
      label: 'FEDERAL INCOME TAX',
      value: 1531.57,
      type: CurrentValueType.currency
    }, {
      label: 'FICA MEDICARE',
      value: 81.84,
      type: CurrentValueType.currency
    }, {
      label: 'FICA OASDI',
      value: 349.94,
      type: CurrentValueType.currency
  }];

  taxesDataTotal = 1963.35;

  constructor() { }

  ngOnInit() {
  }

}
