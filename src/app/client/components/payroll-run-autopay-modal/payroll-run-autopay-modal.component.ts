import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, NgbActiveModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DxListComponent, DxNumberBoxComponent, DxDataGridComponent } from 'devextreme-angular';

/* Models */
import { Employee, Roster, Batch, PayCode, PayGroup, PayPeriod } from '../../models/payroll.interface';

/* Serivces */
import { PayrollService } from '../../services';

@Component({
  selector: 'app-payroll-run-autopay-modal',
  templateUrl: './payroll-run-autopay-modal.component.html',
  styleUrls: ['./payroll-run-autopay-modal.component.scss']
})
export class PayrollRunAutopayModalComponent implements OnInit {
  @Input() roster: Roster;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  @Output() autoPayConfirmedEvent = new EventEmitter<any>();

  @ViewChild('gridContainer') gridContainer: DxDataGridComponent;
  @ViewChild('ddPayGroupBtn') ddPayGroupBtn;

  private payCodeList: PayCode[];
  private payCodeTypeList: any[];
  private payGroupList: PayGroup[];
  private payPeriodList: PayPeriod[];
  private model: any = {};

  private formGroup: FormGroup;

  /* tslint:disable */
  private formTitle: string = 'Payroll Auto Fill';
  private processName: string = 'Payroll Auto Fill';
  public saveBtnLabel: string = 'Submit';
  private step: number = 0;
  /* tslint:enable */

