import { Component, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';

import 'devextreme/integration/jquery';

import { DxDataGridComponent } from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';
import { timeout } from 'q';
import { debug } from 'util';

declare var DevExpress: any;

@Component({
  selector: 'app-table-remove-add-example',
  templateUrl: './table-remove-add-example.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./table-remove-add-example.component.scss']
})
export class TableRemoveAddExampleComponent implements OnInit {

  @ViewChild('dxDataGrid1') dataGrid1: DxDataGridComponent;

  contentReadyRowEdited = false;
  insertingRow = false;

  multiselected: any[];

  basicSampleTableDataRows = [{
    'ID': 1,
    'Text': 'Text 2',
    'Number': 100,
    'Select': 'AL',
    'MultiSelect': ['AL'],
    'CheckBox': true,
    'inserting': false
  },
  {
    'ID': 2,
    'Text': 'Text 3',
    'Number': 200,
    'Select': 'AK',
    'MultiSelect': ['AL'],
    'CheckBox': false,
    'inserting': false
  },
  {
    'ID': 3,
    'Text': 'Text 1',
    'Number': 300,
    'Select': 'AS',
    'MultiSelect': ['AL'],
    'CheckBox': true,
    'inserting': false
  }
  ];

  basicDisabledSampleTableDataRows = [{
    'ID': 1,
    'Text': 'Text 2',
    'Number': 100,
    'Select': 'AL',
    'MultiSelect': ['AL'],
    'CheckBox': true,
    'inserting': false,
  }, {
    'ID': 2,
    'Text': 'Text 3',
    'Number': 200,
    'Select': 'AK',
    'MultiSelect': ['AL'],
    'CheckBox': false,
    'inserting': false
  }, {
    'ID': 3,
    'Text': 'Text 1',
    'Number': 300,
    'Select': 'AS',
    'MultiSelect': ['AL'],
    'CheckBox': true,
    'inserting': false
  }, {
    'ID': 4,
    'Text': '',
    'Number': 0,
    'Select': '',
    'MultiSelect': [],
    'CheckBox': false,
    'inserting': true
  }
  ];

  sampleTableDataRows = [{
    'ID': 1,
    'Text': 'Text 2',
    'Number': 100,
    'Select': 'AL',
    'MultiSelect': ['AL'],
    'CheckBox': true,
    'inserting': false,
    'multiOpened': false
  },
  {
    'ID': 2,
    'Text': 'Text 3',
    'Number': 200,
    'Select': 'AK',
    'MultiSelect': ['AL'],
    'CheckBox': false,
    'inserting': false,
    'multiOpened': false
  },
  {
    'ID': 3,
    'Text': 'Text 1',
    'Number': 300,
    'Select': 'AS',
    'MultiSelect': ['AL'],
    'CheckBox': true,
    'inserting': false,
    'multiOpened': false
  },
  {
    'ID': 4,
    'Text': '',
    'Number': 0,
    'Select': '',
    'MultiSelect': [],
    'CheckBox': false,
    'inserting': true,
    'multiOpened': false
  }
  ];

  statesDropdown: any[] = [{
    name: 'Alabama',
    abbr: 'AL',
    value: false
  },
  {
    name: 'Alaska',
    abbr: 'AK',
    value: false
  },
  {
    name: 'American Samoa',
    abbr: 'AS',
    value: false
  },
  {
    name: 'Arizona',
    abbr: 'AZ',
    value: false
  },
  {
    name: 'Arkansas',
    abbr: 'AR',
    value: false
  },
  {
    name: 'California',
    abbr: 'CA',
    value: false
  },
  {
    name: 'Colorado',
    abbr: 'CO',
    value: false
  }
  ];

  selectedStates = [];

  constructor() {
    this.multiselected = [];
    // this.disabled = false;
    this.sampleTableDataRows.forEach(j => this.multiselected.push({ ID: j.ID, MultiSelect: j.MultiSelect }));
  }

  ngOnInit() {
  }

  onContentReadydxTreeView(e, cell: any) {
    const component = (e && e.component);
    if (!component) {
      return;
    }

    this.contentReadyRowEdited = false;
    component.unselectAll();

    if (cell.value === undefined) {
      cell.setValue([]);
    }

    cell.value.forEach(item => {
      component.selectItem(item);
    });
    this.contentReadyRowEdited = true;

    const multiselected = this.multiselected;
    const setMultiSelected = this.setMultiSelected;

    const selectAll = document.getElementsByClassName('dx-treeview-select-all-item').item(0);
    selectAll.addEventListener('click', function () {
      setMultiSelected(cell.data, component.getSelectedNodesKeys(), multiselected);
    });
  }

  onItemSelectionChangedRowEdited(e, cell: any) {
    const component = (e && e.component);
    if (!component) {
      return;
    }
    this.setMultiSelected(cell.data, component.getSelectedNodesKeys());
  }

  multiselectToString(selectedIDs: any[]) {
    const selectedStates = [];
    if (this.statesDropdown && selectedIDs && selectedIDs.length > 0) {
      this.statesDropdown.forEach(state => {
        if (selectedIDs.indexOf(state.abbr) >= 0) {
          selectedStates.push(state.name);
        }
      });
    }
    return selectedStates.join(', ');
  }

  getMultiSelected(data: any): number[] {
    const selected = this.multiselected.find(j => j.ID === data.ID);

    if (selected) {
      return selected.MultiSelect;
    }

    return data.MultiSelect;
  }

  setMultiSelected(data: any, ids: number[], multiselected?: any[]) {
    if (!multiselected) {
      multiselected = this.multiselected;
    }
    const selected = multiselected.find(j => j.ID === data.ID);

    if (selected) {
      selected.MultiSelect = ids;
    } else {
      data.MultiSelect = ids;
    }
  }

  onInitialized(e) {
    this.addNewRow(e.component.instance());
  }

  addNewRow(gridIntance) {

    const data = {
      'ID': Math.floor(Math.random() * 100000) + 1  ,
      'Text': '',
      'Number': 0,
      'Select': '',
      'MultiSelect': [],
      'CheckBox': false,
      'inserting': true
    };

    gridIntance.getDataSource().store().insert(data);
  }

  onAddRow(data, sampleData) {
    const validateResult = (data.component.instance() as any).getController('validating').validate(true);

    if (!validateResult) {
      return;
    }

    data.data.inserting = false;
    this.addNewRow(this.dataGrid1.instance);
  }

  onDeleteRow(data, dxDataGrid) {
    const confirmDialog = confirm('Are you sure you want to delete this record?', null);
    confirmDialog.then((dialogResult: any) => {
      if (dialogResult) {
        this.dataGrid1.instance.getDataSource().store().remove(data.data.ID);
      }
    });
  }

  onAddKeyDown(event, data, sampleData) {
    if (event.keyCode === 13) {
      this.onAddRow(data, sampleData);
    }
  }

  onDeleteKeyDown(event, data, dxDataGrid) {
    if (event.keyCode === 13) {
      this.onDeleteRow(data, dxDataGrid);
    }
  }

  onEnterKeyDown(event, data) {
    if (event.event.code === 'Enter') {
      data.multiOpened = !data.multiOpened;
      event.event.stopPropagation();
    }
  }

  onClosed(event, data) {
    const selected = this.multiselected.find(j => j.ID === data.ID);
    data.MultiSelect = selected.MultiSelect;
  }

}
