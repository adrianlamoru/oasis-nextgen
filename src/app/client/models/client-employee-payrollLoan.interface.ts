import {
  NgbDateStruct,
  NgbCalendar
} from '@ng-bootstrap/ng-bootstrap';

export interface IClientEmployeePayrollLoan {
  id: number;
  date: any; // Date;
  datePicker: NgbDateStruct;
  startDate: any; // Date;
  startDatePicker: NgbDateStruct;
  stopDate: any; // Date;
  stopDatePicker: NgbDateStruct;
  amount: number;
  payAmount: number;
  paybackAmount: number;
  repaidAmount: number;
  // reason: IClientEmployeePayrollLoanReason;
  reason: string;
  status: IClientEmployeePayrollLoanStatus;
  frequency: IClientEmployeePayrollLoanPaymentFrequency;
}


export interface IClientEmployeePayrollLoanStatus {
  id: number;
  name: string;
}

export interface IClientEmployeePayrollLoanReason {
  id: number;
  name: string;
}

export interface IClientEmployeePayrollLoanPaymentFrequency {
  id: number;
  name: string;
}

