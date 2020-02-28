import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ClientEmployees, IClientEmployeeSkillCodeAssignment, IClientEmployeeSkillCodeType } from '../../models';
import { NgbTabset, NgbDatepicker, NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, NgForm, FormsModule, FormControl } from '@angular/forms';
import { ClientEmployeeSkillCodeAssignmentService } from '../../services';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import { DxiColumnComponent } from 'devextreme-angular/ui/nested/column-dxi';
import { DxiItemComponent } from 'devextreme-angular/ui/nested/item-dxi';

@Component({
  selector: 'app-employee-skill-code-assignment',
  templateUrl: './employee-skill-code-assignment.component.html',
  styleUrls: ['./employee-skill-code-assignment.component.scss']
})
export class EmployeeSkillCodeAssignmentComponent implements OnInit {
  @ViewChild('skillCodeAssignmentDataGrid') dxDataGrid: DxDataGridComponent;

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  @ViewChild('editEmployeeSkillCodeAssignmentModal') editEmployeeSkillCodeAssignmentModal: NgbModal;
  @ViewChild('employeeSkillCodeAssignmentComponent') employeeSkillCodeAssignmentComponent: NgbModal;

  selectedEmployeeSkillCodeAssignmentModel: IClientEmployeeSkillCodeAssignment;
  clientEmployeeSkillCodeAssignmentList: IClientEmployeeSkillCodeAssignment[];
  employeeSkillCodeTypeList: IClientEmployeeSkillCodeType[];
  employeeSkillCodeTypeListSubset: IClientEmployeeSkillCodeType[];
  editEmployeeSkillCodeAssignmentModalHandle: NgbModalRef;
  editEmployeeSkillCodeAssignmentFormGroup: FormGroup;
  modalDOM: HTMLInputElement;
  modalBackdropDOM: HTMLInputElement;
  hasAllSkillCodesAdded = false;

  formTitle = 'Event Assignments';
  formMode = '';

  constructor(
    private clientEmployeeSkillCodeAssignmentService: ClientEmployeeSkillCodeAssignmentService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private editEmployeeSkillCodeAssignmentFormBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
    this.configureFormValidation();
    this.getDOMReferences();
    this.employeeSkillCodeTypeListSubset = [];
  }

  getData() {
    // TODO: filter by employeeId
    this.clientEmployeeSkillCodeAssignmentService.getEmployeeSkillCodetAssignmentList()
      .subscribe(clientEmployeeSkillCodeAssignmentService => {
        this.clientEmployeeSkillCodeAssignmentList = clientEmployeeSkillCodeAssignmentService;
        this.clientEmployeeSkillCodeAssignmentList.forEach((skillCodeAssignment) => {
          if (skillCodeAssignment.dateCertified) {
            const dateValue = new Date(skillCodeAssignment.dateCertified);
            skillCodeAssignment.dateCertifiedPicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }

          if (skillCodeAssignment.dateRenew) {
            const dateValue = new Date(skillCodeAssignment.dateRenew);
            skillCodeAssignment.dateRenewPicker = {
              day: dateValue.getUTCDate(), month: dateValue.getUTCMonth() + 1, year: dateValue.getUTCFullYear()
            };
          }

        });
      });

    // Get Skill Code List
    this.clientEmployeeSkillCodeAssignmentService.getEmployeeSkillCodeTypesList()
      .subscribe(employeeSkillCodeTypeList => {
        console.log('Skill Code Types : ' + JSON.stringify(employeeSkillCodeTypeList));

        this.employeeSkillCodeTypeList = employeeSkillCodeTypeList;
      });

    this.selectedEmployeeSkillCodeAssignmentModel = <IClientEmployeeSkillCodeAssignment>{};

  }

  getDOMReferences(): void {
    setTimeout(function () {
      this.modalDOM = document.querySelectorAll('.modal')[0] as HTMLInputElement;
      this.modalBackdropDOM = document.querySelectorAll('.modal-backdrop')[0] as HTMLInputElement;
      this.modalDOM.style.zIndex = '1040';
    }, 200);
  }

  configureFormValidation(): void {
    this.editEmployeeSkillCodeAssignmentFormGroup = this.editEmployeeSkillCodeAssignmentFormBuilder.group({
      skillCodeType: [null, Validators.required],
      dateCertified: [null, Validators.required],
      comment: [null, Validators.required],
      competencyLevel: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      dateRenew: [null, Validators.required]
    }, { updateOn: 'submit' });
  }

  onEditingStart(event) {

    // Cancel the event since we're handling editing in a custom way (in another tab)
    event.cancel = true;

    // Get shallow copy the selected loan
    this.selectedEmployeeSkillCodeAssignmentModel = JSON.parse(JSON.stringify(event.data)); // Object.assign({}, event.data);
    this.editEmployeeSkillCodeAssignmentFormGroup
      .get('skillCodeType')
      .patchValue(this.selectedEmployeeSkillCodeAssignmentModel.skillCodeType);

    this.editSkillCode();
  }

