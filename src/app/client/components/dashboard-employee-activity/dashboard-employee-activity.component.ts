import { Component, OnInit } from '@angular/core';

import { PieData } from '../../../shared/models';
import { Router } from '@angular/router';
import { ClientEmployeeBarchartDetailsService } from '../../services/index';

@Component({
  selector: 'app-dashboard-employee-activity',
  templateUrl: './dashboard-employee-activity.component.html',
  styleUrls: ['./dashboard-employee-activity.component.scss']
})

export class DashboardEmployeeActivityComponent implements OnInit {

  barGraphSourceForTimeBasedActivity: PieData[];
  barGraphSource: PieData[];
  dataSourceForGraph: PieData[] = [];

  tabSelected = '';
  tab_EA = 'Employee Activity';
  tab_TEA = 'Employee Status';

  selectedCategory = '';
  selectedTimeBasedActivity = '';
  selectedStatus = 'Monthly';

  barEADataSource = [{
      key: 'HR',
      name: 'Human Resources'
    },
    {
      key: 'Benifits',
      name: 'Benefits'
    },
    {
      key: 'WC',
      name: 'Workers\' Comp'
    },
    {
      key: 'PC',
      name: 'Payroll'
    }
  ];

  barEATimeDataSource = [{
      key: 'Monthly',
      name: 'Monthly'
    },
    {
      key: 'Quarterly',
      name: 'Quarterly'
    },
    {
      key: 'Yearly',
      name: 'Yearly'
    }];

  constructor(private router: Router, private clientEmployeeBarchartDetailsService: ClientEmployeeBarchartDetailsService) { }

  ngOnInit() {
    this.tabSelected = this.tab_EA;
    this.getBarGraphActivityDataSource();
    this.getBarGraphTimeBasedActivityDataSource();
  }

  getBarGraphActivityDataSource() {
    this.clientEmployeeBarchartDetailsService.getEmployeeBarchartActivityData().subscribe(
      barGraphData => {
        this.barGraphSource = barGraphData;
        this.updateInitialData();
      }
    );
  }

  getBarGraphTimeBasedActivityDataSource() {
    this.clientEmployeeBarchartDetailsService.getEmployeeBarchartTimeBasedActivityData().subscribe(
      barGraphData => {
        this.barGraphSourceForTimeBasedActivity = barGraphData;
      }
    );
  }

  updateTabSelection(tabSelected): void {
    this.tabSelected = tabSelected;

    if (this.tabSelected === this.tab_EA) {
      this.updateEmpActivitySelection(this.selectedCategory, this.selectedCategory, this.selectedTimeBasedActivity, '');
    } else if (this.tabSelected === this.tab_TEA) {
      this.updateEmpStatusSelection(this.selectedStatus);
    }
  }

  updateInitialData() {
    this.selectedCategory = this.barEADataSource[0].name;
    this.selectedTimeBasedActivity = this.barEATimeDataSource[0].name;
    this.updateEmpActivitySelection(this.selectedCategory, this.selectedCategory, this.selectedTimeBasedActivity, '' );
  }

  updateEmpActivitySelection (activitySelected, selectedCategory, selectedTimeBasedActivity, name?) {
    this.dataSourceForGraph = [];

    if (this.tabSelected === this.tab_EA && name === 'category') {
      this.selectedCategory = activitySelected;
    } else if (name === 'year') {
      this.selectedTimeBasedActivity = activitySelected;
    } else {
      this.selectedCategory = this.barEADataSource[0].name;
      this.selectedTimeBasedActivity = this.barEATimeDataSource[0].name;
    }
      this.barGraphSource.forEach((item) => {
        item.groupByValueSet.forEach((groupbyItem) => {
          if (groupbyItem.groupBy && groupbyItem.groupBy === this.selectedCategory &&
            groupbyItem.groupByTimeBased && groupbyItem.groupByTimeBased === this.selectedTimeBasedActivity ) {
            this.dataSourceForGraph.push({arg: item.arg, val: groupbyItem.val, employeeList: groupbyItem.employeeList});
          }
        });
      });
    //  else if (this.tabSelected === this.tab_TEA) {
      // this.barTimeBasedActivity = activitySelected;
      // this.barGraphSourceForTimeBasedActivity.forEach((item) => {
      //   item.groupByValueSet.forEach((groupbyItem) => {
      //     if (groupbyItem.groupBy && groupbyItem.groupBy === activitySelected ) {
      //       this.dataSourceForGraph.push({arg: item.arg, val: groupbyItem.val, employeeList: groupbyItem.employeeList});
      //     }
      //   });
      // });
    // }
  }

  updateEmpStatusSelection(selectedStatus) {
    this.selectedStatus = selectedStatus;
    this.barGraphSourceForTimeBasedActivity.forEach((item) => {
      item.groupByValueSet.forEach((groupbyItem) => {
        if (groupbyItem.groupBy && groupbyItem.groupBy === selectedStatus ) {
          this.dataSourceForGraph.push({arg: item.arg, val: groupbyItem.val, employeeList: groupbyItem.employeeList});
        }
      });
    });
  }

  openEmpAnalytics() {
    this.router.navigate(['/client/employees/analytics']);
  }

}
