import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-job-costing-departments',
  templateUrl: './job-costing-departments.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-costing-departments.component.scss']
})
export class JobCostingDepartmentsComponent implements OnInit {

  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;

  departmentsTableColumns = [{
    'ID': 1,
    'Department Code': '11256',
    'Department Name': 'Waterfall',
    'inserting': false
  },
  {
    'ID': 2,
    'Department Code': '11257',
    'Department Name': 'Sprint',
    'inserting': false
  },
  {
    'ID': 3,
    'Department Code': '',
    'Department Name': '',
    'inserting': true
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddRow(data) {
    this.departmentsTableColumns[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.departmentsTableColumns[data.rowIndex].ID + 1,
      'Department Code': '',
      'Department Name': '',
      'inserting': true
    };
    this.departmentsTableColumns.push(inserted);
  }

  onDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.departmentsTableColumns.splice(data.rowIndex, 1);
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
