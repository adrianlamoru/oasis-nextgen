import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reports-gross-to-net-sort-options-grid',
  templateUrl: './reports-gross-to-net-sort-options-grid.component.html',
  styleUrls: ['./reports-gross-to-net-sort-options-grid.component.scss']
})
export class ReportsGrossToNetSortOptionsGridComponent implements OnInit {
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
