import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ClientEmployees, DataDriven } from '../../models/index';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-employee-payroll-pto-register-adjustments',
  templateUrl: './employee-payroll-pto-register-adjustments.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-payroll-pto-register-adjustments.component.scss']
})
export class EmployeePayrollPtoRegisterAdjustmentsComponent implements OnInit {

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  showMessage: boolean;

  nowNgbDate: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  ptoAllocationsData = {
    registerType: 'RT-0001',
    effectiveDate: this.nowNgbDate,
    accruedHours: 'DC-0002',
    carryOverHours: 'PC-0001',
    accruedThruDate: this.nowNgbDate,
    comment: 'this is a comment'
  };

  registerTypeDataDriven: DataDriven[] = [
    { ID: 'RT-0001', Text: 'RegisterType 1' },
    { ID: 'RT-0002', Text: 'RegisterType 2' },
    { ID: 'RT-0003', Text: 'RegisterType 3' },
    { ID: 'RT-0004', Text: 'RegisterType 4' }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;
  }

  submitModal() {
    /* Submit Data */
    this.showMessage = true;

    setTimeout(() => { this.modalCloseFunc('Cross click'); }, 1000);

  }

  closeSuccessMessage() {
    this.showMessage = false;
  }

}
