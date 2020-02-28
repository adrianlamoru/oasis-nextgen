import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-reports-payroll-garnishments-history',
  templateUrl: './reports-payroll-garnishments-history.component.html',
  styleUrls: ['./reports-payroll-garnishments-history.component.scss']
})
export class ReportsPayrollGarnishmentsHistoryComponent implements OnInit {

  @Input() historyData: any[];
  @Input() displayReport: boolean;

  dropdownOptions: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService
  ) { }

  ngOnInit() {
    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

}
