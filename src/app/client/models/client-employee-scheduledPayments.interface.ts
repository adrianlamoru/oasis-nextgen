import {
  NgbDateStruct,
  NgbCalendar
} from '@ng-bootstrap/ng-bootstrap';

export interface IClientEmployeeScheduledPayments {
  id: number;
  paymentType: IClientEmployeeScheduledPaymentsType;
  startDate: any; // Date;
  startDatePicker: NgbDateStruct;
  stopDate: any; // Date;
  stopDatePicker: NgbDateStruct;
  deductionPeriod: IClientEmployeeScheduledPaymentsDeductionPeriod[];
  status: IClientEmployeeScheduledPaymentsStatus;
  amount: number;
}


export interface IClientEmployeeScheduledPaymentsType {
  id: number;
  code: string;
  description: string;
}

export interface IClientEmployeeScheduledPaymentsStatus {
  id: number;
  name: string;
}

export interface IClientEmployeeScheduledPaymentsDeductionPeriod {
  id: number;
  name: string;
}
