import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-reports-widget',
  templateUrl: './dashboard-reports-widget.component.html',
  styleUrls: ['./dashboard-reports-widget.component.scss']
})
export class DashboardReportsWidgetComponent implements OnInit {

	recentReportsData = [ 
		{ docName: 'Batch 201852', docLink: '/client/payroll/analytics/batch/201852', docDownloadName: 'batch201852.pdf', category: 'Payroll', dateGenerated: '03/04/2018'},
		{ docName: 'Client Benefit Summary', docLink: '/client/company-benefits-summary', docDownloadName: 'ClientBenefitSummaryReport.pdf', category: 'Reports', dateGenerated: '02/01/2018'},
		{ docName: 'Employees Print', docLink: '/client/employees/analytics', docDownloadName: 'employeeAnalytics.pdf', category: 'Employees', dateGenerated: '05/21/2018'},
		{ docName: 'Employee List August 2018', docLink: '/assets/pdf/samplePDFForPrint.pdf', docDownloadName: 'samplePDFForPrint.pdf', category: "Worker's Comp", dateGenerated: '06/06/2018'}
	];

	constructor(private router: Router) { }

	ngOnInit() { }

	openSpecifiedSection(link) {
		this.router.navigate([link]);
	}

}
