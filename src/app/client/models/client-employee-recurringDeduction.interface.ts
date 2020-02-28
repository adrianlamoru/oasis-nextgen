import {
  NgbDateStruct,
  NgbCalendar
} from '@ng-bootstrap/ng-bootstrap';

export interface IClientEmployeeRecurringDeduction {
  id: number;
  deductionType: IClientEmployeeRecurringDeductionType;
  amount: number;
  periods: IClientEmployeeRecurringDeductionPeriod[];
  hasDetails: boolean;
  limit: number;
  maximum: number;
  basis: IClientEmployeeRecurringDeductionFrequency;
  trackArrears: boolean;
  startDate: any; // Date;
  startDatePicker: NgbDateStruct;
  endDate: any; // Date;
  endDatePicker: NgbDateStruct;
  GLOverrideAccount: string;
}

export interface IClientEmployeeRecurringDeductionType {
  id: number;
  code: string;
  name: string;
}

export interface IClientEmployeeRecurringDeductionFrequency {
  id: number;
  name: string;
}

export interface IClientEmployeeRecurringDeductionPeriod {
  id: number;
  name: string;
}
