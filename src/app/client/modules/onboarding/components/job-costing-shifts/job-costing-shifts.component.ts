import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-job-costing-shifts',
  templateUrl: './job-costing-shifts.component.html',
  styleUrls: ['./job-costing-shifts.component.scss']
})
export class JobCostingShiftsComponent implements OnInit {

  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;

  shiftsTableColumns = [{
    'ID': 1,
    'Shift Code': 11256,
    'Shift Name': 'Waterfall',
    'inserting': false
    },
    {
    'ID': 2,
    'Shift Code': 11257,
    'Shift Name': 'Sprint',
    'inserting': false
    },
    {
      'ID': 3,
      'Shift Code': '',
      'Shift Name': '',
      'inserting': true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddRow(data) {
    this.shiftsTableColumns[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.shiftsTableColumns[data.rowIndex].ID + 1,
      'Shift Code': '',
      'Shift Name': '',
      'inserting': true
    };
    this.shiftsTableColumns.push(inserted);
  }

  onDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.shiftsTableColumns.splice(data.rowIndex, 1);
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
