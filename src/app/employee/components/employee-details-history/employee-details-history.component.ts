import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IEmployeeHistory } from '../../models';

@Component({
  selector: 'app-employee-details-history',
  templateUrl: './employee-details-history.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-details-history.component.scss']
})
export class EmployeeDetailsHistoryComponent implements OnInit {

  employees: IEmployeeHistory[];

  constructor() {
    this.employees = this.initEmployees();
  }

  completedValue(rowData) {
    return rowData.Status == "Completed";
  }

  ngOnInit() {
  }

  onRowClick(e): void {
    if (e.rowType === 'data' && e.handled !== true) {
      var key = e.component.getKeyByRowIndex(e.rowIndex);
      var expanded = e.component.isRowExpanded(key);
      if (expanded) {
        e.component.collapseRow(key);
        e.data.isOpened = false;
      }
      else {
        e.component.expandRow(key);
        e.data.isOpened = true;
      }
    }
  }

  // test purpose
  initEmployees() : IEmployeeHistory[] {
    return [{
      id: "1",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "2",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "3",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "4",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "5",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "6",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "7",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }, {
      id: "8",
      date: new Date(2018, 10, 28),
      jobTitle: "Wait Staff",
      jobCode: "20185",
      statusCode: "A - Active",
      typeCode: "F - Full Time",
      payHistory: [{
        dateEffective: new Date(2018, 9, 14),
        rateOfPayPer: 4.91,
        stdHours: 40,
        changePercent: 0.0911,
        changeAmount: 0.41
      },
      {
        dateEffective: new Date(2018, 9, 22),
        rateOfPayPer: 4.50,
        stdHours: 40,
        changePercent: 0,
        changeAmount: 0
      }],
      isOpened: false
    }];
  }

}
