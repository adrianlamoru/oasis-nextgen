import { Injectable } from '@angular/core';

import {
  Employee,
  Roster,
  Batch,
  PayCode,
  DeductionCode,
  PayCodeDefault,
  PayGroup,
  PayPeriod,
  PayrollQuickSummaryInterface,
  PayrollDeductionInterface,
  PayrollGrossPay,
  PayrollPayCode,
  PayrollTaxCode,
  JobCode,
  DataDriven,
  SetupProject
} from '../models';

import { AreaData } from '../../shared/models';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Injectable()

export class PayrollService {

  public batches: Batch[];
  public payCodes: PayCode[];
  public deductionCodes: DeductionCode[];

  public deductionPeriodValues: any[] = [
    {
      name: '1',
      id: 1
    },
    {
      name: '2',
      id: 2
    },
    {
      name: '3',
      id: 3
    },
    {
      name: '4',
      id: 4
    },
    {
      name: '5',
      id: 5
    }
  ];

  private deductionTypes: string[] = [
    'Manual',
    'Deduction Period'
  ];

  public employees: Employee[] = [
    {
      id: 1,
      employeeName: 'Mattie Jones',
      pc_regularPay: 32,
      pc_overtime: 6,
      pc_vacation: 8,
      pc_sickDay: 50,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 50,
      dc_fica: 10,
      dc_federalIncomeTax: 250,
      dc_stateIncomeTax: 0,
      dc_medicalInsurance: 150,
      dc_visionInsurance: 20,
      dc_dentalInsurance: 10,
      dc_unionDues: 0,
      dc_mealPlan: 20,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    },
    {
      id: 2,
      employeeName: 'Lillian Murphy',
      pc_regularPay: 32,
      pc_overtime: 62,
      pc_vacation: 8,
      pc_sickDay: 6,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 50,
      dc_fica: 10,
      dc_federalIncomeTax: 33,
      dc_stateIncomeTax: 0,
      dc_medicalInsurance: 77,
      dc_visionInsurance: 20,
      dc_dentalInsurance: 34,
      dc_unionDues: 0,
      dc_mealPlan: 20,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    },
    {
      id: 3,
      employeeName: 'Jennied Reed',
      pc_regularPay: 32,
      pc_overtime: 6,
      pc_vacation: 8,
      pc_sickDay: 66,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 34,
      dc_fica: 10,
      dc_federalIncomeTax: 45,
      dc_stateIncomeTax: 0,
      dc_medicalInsurance: 56,
      dc_visionInsurance: 67,
      dc_dentalInsurance: 10,
      dc_unionDues: 0,
      dc_mealPlan: 89,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    },
    {
      id: 4,
      employeeName: 'Greta Sims',
      pc_regularPay: 32,
      pc_overtime: 6,
      pc_vacation: 8,
      pc_sickDay: 6,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 50,
      dc_fica: 10,
      dc_federalIncomeTax: 200,
      dc_stateIncomeTax: 0,
      dc_medicalInsurance: 50,
      dc_visionInsurance: 20,
      dc_dentalInsurance: 12,
      dc_unionDues: 12,
      dc_mealPlan: 20,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    },
    {
      id: 5,
      employeeName: 'Brett Wade',
      pc_regularPay: 32,
      pc_overtime: 6,
      pc_vacation: 8,
      pc_sickDay: 6,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 50,
      dc_fica: 10,
      dc_federalIncomeTax: 785,
      dc_stateIncomeTax: 0,
      dc_medicalInsurance: 22,
      dc_visionInsurance: 20,
      dc_dentalInsurance: 22,
      dc_unionDues: 0,
      dc_mealPlan: 20,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    },
    {
      id: 6,
      employeeName: 'Sandra Johnson',
      pc_regularPay: 32,
      pc_overtime: 6,
      pc_vacation: 8,
      pc_sickDay: 6,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 50,
      dc_fica: 10,
      dc_federalIncomeTax: 77,
      dc_stateIncomeTax: 45,
      dc_medicalInsurance: 22,
      dc_visionInsurance: 20,
      dc_dentalInsurance: 10,
      dc_unionDues: 0,
      dc_mealPlan: 20,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    },
    {
      id: 7,
      employeeName: 'Kevin Carter',
      pc_regularPay: 32,
      pc_overtime: 6,
      pc_vacation: 8,
      pc_sickDay: 6,
      pc_holiday: 0,
      pc_bonus: 0,
      pc_commission: 0,
      pc_autoAllowance: 0,
      pc_autoReimbursment: 0,
      dc_uniformDeduction: 50,
      dc_fica: 10,
      dc_federalIncomeTax: 962,
      dc_stateIncomeTax: 0,
      dc_medicalInsurance: 150,
      dc_visionInsurance: 20,
      dc_dentalInsurance: 10,
      dc_unionDues: 12,
      dc_mealPlan: 20,
      rate: '$70.00/h',
      hours: '46',
      total: '$3,230.00',
      selectedDeductionPeriodValue: this.deductionPeriodValues[0],
      selectedDeductionType: this.deductionTypes[0],
      isJobCostEnabled: false
    }
  ];

