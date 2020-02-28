import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-payroll-summary',
  templateUrl: './dashboard-payroll-summary.component.html',
  styleUrls: ['./dashboard-payroll-summary.component.scss']
})
export class DashboardPayrollSummaryComponent implements OnInit {

	tabSelected = '';
	tab_SP = 'Scheduled Payroll';
	tab_PC = 'Payroll Calendar';

	constructor(private router: Router) { }

	ngOnInit() {
		this.updateTabSelection(this.tab_SP);
	}

	updateTabSelection(tabSelected): void {
		this.tabSelected = tabSelected;
	}

	openPayrollSection(): void {
		this.router.navigate(['/client/payroll/run']);
	}

}
