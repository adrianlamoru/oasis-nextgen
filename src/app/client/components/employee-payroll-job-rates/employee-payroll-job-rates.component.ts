import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { NgbTabset, NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, FormControl } from '@angular/forms';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';
import { ClientEmployees, IClientEmployeeJobRates, IClientEmployeeJobRatesType, IClientEmployeeJobRatesPayCodeType } from '../../models';
import { ClientEmployeeJobRatesService } from '../../services';

@Component({
  selector: 'app-employee-payroll-job-rates',
  templateUrl: './employee-payroll-job-rates.component.html',
  styleUrls: ['./employee-payroll-job-rates.component.scss']
})
export class EmployeePayrollJobRatesComponent implements OnInit {
  @ViewChild('JobRatesDataGrid') dxDataGrid: DxDataGridComponent;
  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('editEmployeePayrollJobRatesModal') editEmployeePayrollJobRatesModal: NgbModal;
  @ViewChild('employeePayrollJobRatesComponent') employeePayrollJobRatesComponent: NgbModal;

  selectedClientEmployeePayrollJobRatesModel: IClientEmployeeJobRates;
  clientEmployeePayrollJobRatesList: IClientEmployeeJobRates[];
  clientEmployeePayrollJobRatesTypeList: IClientEmployeeJobRatesType[];
  clientEmployeePayrollJobRatesPayCodeTypeList: IClientEmployeeJobRatesPayCodeType[];
  editEmployeePayrollJobRatesModalHandle: NgbModalRef;
  editEmployeePayrollJobRatesFormGroup: FormGroup;
  modalDOM: HTMLInputElement;
  modalBackdropDOM: HTMLInputElement;

  editJobRateItem: boolean;
  formTitle = 'Job Rates';
  formMode = '';
  constructor(
    private clientEmployeePayrollJobRatesService: ClientEmployeeJobRatesService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private editEmployeePayrollJobRatesFormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
    this.configureFormValidation();
    this.getDOMReferences();
  }

  getData() {
    // TODO: filter by employeeId
    this.clientEmployeePayrollJobRatesService.getEmployeeJobRatesList()
      .subscribe(clientEmployeePayrollJobRatesList => {
        this.clientEmployeePayrollJobRatesList = clientEmployeePayrollJobRatesList;
        // this.clientEmployeePayrollJobRatesList.forEach((jobRate) => {

        // });
      });

    // Get Job Code Type List
    this.clientEmployeePayrollJobRatesService.getEmployeeJobRatesJobCodesList()
      .subscribe(clientEmployeePayrollJobRatesJobCodeList => {
        console.log('Job Types : ' + JSON.stringify(clientEmployeePayrollJobRatesJobCodeList));

        this.clientEmployeePayrollJobRatesTypeList = clientEmployeePayrollJobRatesJobCodeList;
      });
    // Get Pay Code Type List
    this.clientEmployeePayrollJobRatesService.getEmployeeJobRatesPayCodesList()
     .subscribe(clientEmployeePayrollJobRatesPayCodeList => {
       console.log('Pay Types : ' + JSON.stringify(clientEmployeePayrollJobRatesPayCodeList));

       this.clientEmployeePayrollJobRatesPayCodeTypeList = clientEmployeePayrollJobRatesPayCodeList;
     });

    this.selectedClientEmployeePayrollJobRatesModel = <IClientEmployeeJobRates>{};

  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  configureFormValidation(): void {
    this.editEmployeePayrollJobRatesFormGroup = this.editEmployeePayrollJobRatesFormBuilder.group({
      jobType: [null, Validators.required],
      standardRate: [null, Validators.required],
      payType: [null, Validators.required],
      payRate: [null, Validators.required]
    }, { updateOn: 'submit' });
  }

  onEditingStart(event) {

    // Cancel the event since we're handling editing in a custom way (in another tab)
    event.cancel = true;

    this.editJobRateItem = true;
    // Get shallow copy the selected loan
    this.selectedClientEmployeePayrollJobRatesModel = JSON.parse(JSON.stringify(event.data)); // Object.assign({}, event.data);

    this.editEmployeePayrollJobRatesFormGroup.get('payType').setValue(this.selectedClientEmployeePayrollJobRatesModel.payType);

    this.editJobRate();
  }

  addJobRate(): void {

    // Init model
    this.selectedClientEmployeePayrollJobRatesModel = <IClientEmployeeJobRates>{};

    this.editJobRateItem = false;
    this.formMode = 'Add';
    this.formTitle = 'Add - Job Rate';
    this.openForm();
  }

  editJobRate(): void {
    this.formMode = 'Edit';
    this.formTitle = 'Edit - Job Rate';

    this.openForm();
  }

  openForm(): void {
    this.editEmployeePayrollJobRatesModalHandle = this.modalService.open(this.editEmployeePayrollJobRatesModal, { size: 'sm' });
    this.editEmployeePayrollJobRatesModalHandle.result.then((result) => {
    }, (reason) => {
    });
  }

  closeForm(): void {
    this.editEmployeePayrollJobRatesModalHandle.close();
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      /*
        Backend simulation!!!!!!!!!!!!!

        If there's no id (it's a new object), generate an id and push it to the payroll loan list
        else simulate a refresh by removing it from the list and pushing the update model to it
      */
      if (!this.selectedClientEmployeePayrollJobRatesModel.id) {
        this.selectedClientEmployeePayrollJobRatesModel.id =
          Math.round((new Date()).getTime() / 1000); // Simulating id with epoch time in seconds

        this.selectedClientEmployeePayrollJobRatesModel.multFactor = '1';
        this.selectedClientEmployeePayrollJobRatesModel.actualRate = this.selectedClientEmployeePayrollJobRatesModel.payRate;

        this.clientEmployeePayrollJobRatesList.push(this.selectedClientEmployeePayrollJobRatesModel);
      } else {
        const eventId = this.selectedClientEmployeePayrollJobRatesModel.id;
        this.clientEmployeePayrollJobRatesList =
          this.clientEmployeePayrollJobRatesList.filter(function (x) { return x.id !== eventId; });

        this.selectedClientEmployeePayrollJobRatesModel.multFactor = '1';
        this.selectedClientEmployeePayrollJobRatesModel.actualRate = this.selectedClientEmployeePayrollJobRatesModel.payRate;

        this.clientEmployeePayrollJobRatesList.push(this.selectedClientEmployeePayrollJobRatesModel);
        this.clientEmployeePayrollJobRatesList.sort(function (a, b) {
          return a.id - b.id;
        });
      }
      console.log(this.selectedClientEmployeePayrollJobRatesModel);
      console.log(form);

      this.closeForm();
    }
  }

  compareByIdFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  changeJobType(jobType: IClientEmployeeJobRatesType): void {
    this.editEmployeePayrollJobRatesFormGroup.get('jobType').patchValue(jobType);

    this.selectedClientEmployeePayrollJobRatesModel.jobType = jobType;
  }

  changePayCodeType(payType: IClientEmployeeJobRatesPayCodeType): void {
    this.editEmployeePayrollJobRatesFormGroup.get('payType').patchValue(payType);

    this.selectedClientEmployeePayrollJobRatesModel.payType = payType;
  }

  get diagnostic() { return JSON.stringify(this.selectedClientEmployeePayrollJobRatesModel); }
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
}
