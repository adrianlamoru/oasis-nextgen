import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ClientEmployees } from '../../models/index';

@Component({
  selector: 'app-employee-payroll-pay-code',
  templateUrl: './employee-payroll-pay-code.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-payroll-pay-code.component.scss']
})
export class EmployeePayrollPayCodeComponent implements OnInit {

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('payCodeOverridesDataGrid') dxDataGrid: DxDataGridComponent;

  editing = true;

  multiplierItems = [
    'Data Driven 1',
    'Data Driven 2',
    'Data Driven 3',
    'Data Driven 4',
    'Data Driven 5',
  ];
  payCodeOverridesDataRows = [{
    'ID': 1,
    'Code': 'ASD190',
    'Description': 'This is the pay Code Description',
    'Rate': 10,
    'Multiplier': 'Data Driven 1',
    'ActualRate': 50
  }, {
    'ID': 2,
    'Code': 'ASD190',
    'Description': 'This is the pay Code Description',
    'Rate': 10,
    'Multiplier': 'Data Driven 1',
    'ActualRate': 50
  }, {
    'ID': 3,
    'Code': 'ASD190',
    'Description': 'This is the pay Code Description',
    'Rate': 10,
    'Multiplier': 'Data Driven 1',
    'ActualRate': 50
  }, {
    'ID': 4,
    'Code': 'ASD190',
    'Description': 'This is the pay Code Description',
    'Rate': 10,
    'Multiplier': 'Data Driven 1',
    'ActualRate': 50
  }];

  constructor() {
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;
  }

  onSubmitClick(e) {
    this.dxDataGrid.instance.saveEditData();
  }

  onCancelClick(e) {
    this.dxDataGrid.instance.cancelEditData();
  }

  addPayCode(): void {
    this.dxDataGrid.instance.addRow();
  }

  customizeItem = (item: any) => {
    if (item.dataField === 'Multiplier') {
      item.visible = this.editing;
    }
    if (item.dataField === 'Code') {
      item.disabled = this.editing;
    }
  }

  popupTitle = () => {
    if (this.editing) {
      return 'Edit Pay Code';
    }

    return 'Add Pay Code';
  }

  onInitNewRow(e: any) {
    this.editing = false;
  }

  onEditingStart(e: any) {
    this.editing = true;
  }

  onEditRow(data) {
    this.dxDataGrid.instance.editRow(data.rowIndex);
  }

  onDeleteRow(data) {
    this.dxDataGrid.instance.deleteRow(data.rowIndex);
  }

  onEditKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onEditRow(data);
    }
  }

  onDeleteKeyDown(event, data) {
    if (event.keyCode === 13) {
      this.onDeleteRow(data);
    }
  }


}
