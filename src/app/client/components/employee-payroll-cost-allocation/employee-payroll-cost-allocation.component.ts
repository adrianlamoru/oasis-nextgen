import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { CostAllocation, DataDriven, ClientEmployees } from '../../models/index';

@Component({
    selector: 'app-employee-payroll-cost-allocation',
    templateUrl: './employee-payroll-cost-allocation.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./employee-payroll-cost-allocation.component.scss']
})
export class EmployeePayrollCostAllocationComponent implements OnInit {

    @ViewChild('costAllocationDataGrid') dxDataGrid: DxDataGridComponent;

    @Input() clientEmployee: ClientEmployees;
    @Input() modalCloseFunc;
    @Input() modalDismissFunc;
    selectedEmployeeName: string;

    costAllocationDataRows: CostAllocation[];
    dataDrivenValues: DataDriven[];
    isValid: boolean;
    editing: boolean;

    constructor() {
        this.costAllocationDataRows = [];
        this.isValid = true;

        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    addCostAllocation(): void {
        this.dxDataGrid.instance.addRow();
    }

    ngOnInit(): void {
        this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

        this.costAllocationDataRows = [
            {
                id: '000', location: 'ADBG001', division: 'BDBG001', department: '0001'
                , projectByCostCenter: 'J4587', job: 'JOB001', percent: 0.20
            },
            {
                id: '001', location: 'ADBG001', division: 'BDBG001', department: '0001'
                , projectByCostCenter: 'J4587', job: 'JOB001', percent: 0.20
            },
            {
                id: '002', location: 'ADBG001', division: 'BDBG001', department: '0001'
                , projectByCostCenter: 'J4587', job: 'JOB001', percent: 0.20
            },
            {
                id: '003', location: 'ADBG001', division: 'BDBG001', department: '0001'
                , projectByCostCenter: 'J4587', job: 'JOB001', percent: 0.20
            },
            {
                id: '004', location: 'ADBG001', division: 'BDBG001', department: '0001'
                , projectByCostCenter: 'J4587', job: 'JOB001', percent: 0.20
            },
        ];

        this.dataDrivenValues = [
            { ID: 'ADBG001', Text: 'ADBG001' },
            { ID: 'BDBG001', Text: 'Central' },
            { ID: '0001', Text: 'I&T' },
            { ID: 'J4587', Text: 'Cost Allocation' },
            { ID: 'JOB001', Text: 'Programer' }
        ];
    }

    closeModal() {
        this.modalCloseFunc('Cross click');
    }

    closeValidationMessage() {
        this.isValid = true;
    }

    onCancelClick(event) {
        this.dxDataGrid.instance.cancelEditData();
    }

    popupTitle = () => {
        if (this.editing) {
            return 'Edit Cost Allocation Defaults';
        }

        return 'Add Cost Allocation Defaults';
    }

    onInitNewRow(e: any) {
        this.editing = false;
    }

    onEditingStart(e: any) {
        this.editing = true;
    }

    onSubmitClick(event) {
        this.dxDataGrid.instance.saveEditData();
    }

    submitModal() {
        if (this.validateDataGrid()) {
            this.closeModal();
        }
    }

    validateDataGrid(): boolean {
        const percentTotal: number = this.costAllocationDataRows.map((costAllocation: CostAllocation) => costAllocation.percent)
            .reduce((sum, current) => sum + current);

        this.isValid = percentTotal === 1;

        return this.isValid;
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
