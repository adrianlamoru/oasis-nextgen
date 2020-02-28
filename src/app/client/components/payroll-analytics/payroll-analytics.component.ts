import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, OnDestroy } from '@angular/core';
import { PayrollAnalytics, Batch } from '../../models';
import { PayrollAnalyticsService, PayrollService } from '../../services';
import { AreaData, PieData } from '../../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll-analytics',
  templateUrl: './payroll-analytics.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-analytics.component.scss']
})
export class PayrollAnalyticsComponent implements OnInit, OnDestroy {
  constructor(private router: Router,
    private payrollAnalyticsService: PayrollAnalyticsService,
    private payrollService: PayrollService) {
    this.openedYearBox = false;
    this.payrollContainerCssClass = '';
  }

  simpleYears: number[];
  selectedYear: number;
  payrollAnalytics: PayrollAnalytics[];
  selectedPayrollAnalytics: PayrollAnalytics;
  openedYearBox: boolean;

  payrollContainerCssClass: string;

  dropdownActions: any[] = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'Open',
      name: 'Open'
    }, {
      id: 'Download',
      name: 'Download'
    }, {
      id: 'Print',
      name: 'Print'
    }]
  }];

  ngOnInit() {
    this.getYears();
    this.payrollAnalytics = this.payrollAnalyticsService.getPayrollAnalytics(this.selectedYear);

    this.addCssClassToPayrollContainer();
  }

  ngOnDestroy(): void {
    this.removeCssClassToPayrollContainer();
  }

  addCssClassToPayrollContainer() {
    const payrollContainerObjs = document.getElementsByClassName('payroll-container');
    // tslint:disable-next-line:forin
    for (const index in payrollContainerObjs) {
      const payrollContainerObj = payrollContainerObjs[index];
      this.payrollContainerCssClass = payrollContainerObj.className;
      payrollContainerObj.className += ' payroll-analytics';
      break;
    }
  }

  removeCssClassToPayrollContainer() {
    const payrollContainerObjs = document.getElementsByClassName('payroll-container');
    // tslint:disable-next-line:forin
    for (const index in payrollContainerObjs) {
      const payrollContainerObj = payrollContainerObjs[index];
      payrollContainerObj.className = this.payrollContainerCssClass;
      break;
    }
  }

  // Get simpleYears array
  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 10;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionChanged(year) {
    this.selectedYear = year;
  }

  searchPayrollAnalytics(selectedYear) {
    this.payrollAnalytics = this.payrollAnalyticsService.getPayrollAnalytics(this.selectedYear);
  }

  onDropdownClick(args, obj, menu) {
    if (!args.itemData) {
      return;
    }

    this.selectedPayrollAnalytics = obj.data;

    if (args.itemData.id === 'actions') {
      if (menu.instance._visibleSubmenu) {
        setTimeout(function () {
          menu.instance._visibleSubmenu.hide();
        }, 100);
        return;
      }
    }

    if (args.itemData.id === 'Open') {
      if (this.selectedPayrollAnalytics.status === 'Completed') {
        this.router.navigate(['/client/payroll/analytics/batch/' + this.selectedPayrollAnalytics.batch]);
      } else {
        let url = this.payrollService.getCurrentStep(this.selectedPayrollAnalytics.batch, this.selectedPayrollAnalytics.rosterId);
        url = url.replace('/confirmation', '/review-submit');
        this.router.navigate([url]);
      }
    } else if (args.itemData.id === 'Download') {
      // Do Download
    } else if (args.itemData.id === 'Print') {
      // Do Print
    }
  }

  onYearEnterKey(event) {
    this.openedYearBox = !this.openedYearBox;
  }

  onYearClosed(event) {
    this.openedYearBox = false;
  }

  getAreaChartDataSource(): AreaData[] {
    return this.payrollAnalyticsService.getPayrollAnalyticsAreaChartDataSource();
  }

  getAreaChartGross(): number {
    return this.payrollAnalyticsService.getPayrollAnalyticsAreaChartGross();
  }

  getAreaChartNet(): number {
    return this.payrollAnalyticsService.getPayrollAnalyticsAreaChartNet();
  }

  getPieDataSource(): PieData[] {
    return this.payrollAnalyticsService.getPayrollAnalyticsPieChartDataSource();
  }
}
