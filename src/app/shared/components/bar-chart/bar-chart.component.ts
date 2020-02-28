import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { paletteCharts } from '../../../shared/models/palette';
import { PieData } from '../../../shared/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DxChartModule, DxChartComponent } from 'devextreme-angular';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

	@ViewChild(DxChartComponent) chart: DxChartComponent;

	@Input() dataSource: PieData[];
	// @Input() dataSourceForModal: PieData[];
	@Input() width: number;
	@Input() height: number;
	@Input() isModalNeeded: boolean;

	palette = paletteCharts;
	empListForDisplay = [];

	constructor(private router: Router, private modalService: NgbModal) { }

	ngOnInit() { }

	customizeTooltip(arg: any) {
		return {
			text: arg.argumentText + ' : ' + arg.valueText
		};
	}

	pointClickHandler(e, content) {
		if (this.isModalNeeded) {
			this.updateModalListForDisplay(e.target.argument, content);
		}
	}

	updateModalListForDisplay(activitySelected, content) {
		this.empListForDisplay = [];
		this.dataSource.forEach((item) => {
			if (item.arg && item.arg === activitySelected) {
				item.employeeList.forEach((emp) => {
					this.empListForDisplay.push(emp);
				});
			} 
		});

		if(this.empListForDisplay.length !== 0) {
			this.openCardModal('lg', content);
		}
	}

	openCardModal(size, content) {
		this.modalService.open(content, { size: size });
	}

	openActivity(empID) {
		this.router.navigate(['client/employees/employee', empID]);
	}

}
