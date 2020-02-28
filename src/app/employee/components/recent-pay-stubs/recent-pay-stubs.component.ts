import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PaySummary } from '../../models/pay-summary.interface';
import { PaySummaryService } from '../../services';

@Component({
  selector: 'app-recent-pay-stubs',
  templateUrl: './recent-pay-stubs.component.html',
  styleUrls: ['./recent-pay-stubs.component.scss']
})
export class RecentPayStubsComponent implements OnInit {
  @Output() loadedPaySummaries: EventEmitter<PaySummary[]>;

  public recentPaySumaries: PaySummary[];

  public togglePayValue: boolean;

  constructor(private paySummaryService: PaySummaryService) {
    this.loadedPaySummaries = new EventEmitter<PaySummary[]>();
    this.recentPaySumaries = [];
    this.togglePayValue = false;
  }

  ngOnInit() {
    this.paySummaryService.getRecentPaySummary().subscribe((paySumarries: PaySummary[]) => {
      this.recentPaySumaries = paySumarries;
      this.loadedPaySummaries.emit(paySumarries);
    });
  }

  public amountDisplayText(data: { data: PaySummary, text: string }): string {
    return data.text;
  }

  public togglePay(): void {
    this.togglePayValue = !this.togglePayValue;
  }
}
