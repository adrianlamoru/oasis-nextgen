import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PayrollAnalyticsInvoice, HrEmployeeListing } from '../../models/index';
import { CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { CurrentValueFormat, CurrentValueType } from '../../../shared/models/index';

@Component({
  selector: 'app-hr-employee-detail',
  templateUrl: './hr-employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./hr-employee-detail.component.scss']
})
export class HrEmployeeDetailComponent implements OnInit {

  @Input() employeeListing: HrEmployeeListing;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  primaryInformationDataRows: CurrentValueFormat[] = [{
      label: 'FIRST NAME',
      value: 'John',
      type: CurrentValueType.string
    }, {
      label: 'LAST NAME',
      value: 'Smith',
      type: CurrentValueType.string
    }, {
      label: 'CLIENT NAME',
      value: 'John Smith',
      type: CurrentValueType.string
    }, {
      label: 'EMPLOYEE ID',
      value: 'A1231',
      type: CurrentValueType.string
    }, {
      label: 'TELEPHONE',
      value: '6546454',
      type: CurrentValueType.string
    }
  ];

  contactInformationDataRow: CurrentValueFormat[] = [{
      label: 'ADDRESS 1',
      value: '5th Ave',
      type: CurrentValueType.string
    }, {
      label: 'ADDRESS 2',
      value: '123 Street',
      type: CurrentValueType.string
    }, {
      label: 'CITY',
      value: 'New York',
      type: CurrentValueType.string
    }, {
      label: 'COUNTRY',
      value: 'U.S.',
      type: CurrentValueType.string
    }, {
      label: 'STATE',
      value: 'New York',
      type: CurrentValueType.string
    }, {
      label: 'ZIP',
      value: '89234',
      type: CurrentValueType.string
    }, {
      label: 'GEO CODE',
      value: '89234',
      type: CurrentValueType.string
    }, {
      label: 'TELEPHONE',
      value: '89234',
      type: CurrentValueType.string
    }, {
      label: 'E-MAIL ADDRESS',
      value: 'test@gmail.com',
      type: CurrentValueType.string
  }];

  workHistoryDataRow: CurrentValueFormat[] = [{
    label: 'LAST HIRE DATE',
    value: new Date(2018, 5, 5),
    type: CurrentValueType.date
  }, {
    label: 'SENORITY DATE',
    value: new Date(2012, 12, 12),
    type: CurrentValueType.date
  }, {
    label: 'LAST PERFORMANCE REVIEW',
    value: new Date(2016, 5, 12),
    type: CurrentValueType.date
  }, {
    label: 'LEAVE RETURN DATE',
    value: new Date(2010, 9, 5),
    type: CurrentValueType.date
  }, {
    label: 'ORIG HIRE DATE',
    value: new Date(2011, 3, 5),
    type: CurrentValueType.date
  }, {
    label: 'PEO START DATE',
    value: new Date(2012, 4, 3),
    type: CurrentValueType.date
  }, {
    label: 'REASON TERMINATED',
    value: 'Finished',
    type: CurrentValueType.string
  }];

  personalInformationDataRow: CurrentValueFormat[] = [{
    label: 'NICKNAME',
    value: 'Valius',
    type: CurrentValueType.string
  }, {
    label: 'BIRTH DATE',
    value: new Date(2012, 4, 3),
    type: CurrentValueType.date
  }, {
    label: 'AGE',
    value: 34,
    type: CurrentValueType.number
  }, {
    label: 'GENDER',
    value: 'Male',
    type: CurrentValueType.string
  }, {
    label: 'RACIAL CODE',
    value: 'W',
    type: CurrentValueType.string
  }, {
    label: 'EMPLOYEE SSN',
    value: 'A543',
    type: CurrentValueType.string
  }, {
    label: 'FED FILLING STATUS',
    value: 'Active',
    type: CurrentValueType.string
  }, {
    label: 'FED EXCEPTIONS',
    value: 'Fed',
    type: CurrentValueType.string
  }, {
    label: 'FED OVERRIDE TYPE',
    value: 'Override',
    type: CurrentValueType.string
  }, {
    label: 'FED OVERRIDE AMOUNT',
    value: 10,
    type: CurrentValueType.number
  }, {
    label: 'EIC STATUS',
    value: 'Status',
    type: CurrentValueType.string
  }];

  statusDataRow: CurrentValueFormat[] = [{
    label: 'NICKNAME',
    value: 'Valius',
    type: CurrentValueType.string
  }, {
    label: 'JOB TITLE',
    value: 'Senior Developer',
    type: CurrentValueType.string
  }, {
    label: 'JOB CODE - DATE',
    value: new Date(2018, 6, 8),
    type: CurrentValueType.date
  }, {
    label: 'STATUS - DATE',
    value: new Date(2009, 6, 8),
    type: CurrentValueType.date
  }, {
    label: 'TYPE - DATE',
    value: new Date(2015, 8, 8),
    type: CurrentValueType.date
  }, {
    label: 'PROJECT / CC',
    value: 'XCD62528',
    type: CurrentValueType.string
  }, {
    label: 'HOME DIVISION',
    value: 'Economics',
    type: CurrentValueType.string
  }, {
    label: 'HOME DEPARTMENT',
    value: 'Math',
    type: CurrentValueType.string
  }, {
    label: 'HOME LOCATION',
    value: '5th Ave',
    type: CurrentValueType.string
  }, {
    label: 'WORK SHIFT',
    value: '24 h',
    type: CurrentValueType.string
  }, {
    label: 'PAY GROUP / METHOD',
    value: 'Card',
    type: CurrentValueType.string
  }];

  benefitsInformationDataRow: CurrentValueFormat[] = [{
    label: 'BENEFITS GROUP',
    value: 'Fast',
    type: CurrentValueType.string
  }, {
    label: 'W/C CLASS CODE',
    value: 'SSD77',
    type: CurrentValueType.string
  }, {
    label: 'BENEFITS THRU DATE',
    value: new Date(2015, 8, 8),
    type: CurrentValueType.date
  }];

  emergencyContactDataRow: CurrentValueFormat[] = [{
    label: 'EMERGENCY NAME',
    value: 'Julia Potter',
    type: CurrentValueType.string
  }, {
    label: 'EMERGENCY PHONE',
    value: '3423525',
    type: CurrentValueType.string
  }, {
    label: 'EMERGENCY RELATION',
    value: 'Wife',
    type: CurrentValueType.string
  }];

  constructor() { }

  ngOnInit() {
  }

}
