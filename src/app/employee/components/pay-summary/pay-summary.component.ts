import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PaySummary } from '../../models/pay-summary.interface';
import { MyPaySummary } from '../../models';
import { PaySummaryService } from '../../services';

@Component({
  selector: 'app-pay-summary',
  templateUrl: './pay-summary.component.html',
  styleUrls: ['./pay-summary.component.scss']
})
export class PaySummaryComponent implements OnInit {
  @Output() loadedPaySummary: EventEmitter<MyPaySummary>;

  public paySummary: MyPaySummary;

  public recentPaySumaries: PaySummary[];

  togglePayValue;

  paySummaryChart: any;

  constructor(private paySummaryService: PaySummaryService) {
    this.paySummaryChart = [];
    this.paySummary = {
      id: 'NULL',
      amount: 0,
      deductions: 0,
      taxes: 0,
      date: new Date().toString(),
      link: 'https://www.google.com'
    };
    this.recentPaySumaries = [];
    this.togglePayValue = false;

    this.loadedPaySummary = new EventEmitter<MyPaySummary>();
  }

  customizeTooltip = (arg: any) => {
    return {
      html: '<div class="font-weight-bold pay-stub-tooltip"> <div class="text-muted">'
        + arg.argumentText + '</div><div>$' + arg.valueText + '</div></div>'
    };
  }

  getGrossPay(): number {
    return this.paySummary.amount + this.paySummary.deductions + this.paySummary.taxes;
  }

  isEnabledTooltip(): boolean {
    return this.togglePayValue;
  }

  ngOnInit() {
    this.paySummaryService.getMyPaySummary().subscribe((myPaySummary: MyPaySummary) => {
      this.paySummary = myPaySummary;
      this.paySummaryChart = [{
        type: 'Take Home Pay',
        val: myPaySummary.amount
      }, {
        type: 'Deductions',
        val: myPaySummary.deductions
      }, {
        type: 'Taxes',
        val: myPaySummary.taxes
      }];

      this.loadedPaySummary.emit(myPaySummary);
    });

    this.paySummaryService.getRecentPaySummary().subscribe((paySumarries: PaySummary[]) => {
      this.recentPaySumaries = paySumarries;
    });
  }

  togglePay() {
    this.togglePayValue = !this.togglePayValue;
  }
}
