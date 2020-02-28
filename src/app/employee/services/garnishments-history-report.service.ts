import { Injectable } from '@angular/core';
import {GarnishmentsHReport} from '../models'
@Injectable()
export class GarnishmentsHistoryReportService {
  
  private history_report:GarnishmentsHReport[]=[
  {
    docket_number: '81212003',
    voucher_number: 1,
    voucher_date: new Date(2016, 6, 20),
    amount_due: 47.24,
    paid_check: 356,
    check_amount: 759

  },
  {
    docket_number: '81212004',
    voucher_number: 2,
    voucher_date: new Date(2018, 7, 14),
    amount_due: 35.45,
    paid_check: 521,
    check_amount: 123

  },

  {
    docket_number: '81212005',
    voucher_number: 3,
    voucher_date: new Date(2017, 11, 29),
    amount_due: 82.14,
    paid_check: 3624,
    check_amount: 201

  },
  {
    docket_number: '81212003',
    voucher_number: 4,
    voucher_date: new Date(2016, 6, 20),
    amount_due: 47.24,
    paid_check: 356,
    check_amount: 759

  },
  {
    docket_number: '81212003',
    voucher_number: 5,
    voucher_date: new Date(2016, 6, 20),
    amount_due: 47.24,
    paid_check: 356,
    check_amount: 759

  },
  {
    docket_number: '81212003',
    voucher_number: 6,
    voucher_date: new Date(2016, 6, 20),
    amount_due: 47.24,
    paid_check: 356,
    check_amount: 759

  }
];
  constructor() { }

  getHistoryReport(){
    return this.history_report;
  }

}
