import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-job-costing-projects',
  templateUrl: './job-costing-projects.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-costing-projects.component.scss']
})
export class JobCostingProjectsComponent implements OnInit {

  @ViewChild('dxDataGrid') dxDataGrid: DxDataGridComponent;

  projectsTableColumns = [{
    'ID': 1,
    'Project Code': '11256',
    'Project Name': 'Waterfall',
    'inserting': false
    },
    {
    'ID': 2,
    'Project Code': '11257',
    'Project Name': 'Sprint',
    'inserting': false
    },
    {
      'ID': 3,
      'Project Code': '',
      'Project Name': '',
      'inserting': true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddRow(data) {
    this.projectsTableColumns[data.rowIndex].inserting = false;
    const inserted = {
      'ID': this.projectsTableColumns[data.rowIndex].ID + 1,
      'Project Code': '',
      'Project Name': '',
      'inserting': true
    };
    this.projectsTableColumns.push(inserted);
  }

  onDeleteRow(data) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.projectsTableColumns.splice(data.rowIndex, 1);
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
