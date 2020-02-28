import { JobCode, SetupProject, DataDriven } from '.';
import { NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface Employee {
  id: number;
  employeeName: string;
  pc_regularPay: number;
  pc_overtime: number;
  pc_vacation: number;
  pc_sickDay: number;
  pc_holiday: number;
  pc_bonus: number;
  pc_commission: number;
  pc_autoAllowance: number;
  pc_autoReimbursment: number;
  dc_uniformDeduction: number;
  dc_fica: number;
  dc_federalIncomeTax: number;
  dc_stateIncomeTax: number;
  dc_medicalInsurance: number;
  dc_visionInsurance: number;
  dc_dentalInsurance: number;
  dc_unionDues: number;
  dc_mealPlan: number;
  checkMemo?: string;
  rate: string;
  hours: string;
  total: string;
  enabled?: boolean;
  selectedDeductionPeriodValue?: any;
  selectedDeductionType?: string;
  isJobCostEnabled?: boolean;
  jobCostDetails?: JobCost[];
  jobCode?: JobCode;
  division?: DataDriven;
  department?: DataDriven;
  location?: DataDriven;
  project?: SetupProject;
}

export interface Roster {
    id: string;
    batchNumber: string;
    frequency: string;
    location: string;
    status: string;
    total: string;
    totalPayroll: string;
    totalDeductions: string;
    payGroup: PayGroup;
    employees: Employee[];
    description?: string;
    checkDate: any;
    startDate?: any;
    endDate?: any;
    isOffCycle?: boolean;
    isManual?: boolean;
}

export interface Batch {
    batchNumber: string;
    rosters: Roster[];
    payPeriodDescription: string;
    employeePayDateDescription: string;
    isOffCycle?: boolean;
    isManual?: boolean;
}

export interface PayCode {
    id: number;
    code: string;
    name: string;
    type: string;
    priority: number;
    columnMapping: string;
    editorOptions: any;
    isDefault: boolean;
    summaryOptions: any;
}

/* tslint:disable */
export interface DeductionCode extends PayCode {
}
/* tslint:enable */

export interface PayCodeDefault {
    pc_regularPay: number;
    pc_overtime: number;
    pc_vacation: number;
    pc_sickDay: number;
    pc_holiday: number;
    pc_bonus: number;
    pc_commission: number;
    pc_autoAllowance: number;
    pc_autoReimbursment: number;
}

export interface PayGroup {
  id: number;
  code: string;
  name: string;
}

export interface PayPeriod {
  id: number;
  code: string;
  name: string;
  description: string;
}

export interface Note {
    ID: number;
    note: string;
    date: Date;
}

export interface JobCost {
  id?: number;
  hours: number;
  rate: number;
  units?: number;
  payCode: PayCode;
  jobCode?: JobCode;
  division?: DataDriven;
  department?: DataDriven;
  location?: DataDriven;
  project?: SetupProject;
  date?: Date;
  datePicker?: NgbDateStruct;
}