  // Payroll manual check review and submit
  public manualPayrollSummaryGrossPayRows: PayrollGrossPay[];
  public manualPayrollSummaryPayCodeRows: PayrollPayCode[];
  public manualPayrollSummaryTaxCodeRows: PayrollTaxCode[];

  // Payroll regular check review and submit
  public quickSummaryDataRows: PayrollQuickSummaryInterface[];
  public quickSummaryDeductionDataRows: PayrollDeductionInterface[];
  public payGroups: PayGroup[];
  public payPeriods: PayPeriod[];
  public jobCodes: JobCode[];
  public divisions: DataDriven[];
  public departments: DataDriven[];
  public locations: DataDriven[];
  public projects: SetupProject[];

  currentSteps = [];

  recycleRoster = [];


  constructor() {
    this.initBatches();
    this.initPayCodes();
    this.initDeductionCodes();
    this.initPayGroups();
    this.initPayPeriods();
    this.initJobCodes();
    this.initDivisions();
    this.initDepartments();
    this.initLocations();
    this.initProjects();
    this.initJobCostData();
  }

  private fieldSorter = (fields) => (a, b) => fields.map(o => {
    let dir = 1;
    if (o[0] === '-') { dir = -1; o = o.substring(1); }
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
  }).reduce((p, n) => p ? p : n, 0)

  public backToDumped(rosterId: string) {
    const roster: { roster: Roster, step: number } = this.recycleRoster[rosterId];
    if (!this.currentSteps[roster.roster.batchNumber]) {
      this.currentSteps[roster.roster.batchNumber] = [];
    }

    this.currentSteps[roster.roster.batchNumber][rosterId] = roster.step;
    const batch: Batch = this.batches.find((batchModel: Batch) => batchModel.batchNumber === roster.roster.batchNumber);
    const rosterIndex = batch.rosters.findIndex((rosterModel: Roster) => rosterModel.id === rosterId);
    batch.rosters[rosterIndex] = roster.roster;

    delete this.recycleRoster[rosterId];
  }

  public getBatch(batchNumber: string): Batch {
    return this.batches.filter(x => x.batchNumber === batchNumber)[0];
  }

  public getBatchesList(): Batch[] {
    for (const batch of this.batches) {
       batch.rosters = batch.rosters.sort(this.fieldSorter(['checkDate', 'startDate']));
    }

    return this.batches;
  }

  public getPayCodeList(): PayCode[] {
    return this.payCodes;
  }

  public getPayGroupList(): PayGroup[] {
    return this.payGroups;
  }

  public getPayPeriodList(): PayPeriod[] {
    return this.payPeriods;
  }

  public getPayCodeTypes(): any[] {
    const payCodes = this.getPayCodeList();

    const payCodeTypes = payCodes.map(item => item.type)
      .filter((value, index, self) => self.indexOf(value) === index);

    const result = [];

    for (const type of payCodeTypes) {
      let sortOrder = 0;

      switch (type.toLowerCase()) {
        case 'hourly':
          sortOrder = 1;
          break;
        case 'fixed':
          sortOrder = 2;
          break;
        default:
          sortOrder = 99;
          break;
      }

      result.push(
        {
          key: type,
          items: payCodes.filter(payCode => payCode.type === type),
          sortOrder: sortOrder
        });
    }

    return result.sort(function (a, b) {
      return a.sortOrder - b.sortOrder;
    });
  }

  public getDeductionCodeList(): DeductionCode[] {
    return this.deductionCodes;
  }

