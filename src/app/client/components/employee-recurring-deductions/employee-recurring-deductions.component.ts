import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { NgbTabset, NgbDatepicker, NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
  IClientEmployeeRecurringDeduction,
  IClientEmployeeRecurringDeductionFrequency, IClientEmployeeRecurringDeductionType,
  IClientEmployeeRecurringDeductionPeriod, ClientEmployees
} from '../../models';

import { ClientEmployeeRecurringDeductionsService } from '../../services';
import { DxDataGridComponent, DxPopupComponent, DxTreeViewComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';

@Component({
  selector: 'app-employee-recurring-deductions',
  templateUrl: './employee-recurring-deductions.component.html',
  styleUrls: ['./employee-recurring-deductions.component.scss']
})
export class EmployeeRecurringDeductionsComponent implements OnInit {
  @ViewChild('recurringDeductionsDataGrid') dxDataGrid: DxDataGridComponent;
  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('editEmployeeRecurringDeductionModal') editEmployeeRecurringDeductionModal: NgbModal;
  @ViewChild('employeeRecurringDeductionComponent') employeeRecurringDeductionComponent: NgbModal;
  @ViewChild('treeViewAvailableDeductionPeriods') treeViewAvailableDeductionPeriods: DxTreeViewComponent;
  // @ViewChild('editEmployeeRecurringDeductionForm') editEmployeeRecurringDeductionForm: NgForm;

  selectedClientEmployeeRecurringDeductionModel: IClientEmployeeRecurringDeduction;
  clientEmployeeRecurringDeductionList: IClientEmployeeRecurringDeduction[];
  clientEmployeeRecurringDeductionTypeList: IClientEmployeeRecurringDeductionType[];
  clientEmployeeRecurringDeductionFrequencyList: IClientEmployeeRecurringDeductionFrequency[];
  clientEmployeeRecurringDeductionPeriodList: IClientEmployeeRecurringDeductionPeriod[];
  editEmployeeRecurringDeductionModalHandle: NgbModalRef;
  editEmployeeRecurringDeductionFormGroup: FormGroup;
  selectedPeriodsTreeBoxValue: string[];
  modalDOM: HTMLInputElement;
  modalBackdropDOM: HTMLInputElement;

  formTitle = 'Recurring Deduction';
  formMode = '';
  formStep = 1;

  isDropDownBoxOpened = false;

  constructor(
    private clientEmployeeRecurringDeductionsService: ClientEmployeeRecurringDeductionsService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private editEmployeeRecurringDeductionFormBuilder: FormBuilder) { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
    this.configureFormValidation();
    this.getDOMReferences();
  }

  getData(): void {

    // TODO: filter by employeeId
    this.clientEmployeeRecurringDeductionsService.getEmployeeRecurringDeductionList()
      .subscribe(ClientEmployeeRecurringDeductionList => {
        this.clientEmployeeRecurringDeductionList = ClientEmployeeRecurringDeductionList;
        this.clientEmployeeRecurringDeductionList.forEach((deduction) => {
          if (deduction.startDate) {
            const startDate = new Date(deduction.startDate);
            deduction.startDatePicker = {
              day: startDate.getUTCDate(),
              month: startDate.getUTCMonth() + 1,
              year: startDate.getUTCFullYear()
            };
          }

          if (deduction.endDate) {
            const dateValue = new Date(deduction.endDate);
            deduction.endDatePicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }
        });
      });

    // Get Deduction Type List
    this.clientEmployeeRecurringDeductionsService.getEmployeeRecurringDeductionTypeList()
      .subscribe(ClientEmployeeRecurringDeductionTypeList => {
        this.clientEmployeeRecurringDeductionTypeList = ClientEmployeeRecurringDeductionTypeList;
      });

    // Get Frequency List
    this.clientEmployeeRecurringDeductionsService.getEmployeeRecurringDeductionFrequencyList()
      .subscribe(ClientEmployeeRecurringDeductionFrequencyList => {
        this.clientEmployeeRecurringDeductionFrequencyList = ClientEmployeeRecurringDeductionFrequencyList;
      });

    // Get Period List
    this.clientEmployeeRecurringDeductionsService.getEmployeeRecurringDeductionPeriodList()
      .subscribe(ClientEmployeeRecurringDeductionPeriodList => {
        this.clientEmployeeRecurringDeductionPeriodList = ClientEmployeeRecurringDeductionPeriodList;
      });

    this.selectedClientEmployeeRecurringDeductionModel = <IClientEmployeeRecurringDeduction>{};
  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  configureFormValidation(): void {
    this.editEmployeeRecurringDeductionFormGroup = this.editEmployeeRecurringDeductionFormBuilder.group({
      deductionType: [null, Validators.required/**/],
      amount: [null, [Validators.required, Validators.min(0)]/**/],
      periods: [null, Validators.required],
      limit: [null, [Validators.required, Validators.min(0)]/**/],
      maximum: [null, [Validators.required, Validators.min(0)]/**/],
      basis: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      GLOverrideAccount: [null],
    }, { updateOn: 'submit' });
  }

  onEditingStart(event) {
    // Cancel the event since we're handling editing in a custom way (in another tab)
    event.cancel = true;

    // Get shallow copy the selected loan
    this.selectedClientEmployeeRecurringDeductionModel = JSON.parse(JSON.stringify(event.data));
    this.selectedPeriodsTreeBoxValue =
      this.selectedClientEmployeeRecurringDeductionModel.periods.map(function (a) { return a.id.toString(); });
    this.editLoan();
  }

  addLoan(): void {

    // Init model
    const defaultDate = new Date();
    const defaultNgDate = { day: defaultDate.getUTCDate(), month: defaultDate.getUTCMonth() + 1, year: defaultDate.getUTCFullYear() };
    this.formStep = 1;

    this.selectedClientEmployeeRecurringDeductionModel = <IClientEmployeeRecurringDeduction>{};
    this.selectedClientEmployeeRecurringDeductionModel.startDatePicker = defaultNgDate;
    this.selectedClientEmployeeRecurringDeductionModel.endDatePicker = defaultNgDate;
    this.selectedPeriodsTreeBoxValue = [];

    this.formMode = 'Add';
    this.formTitle = 'Add - Recurring Deduction';
    this.openForm();
  }

  editLoan(): void {
    this.formMode = 'Edit';
    this.formTitle = 'Edit - Recurring Deduction';
    this.formStep = 2;
    this.openForm();
  }

  openForm(): void {
    this.setFormAsUntouched();
    this.editEmployeeRecurringDeductionModalHandle = this.modalService.open(this.editEmployeeRecurringDeductionModal, { size: 'sm' });
    this.editEmployeeRecurringDeductionModalHandle.result.then((result) => {
    }, (reason) => {
    });

    this.toggleDetailView();
  }

  closeForm(): void {
    this.editEmployeeRecurringDeductionModalHandle.close();
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      /*
        Backend simulation!!!!!!!!!!!!!

        If there's no id (it's a new object), generate an id and push it to the payroll loan list
        else simulate a refresh by removing it from the list and pushing the update model to it
      */
      if (!this.selectedClientEmployeeRecurringDeductionModel.id) {
        this.selectedClientEmployeeRecurringDeductionModel.id =
          Math.round((new Date()).getTime() / 1000); // Simulating id with epoch time in seconds
        this.clientEmployeeRecurringDeductionList.push(this.selectedClientEmployeeRecurringDeductionModel);
      } else {
        const recurringDeductionId = this.selectedClientEmployeeRecurringDeductionModel.id;
        this.clientEmployeeRecurringDeductionList =
          this.clientEmployeeRecurringDeductionList.filter(function (x) { return x.id !== recurringDeductionId; });
        this.clientEmployeeRecurringDeductionList.push(this.selectedClientEmployeeRecurringDeductionModel);
        this.clientEmployeeRecurringDeductionList.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      this.closeForm();
    }
  }

  compareByIdFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  treeViewAvailableDeductionPeriods_itemSelectionChanged(e): void {
    this.selectedPeriodsTreeBoxValue = e.component.getSelectedNodesKeys();
    this.selectedClientEmployeeRecurringDeductionModel.periods =
      e.component._userOptions.dataSource.filter(function (x) { return x.selected === true; });
  }

  syncTreeViewOfAvailableDeductionSelection(e): void {
    const component = (e && e.component) || (this.treeViewAvailableDeductionPeriods && this.treeViewAvailableDeductionPeriods.instance);

    if (!component) {
      return;
    }

    component.unselectAll();

    if (this.selectedPeriodsTreeBoxValue) {
      this.selectedPeriodsTreeBoxValue.forEach((function (value) {
        component.selectItem(value);
      }).bind(this));
    }
  }

  toggleTreeViewOfAvailableDeductionSelection(e): void {
    // DO NOT REMOVE... NEEDED BY DEV EXTREME
  }

  radioButtonHasDetails_valueChanged(e): void {
    this.selectedClientEmployeeRecurringDeductionModel.hasDetails = e.value.toUpperCase() === 'YES' ? true : false;
    this.toggleDetailView();
  }

  toggleDetailView(): void {
    if (this.selectedClientEmployeeRecurringDeductionModel.hasDetails) {
      this.editEmployeeRecurringDeductionFormGroup.controls['limit'].enable();
      this.editEmployeeRecurringDeductionFormGroup.controls['maximum'].enable();
      this.editEmployeeRecurringDeductionFormGroup.controls['basis'].enable();
      this.editEmployeeRecurringDeductionFormGroup.controls['startDate'].enable();
      this.editEmployeeRecurringDeductionFormGroup.controls['endDate'].enable();
    } else {
      this.editEmployeeRecurringDeductionFormGroup.controls['limit'].disable();
      this.editEmployeeRecurringDeductionFormGroup.controls['maximum'].disable();
      this.editEmployeeRecurringDeductionFormGroup.controls['basis'].disable();
      this.editEmployeeRecurringDeductionFormGroup.controls['startDate'].disable();
      this.editEmployeeRecurringDeductionFormGroup.controls['endDate'].disable();
    }
  }

  ChangeBasis(item: IClientEmployeeRecurringDeductionFrequency): void {
    this.selectedClientEmployeeRecurringDeductionModel.basis = item;
  }

  setFormAsUntouched(): void {
    const controls = this.editEmployeeRecurringDeductionFormGroup.controls;
    for (const propertyName in controls) {
      if (controls.hasOwnProperty(propertyName)) { // Just to make tslint happy
        controls[propertyName].markAsUntouched();
      }
    }

  }

  get diagnostic() { return JSON.stringify(this.selectedClientEmployeeRecurringDeductionModel); }
  get diagnosticEmployee() { return JSON.stringify(this.clientEmployee); }

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

  onEnterKeyDown(event) {
    if (event.event.code === 'Enter') {
      this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
      event.event.stopPropagation();
    }
  }
}
