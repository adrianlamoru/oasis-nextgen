import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payroll-run-breadcrumb',
  templateUrl: './payroll-run-breadcrumb.component.html',
  styleUrls: ['./payroll-run-breadcrumb.component.scss']
})
export class PayrollRunBreadcrumbComponent implements OnInit {
  @Input() rosterId: string;
  @Input() batchNumber: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelBatch() {
    this.router.navigate(['/client/payroll/run']);
  }
}
