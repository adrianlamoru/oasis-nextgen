import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { NgbTabset, NgbDatepicker, NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {
  IClientEmployeePayrollLoan,
  IClientEmployeePayrollLoanStatus, IClientEmployeePayrollLoanReason,
  IClientEmployeePayrollLoanPaymentFrequency, ClientEmployees
} from '../../models';
import { ClientEmployeePayrollLoansService } from '../../services';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';
import { Event } from '@angular/router';

@Component({
  selector: 'app-employee-payroll-loans',
  templateUrl: './employee-payroll-loans.component.html',
  styleUrls: ['./employee-payroll-loans.component.scss']
})
export class EmployeePayrollLoansComponent implements OnInit {
  @ViewChild('loansDataGrid') dxDataGrid: DxDataGridComponent;
  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('editEmployeePayrollLoanModal') editEmployeePayrollLoanModal: NgbModal;
  @ViewChild('employeePayrollLoansComponent') employeePayrollLoansComponent: NgbModal;
  // @ViewChild('editEmployeePayrollLoanForm') editEmployeePayrollLoanForm: NgForm;

  selectedClientEmployeePayrollLoanModel: IClientEmployeePayrollLoan;
  clientEmployeePayrollLoanList: IClientEmployeePayrollLoan[];
  clientEmployeePayrollLoanStatusList: IClientEmployeePayrollLoanStatus[];
  clientEmployeePayrollLoanReasonList: IClientEmployeePayrollLoanReason[];
  clientEmployeePayrollLoanPaymentFrequencyList: IClientEmployeePayrollLoanPaymentFrequency[];
  editEmployeePayrollLoanModalHandle: any;
  editEmployeePayrollLoanFormGroup: FormGroup;
  modalDOM: HTMLInputElement;
  modalBackdropDOM: HTMLInputElement;

  formTitle = 'Payroll Loan';
  formMode = '';

  openedPaymentFrequency: boolean;

  constructor(
    private clientEmployeePayrollLoansService: ClientEmployeePayrollLoansService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private editEmployeePayrollLoanFormBuilder: FormBuilder
  ) {
    this.openedPaymentFrequency = false;
   }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
    this.configureFormValidation();
    this.getDOMReferences();
  }

  getData(): void {

    // TODO: filter by employeeId
    this.clientEmployeePayrollLoansService.getEmployeePayrollLoanList()
      .subscribe(ClientEmployeePayrollLoanList => {
        this.clientEmployeePayrollLoanList = ClientEmployeePayrollLoanList;
        this.clientEmployeePayrollLoanList.forEach((loan) => {
          if (loan.startDate) {
            const dateValue = new Date(loan.startDate);
            loan.startDatePicker = { day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear() };
          }

          if (loan.stopDate) {
            const dateValue = new Date(loan.stopDate);
            loan.stopDatePicker = { day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear() };
          }

          if (loan.date) {
            const dateValue = new Date(loan.date);
            loan.datePicker = { day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear() };
          }

        });
      });

    // Get Status List
    this.clientEmployeePayrollLoansService.getEmployeePayrollLoanStatusList()
      .subscribe(ClientEmployeePayrollLoanStatusList => {
        this.clientEmployeePayrollLoanStatusList = ClientEmployeePayrollLoanStatusList;
      });

    // Get Reason List
    // this.clientEmployeePayrollLoansService.getEmployeePayrollLoanReasonList()
    //  .subscribe(ClientEmployeePayrollLoanReasonList => {
    //    this.clientEmployeePayrollLoanReasonList = ClientEmployeePayrollLoanReasonList;
    //  });

    // Get Payment Frequency List
    this.clientEmployeePayrollLoansService.getEmployeePayrollLoanPaymentFrequencyList()
      .subscribe(ClientEmployeePayrollLoanPaymentFrequencyList => {
        this.clientEmployeePayrollLoanPaymentFrequencyList = ClientEmployeePayrollLoanPaymentFrequencyList;
      });

    this.selectedClientEmployeePayrollLoanModel = <IClientEmployeePayrollLoan>{};
  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  configureFormValidation(): void {
    this.editEmployeePayrollLoanFormGroup = this.editEmployeePayrollLoanFormBuilder.group({
      date: [null, Validators.required],
      reason: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      payAmount: [null, [Validators.required, Validators.min(1)]],
      frequency: [null, Validators.required],
      startDate: [null, Validators.required],
      stopDate: [null, Validators.required],
      paybackAmount: [null, [Validators.required, Validators.min(1)]]
    }, { updateOn: 'blur' });
  }

  onEditingStart(event) {

    // Cancel the event since we're handling editing in a custom way (in another tab)
    event.cancel = true;

    // Get shallow copy the selected loan
    this.selectedClientEmployeePayrollLoanModel = JSON.parse(JSON.stringify(event.data)); // Object.assign({}, event.data);

    this.editLoan();
  }

  addLoan(): void {

    // Init model
    const defaultDate = new Date();
    const defaultNgDate = { day: defaultDate.getUTCDate(), month: defaultDate.getUTCMonth() + 1, year: defaultDate.getUTCFullYear() };

    this.selectedClientEmployeePayrollLoanModel = <IClientEmployeePayrollLoan>{};
    this.selectedClientEmployeePayrollLoanModel.datePicker = defaultNgDate;
    this.selectedClientEmployeePayrollLoanModel.startDatePicker = defaultNgDate;
    this.selectedClientEmployeePayrollLoanModel.stopDatePicker = defaultNgDate;

    this.selectedClientEmployeePayrollLoanModel.frequency = this.clientEmployeePayrollLoanPaymentFrequencyList[0];
    // this.selectedClientEmployeePayrollLoanModel.amount = 0;
    // this.selectedClientEmployeePayrollLoanModel.payAmount = 0;
    this.selectedClientEmployeePayrollLoanModel.repaidAmount = 0;
    // this.selectedClientEmployeePayrollLoanModel.paybackAmount = 0;

    this.formMode = 'Add';
    this.formTitle = 'Add - Payroll Loan';
    this.openForm();
  }

  editLoan(): void {
    this.formMode = 'Edit';
    this.formTitle = 'Edit - Payroll Loan';
    this.openForm();
  }

  openForm(): void {
    this.setFormAsUntouched();
    this.editEmployeePayrollLoanModalHandle = this.modalService.open(this.editEmployeePayrollLoanModal, { size: 'sm' });
    // this.formIsOpen = true;
  }

  closeForm(): void {
    this.editEmployeePayrollLoanModalHandle.close();
  }

  saveForm(form: NgForm): void {

    if (form.valid) {
      this.convertViewModelToModel();

      // this.clientEmployeePayrollLoansService.postEmployeePayrollLoanList(this.selectedClientEmployeePayrollLoanModel);

      /*
        Backend simulation!!!!!!!!!!!!!

        If there's no id (it's a new object), generate an id and push it to the payroll loan list
        else simulate a refresh by removing it from the list and pushing the update model to it
      */
      if (!this.selectedClientEmployeePayrollLoanModel.id) {
        this.selectedClientEmployeePayrollLoanModel.id =
                            Math.round((new Date()).getTime() / 1000); // Simulating id with epoch time in seconds
        this.selectedClientEmployeePayrollLoanModel.status = this.clientEmployeePayrollLoanStatusList[0];
        this.clientEmployeePayrollLoanList.push(this.selectedClientEmployeePayrollLoanModel);
      } else {
        const loanId = this.selectedClientEmployeePayrollLoanModel.id;
        this.clientEmployeePayrollLoanList = this.clientEmployeePayrollLoanList.filter(function (x) { return x.id !== loanId; });
        this.clientEmployeePayrollLoanList.push(this.selectedClientEmployeePayrollLoanModel);
        this.clientEmployeePayrollLoanList.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      this.closeForm();
    }
  }

  convertViewModelToModel(): void {
    const datePicker = this.selectedClientEmployeePayrollLoanModel.datePicker;
    this.selectedClientEmployeePayrollLoanModel.date = new Date(datePicker.year, datePicker.month - 1, datePicker.day).toDateString();

    const startDatePicker = this.selectedClientEmployeePayrollLoanModel.startDatePicker;
    this.selectedClientEmployeePayrollLoanModel.startDate =
                    new Date(startDatePicker.year, startDatePicker.month - 1, startDatePicker.day).toDateString();

    const stopDatePicker = this.selectedClientEmployeePayrollLoanModel.stopDatePicker;
    this.selectedClientEmployeePayrollLoanModel.stopDate =
                    new Date(stopDatePicker.year, stopDatePicker.month - 1, stopDatePicker.day).toDateString();
  }

  compareByIdFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  setFormAsUntouched(): void {
    const controls = this.editEmployeePayrollLoanFormGroup.controls;
    for (const propertyName in controls) {
      if (controls.hasOwnProperty(propertyName)) { // Just to make tslint happy
        controls[propertyName].markAsUntouched();
      }
    }

  }

  get diagnostic() { return JSON.stringify(this.selectedClientEmployeePayrollLoanModel); }
  get diagnosticEmployee() { return JSON.stringify(this.clientEmployee); }

  onEditRow(data) {
    this.dxDataGrid.instance.editRow(data.rowIndex);
  }

  onEditKeyDown(event, data) {
      if (event.keyCode === 13) {
          this.onEditRow(data);
      }
  }

  onPaymentFrequencyEnterKey(event) {
    this.openedPaymentFrequency = !this.openedPaymentFrequency;
  }

  onPaymentFrequencyClosed(event) {
    this.openedPaymentFrequency = false;
  }
}

