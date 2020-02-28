import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  ClientEmployees, IClientEmployeeScheduledPayments, IClientEmployeeScheduledPaymentsStatus,
  IClientEmployeeScheduledPaymentsType, IClientEmployeeScheduledPaymentsDeductionPeriod
} from '../../models';
import { NgbTabset, NgbDatepicker, NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, FormControl } from '@angular/forms';
import { ClientEmployeeScheduledPaymentsService } from '../../services';
import { DxDataGridComponent, DxPopupComponent, DxTreeViewComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';

@Component({
  selector: 'app-employee-scheduled-payments',
  templateUrl: './employee-scheduled-payments.component.html',
  styleUrls: ['./employee-scheduled-payments.component.scss']
})
export class EmployeeScheduledPaymentsComponent implements OnInit {
  @ViewChild('schedulePaymentsDataGrid') dxDataGrid: DxDataGridComponent;
  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('editEmployeeScheduledPaymentsModal') editEmployeeScheduledPaymentsModal: NgbModal;
  @ViewChild('employeeScheduledPaymentsComponent') employeeScheduledPaymentsComponent: NgbModal;
  @ViewChild('treeViewAvailableDeductionPeriods') treeViewAvailableDeductionPeriods: DxTreeViewComponent;

  selectedClientEmployeeScheduledPaymentsModel: IClientEmployeeScheduledPayments;
  clientEmployeeScheduledPaymentsList: IClientEmployeeScheduledPayments[];
  clientEmployeeScheduledPaymentsStatusList: IClientEmployeeScheduledPaymentsStatus[];
  clientEmployeeScheduledPaymentsTypeList: IClientEmployeeScheduledPaymentsType[];
  clientEmployeeScheduledPaymentsDeductionPeriodList: IClientEmployeeScheduledPaymentsDeductionPeriod[];
  editEmployeeScheduledPaymentsModalHandle: NgbModalRef;
  editEmployeeScheduledPaymentsFormGroup: FormGroup;
  selectedPeriodsTreeBoxValue: string[];
  modalDOM: HTMLInputElement;
  modalBackdropDOM: HTMLInputElement;

  formTitle = 'Scheduled Payments';
  formMode = '';
  formStep = 1;

  openedPayCodeDescription: boolean;
  openedStatus: boolean;

  isDropDownBoxOpened = false;

  constructor(
    private clientEmployeeScheduledPaymentsService: ClientEmployeeScheduledPaymentsService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private editEmployeeScheduledPaymentsFormBuilder: FormBuilder
  ) {
    this.openedPayCodeDescription = false;
    this.openedStatus = false;
   }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
    this.configureFormValidation();
    this.getDOMReferences();
  }

  getData() {
    // TODO: filter by employeeId
    this.clientEmployeeScheduledPaymentsService.getEmployeeScheduledPaymentsList()
      .subscribe(clientEmployeeScheduledPaymentsService => {
        this.clientEmployeeScheduledPaymentsList = clientEmployeeScheduledPaymentsService;
        this.clientEmployeeScheduledPaymentsList.forEach((scheduledPayment) => {
          if (scheduledPayment.startDate) {
            const dateValue = new Date(scheduledPayment.startDate);
            scheduledPayment.startDatePicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }

          if (scheduledPayment.stopDate) {
            const dateValue = new Date(scheduledPayment.stopDate);
            scheduledPayment.stopDatePicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }

        });
      });

    // Get Payment Type List
    this.clientEmployeeScheduledPaymentsService.getEmployeeScheduledPaymentsPayCodesList()
      .subscribe(clientEmployeeScheduledPaymentsTypeList => {
        console.log('Payment Types : ' + JSON.stringify(clientEmployeeScheduledPaymentsTypeList));

        this.clientEmployeeScheduledPaymentsTypeList = clientEmployeeScheduledPaymentsTypeList;
      });

    // Get Status List
    this.clientEmployeeScheduledPaymentsService.getEmployeeScheduledPaymentsStatusList()
      .subscribe(ClientEmployeeScheduledPaymentsStatusList => {
        console.log('Status: ' + JSON.stringify(ClientEmployeeScheduledPaymentsStatusList));

        this.clientEmployeeScheduledPaymentsStatusList = ClientEmployeeScheduledPaymentsStatusList;
      });

    // Get Period List
    this.clientEmployeeScheduledPaymentsService.getEmployeeScheduledPaymentsDeductionPeriodList()
      .subscribe(clientEmployeeScheduledPaymentsDeductionPeriodList => {
        console.log('Ded Periods: ' + JSON.stringify(clientEmployeeScheduledPaymentsDeductionPeriodList));
        this.clientEmployeeScheduledPaymentsDeductionPeriodList = clientEmployeeScheduledPaymentsDeductionPeriodList;
      });

    this.selectedClientEmployeeScheduledPaymentsModel = <IClientEmployeeScheduledPayments>{};

  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  configureFormValidation(): void {
    this.editEmployeeScheduledPaymentsFormGroup = this.editEmployeeScheduledPaymentsFormBuilder.group({
      paymentType: [null, Validators.required],
      startDate: [null, Validators.required],
      stopDate: [null, Validators.required],
      deductionPeriod: [null, Validators.required],
      status: [null, Validators.required],
      amount: [null, Validators.required]
    }, { updateOn: 'submit' });
  }

  onEditingStart(event) {

    // Cancel the event since we're handling editing in a custom way (in another tab)
    event.cancel = true;

    // Get shallow copy the selected loan
    this.selectedClientEmployeeScheduledPaymentsModel = JSON.parse(JSON.stringify(event.data)); // Object.assign({}, event.data);
    this.selectedPeriodsTreeBoxValue = this.selectedClientEmployeeScheduledPaymentsModel
      .deductionPeriod.map(function (a) { return a.id.toString(); });
    this.editScheduledPayment();
  }

  addScheduledPayment(): void {

    // Init model
    const defaultDate = new Date();
    const defaultNgDate = { day: defaultDate.getUTCDate(), month: defaultDate.getUTCMonth() + 1, year: defaultDate.getUTCFullYear() };
    this.formStep = 1;

    this.selectedClientEmployeeScheduledPaymentsModel = <IClientEmployeeScheduledPayments>{};
    this.selectedClientEmployeeScheduledPaymentsModel.startDatePicker = defaultNgDate;
    this.selectedClientEmployeeScheduledPaymentsModel.stopDatePicker = defaultNgDate;
    this.selectedPeriodsTreeBoxValue = [];

    this.formMode = 'Add';
    this.formTitle = 'Add - Scheduled Payment';
    this.openForm();
  }

  editScheduledPayment(): void {
    this.formMode = 'Edit';
    this.formTitle = 'Edit - Scheduled Payment';
    this.formStep = 2;
    this.openForm();
  }

  openForm(): void {
    this.editEmployeeScheduledPaymentsModalHandle = this.modalService.open(this.editEmployeeScheduledPaymentsModal, { size: 'sm' });
    this.editEmployeeScheduledPaymentsModalHandle.result.then((result) => {
    }, (reason) => {
    });
  }

  closeForm(): void {
    this.editEmployeeScheduledPaymentsModalHandle.close();
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      this.convertViewModelToModel();

      /*
        Backend simulation!!!!!!!!!!!!!

        If there's no id (it's a new object), generate an id and push it to the payroll loan list
        else simulate a refresh by removing it from the list and pushing the update model to it
      */
      if (!this.selectedClientEmployeeScheduledPaymentsModel.id) {
        this.selectedClientEmployeeScheduledPaymentsModel.id =
          Math.round((new Date()).getTime() / 1000); // Simulating id with epoch time in seconds
        this.clientEmployeeScheduledPaymentsList.push(this.selectedClientEmployeeScheduledPaymentsModel);
      } else {
        const loanId = this.selectedClientEmployeeScheduledPaymentsModel.id;
        this.clientEmployeeScheduledPaymentsList =
          this.clientEmployeeScheduledPaymentsList.filter(function (x) { return x.id !== loanId; });
        this.clientEmployeeScheduledPaymentsList.push(this.selectedClientEmployeeScheduledPaymentsModel);
        this.clientEmployeeScheduledPaymentsList.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      this.closeForm();
    }
  }

  convertViewModelToModel(): void {
    const startDatePicker = this.selectedClientEmployeeScheduledPaymentsModel.startDatePicker;
    this.selectedClientEmployeeScheduledPaymentsModel.startDate =
      new Date(startDatePicker.year, startDatePicker.month - 1, startDatePicker.day).toDateString();

    const stopDatePicker = this.selectedClientEmployeeScheduledPaymentsModel.stopDatePicker;
    this.selectedClientEmployeeScheduledPaymentsModel.stopDate =
      new Date(stopDatePicker.year, stopDatePicker.month - 1, stopDatePicker.day).toDateString();
  }

  compareByIdFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  treeViewAvailableDeductionPeriods_itemSelectionChanged(e): void {
    this.selectedPeriodsTreeBoxValue = e.component.getSelectedNodesKeys();
    this.selectedClientEmployeeScheduledPaymentsModel.deductionPeriod =
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

  changePaymentType(paymentType: IClientEmployeeScheduledPaymentsType): void {
    this.formStep = 2;
  }

  get diagnostic() { return JSON.stringify(this.selectedClientEmployeeScheduledPaymentsModel); }
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

  onEnterKey(event) {
    this.openedPayCodeDescription = !this.openedPayCodeDescription;
  }

  onStatusEnterKey(event) {
    this.openedStatus = !this.openedStatus;
  }

  onClosed(event) {
    this.openedPayCodeDescription = false;
  }

  onStatusClosed(event) {
    this.openedStatus = false;
  }

  onEnterKeyDown(event) {
    if (event.event.code === 'Enter') {
      this.isDropDownBoxOpened = !this.isDropDownBoxOpened;
      event.event.stopPropagation();
    }
  }
}
