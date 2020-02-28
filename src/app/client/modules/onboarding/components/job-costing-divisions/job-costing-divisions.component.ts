import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-job-costing-divisions',
  templateUrl: './job-costing-divisions.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-costing-divisions.component.scss']
})
export class JobCostingDivisionsComponent implements OnInit {

  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;

  divisionsTableColumns = [{
    'ID': 1,
    'Division Code': '11256',
    'Division Name': 'Waterfall',
    'inserting': false
    },
    {
    'ID': 2,
    'Division Code': '11257',
    'Division Name': 'Sprint',
    'inserting': false
    },
    {
      'ID': 3,
      'Division Code': '',
      'Division Name': '',
      'inserting': true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddRow(data) {
    this.divisionsTableColumns[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.divisionsTableColumns[data.rowIndex].ID + 1,
      'Division Code': '',
      'Division Name': '',
      'inserting': true
    };
    this.divisionsTableColumns.push(inserted);
  }

  onDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.divisionsTableColumns.splice(data.rowIndex, 1);
      }
    });
  }

  onAddKeyDown(event, data) {
    if (event.keyCode === 13) {
        this.onAddRow(data);
    }
  }

  onDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
        this.onDeleteRow(data);
    }
  }
}
