import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  DxDataGridComponent
  , DxDropDownBoxComponent
  , DxTreeViewComponent
  , DxTreeViewModule
  , DxDataGridModule
  , DxTemplateModule
  , DxListComponent
} from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';
import { NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

/* Models */
import { Employee, Roster, Batch, DeductionCode } from '../../models/payroll.interface';

/* Serivces */
import { PayrollService } from '../../services';

@Component({
  selector: 'app-payroll-run-deductions',
  templateUrl: './payroll-run-deductions.component.html',
  styleUrls: ['./payroll-run-deductions.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class PayrollRunDeductionsComponent implements OnInit {
  @ViewChild('gridContainer') gridContainer: DxDataGridComponent;
  @ViewChild('ddbPaycodeList') ddbPaycodeList: DxDropDownBoxComponent;
  @ViewChild(DxTreeViewComponent) treeView;
  @ViewChild('payrollRunCheckMemoModalComponent') payrollRunCheckMemoModalComponent: ViewContainerRef;
  @ViewChild('dxCodelist') dxCodelist: DxListComponent;

  private deductionCodeList: DeductionCode[];
  private deductionCodeTypeList: any[];
  private employees: Employee[];
  private actionModalHandle: NgbModalRef;
  private selectedEmployee: Employee;
  private roster: Roster;
  private batchId: string;
  private rosterId: string;
  private queryStringSubscription: any;
  private tabTitle: string;
  private tabTitleDate: string;
  private rosterSummary: any;
  private sumColumnMappingNameSuffix: 'Sum';

  private deletePopupVisible = false;

  dropdownActions: any[] = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'ViewEmployeeDetail',
      name: 'View Employee Detail'
    }, {
      id: 'CheckMemo',
      name: 'Check Memo'
    }]
  }];


  private currentColumnIndex: number;
  private currentVisibleIndex: number;
  private currentVisibleEditorIndex: number;
  private targetRowIndex: number;
  private targetColumnIndex: number;

  private mapKeysToHandlers = {
    ArrowUp: this.selectPreviousRow,
    ArrowDown: this.selectNextRow,
    ArrowLeft: this.selectPreviousColumn,
    ArrowRight: this.selectNextColumn,
    Enter: this.selectNextColumnByEnter
  };

  constructor(
    private router: Router,
    private payrollService: PayrollService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
  }

  onDropdownClick(args, obj, menu) {
    if (!args.itemData) {
      return;
    }

    this.selectedEmployee = obj.data;

    if (args.itemData.id === 'actions') {
      if (menu.instance._visibleSubmenu) {
        setTimeout(function () {
          menu.instance._visibleSubmenu.hide();
        }, 100);
        return;
      }
    }

    if (args.itemData.id === 'CheckMemo') {
      this.openActionModal('sm', this.payrollRunCheckMemoModalComponent);
    }

    if (args.itemData.id === 'ViewEmployeeDetail') {
      this.goToEmployeeDetail(this.selectedEmployee);
    }
  }

  getData(): void {
    this.queryStringSubscription = this.route.params.subscribe(params => {
      this.batchId = params['batchId'];
      this.rosterId = params['rosterId'];

      this.roster = this.payrollService.getBatch(this.batchId).rosters
        .filter(x => x.id === this.rosterId)[0];

      if (!this.roster) {
        return;
      }

      if (this.roster.isOffCycle) {
        this.gridContainer.selection = {
          mode: 'multiple',
          showCheckBoxesMode: 'always'
        };
      }

      /*
        Make a shallow copy of the object so unsaved changes aren't reflected in the
        object since we're working directly with an object from the service
      */
      this.employees = JSON.parse(JSON.stringify(this.roster.employees));
      if (this.roster.isManual) {
        this.selectedEmployee = this.employees[0];
        this.tabTitle = this.selectedEmployee.employeeName + ' - ' + this.roster.frequency;
        this.tabTitleDate = this.roster.checkDate.toLocaleString();
      } else {
        this.tabTitle = 'Batch: ' + this.batchId + ' - ' + this.roster.frequency;
        this.tabTitleDate = this.roster.checkDate.toLocaleString();
      }

      this.payrollService.setCurrentStep(this.batchId, this.rosterId, 2);
    });

    this.deductionCodeList = this.payrollService.getDeductionCodeList();
    this.deductionCodeTypeList = this.payrollService.getDeductionCodeTypes();
    this.rosterSummary = {};

    this.updateColumnHeadings();
  }

  deductionCode_itemSelectionChanged(e) {
    const addedItems = e.addedItems;
    const removedItems = e.removedItems;
    let isChecked = false;
    let deductionCode: DeductionCode;

    if (addedItems.length === 1) {
      deductionCode = addedItems[0];
      isChecked = true;
    } else {
      deductionCode = removedItems[0];
    }

    // This line is necesary to keyboard navigation
    this.gridContainer.columns.find(c => c.dataField === deductionCode.columnMapping).visible = isChecked;

    this.gridContainer.instance.columnOption(deductionCode.columnMapping, 'visible', isChecked);
    this.gridContainer.instance.refresh();

    if (isChecked) {
      console.log('Adding Column: ' + deductionCode.columnMapping);
    } else {
      console.log('Removing Column: ' + deductionCode.columnMapping);
    }

    this.updateColumnHeadings();
  }

  deductionCode_itemClick(e) {
    e.event.stopPropagation();
  }

  onSelectedDeductionValueChanged(e) {
    if (e.value !== 'Manual') {
      this.selectedEmployee.enabled = false;
    } else {
      this.selectedEmployee.enabled = true;
    }

    this.gridContainer.instance.refresh();
  }

  tryCancelBatch() {
    this.deletePopupVisible = true;
  }

  onNoClick() {
    this.deletePopupVisible = false;
  }

  cancelBatch() {
    this.router.navigate(['/client/payroll/run']);
  }

  saveAndExit() {
    this.saveData();
    this.router.navigate(['/client/payroll/run']);
  }

  goToBack() {
    this.router.navigate(['/client/payroll/run/batch/' + this.roster.batchNumber + '/roster/' + this.roster.id + '/hours-earnings']);
  }

  goToEmployeeDetail(data: { id: number }) {
    const employeeDetailUrl: string = '/client/employees/employee/' + data.id + '/details';

    this.goToUrl(employeeDetailUrl);
  }

  goToNext() {
    this.saveData();
    this.router.navigate(['/client/payroll/run/batch/' + this.roster.batchNumber + '/roster/' + this.roster.id + '/review-submit']);
  }

  goToUrl(url: string) {
    window.open(url, '_blank');
  }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  setSelectedEmployee(obj: any): void {
    this.selectedEmployee = obj.data;
  }

  checkMemoListener(e) {
    this.selectedEmployee.checkMemo = e.checkMemo;
  }

  shiftRow(currentRowIndex, shiftCount) {
    const editColumns = this.gridContainer.columns.filter(c => c.showEditorAlways && c.visible)
      .sort((c1, c2) => c1.visibleIndex - c2.visibleIndex);
    const targetColumn = editColumns.findIndex(c => c.visibleIndex === this.currentVisibleIndex);
    const targetRow = currentRowIndex + shiftCount;
    if (targetRow >= 0) {
      if (this.gridContainer.instance.getRowElement(targetRow) !== undefined) {
        const visibleColumnIndex = targetColumn + 1;

        this.gridContainer.instance.editCell(targetRow, visibleColumnIndex);
        this.targetRowIndex = targetRow;
        this.targetColumnIndex = visibleColumnIndex;
      }
    }
  }

  shiftColumn(currentRowIndex, shiftCount) {
    const editColumns = this.gridContainer.columns.filter(c => c.showEditorAlways && c.visible)
      .sort((c1, c2) => c1.visibleIndex - c2.visibleIndex);
    const targetIndex = editColumns.findIndex(c => c.visibleIndex === this.currentVisibleIndex);

    if (targetIndex > -1) {
      if (shiftCount > 0 && targetIndex < editColumns.length - 1) {
        const nextIndex = this.gridContainer.columns.findIndex(c => c.visibleIndex === editColumns[targetIndex + 1].visibleIndex);
        const visibleColumnIndex = targetIndex + 2;

        this.gridContainer.instance.editCell(currentRowIndex, visibleColumnIndex);
        this.targetRowIndex = currentRowIndex;
        this.targetColumnIndex = visibleColumnIndex;

      } else if (shiftCount < 0 && targetIndex > 0) {
        const previousIndex = this.gridContainer.columns.findIndex(c => c.visibleIndex === editColumns[targetIndex - 1].visibleIndex);

        this.gridContainer.instance.editCell(currentRowIndex, targetIndex);
        this.targetRowIndex = currentRowIndex;
        this.targetColumnIndex = targetIndex;

      }
    }
  }

  selectNextRow(currentRowIndex, currentComponent) {
    currentComponent.shiftRow(currentRowIndex, 1);
  }

  selectPreviousRow(currentRowIndex, currentComponent) {
    currentComponent.shiftRow(currentRowIndex, -1);
  }

  selectPreviousColumn(currentRowIndex, currentComponent) {
    currentComponent.shiftColumn(currentRowIndex, -1);
  }

  selectNextColumn(currentRowIndex, currentComponent) {
    currentComponent.shiftColumn(currentRowIndex, 1);
  }

  selectNextColumnByEnter(currentRowIndex, currentComponent) {
    currentComponent.shiftColumn(currentRowIndex, 1);
  }

  onEditorPreparing(obj) {
    const currentComponent = this;
    const gridContainer = this.gridContainer as any;

    if (obj.row && (this.roster.isOffCycle || (this.roster.isManual && this.selectedEmployee.selectedDeductionType !== 'Manual'))) {
      const employee = this.employees.filter(emp => emp.id === obj.row.key)[0];
      if (employee) {
        obj.editorOptions.disabled = !employee.enabled;
      }
    }

    obj.editorOptions.onKeyDown = function (e) {
      const findHandler = currentComponent.mapKeysToHandlers[e.event.key];
      if (findHandler) {
        findHandler(obj.row.rowIndex, currentComponent);
        e.event.preventDefault();
        e.event.stopPropagation();
      }
    };

    if (obj.parentType === 'dataRow') {
      const oldOnValueChanged = obj.editorOptions.onValueChanged;

      obj.editorOptions.onValueChanged = function (args) {
        // obj.row.data[obj.dataField] = args.value;

        // Update the cell
        oldOnValueChanged.apply(this, arguments);

        const dataChangeList = gridContainer.instance.getController('editing')._editData as any[];

        // for each data change
        dataChangeList.forEach(function (dataChange) {

          // find the employee
          const employee = currentComponent.employees.filter(x => x.id === parseInt(dataChange.key))[0];

          // update the corresponding property in the employee object
          for (const propertyName in dataChange.data) {
            employee[propertyName] = dataChange.data[propertyName];
          }
        });

        currentComponent.updateColumnHeadings();
      };
    }
  }

  onDeductionTypeChanged(e) {
    console.log(e);
  }

  onContentReady(e) {
    const selectedRows = this.employees.filter(emp => emp.enabled === true).map(selectedEmp => selectedEmp.id);
    this.gridContainer.instance.selectRows(selectedRows, false);
  }

  selectionChangedHandler(e) {
    const currentComponent = this;

    if (e.currentDeselectedRowKeys) {
      e.currentDeselectedRowKeys.forEach(id => {
        this.employees.forEach(emp => {
          if (emp.id === id) {
            emp.enabled = false;
          }
        });
      });
    }

    if (e.currentSelectedRowKeys) {
      e.currentSelectedRowKeys.forEach(id => {
        this.employees.forEach(emp => {
          if (emp.id === id) {
            emp.enabled = true;
          }
        });
      });
    }

    setTimeout(function () {
      currentComponent.gridContainer.instance.refresh();
    }, 100);
  }

  onEditingStart(e) {
    this.currentColumnIndex = e.column.index;
    this.currentVisibleEditorIndex = e.column.visibleIndex;
    this.currentVisibleIndex = this.gridContainer.columns[this.currentColumnIndex].visibleIndex;

    this.currentColumnIndex = e.column.index;
  }

  onRowUpdated(e) {
    this.updateColumnHeadings();
  }

  updateColumnHeadings() {
    try {
      const dxCodelist = this.dxCodelist;
      const rosterSummary = this.rosterSummary;
      const employees = this.employees;
      const precisionfactor = Math.pow(10, 4);
      const sumColumnMappingNameSuffix = this.sumColumnMappingNameSuffix;

      if (dxCodelist) {
        setTimeout(function () {
          dxCodelist.selectedItems.forEach(function (codeType) {
            codeType.items.forEach(function (code) {
              const isHourly = codeType.key.toLowerCase() === 'hourly';
              const sumColumnMappingName = code.columnMapping + sumColumnMappingNameSuffix;

              rosterSummary[sumColumnMappingName] = employees.reduce(
                (accumulator, currentValue) => accumulator + currentValue[code.columnMapping]
                , 0);

              rosterSummary[sumColumnMappingName] = Math.round(rosterSummary[sumColumnMappingName] * precisionfactor) / precisionfactor;

            });
          });
        }, 250);

        // this.gridContainer.instance.editCell(this.targetRowIndex, this.targetColumnIndex);
      }
    } catch (e) { }
  }

  saveData() {
    // // FOR SIMULATION PURPOSES - Data should be sent to server
    this.roster.employees = JSON.parse(JSON.stringify(this.employees));
  }

  get diagnosticGridContainerColumns() { return JSON.stringify(this.gridContainer.columns); }
  get diagnosticRosterSummary() { return JSON.stringify(this.rosterSummary); }
  get diagnosticEmployees() { return JSON.stringify(this.employees); }
}
