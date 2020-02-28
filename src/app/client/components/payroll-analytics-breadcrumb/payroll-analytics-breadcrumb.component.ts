import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll-analytics-breadcrumb',
  templateUrl: './payroll-analytics-breadcrumb.component.html',
  styleUrls: ['./payroll-analytics-breadcrumb.component.scss']
})
export class PayrollAnalyticsBreadcrumbComponent implements OnInit {

  @Input() batchNumber: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/client/payroll/analytics']);
  }
}