  public getDeductionCodeTypes(): any[] {
    const deductionCodes = this.getDeductionCodeList();

    const deductionCodeTypes = deductionCodes.map(item => item.type)
      .filter((value, index, self) => self.indexOf(value) === index);

    const result = [];

    for (const type of deductionCodeTypes) {
      result.push(
        {
          key: type,
          items: deductionCodes.filter(deductionCode => deductionCode.type === type)
        });
    }

    return result;
  }

  public getPayCodeDefault(): PayCodeDefault {
    return {
      pc_regularPay: 250,
      pc_overtime: 250,
      pc_vacation: 250,
      pc_sickDay: 250,
      pc_holiday: 250,
      pc_bonus: 250,
      pc_commission: 250,
      pc_autoAllowance: 250,
      pc_autoReimbursment: 250
    };
  }

  public getRecycleRoster(rosterId: string): Roster {
    return this.recycleRoster[rosterId];
  }

  public inRecycleRoster(rosterId: string): boolean {
    return this.recycleRoster[rosterId] !== undefined;
  }

  public resetRoster(roster: Roster) {
    if (roster['isOffCycle'] === undefined || !roster.isOffCycle) {
      this.resetRegularRoster(roster);
    }

    if (roster['isOffCycle']) {
      this.resetOffCicleRoster(roster);
    }
  }

  public resetRegularRoster(rosterSelected: Roster) {
    const roster: Roster = this.batches.find((batchModel: Batch) => batchModel.batchNumber === rosterSelected.batchNumber)
      .rosters.find((rosterModel: Roster) => rosterModel.id === rosterSelected.id);
    this.recycleRoster[roster.id] = { roster: JSON.parse(JSON.stringify(roster)), step: 1 };

    if (roster.status !== 'Past Due') {
      roster.status = 'New';
    }

    if (this.currentSteps[roster.batchNumber] && this.currentSteps[roster.batchNumber][roster.id]) {
      this.recycleRoster[roster.id].step = this.currentSteps[roster.batchNumber][roster.id];
      this.currentSteps[roster.batchNumber][roster.id] = 1;
    }

    for (const employee of roster.employees) {
      for (const payCode of this.payCodes) {
        employee[payCode.columnMapping] = 0;
      }

      for (const deductionCode of this.deductionCodes) {
        employee[deductionCode.columnMapping] = 0;
      }
    }
  }

  public resetOffCicleRoster(roster: Roster) {
    this.resetRegularRoster(roster);

    for (const employee of roster.employees) {
      employee.enabled = false;
    }
  }

  public setCurrentStep(batch: string, roster: string, step: number) {
    if (!this.currentSteps[batch]) {
      this.currentSteps[batch] = [];
    }
    this.currentSteps[batch][roster] = step;
  }

  public getCurrentStep(batch: string, roster: string): string {
    // Get the current step for batch
    const batchSteps = this.currentSteps[batch];
    const step = batchSteps ? batchSteps[roster] : 1;
    const currentStep: number = step ? step : 1;

    // let stepURL = '/client/payroll/run/batch/{batchId}/roster/{rosterId}/';
    let stepURL = '/client/payroll/run/batch';

    if (batch) {
      stepURL += '/{batchId}'.replace('{batchId}', batch);
    }

    stepURL += '/roster';

    if (roster) {
      stepURL += '/{rosterId}'.replace('{rosterId}', roster);
    }

    switch (currentStep) {
      case 2:
        stepURL += '/deductions';
        break;
      case 3:
        stepURL += '/review-submit';
        break;
      case 4:
        stepURL += '/confirmation';
        break;
      default:
        stepURL += '/hours-earnings';
        break;
    }

    return stepURL;
  }

  public getCurrentNumberStep(batch: string, roster: string): number {
    const batchSteps = this.currentSteps[batch];
    const step = batchSteps ? batchSteps[roster] : 1;
    return step ? step : 1;
  }

  public getJobCodes(): JobCode[] {
    return this.jobCodes;
  }

  public getDivisions(): DataDriven[] {
    return this.divisions;
  }

  public getDepartments(): DataDriven[] {
    return this.departments;
  }

  public getLocations(): DataDriven[] {
    return this.locations;
  }

  public getProjects(): SetupProject[] {
    return this.projects;
  }



