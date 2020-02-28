import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payroll-analytics-single-batch',
  templateUrl: './payroll-analytics-single-batch.component.html',
  styleUrls: ['./payroll-analytics-single-batch.component.scss']
})
export class PayrollAnalyticsSingleBatchComponent implements OnInit {
  tabTitle: string;
  tabTitleDate: string;
  batchNumber: number;
  batchCheckDate: any = new Date();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.batchNumber = params['batchId'] || '0';

      this.tabTitle = 'Batch: ' + this.batchNumber;
      this.tabTitleDate = 'Report Generated on ' + this.batchCheckDate.toLocaleString();
    });
  }

  goToBack() {
    this.router.navigate(['/client/payroll/analytics']);
  }

}
