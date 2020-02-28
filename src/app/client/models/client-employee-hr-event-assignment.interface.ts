import {
    NgbDateStruct,
    NgbCalendar
  } from '@ng-bootstrap/ng-bootstrap';

  export interface IClientEmployeeHrEventAssignment {
    id: number;
    eventType: IClientEmployeeHrEventAssignmentType;
    date: any; // Date;
    datePicker: NgbDateStruct;
    comment: string;
    nextActionDate: any; // Date;
    nextActionDatePicker: NgbDateStruct;
  }

  export interface IClientEmployeeHrEventAssignmentType {
    id: number;
    code: string;
    description: string;
  }
