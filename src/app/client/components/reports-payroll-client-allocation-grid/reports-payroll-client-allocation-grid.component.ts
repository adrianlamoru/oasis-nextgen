import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reports-payroll-client-allocation-grid',
  templateUrl: './reports-payroll-client-allocation-grid.component.html',
  styleUrls: ['./reports-payroll-client-allocation-grid.component.scss']
})
export class ReportsPayrollClientAllocationGridComponent implements OnInit {
  @Input() filteredColumnOrderSorting: any[];

  @Input() clientAllocationData: any[];

  @Input() displayCheckNumberCol?: boolean;

  constructor() { }

  ngOnInit() {
  }

  showCol(colName) {
      const index = this.filteredColumnOrderSorting.findIndex(item => {
          return (item === colName);
      });
      return (index >= 0) ? true : false;
  }
}
