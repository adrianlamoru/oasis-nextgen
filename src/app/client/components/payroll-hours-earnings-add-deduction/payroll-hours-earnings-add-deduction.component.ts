import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DataDriven } from '../../models/index';
import { Router, ActivatedRoute } from '@angular/router';

/* Models */
import { Employee, Roster, DeductionCode } from '../../models/payroll.interface';

/* Serivces */
import { PayrollService } from '../../services';

@Component({
  selector: 'app-payroll-hours-earnings-add-deduction',
  templateUrl: './payroll-hours-earnings-add-deduction.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-hours-earnings-add-deduction.component.scss']
})
export class PayrollHoursEarningsAddDeductionComponent implements OnInit {

  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  @Input() employee: Employee;
  @Output() deductionsModifiedEvent = new EventEmitter<any>();

  private employeeModel: Employee;
  private deductionCodeList: DeductionCode[];
  private deductionCodeTypeList: any[];
  private formTitle = 'Deductions';

  addDeductionData = [{
    id: 0,
    deductionCode: 'DC-001',
    amount: 0
  }, {
    id: 1,
    deductionCode: 'DC-002',
    amount: 0
  }, {
    id: 2,
    deductionCode: 'DC-003',
    amount: 0
  }, {
    id: 3,
    deductionCode: 'DC-004',
    amount: 0
  }, {
    id: 4,
    deductionCode: 'DC-005',
    amount: 0
  }, {
    id: 5,
    deductionCode: 'DC-006',
    amount: 0
  }, {
    id: 6,
    deductionCode: 'DC-007',
    amount: 0
  }, {
    id: 7,
    deductionCode: 'DC-008',
    amount: 0
  }];

  deductionCodeDataDriven: DataDriven[] = [{
    ID: 'DC-001',
    Text: 'CELLPHONE'
  }, {
    ID: 'DC-002',
    Text: 'MEAL DEDUCTION'
  }, {
    ID: 'DC-003',
    Text: 'PAGER DEDUCTION'
  }, {
    ID: 'DC-004',
    Text: 'CLIENT MEDICAL S. 125'
  }, {
    ID: 'DC-005',
    Text: 'CLIENT DENTAL S. 125'
  }, {
    ID: 'DC-006',
    Text: 'PAY ADVANCE'
  }, {
    ID: 'DC-007',
    Text: 'TRAVEL'
  }, {
    ID: 'DC-008',
    Text: 'UNIFORM DEDUCTION'
  }];

  constructor(
    private router: Router,
    private payrollService: PayrollService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
    this.formTitle += ' - ' + this.employee.employeeName;
  }

  getData(): void {
    this.deductionCodeList = this.payrollService.getDeductionCodeList();
    this.deductionCodeTypeList = this.payrollService.getDeductionCodeTypes();

    // This prevents the object in the collection in singleton from updating immediately
    this.employee = JSON.parse(JSON.stringify(this.employee));
  }

  submit() {

    this.deductionsModifiedEvent.emit({
      updatedEmployee: this.employee
    });

    // Save employee data and close Modal
    this.modalCloseFunc('Cross click');
  }

}
