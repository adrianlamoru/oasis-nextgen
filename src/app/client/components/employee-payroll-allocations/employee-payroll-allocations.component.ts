import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ClientEmployees } from '../../models/index';

@Component({
  selector: 'app-employee-payroll-allocations',
  templateUrl: './employee-payroll-allocations.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./employee-payroll-allocations.component.scss']
})
export class EmployeePayrollAllocationsComponent implements OnInit {

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  allocationsData = {
    locationCode: 'LC-0001',
    divisionCode: 'DC-0004',
    departmentCode: 'DC-0002',
    projectCode: 'PC-0001',
    shiftCode: 'SC-0003'
  };

  locationDataDriven = [
    { ID: 'LC-0001', Text: 'LocationCode 1' },
    { ID: 'LC-0002', Text: 'LocationCode 2' },
    { ID: 'LC-0003', Text: 'LocationCode 3' },
    { ID: 'LC-0004', Text: 'LocationCode 4' }
  ];
  divisionDataDriven = [
    { ID: 'DC-0001', Text: 'DivisionCode 1' },
    { ID: 'DC-0002', Text: 'DivisionCode 2' },
    { ID: 'DC-0003', Text: 'DivisionCode 3' },
    { ID: 'DC-0004', Text: 'DivisionCode 4' }
  ];
  departmentDataDriven = [
    { ID: 'DC-0001', Text: 'DepartmentCode 1' },
    { ID: 'DC-0002', Text: 'DepartmentCode 2' },
    { ID: 'DC-0003', Text: 'DepartmentCode 3' },
    { ID: 'DC-0004', Text: 'DepartmentCode 4' }
  ];
  projectDataDriven = [
    { ID: 'PC-0001', Text: 'ProjectCode 1' },
    { ID: 'PC-0002', Text: 'ProjectCode 2' },
    { ID: 'PC-0003', Text: 'ProjectCode 3' },
    { ID: 'PC-0004', Text: 'ProjectCode 4' }
  ];
  shiftDataDriven = [
    { ID: 'SC-0001', Text: 'ShiftCode 1' },
    { ID: 'SC-0002', Text: 'ShiftCode 2' },
    { ID: 'SC-0003', Text: 'ShiftCode 3' },
    { ID: 'SC-0004', Text: 'ShiftCode 4' }
  ];

  constructor() {
   }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;
  }

  submitModal() {
    /* Submit Data */
    this.modalCloseFunc('Cross click');
  }

}
