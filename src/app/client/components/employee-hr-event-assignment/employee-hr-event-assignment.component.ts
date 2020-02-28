import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ClientEmployees, IClientEmployeeHrEventAssignment, IClientEmployeeHrEventAssignmentType } from '../../models';
import { NgbTabset, NgbDatepicker, NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, FormControl } from '@angular/forms';
import { ClientEmployeeHrEventAssignmentService } from '../../services';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';


@Component({
  selector: 'app-employee-hr-event-assignment',
  templateUrl: './employee-hr-event-assignment.component.html',
  styleUrls: ['./employee-hr-event-assignment.component.scss']
})
export class EmployeeHrEventAssignmentComponent implements OnInit {
  @ViewChild('eventAssignmentDataGrid') dxDataGrid: DxDataGridComponent;

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('editEmployeeHrEventAssignmentModal') editEmployeeHrEventAssignmentModal: NgbModal;
  @ViewChild('employeeHrEventAssignmentComponent') employeeHrEventAssignmentComponent: NgbModal;

  selectedClientEmployeeHrEventAssignmentModel: IClientEmployeeHrEventAssignment;
  clientEmployeeHrEventAssignmentList: IClientEmployeeHrEventAssignment[];
  clientEmployeeHrEventAssignmentTypeList: IClientEmployeeHrEventAssignmentType[];
  editEmployeeHrEventAssignmentModalHandle: NgbModalRef;
  editEmployeeHrEventAssignmentFormGroup: FormGroup;
  modalDOM: HTMLInputElement;
  modalBackdropDOM: HTMLInputElement;

  formTitle = 'Event Assignments';
  formMode = '';

  constructor(
    private clientEmployeeHrEventAssignmentService: ClientEmployeeHrEventAssignmentService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private editEmployeeHrEventAssignmentFormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
    this.configureFormValidation();
    this.getDOMReferences();
  }

  getData() {
    // TODO: filter by employeeId
    this.clientEmployeeHrEventAssignmentService.getEmployeeHrEventAssignmentList()
      .subscribe(clientEmployeeHrEventAssignmentService => {
        this.clientEmployeeHrEventAssignmentList = clientEmployeeHrEventAssignmentService;
        this.clientEmployeeHrEventAssignmentList.forEach((eventAssignment) => {
          if (eventAssignment.date) {
            const dateValue = new Date(eventAssignment.date);
            eventAssignment.datePicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }

          if (eventAssignment.nextActionDate) {
            const dateValue = new Date(eventAssignment.nextActionDate);
            eventAssignment.nextActionDatePicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }

        });
      });

    // Get Event Type List
    this.clientEmployeeHrEventAssignmentService.getEmployeeHrEventAssignmentEventCodesList()
      .subscribe(clientEmployeeeventAssignmentsTypeList => {
        console.log('Event Types : ' + JSON.stringify(clientEmployeeeventAssignmentsTypeList));

        this.clientEmployeeHrEventAssignmentTypeList = clientEmployeeeventAssignmentsTypeList;
      });

    this.selectedClientEmployeeHrEventAssignmentModel = <IClientEmployeeHrEventAssignment>{};

  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  configureFormValidation(): void {
    this.editEmployeeHrEventAssignmentFormGroup = this.editEmployeeHrEventAssignmentFormBuilder.group({
      eventType: [null, Validators.required],
      date: [null, Validators.required],
      comment: [null, Validators.required],
      nextActionDate: [null, Validators.required]
    }, { updateOn: 'submit' });
  }

  onEditingStart(event) {

    // Cancel the event since we're handling editing in a custom way (in another tab)
    event.cancel = true;

    // Get shallow copy the selected loan
    this.selectedClientEmployeeHrEventAssignmentModel = JSON.parse(JSON.stringify(event.data)); // Object.assign({}, event.data);
    this.editEmployeeHrEventAssignmentFormGroup.get('eventType').patchValue(this.selectedClientEmployeeHrEventAssignmentModel.eventType);

    this.editEventAssignment();
  }

  addEventAssignment(): void {

    // Reset the Form to clear previous state validations
    this.editEmployeeHrEventAssignmentFormGroup.reset();

    // Init model
    const defaultDate = new Date();
    const defaultNgDate = { day: defaultDate.getUTCDate(), month: defaultDate.getUTCMonth() + 1, year: defaultDate.getUTCFullYear() };

    this.selectedClientEmployeeHrEventAssignmentModel = <IClientEmployeeHrEventAssignment>{};
    this.selectedClientEmployeeHrEventAssignmentModel.datePicker = defaultNgDate;
    this.selectedClientEmployeeHrEventAssignmentModel.nextActionDatePicker = defaultNgDate;

    this.formMode = 'Add';
    this.formTitle = 'Add - Event Assignment';
    this.openForm();
  }

  editEventAssignment(): void {
    this.formMode = 'Edit';
    this.formTitle = 'Edit - Event Assignment';
    this.openForm();
  }

  openForm(): void {
    this.editEmployeeHrEventAssignmentModalHandle = this.modalService.open(this.editEmployeeHrEventAssignmentModal, { size: 'sm' });
    this.editEmployeeHrEventAssignmentModalHandle.result.then((result) => {
    }, (reason) => {
    });
  }

  closeForm(): void {
    this.editEmployeeHrEventAssignmentModalHandle.close();
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      this.convertViewModelToModel();

      /*
        Backend simulation!!!!!!!!!!!!!

        If there's no id (it's a new object), generate an id and push it to the payroll loan list
        else simulate a refresh by removing it from the list and pushing the update model to it
      */
      if (!this.selectedClientEmployeeHrEventAssignmentModel.id) {
        this.selectedClientEmployeeHrEventAssignmentModel.id =
          Math.round((new Date()).getTime() / 1000); // Simulating id with epoch time in seconds
        this.clientEmployeeHrEventAssignmentList.push(this.selectedClientEmployeeHrEventAssignmentModel);
      } else {
        const eventId = this.selectedClientEmployeeHrEventAssignmentModel.id;
        this.clientEmployeeHrEventAssignmentList =
          this.clientEmployeeHrEventAssignmentList.filter(function (x) { return x.id !== eventId; });
        this.clientEmployeeHrEventAssignmentList.push(this.selectedClientEmployeeHrEventAssignmentModel);
        this.clientEmployeeHrEventAssignmentList.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      this.closeForm();
    }
  }

  cancelForm(): void {
    this.editEmployeeHrEventAssignmentFormGroup.reset();
  }

  convertViewModelToModel(): void {
    const datePicker = this.selectedClientEmployeeHrEventAssignmentModel.datePicker;
    this.selectedClientEmployeeHrEventAssignmentModel.date =
      new Date(datePicker.year, datePicker.month - 1, datePicker.day).toDateString();

    const nextActionDatePicker = this.selectedClientEmployeeHrEventAssignmentModel.nextActionDatePicker;
    this.selectedClientEmployeeHrEventAssignmentModel.nextActionDate =
      new Date(nextActionDatePicker.year, nextActionDatePicker.month - 1, nextActionDatePicker.day).toDateString();
  }

  compareByIdFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  changeEventType(eventType: IClientEmployeeHrEventAssignmentType): void {
    this.editEmployeeHrEventAssignmentFormGroup.get('eventType').patchValue(eventType);

    this.selectedClientEmployeeHrEventAssignmentModel.eventType = eventType;
  }

  get diagnostic() { return JSON.stringify(this.selectedClientEmployeeHrEventAssignmentModel); }
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