  addSkillCode(): void {
    this.editEmployeeSkillCodeAssignmentFormGroup.reset();
    // Init model
    const defaultDate = new Date();
    const defaultNgDate = { day: defaultDate.getUTCDate(), month: defaultDate.getUTCMonth() + 1, year: defaultDate.getUTCFullYear() };

    this.selectedEmployeeSkillCodeAssignmentModel = <IClientEmployeeSkillCodeAssignment>{};
    this.selectedEmployeeSkillCodeAssignmentModel.dateCertifiedPicker = defaultNgDate;
    this.selectedEmployeeSkillCodeAssignmentModel.dateRenewPicker = defaultNgDate;

    if (this.employeeSkillCodeTypeListSubset) {
      this.employeeSkillCodeTypeListSubset.splice(0);
    }
    const existingCodeItem = this.clientEmployeeSkillCodeAssignmentList.map(row => row.skillCodeType.code);
    this.employeeSkillCodeTypeList.forEach((skillCodeItem) => {
      if (!existingCodeItem.some(item => item === skillCodeItem.code)) {
        this.employeeSkillCodeTypeListSubset.push(skillCodeItem);
      }
    });

    this.hasAllSkillCodesAdded = this.employeeSkillCodeTypeListSubset.length > 0 ? false : true;
    this.formMode = 'Add';
    this.formTitle = 'Add - Skill Code';
    this.openForm();
  }

  editSkillCode(): void {
    if (this.employeeSkillCodeTypeListSubset) {
      this.employeeSkillCodeTypeListSubset.splice(0);
    }

    this.employeeSkillCodeTypeListSubset = Object.assign([], this.employeeSkillCodeTypeList);

    this.formMode = 'Edit';
    this.formTitle = 'Edit - Skill Code';
    this.openForm();
  }

  openForm(): void {
    this.editEmployeeSkillCodeAssignmentModalHandle = this.modalService.open(this.editEmployeeSkillCodeAssignmentModal, { size: 'lg' });
    this.editEmployeeSkillCodeAssignmentModalHandle.result.then((result) => {
    }, (reason) => {
    });
  }

  closeForm(): void {
    this.editEmployeeSkillCodeAssignmentModalHandle.close();
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      this.convertViewModelToModel();

      /*
        Backend simulation!!!!!!!!!!!!!

        If there's no id (it's a new object), generate an id and push it to the payroll loan list
        else simulate a refresh by removing it from the list and pushing the update model to it
      */
      if (!this.selectedEmployeeSkillCodeAssignmentModel.id) {
        this.selectedEmployeeSkillCodeAssignmentModel.id =
          Math.round((new Date()).getTime() / 1000); // Simulating id with epoch time in seconds
        this.clientEmployeeSkillCodeAssignmentList.push(this.selectedEmployeeSkillCodeAssignmentModel);
      } else {
        const skillCodeId = this.selectedEmployeeSkillCodeAssignmentModel.id;
        this.clientEmployeeSkillCodeAssignmentList =
          this.clientEmployeeSkillCodeAssignmentList.filter(function (x) { return x.id !== skillCodeId; });
        this.clientEmployeeSkillCodeAssignmentList.push(this.selectedEmployeeSkillCodeAssignmentModel);
        this.clientEmployeeSkillCodeAssignmentList.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      this.closeForm();
    }
  }

  cancelForm(): void {
    this.editEmployeeSkillCodeAssignmentFormGroup.reset();
  }

  convertViewModelToModel(): void {
    const dateCertifiedPicker = this.selectedEmployeeSkillCodeAssignmentModel.dateCertifiedPicker;
    this.selectedEmployeeSkillCodeAssignmentModel.dateCertified =
      new Date(dateCertifiedPicker.year, dateCertifiedPicker.month - 1, dateCertifiedPicker.day).toDateString();

    const dateRenewPicker = this.selectedEmployeeSkillCodeAssignmentModel.dateRenewPicker;
    this.selectedEmployeeSkillCodeAssignmentModel.dateRenew =
      new Date(dateRenewPicker.year, dateRenewPicker.month - 1, dateRenewPicker.day).toDateString();
  }

  /* compareByIdFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  } */

  changeSkillCodeType(skillCodeType: IClientEmployeeSkillCodeType): void {
    this.editEmployeeSkillCodeAssignmentFormGroup.get('skillCodeType').patchValue(skillCodeType);
    this.selectedEmployeeSkillCodeAssignmentModel.skillCodeType = skillCodeType;
  }

  get diagnostic() { return JSON.stringify(this.selectedEmployeeSkillCodeAssignmentModel); }
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