  private modalSizes: string[] = [];
  private valueFormat: string;
  private showError: boolean;
  private errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private payrollService: PayrollService,
    private modalService: NgbModal,
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initModel();
    this.getData();
    this.configureFormValidation();
    this.populateModalSizes();
    this.changeStep(1);
  }

  configureFormValidation(): void {
    this.formGroup = this.formBuilder.group({
      payCode: [null, Validators.required],
      payGroup: [null, Validators.required],
      payPeriod: [null, Validators.required],
      value: [null, Validators.required]
    }, { updateOn: 'submit' });
  }

  initModel() {
    this.model = {};
    this.model.employees = JSON.parse(JSON.stringify(this.roster.employees));
    this.model.payGroup = JSON.parse(JSON.stringify(this.roster.payGroup));
    this.model.value = null;
    this.model.payCode = null;
    this.model.payPeriod = null;
    this.model.subtractFromDefault = false;
    this.model.selectedEmployeeKeys = [];
  }

  getData(): void {

    this.payCodeList = this.payrollService.getPayCodeList();
    this.payCodeTypeList = this.payrollService.getPayCodeTypes();
    this.payGroupList = this.payrollService.getPayGroupList();
    this.payPeriodList = this.payrollService.getPayPeriodList();
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      this.changeStep(1);
    }
  }

  ngbDropdownChange(obj: any, propertyName: string, selectedItem: any) {
    obj[propertyName] = selectedItem;
  }

  employee_itemSelectionChanged(e) {
    const addedItems = e.addedItems;
    const removedItems = e.removedItems;

    for (const employee of addedItems) {
      this.model.employees.filter(x => x.id === employee.id)[0]['isSelected'] = true;
    }

    for (const employee of removedItems) {
      this.model.employees.filter(x => x.id === employee.id)[0]['isSelected'] = false;
    }

    // Maintained for step 2
    this.model.selectedEmployeeKeys = this.model.employees
      .filter(employe => employe.isSelected === true)
      .map(employee => employee.id);
  }

  employee_itemClick(e) {
    e.event.stopPropagation();
  }

  changeStep(progression: number) {
    this.step += progression;
    this.setFormLabels();
  }

  setFormLabels(): void {
    this.formTitle = this.processName + ' - Step ' + this.step;

    switch (this.step) {
      case 1:
        this.saveBtnLabel = 'Submit';
        // this.resizeModal('sm');
        this.resizeModal('llg');
        break;
      case 2:
        this.saveBtnLabel = 'Confirm';
        this.calculateAutoPay();
        this.resizeModal('llg');
        break;
    }
  }

  goBack(isDeleteOperation?: boolean) {

    if (isDeleteOperation) {
      this.initModel();
      this.configureFormValidation();
    }

    this.changeStep(-1);
  }

  resizeModal(size: 'xs' | 'sm' | 'lg' | 'llg' | 'xl'): void {
    let modalDOMRef: Element = null;
    let tempModalDOMRef: Element = null;
    const modalClassPrefix = 'modal-';
    const newClassName = modalClassPrefix + size;

    this.modalSizes.forEach(item => {
      const existingClassName = modalClassPrefix + item;

      if (!modalDOMRef) {
        modalDOMRef = document.querySelector('.' + existingClassName);
      }

      if (modalDOMRef && newClassName !== existingClassName) {
        modalDOMRef.classList.remove(existingClassName);
      }
    });

    if (modalDOMRef) {
      modalDOMRef.classList.add(newClassName);
    }
  }

  calculateAutoPay(): void {
    const multiplier: number = this.model.subtractFromDefault === true ? -1 : 1;
    this.model.employees.forEach(employee => {
      employee.autoPayValue = this.model.value;
      employee.autoPayDefaultValue = employee[this.model.payCode.columnMapping];
      employee.autoPayUpdatedDefaultValue = employee.autoPayDefaultValue + (employee.autoPayValue * multiplier);
    });

    this.valueFormat = this.model.payCode.type.toLowerCase() === 'hourly' ? 'fixedPoint' : 'currency';
    this.validateAutoPay();
  }

  populateModalSizes(): void {
    this.modalSizes.push('xs', 'sm', 'lg', 'llg', 'xl');
  }

  onGridSelectionChanged(e): void {
    const currentComponent = this;
    // Maintained for step 2
    // this.model.selectedEmployeeKeys = e.selectedRowKeys;
    this.model.employees.forEach(employee => {
      employee.isSelected = this.model.selectedEmployeeKeys.includes(employee.id);
    });

    setTimeout(function () {
      currentComponent.gridContainer.instance.refresh();
      currentComponent.validateAutoPay();
    }, 100);
  }

  calculateSelectedRowSummary(options) {
    if (options.name === 'selectedRowsSummary') {
      if (options.summaryProcess === 'start') {
        options.totalValue = 0;
      } else if (options.summaryProcess === 'calculate') {
        if (options.component.isRowSelected(options.value.id)) {
          options.totalValue = options.totalValue + options.value.autoPayValue;
        }
      }
    }
  }

  confirm() {
    this.model.employees
      .filter(x => x.isSelected === true)
      .forEach(employee => {
        employee[this.model.payCode.columnMapping] = employee.autoPayUpdatedDefaultValue;
      });

    this.autoPayConfirmedEvent.emit({
      employees: this.model.employees
    });

    this.modalDismissFunc('Auto Fill Confirmed');
  }

  validateAutoPay() {

    this.closeErrorMessage(false, true);

    if (this.model.payCode.editorOptions.min !== undefined) { // Let's check for any adjustments that would be less then the min
      const filteredEmployees = this.model.employees
        .filter(x => x.autoPayUpdatedDefaultValue < this.model.payCode.editorOptions.min && x.isSelected === true);

      if (filteredEmployees.length > 0) {
        const employeeWithError = filteredEmployees[0];
        this.errorMessage = `'Min value for '` + this.model.payCode.name + `' is ` + this.model.payCode.editorOptions.min + `. `
          + employeeWithError.employeeName + ' is below the limit.';
      }
    }

    if (this.model.payCode.editorOptions.max !== undefined) { // Let's check for any adjustments that would be more then the max
      const filteredEmployees = this.model.employees
        .filter(x => x.autoPayUpdatedDefaultValue > this.model.payCode.editorOptions.max && x.isSelected === true);

      if (filteredEmployees.length > 0) {
        const employeeWithError = filteredEmployees[0];
        this.errorMessage = `Max value for '` + this.model.payCode.name + `' is ` + this.model.payCode.editorOptions.max + `. `
          + employeeWithError.employeeName + ` is above the limit.`;
      }
    }

    if (this.errorMessage) {
      this.showError = true;
    }

  }

  closeErrorMessage(showError: boolean = true, clearErrorMessage: boolean = true) {
    this.showError = showError;
    this.errorMessage = clearErrorMessage ? '' : this.errorMessage;
  }
}