  /**
   * testing purpose
   * @param type ID
   * @param secondType ID
   */
  public getManualPayrollSummaryGrossPayData(type?: string, secondType?: string): PayrollGrossPay[] {
    this.initManualPayrollSummaryGrossPayRows();

    const index = this.randomInt(0, this.manualPayrollSummaryGrossPayRows.length);
    if (type && secondType) {
      return this.manualPayrollSummaryGrossPayRows.splice(index);
    } else if (type) {
      return this.manualPayrollSummaryGrossPayRows.splice(index);
    } else {
      return this.manualPayrollSummaryGrossPayRows;
    }
  }

  /**
 * testing purpose
 * @param type ID
 * @param secondType ID
 */
  public getManualPayrollSummaryPayCodeData(type?: string, secondType?: string): PayrollPayCode[] {
    this.initManualPayrollSummaryPayCodeRows();

    const index = this.randomInt(0, this.manualPayrollSummaryPayCodeRows.length);
    if (type && secondType) {
      return this.manualPayrollSummaryPayCodeRows.splice(index);
    } else if (type) {
      return this.manualPayrollSummaryPayCodeRows.splice(index);
    } else {
      return this.manualPayrollSummaryPayCodeRows;
    }
  }

  public getManualPayrollSummaryTaxCodeData(type?: string, secondType?: string): PayrollTaxCode[] {
    this.initManualPayrollSummaryTaxCodeRows();

    const index = this.randomInt(0, this.manualPayrollSummaryTaxCodeRows.length);
    if (type && secondType) {
      return this.manualPayrollSummaryTaxCodeRows.splice(index);
    } else if (type) {
      return this.manualPayrollSummaryTaxCodeRows.splice(index);
    } else {
      return this.manualPayrollSummaryTaxCodeRows;
    }
  }

  /**
   * testing purpose
   * @param type ID
   * @param secondType ID
   */
  public getQuickSummaryData(type?: string, secondType?: string): PayrollQuickSummaryInterface[] {
    this.initQuickSummary();
    const index = this.randomInt(0, this.quickSummaryDataRows.length);
    if (type && secondType) {
      return this.quickSummaryDataRows.splice(index);
    } else if (type) {
      return this.quickSummaryDataRows.splice(index);
    } else {
      return this.quickSummaryDataRows;
    }
  }

  /**
   * testing purpose
   * @param type
   * @param secondType
   */
  public getQuickSummaryDeductionsData(type?: string, secondType?: string): PayrollDeductionInterface[] {
    this.initQuickSummaryDeduction();
    const index = this.randomInt(0, this.quickSummaryDeductionDataRows.length);
    if (type && secondType) {
      return this.quickSummaryDeductionDataRows.splice(index);
    } else if (type) {
      return this.quickSummaryDeductionDataRows.splice(index);
    } else {
      return this.quickSummaryDeductionDataRows;
    }
  }

  /**
   * generate a random integer between min and max
   * remove this function when implement the services:
   * getQuickSummaryData & getQuickSummaryDeductionsData
   * @param {Number} min
   * @param {Number} max
   * @return {Number} random generated integer
   */
  private randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  addNewOffCycleRosterToBatch(updatedRoster: Roster): Batch {
    const newOffCycleBatchNumber = '2800';
    let offCycleBatch = this.getBatch(newOffCycleBatchNumber);

    if (!offCycleBatch) {
      offCycleBatch = {
        batchNumber: newOffCycleBatchNumber,
        rosters: [],
        payPeriodDescription: 'April 1 - April 25, 2018',
        employeePayDateDescription: 'Friday, April 28, 2018',
        isOffCycle: true
      };

      this.batches.push(offCycleBatch);
    }

    updatedRoster.batchNumber = offCycleBatch.batchNumber;
    updatedRoster.isOffCycle = true;

    offCycleBatch.rosters.push(updatedRoster);
    offCycleBatch.rosters = offCycleBatch.rosters.sort(this.fieldSorter(['checkDate', 'startDate']));

    return offCycleBatch;
  }

  addNewOffCycleRoster(): Roster {
    const newOffCycleRoster: Roster = {
      id: '010',
      batchNumber: '',
      frequency: '',
      checkDate: '',
      location: '004 - West Palm Beach',
      status: 'New',
      total: '$ 12,122,345.00',
      totalPayroll: '$ 11,122,345.00',
      totalDeductions: '$ 822,345.00',
      employees: this.employees,
      payGroup: {
        id: 1,
        code: 'FT',
        name: 'Full-Time'
      }
    };

    return newOffCycleRoster;
  }

