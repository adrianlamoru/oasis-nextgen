import {
  NgbDateStruct,
  NgbCalendar
} from '@ng-bootstrap/ng-bootstrap';

export interface IClientEmployeeSkillCodeAssignment {
  id: number;
  skillCodeType: IClientEmployeeSkillCodeType;
  comment: string;
  competencyLevel: number;
  dateCertified: any; // Date;
  dateCertifiedPicker: NgbDateStruct;
  dateRenew: any; // Date;
  dateRenewPicker: NgbDateStruct;
}

export interface IClientEmployeeSkillCodeType {
  id: number;
  code: string;
  description: string;
}
