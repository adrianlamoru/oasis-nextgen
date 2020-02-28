import { Component, OnInit, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DxDataGridComponent, DxListComponent, DxDateBoxComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';
import { NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs/Observable';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

/* Models */
import { Employee, Roster, Batch, PayCode, PayCodeDefault, JobCost, PayPeriod } from '../../models/payroll.interface';
import { JobCode, DataDriven, SetupProject } from '../../models';

/* Serivces */
import { PayrollService } from '../../services';
import { AuthService, PageConfigService } from '../../../shared/services';

import { debug } from 'util';
import { IPage, Message } from '../../../shared/models';
import { forEach } from '@angular/router/src/utils/collection';



@Component({
  selector: 'app-payroll-run-hours-earnings',
  templateUrl: './payroll-run-hours-earnings.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-run-hours-earnings.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class PayrollRunHoursEarningsComponent implements OnInit {
  @ViewChild('gridContainer') gridContainer: DxDataGridComponent;
  @ViewChild('payrollRunCheckMemoModalComponent') payrollRunCheckMemoModalComponent: ViewContainerRef;
  @ViewChild('payrollAddDeductionModalComponent') payrollAddDeductionModalComponent: ViewContainerRef;
  @ViewChild('payrollAutoPayModalComponent') payrollAutoPayModalComponent: ViewContainerRef;
  @ViewChild('dxCodelist') dxCodelist: DxListComponent;

  private payCodeList: PayCode[];
  private payCodeTypeList: any[];
  private employees: Employee[];
  private tempEmployees: Employee[];
  private actionModalHandle: NgbModalRef;
  private selectedEmployee: Employee;
  private roster: Roster;
  private tempRoster: Roster;
  private batchId: string;
  private rosterId: string;
  private queryStringSubscription: any;
  private tabTitle: string;
  private tabTitleDate: string;
  private rosterSummary: any;
  private sumColumnMappingNameSuffix: 'Sum';
  private tokenData: '';
  private jobCodes: JobCode[];
  private divisions: DataDriven[];
  private departments: DataDriven[];
  private locations: DataDriven[];
  private projects: SetupProject[];
  private payPeriods: PayPeriod[];
  private page: IPage;

  dropdownActions: any[] = [{
    id: 'actions',
    name: 'ACTIONS',
    items: [{
      id: 'AddJobCosting',
      name: 'Add Job Costing'
    }, {
      id: 'AddDeduction',
      name: 'Add Deduction'
    }, {
      id: 'ViewEmployeeDetail',
      name: 'View Employee Detail'
    }, {
      id: 'CheckMemo',
      name: 'Check Memo'
    }]
  }];

  private deletePopupVisible = false;
  private isPayCodeDefault: boolean;

  private currentColumnIndex: number;
  private currentVisibleIndex: number;
  private currentVisibleEditorIndex: number;
  private targetRowIndex: number;
  private targetColumnIndex: number;
  private searchText: string;

  private mapKeysToHandlers = {
    ArrowUp: this.selectPreviousRow,
    ArrowDown: this.selectNextRow,
    ArrowLeft: this.selectPreviousColumn,
    ArrowRight: this.selectNextColumn,
    Enter: this.selectNextColumnByEnter
  };

  constructor(private router: Router,
    private payrollService: PayrollService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private pageConfigService: PageConfigService
  ) { }

  ngOnInit() {
    this.page = this.pageConfigService.getPageConfig();
    this.queryStringSubscription = this.route.params.subscribe(params => {

      this.batchId = params['batchId'] || '0';
      this.rosterId = params['rosterId'] || '0';

      const isManualBatch = this.batchId === '0' && this.rosterId === '0';

      if (isManualBatch) {
        const newManualBatch = this.payrollService.addManualBatch();
        this.roster = newManualBatch.rosters[0];
        this.batchId = newManualBatch.batchNumber;
        this.rosterId = this.roster.id;
      } else {
        this.roster = this.payrollService.getBatch(this.batchId).rosters
          .filter(x => x.id === this.rosterId)[0];

        if (this.roster.isOffCycle) {
          this.gridContainer.selection = {
            mode: 'multiple',
            showCheckBoxesMode: 'always'
          };
        }
      }

      /*
         Make a shallow copy of the object so unsaved changes aren't reflected in the
         object since we're working directly with an object from the service
       */
      this.employees = JSON.parse(JSON.stringify(this.roster.employees));
      this.tabTitle = 'Batch: ' + this.batchId + ' - ' + this.roster.frequency;
      this.tabTitleDate = this.roster.checkDate.toLocaleString();
      this.tempRoster = JSON.parse(JSON.stringify(this.roster));
    });

    this.payCodeList = this.payrollService.getPayCodeList();
    this.payCodeTypeList = this.payrollService.getPayCodeTypes();

    this.payrollService.setCurrentStep(this.batchId, this.rosterId, 1);
    this.rosterSummary = {};
    this.updateColumnHeadings();
    this.jobCodes = this.payrollService.getJobCodes();
    this.divisions = this.payrollService.getDivisions();
    this.departments = this.payrollService.getDepartments();
    this.locations = this.payrollService.getLocations();
    this.projects = this.payrollService.getProjects();
    this.payPeriods = this.payrollService.getPayPeriodList();
  }

  onDropdownClick(args, obj, menu) {
    debugger;
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
    } else if (args.itemData.id === 'AddDeduction') {
      this.openActionModal('sm', this.payrollAddDeductionModalComponent);
    } else if (args.itemData.id === 'ViewEmployeeDetail') {
      this.goToEmployeeDetail(this.selectedEmployee);
    } else if (args.itemData.id === 'AddJobCosting') {
       this.expandJobCosting();
    }
  }

  paycode_itemSelectionChanged(e) {
    const addedItems = e.addedItems;
    const removedItems = e.removedItems;
    let isChecked = false;
    let payCode: PayCode;

    if (addedItems.length === 1) {
      payCode = addedItems[0];
      isChecked = true;
    } else {
      payCode = removedItems[0];
    }

    // This line is necesary to keyboard navigation
    this.gridContainer.columns.find(c => c.dataField === payCode.columnMapping).visible = isChecked;
    this.gridContainer.instance.columnOption(payCode.columnMapping, 'visible', isChecked);
    this.gridContainer.instance.refresh();
    // this.gridContainer.instance.repaint();
    // this.gridContainer.instance.updateDimensions();

    if (isChecked) {
      console.log('Adding Column: ' + payCode.columnMapping);
    } else {
      console.log('Removing Column: ' + payCode.columnMapping);
    }

    this.updateColumnHeadings();
  }

  paycode_itemClick(e) {
    e.event.stopPropagation();
  }

  openActionModal(size, content) {
    this.actionModalHandle = this.modalService.open(content, { size: size });
  }

  checkMemoListener(e) {
    this.selectedEmployee.checkMemo = e.checkMemo;
  }

  tryCancelBatch() {
    debugger;
    this.deletePopupVisible = true;
  }

  onNoClick() {
    this.deletePopupVisible = false;
  }

  cancelBatch() {
    debugger;
    this.router.navigate(['/client/payroll/run']);
  }

  saveAndExit() {
    if (this.isValidBatch()) {
      this.saveData();
      this.router.navigate(['/client/payroll/run']);
    }
  }

  goToBack() {
    this.router.navigate(['/client/payroll/run']);
  }

  goToEmployeeDetail(data: { id: number }) {
    const employeeDetailUrl: string = '/client/employees/employee/' + data.id + '/details';

    this.goToUrl(employeeDetailUrl);
  }

  goToNext() {
    if (this.isValidBatch()) {
      this.saveData();
      this.router.navigate(['/client/payroll/run/batch/' + this.roster.batchNumber + '/roster/' + this.roster.id + '/deductions']);
    }
  }

  goToUrl(url: string) {
    window.open(url, '_blank');
  }

  onCheckboxValueChanged(e): void {
    if (this.isPayCodeDefault) {
      this.setPayCodeDefault();
    } else {
      this.employees = JSON.parse(JSON.stringify(this.tempEmployees));
    }

    this.updateColumnHeadings();
  }

  setPayCodeDefault(): void {
    const payCodeDefault: PayCodeDefault = this.payrollService.getPayCodeDefault();
    this.tempEmployees = JSON.parse(JSON.stringify(this.employees));
    this.employees.forEach(e => {
      e.pc_regularPay = payCodeDefault.pc_regularPay;
      e.pc_overtime = payCodeDefault.pc_overtime;
      e.pc_vacation = payCodeDefault.pc_vacation;
      e.pc_sickDay = payCodeDefault.pc_sickDay;
      e.pc_holiday = payCodeDefault.pc_holiday;
      e.pc_bonus = payCodeDefault.pc_bonus;
      e.pc_commission = payCodeDefault.pc_commission;
      e.pc_autoAllowance = payCodeDefault.pc_autoAllowance;
      e.pc_autoReimbursment = payCodeDefault.pc_autoReimbursment;
    });
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
    if (!obj) {
      return;
    }

    const currentComponent = this;
    const payCodeDefault = this.isPayCodeDefault;
    const gridContainer = this.gridContainer as any;

    if (obj.row && this.roster.isOffCycle) {
      const employee = this.employees.filter(emp => emp.id === obj.row.key)[0];
      if (employee) {
        obj.editorOptions.disabled = !employee.enabled;
      }
    }

    obj.editorOptions.onKeyDown = function (e) {
      const findHandler = currentComponent.mapKeysToHandlers[e.event.key];
      if (findHandler) {
        if (!payCodeDefault) {
          findHandler(obj.row.rowIndex, currentComponent);
          e.event.preventDefault();
          e.event.stopPropagation();
        }
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

    if (obj.row.data.jobCostDetails === undefined
      || obj.row.data.jobCostDetails === null
      || obj.row.data.jobCostDetails.length === 0) {
      obj.editorOptions.visible = true;
    } else if (obj.row.data.jobCostDetails.length > 0) {
      obj.editorOptions.visible = false;
    }
  }

  onContentReady(e) {
    const selectedRows = this.employees.filter(emp => emp.enabled === true).map(selectedEmp => selectedEmp.id);
    this.gridContainer.instance.selectRows(selectedRows, false);

    this.overrideAlternatingRowStyle();
    this.showJobCostingInfo();
    this.updateColumnHeadings();
  }

  selectionChangedHandler(e) {
    debugger;
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

    // console.log(e);
  }

  updatedEmployeeDeductionListener(e) {
    const updateEmployee = e.updatedEmployee;
    for (const propertyName in this.selectedEmployee) {
      if (e.updatedEmployee.hasOwnProperty(propertyName) && propertyName.toLowerCase().startsWith('dc_')) { // Just to make tslint happy
        this.selectedEmployee[propertyName] = e.updatedEmployee[propertyName];
      }
    }
  }

  onRowUpdated(e) {
    this.updateColumnHeadings();
  }

  updateColumnHeadings() {
    try {
      const currentComponent = this;
      const dxCodelist = this.dxCodelist;
      const rosterSummary = this.rosterSummary;
      //const employees = this.employees;
      const precisionfactor = Math.pow(10, 4);
      const sumColumnMappingNameSuffix = this.sumColumnMappingNameSuffix;

      if (dxCodelist) {
        setTimeout(function () {
          dxCodelist.selectedItems.forEach(function (codeType) {
            codeType.items.forEach(function (code) {
              const isHourly = codeType.key.toLowerCase() === 'hourly';
              const sumColumnMappingName = code.columnMapping + sumColumnMappingNameSuffix;

              // Summary the columns and job costing from master row
              rosterSummary[sumColumnMappingName] = currentComponent.employees.reduce(
                (accumulator, currentValue) => accumulator + currentValue[code.columnMapping], 0);

              rosterSummary[sumColumnMappingName] += currentComponent.getEmployeeJobCostSumByPayCode(currentComponent.employees, code);
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

  autoPayConfirmedListener(e) {
    this.gridContainer.instance.cancelEditData();
    this.employees = e.employees;
    this.tempRoster.employees = this.employees;
    this.updateColumnHeadings();
  }

  get diagnosticRosterSummary() { return JSON.stringify(this.rosterSummary); }
  get diagnosticEmployees() { return JSON.stringify(this.employees); }
  get diagnosticJobCostList() { return JSON.stringify(this.jobCodes); }
  get diagnosticAlerts() { return JSON.stringify(this.page.alerts); }
  get diagnosticColumns() { return JSON.stringify(this.gridContainer.columns); }
  get diagnosticTempRoster() { return JSON.stringify(this.tempRoster); }
  get diagnosticRoster() { return JSON.stringify(this.roster); }

  // autocomplete search field formatter
  searchAutocompleteFormatter = (x: any) => x.employeeName;

  // function to Search autocomplete dropdown
  searchAutocompleteField = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.payrollService.employees.filter(empRec => {
          const fullName: string = empRec.employeeName;
          if (empRec.employeeName) {
            if (empRec.employeeName.toLowerCase().includes(term.toLowerCase())
            ) {
              return true;
            }
          }
        })
          .splice(0, 10))

  // function to search the list of employees
  searchEmployees(searchString) {
    this.gridContainer.instance.collapseAll(-1);
    this.roster.employees = [];

    if (searchString) {
      const firstEmployees = this.payrollService.employees
        .filter(emp => emp.employeeName.toLocaleLowerCase().includes(searchString.toLowerCase()))[0];
      if (firstEmployees) {
        this.roster.employees.push(firstEmployees);
      } else {
        this.searchText = '';
      }
    } else {
      this.searchText = '';
    }
    this.employees = JSON.parse(JSON.stringify(this.roster.employees));
  }

  initAutoPay() {

    for (const employee of this.employees) {
      employee['isSelected'] = false;
    }

    this.tempRoster.employees = this.employees;
    this.openActionModal('llg', this.payrollAutoPayModalComponent);
  }

  onGridnitialized(e) {
    this.updateColumnHeadings();
  }

  onCellPrepared(e) {

  }

  expandJobCosting() {
    this.gridContainer.instance.expandRow(this.selectedEmployee.id);

    this.addJobCostingRow(this.selectedEmployee);
  }

  addJobCostingRow(employee: Employee) {

    let isNewJobCostDetails = false;
    const randNum = Math.random();
    const currentDate = new Date();

    if (employee.jobCostDetails === null || employee.jobCostDetails === undefined) {
      employee.jobCostDetails = [];
    }

    if (employee.jobCostDetails.length === 0) {
      isNewJobCostDetails = true;
    }

    for (const propertyName in employee) {
      if (propertyName.toLowerCase().startsWith('pc_')) {

        if (isNewJobCostDetails && employee[propertyName] > 0) {
          const payCode = this.payCodeList.filter(x => x.columnMapping === propertyName)[0];
          employee.jobCostDetails.push(
            {
              id: 0,
              hours: employee[propertyName],
              rate: payCode.type.toLowerCase() === 'fixed' ? 0 : parseFloat(employee.rate.replace(/[^0-9.]/ig, '')),
              payCode: payCode,
              jobCode: employee.jobCode,
              units: 1,
              division: employee.division,
              department: employee.department,
              location: employee.location,
              project: employee.project,
              date: currentDate,
              datePicker: this.payrollService.convertDateToNgDateStruct(currentDate)
            }
          );
        }

        employee[propertyName] = 0;
      }
    }

    employee.jobCostDetails.push({
      id: 0,
      hours: null,
      rate: 0,
      payCode: null,
      jobCode: employee.jobCode,
      units: 1,
      division: employee.division,
      department: employee.department,
      location: employee.location,
      project: employee.project,
      date: currentDate,
      datePicker: this.payrollService.convertDateToNgDateStruct(currentDate)
    });

    this.gridContainer.instance.refresh();
    // this.gridContainer.instance.repaintRows([this.getEmployeeRowIndex(employee)]);
    // this.gridContainer.instance.repaint();
  }

  removeJobCostingRow(employee: Employee, index: number) {
    employee.jobCostDetails.splice(index, 1);

    if (employee.jobCostDetails.length === 0) {
      this.gridContainer.instance.collapseRow(employee.id);
    }

    this.updateColumnHeadings();
    // this.gridContainer.instance.repaint();
    // this.gridContainer.instance.repaintRows([this.getEmployeeRowIndex(employee)]);
    this.gridContainer.instance.refresh();
    // this.isValidBatch();
  }

  onSelectBoxSelectionChanged(obj: any, propertyName: string, selectedItem: any) {
    obj[propertyName] = selectedItem;
  }

  onPayCodeSelectBoxSelectionChanged(jobCost: JobCost, dxSelectBoxHours: DxSelectBoxComponent, dxSelectBoxUnits: DxSelectBoxComponent) {
    const currentComponent = this;

    setTimeout(function () {
      if (dxSelectBoxHours.disabled) {
        jobCost.hours = 0;
      }

      if (dxSelectBoxUnits.disabled) {
        jobCost.units = 1;
      }

      if (jobCost.payCode.type.toLowerCase() === 'piece work' && jobCost.rate === null) {
        jobCost.rate = 0;
      }

      currentComponent.updateColumnHeadings();
    }, 200);
  }

  isValidBatch(): boolean {
    this.page.alerts = [];

    return this.isValidJobCostingData();
  }

  isValidJobCostingData(): boolean {
    let isSuccessful = true;
    let errors: Message[] = [];

    for (const employee of this.employees) {
      // Iterating backwards to avoid recalcuating the indexes
      for (let index = employee.jobCostDetails.length - 1; index >= 0; index--) {

        const jobCost = employee.jobCostDetails[index];

        if (!jobCost.payCode) {
          // employee.jobCostDetails.splice(index, 1);
        } else if ((jobCost.payCode.type.toLowerCase() === 'hourly' && (jobCost.hours === null || jobCost.rate === null))
          || (jobCost.payCode.type.toLowerCase() === 'fixed' && jobCost.rate === null)
          || (jobCost.payCode.type.toLowerCase() === 'piece work' && (jobCost.rate === null || jobCost.units === null))
        ) {

          errors.push({
            text: `Employee ` + employee.employeeName
              + ` has invalid job costing data. Please correct or remove incomplete entries in order to save.`,
            actionText: null,
            actionUrl: null,
            read: false,
            type: 'danger'
          });

          window.scrollTo(0, 0);
          isSuccessful = false;
          break;
        }
      }
    }

    // Consolidate messages
    if (errors.length > 0) {
      if (errors.length > 1) {
        errors[0].text += ' ' + (errors.length - 1) + ' other employee(s) have the same issue.'
      }

      this.page.alerts.push(errors[0]);
    }

    return isSuccessful;
  }

  public convertNgDateStructToDate(dateStruct: NgbDateStruct) {
    return this.payrollService.convertNgDateStructToDate(dateStruct);
  }

  getEmployeeRowIndex(employee: Employee) {
    return this.gridContainer.instance.getRowIndexByKey(employee.id);
  }

  showJobCostingInfo() {
    const jobCostingEmployees = this.employees.filter(emp => emp.jobCostDetails.length > 0);

    for (const employee of jobCostingEmployees) {
      this.gridContainer.instance.expandRow(employee.id);
    }
  }

  onJobcostPayPeriodKeyDown(e, dxDateBox: DxDateBoxComponent) {
    switch (e.event.key.toLowerCase()) {
      case 'arrowdown':
      case ' ':
        dxDateBox.opened = true;
        break;
      case 'arrowup':
        // dxDateBox.opened = false;
        break;
    }
  }

  onJobcostPayPeriodClick(dxDateBox: DxDateBoxComponent) {
    dxDateBox.opened = !dxDateBox.opened;
  }

  onJobcostPayPeriodClosed() {
    this.gridContainer.instance.repaint();
  }

  onRowExpanding(e) {
    // const rowIndex = this.gridContainer.instance.getRowIndexByKey(e.key);
  }

  overrideAlternatingRowStyle(): any {
    let previousMasterRow: any;
    let index: number = -1;

    const dataRows = document.querySelectorAll('#gridContainer .dx-datagrid-content .dx-datagrid-table tbody .dx-row') as any;

    dataRows.forEach(dataRow => {
      if (dataRow.classList.contains('dx-master-detail-row')) {
        dataRow.classList.add(previousMasterRow.classList.contains('oddRow') ? 'oddRow' : 'evenRow');
      } else {
        index++;
        previousMasterRow = dataRow;
        previousMasterRow.classList.add(index % 2 === 1 ? 'evenRow' : 'oddRow');
      }
    });

  }

  getEmployeeJobCostSumByPayCode(employees: Employee[], payCode: PayCode) {
    const result = employees.reduce(
      (accumulator, currentEmployee) => accumulator
        + currentEmployee.jobCostDetails
        .filter(x => x.payCode && x.payCode.columnMapping === payCode.columnMapping)
          .reduce((jcAccumlator, currentJobCost) => jcAccumlator + currentJobCost.hours, 0)
      , 0)

    return result;
  }
}