  addManualBatch(): Batch {
    const newManualBatch: Batch = {
      batchNumber: 'Manual',
      rosters: [
        {
          id: '033',
          batchNumber: 'Manual',
          frequency: 'Manual',
          checkDate: 'April 28, 2018',
          location: '010 - West Palm Beach',
          status: 'In Progress',
          total: '$ 12,122,345.00',
          totalPayroll: '$ 11,122,345.00',
          totalDeductions: '$ 822,345.00',
          payGroup: {
            id: 1,
            code: 'FT',
            name: 'Full-Time'
          },
          employees: [],
          isManual: true
        },
      ],
      payPeriodDescription: 'April 1 - April 25, 2018',
      employeePayDateDescription: 'Friday, April 28, 2018',
      isManual: true
    };

    this.batches.push(newManualBatch);

    return newManualBatch;
  }

  initBatches() {
    this.batches = [
      {
        batchNumber: '20185',
        rosters: [
          {
            id: '000',
            batchNumber: '20185',
            frequency: 'Bi-weekly',
            checkDate: new Date('07/5/2018'),
            location: '004 - West Palm Beach',
            status: 'In Progress',
            total: '$ 12,122,345.00',
            totalPayroll: '$ 11,122,345.00',
            totalDeductions: '$ 822,345.00',
            payGroup: {
              id: 1,
              code: 'FT',
              name: 'Full-Time'
            },
            employees: this.employees
          },
          {
            id: '001',
            batchNumber: '20185',
            frequency: 'Bi-weekly',
            checkDate: new Date('07/4/2018'),
            location: '006 - West Palm Beach',
            status: 'Past Due',
            total: '$ 12,122,345.00',
            totalPayroll: '$ 11,122,345.00',
            totalDeductions: '$ 822,345.00',
            payGroup: {
              id: 2,
              code: 'PT',
              name: 'Part-Time'
            },
            employees: this.employees
          },
          {
            id: '002',
            batchNumber: '20185',
            frequency: 'Weekly',
            checkDate: new Date('07/3/2018'),
            location: '008 - West Palm Beach',
            status: 'New',
            total: '$ 12,122,345.00',
            totalPayroll: '$ 11,122,345.00',
            totalDeductions: '$ 822,345.00',
            payGroup: {
              id: 3,
              code: 'CONT',
              name: 'Contractor'
            },
            employees: this.employees
          }
        ],
        payPeriodDescription: 'April 1 - April 25, 2018',
        employeePayDateDescription: 'Friday, April 28, 2018'
      },
      {
        batchNumber: '20186',
        rosters: [
          {
            id: '003',
            batchNumber: '20186',
            frequency: 'Bi-weekly',
            checkDate: new Date('07/5/2018'),
            location: '010 - West Palm Beach',
            status: 'In Progress',
            total: '$ 12,122,345.00',
            totalPayroll: '$ 11,122,345.00',
            totalDeductions: '$ 822,345.00',
            payGroup: {
              id: 1,
              code: 'FT',
              name: 'Full-Time'
            },
            employees: this.employees
          },
          {
            id: '004',
            batchNumber: '20186',
            frequency: 'Bi-weekly',
            checkDate: new Date('07/6/2018'),
            location: '006 - West Palm Beach',
            status: 'New',
            total: '$ 12,122,345.00',
            totalPayroll: '$ 11,122,345.00',
            totalDeductions: '$ 822,345.00',
            payGroup: {
              id: 2,
              code: 'PT',
              name: 'Part-Time'
            },
            employees: this.employees
          }
        ],
        payPeriodDescription: 'April 1 - April 25, 2018',
        employeePayDateDescription: 'Friday, April 28, 2018'
      }
    ];
  }

