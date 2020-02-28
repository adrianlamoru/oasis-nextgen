import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-dashboard-marketplace',
	templateUrl: './dashboard-marketplace.component.html',
	styleUrls: ['./dashboard-marketplace.component.scss']
})
export class DashboardMarketplaceComponent implements OnInit {

	marketplaceWidgetData = {
		chartTitle: 'Where You Could Be',
		spiderDataSource: {
			axisData: [{ field: 'cat1', name: 'Category1' },
			{ field: 'cat2', name: 'Category2' },
			{ field: 'cat3', name: 'Category3' },
			{ field: 'cat4', name: 'Category4' }],
			dataSet: [{
				arg: 'Payroll',
				cat1: 4.21,
				cat2: 6.22,
				cat3: 0.8,
				cat4: 7.47
			}, {
				arg: 'Human Resources',
				cat1: 3.33,
				cat2: 8.65,
				cat3: 1.06,
				cat4: 5
			}, {
				arg: 'Workers\' Comp',
				cat1: 2.6,
				cat2: 4.25,
				cat3: 0.78,
				cat4: 1.71
			}, {
				arg: 'Benefits',
				cat1: 2.2,
				cat2: 7.78,
				cat3: 0.52,
				cat4: 2.39
			}, {
				arg: 'Employees',
				cat1: 2.16,
				cat2: 2.26,
				cat3: 3.09,
				cat4: 6.26
			}]
		}
	};

	constructor(private router: Router) { }

	ngOnInit() {
	}

	openMarketplace() {
		this.router.navigate(['/client/bizvault']);
	}

}