  initPayCodes() {
    this.payCodes = [
      {
        id: 1,
        code: 'RP',
        name: 'Regular Pay',
        type: 'Hourly',
        priority: 1,
        columnMapping: 'pc_regularPay',
        editorOptions: { 'format': '#0,###.##', 'min': 0, 'max': 99.99 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'fixedPoint',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 2,
        code: 'OT',
        name: 'Overtime',
        type: 'Hourly',
        priority: 2,
        columnMapping: 'pc_overtime',
        editorOptions: { 'format': '#0,###.##', 'min': 0, 'max': 99.99 },
        isDefault: false,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'fixedPoint',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 3,
        code: 'VAC',
        name: 'Vacation',
        type: 'Hourly',
        priority: 3,
        columnMapping: 'pc_vacation',
        editorOptions: { 'format': '#0,###.##', 'min': 0, 'max': 99.99 },
        isDefault: false,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'fixedPoint',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 4,
        code: 'SD',
        name: 'Sick Day',
        type: 'Hourly',
        priority: 4,
        columnMapping: 'pc_sickDay',
        editorOptions: { 'format': '#0,###.##', 'min': 0, 'max': 99.99 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 5,
        code: 'HD',
        name: 'Holiday',
        type: 'Hourly',
        priority: 5,
        columnMapping: 'pc_holiday',
        editorOptions: { 'format': '#0,###.##', 'min': 0, 'max': 99.99 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 6,
        code: 'BON',
        name: 'Bonus',
        type: 'Hourly',
        priority: 6,
        columnMapping: 'pc_bonus',
        editorOptions: { 'format': '#0,###.##', 'min': 0, 'max': 99.99 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 7,
        code: 'COM',
        name: 'Commission',
        type: 'Fixed',
        priority: 7,
        columnMapping: 'pc_commission',
        editorOptions: { 'format': '#0,###.####', 'min': 0, 'max': 100000 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      // },
      // {
      //   id: 8,
      //   code: 'AA',
      //   name: 'Auto Allowance',
      //   type: 'Fixed',
      //   priority: 8,
      //   columnMapping: 'pc_autoAllowance',
      //   editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
      //   isDefault: true,
      //   summaryOptions: {
      //     'summaryType': 'sum',
      //     'valueFormat': 'fixedPoint',
      //     'precision': '2',
      //     'displayFormat': '{0}',
      //     'alignment': 'right'
      //   }
      // },
      // {
      //   id: 9,
      //   code: 'AR',
      //   name: 'Auto Reimbursement',
      //   type: 'Fixed',
      //   priority: 9,
      //   columnMapping: 'pc_autoReimbursment',
      //   editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
      //   isDefault: true,
      //   summaryOptions: {
      //     'summaryType': 'sum',
      //     'valueFormat': 'fixedPoint',
      //     'precision': '2',
      //     'displayFormat': '{0}',
      //     'alignment': 'right'
      //   }
      }];
  }

  initDeductionCodes() {
    this.deductionCodes = [
      {
        id: 1,
        code: 'UD',
        name: 'Uniform',
        type: 'Fixed',
        priority: 1,
        columnMapping: 'dc_uniformDeduction',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 2,
        code: 'FICA',
        name: 'FICA',
        type: 'Fixed',
        priority: 2,
        columnMapping: 'dc_fica',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 3,
        code: 'FIT',
        name: 'Fed. Income Tax',
        type: 'Fixed',
        priority: 3,
        columnMapping: 'dc_federalIncomeTax',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: false,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 4,
        code: 'SIT',
        name: 'State Income Tax',
        type: 'Fixed',
        priority: 4,
        columnMapping: 'dc_stateIncomeTax',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 5,
        code: 'MED',
        name: 'Medical Ins.',
        type: 'Fixed',
        priority: 5,
        columnMapping: 'dc_medicalInsurance',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 6,
        code: 'VIS',
        name: 'Vision Ins.',
        type: 'Fixed',
        priority: 6,
        columnMapping: 'dc_visionInsurance',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: false,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 7,
        code: 'DEN',
        name: 'Dental Ins.',
        type: 'Fixed',
        priority: 7,
        columnMapping: 'dc_dentalInsurance',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 8,
        code: 'UD',
        name: 'Union Dues',
        type: 'Fixed',
        priority: 8,
        columnMapping: 'dc_unionDues',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      },
      {
        id: 9,
        code: 'MP',
        name: 'Meal Plan',
        type: 'Fixed',
        priority: 9,
        columnMapping: 'dc_mealPlan',
        editorOptions: { 'format': '$ #0,###.####', 'min': 0 },
        isDefault: true,
        summaryOptions: {
          'summaryType': 'sum',
          'valueFormat': 'currency',
          'precision': '2',
          'displayFormat': '{0}',
          'alignment': 'right'
        }
      }];
  }

  initManualPayrollSummaryGrossPayRows(): void {
    this.manualPayrollSummaryGrossPayRows = [
      { id: '001', grossPay: 440.00, taxes: 43.66, deductions: 200.00, netPay: 396.34 }
    ];
  }

  initManualPayrollSummaryPayCodeRows(): void {
    this.manualPayrollSummaryPayCodeRows = [
      { id: '001', payCode: 'REG', units: 40.00, payRate: 11.000, payAmonut: 440.00 }
    ];
  }

  initManualPayrollSummaryTaxCodeRows(): void {
    this.manualPayrollSummaryTaxCodeRows = [
      { id: '001', taxCode: '00-10', description: 'FEDERAL INCOME TAX', taxableAmount: 440.00, amountWithheld: 10.00 },
      { id: '002', taxCode: '00-11', description: 'FICA-MEDICARE', taxableAmount: 440.00, amountWithheld: 6.38 },
      { id: '003', taxCode: '00-12', description: 'FICA-OASDI', taxableAmount: 440.00, amountWithheld: 27.28 }
    ];
  }

  initQuickSummary() {
    this.quickSummaryDataRows = [
      { id: '000', payCode: 'ADBG001', hours: 2, hoursWorked: 4, unit: 3, amount: 62.06 },
      { id: '001', payCode: 'ADBG002', hours: 2, hoursWorked: 4, unit: 4, amount: 56.47 },
      { id: '002', payCode: 'ADBG003', hours: 2, hoursWorked: 0, unit: 4, amount: 28.63 },
      { id: '003', payCode: 'ADBG004', hours: 2, hoursWorked: 4, unit: 0, amount: 56.47 },
      { id: '004', payCode: 'ADBG005', hours: 2, hoursWorked: 4, unit: 3, amount: 62.06 },
      { id: '005', payCode: 'ADBG006', hours: 2, hoursWorked: 0, unit: 3, amount: 27.05 },
      { id: '006', payCode: 'ADBG007', hours: 2, hoursWorked: 4, unit: 3, amount: 62.06 },
      { id: '007', payCode: 'ADBG008', hours: 2, hoursWorked: 4, unit: 4, amount: 35.69 },
      { id: '008', payCode: 'ADBG009', hours: 2, hoursWorked: 4, unit: 6, amount: 62.06 },
      { id: '009', payCode: 'ADBG010', hours: 2, hoursWorked: 4, unit: 3, amount: 47.51 },
      { id: '010', payCode: 'ADBG001', hours: 2, hoursWorked: 4, unit: 3, amount: 62.06 },
      { id: '011', payCode: 'ADBG008', hours: 2, hoursWorked: 4, unit: 3, amount: 62 }
    ];
  }
  initQuickSummaryDeduction() {
    this.quickSummaryDeductionDataRows = [
      { ID: '000', PayCode: 'ADBG001', Amount: 21 },
      { ID: '001', PayCode: 'ADBG002', Amount: 701.25 },
      { ID: '002', PayCode: 'ADBG003', Amount: 401.26 },
      { ID: '003', PayCode: 'ADBG004', Amount: 401 },
      { ID: '004', PayCode: 'ADBG005', Amount: 401 },
      { ID: '005', PayCode: 'ADBG006', Amount: 201 },
      { ID: '006', PayCode: 'ADBG007', Amount: 201 },
      { ID: '007', PayCode: 'ADBG008', Amount: 201 },
    ];
  }

  initPayGroups() {
    this.payGroups = [
      { id: 1, code: 'FT', name: 'Full-Time' },
      { id: 2, code: 'PT', name: 'Part-Time' },
      { id: 3, code: 'CONT', name: 'Contractor' }
    ];
  }

  initPayPeriods() {
    this.payPeriods = [
      {
        id: 1,
        code: 'PAY1',
        name: 'April 1 - April 25, 2018',
        description: 'April 1 - April 25, 2018'
      },
      {
        id: 2,
        code: 'PAY2',
        name: 'May 1 - May 25, 2018',
        description: 'May 1 - May 25, 2018'
      },
      {
        id: 3,
        code: 'PAY3',
        name: 'June 1 - June 25, 2018',
        description: 'June 1 - July 25, 2018'
      }
    ];
  }

  initJobCodes() {
    this.jobCodes = [{
      Code: '20185',
      Title: 'User Experience Designer 1',
      Description: 'Vestibulum viverra interdum lorem at vehicula',
      States: [2],
      Exempt: true,
      JobClass: 'Job Class 1',
      EEOJobGroup: 'group-1',
      EEOJobClass: 'eeoClass-1',
      Supervisory: true,
      PayGrade: 'none',
      SpecialRequirements: false,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: false,
      IsTippedPosition: false,
      IsDOT: false
    }, {
      Code: '20186',
      Title: 'User Experience Designer 2',
      Description: 'Cras elementum arcu ligula proin dolor',
      States: [1, 2],
      Exempt: false,
      JobClass: 'Job Class 1',
      EEOJobGroup: 'group-1',
      EEOJobClass: 'eeoClass-1',
      Supervisory: true,
      PayGrade: 'none',
      SpecialRequirements: false,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: false,
      IsTippedPosition: false,
      IsDOT: false
    }, {
      Code: '20187',
      Title: 'Product Owner',
      Description: 'Lorem ipsum dolor consectetur',
      States: [1],
      Exempt: true,
      JobClass: 'Job Class 1',
      EEOJobGroup: 'group-1',
      EEOJobClass: 'eeoClass-1',
      Supervisory: true,
      PayGrade: 'none',
      SpecialRequirements: false,
      ProbationDays: '',
      PerDiemPercent: '',
      IsSalesPosition: false,
      IsTippedPosition: false,
      IsDOT: false
    }];
  }

  initDivisions() {
    this.divisions = [
      { ID: '1', Text: 'Division 1' },
      { ID: '2', Text: 'Division 2' },
      { ID: '3', Text: 'Division 3' },
      { ID: '4', Text: 'Division 4' },
    ];
  }

  initDepartments() {
    this.departments = [
      { ID: '1', Text: 'Dept. 1' },
      { ID: '2', Text: 'Dept. 2' },
      { ID: '3', Text: 'Dept. 3' },
      { ID: '4', Text: 'Dept. 4' },
    ];
  }

  initLocations() {
    this.locations = [
      { ID: '1', Text: 'Location 1' },
      { ID: '2', Text: 'Location 2' },
      { ID: '3', Text: 'Location 3' },
      { ID: '4', Text: 'Location 4' },
    ];
  }

  initProjects() {
    this.projects = [
      {
        projectCode: 'PJ1',
        projectDescription: 'PJ Desc. 1',
        certifiedPayroll: true,
        projectLocation: 'Florida',
        certifiedContractorName: 'Diego Morales'
      }, {
        projectCode: 'PJ2',
        projectDescription: 'PJ Desc. 2',
        certifiedPayroll: true,
        projectLocation: 'New York',
        certifiedContractorName: 'Diego Morales'
      }, {
        projectCode: 'PJ3',
        projectDescription: 'PJ Desc. 3',
        certifiedPayroll: true,
        projectLocation: 'California',
        certifiedContractorName: 'Diego Morales'
      }
    ];
  }



  initJobCostData() {

    for (const employee of this.employees) {
      const randNum = Math.random();

      employee.jobCode = this.jobCodes[Math.floor(randNum * this.jobCodes.length)];
      employee.division = this.divisions[Math.floor(randNum * this.divisions.length)];
      employee.department = this.departments[Math.floor(randNum * this.departments.length)];
      employee.location = this.locations[Math.floor(randNum * this.locations.length)];
      employee.project = this.projects[Math.floor(randNum * this.projects.length)];
      employee.jobCostDetails = [];
    }

    // IF EVER NEEDED
    // for (const employee of this.employees) {
    //   for (const jobCost of employee.jobCostDetails) {
    //     if (jobCost.date) {
    //       jobCost.datePicker = this.convertDateToNgDateStruct(jobCost.date);
    //     }
    //   }
    // }

  }

  // TODO: Create utility service to contain methods like these
 public convertNgDateStructToDate(dateStruct: NgbDateStruct) {
    return new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
  }

  public convertDateToNgDateStruct(date: Date) {
    if (date) {
      return { day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear() };
    } else {
      return null;
    }

  }
}
