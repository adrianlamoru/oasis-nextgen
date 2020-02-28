import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {ClientEmployeesService} from "../../../shared/services";
import { ClientEmployees } from '../../models';

@Component({
  selector: 'app-employee-pay-rate-change',
  templateUrl: './employee-pay-rate-change.component.html',
  styleUrls: ['./employee-pay-rate-change.component.scss']
})
export class EmployeePayRateChangeComponent implements OnInit {
  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  editRate = false;
  editSupervisor = false;
  payRateChangeFormGroup: FormGroup;
  effectiveDatePicker: any;
  nextPayReviewDatePicker: any;
  lastPerformanceReviewDatePicker: any;
  nextPerformanceReviewDatePicker: any;
  startDatePicker: any;

  payHistoryTableDataRows = [
    {
      'ID': '1',
      'Date Effective': '10-12-2018',
      'Rate of pay': '8.5',
      'Per': 'Hour',
      'Standard Hours': '80',
      'Change Percent': '0.0',
      'Change Amount': '0.00'
    }, {
      'ID': '1',
      'Date Effective': '07-11-2018',
      'Rate of pay': '14.5',
      'Per': 'Hour',
      'Standard Hours': '80',
      'Change Percent': '0.00',
      'Change Amount': '0.00'
    }, {
      'ID': '1',
      'Date Effective': '05-03-2017',
      'Rate of pay': '9.5',
      'Per': 'Hour',
      'Standard Hours': '80',
      'Change Percent': '0.00',
      'Change Amount': '0.00'
    }];

  perPayRateItems = [
    'Hour',
    'Week',
    'Month',
    'Bi-Weekly',
    'Semi-Monthly',
    'Year'
  ];

  asoPayMethodItems = [
    'Hourly',
    'Salary',
    'Commission',
    'Driver'
  ];

  reasonCodesItems = [
    '90 Day Review',
    'Adjustment',
    'Annual Increase',
    'Rate Decrease',
    'Rate Increase'
  ];

  supervisorsDropdownItems = [
    'Phill Betts',
    'David Ben',
    'Ginel Stephens',
    'John Piper',
    'Angela Miner'
  ];

  pendingJobDatesTableDataRows = [
    {
      'ID': '1',
      'Title': 'Artist',
      'Date': '10/10/2018'
    }
  ];

  jobChangeJobCodesItems = [
    'JC-1000',
    'JC-1001',
    'JC-1002',
    'JC-1003',
    'JC-1004'
  ];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private clientEmployeeService: ClientEmployeesService) { }


  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;

    this.getData();
  }

  cancelFormEdits() {
    this.payRateChangeFormGroup.get('rateInformationGroup').disable();
    this.payRateChangeFormGroup.get('supervisorInformationGroup').disable();
  }

  getData() {
    this.payRateChangeFormGroup = this.formBuilder.group({
      rateInformationGroup: this.formBuilder.group({
        empStatus: { value: 'Active', disabled: true },
        empType: { value: 'Full Time', disabled: true },
        payPeriod: { value: 'Semi Monthly', disabled: true },
        payRate: '10',
        perPayRate: 'Year',
        asoPayMethod: 'Hourly',
        standardHours: '40',
        annualizedPay: '1050',
        defaultHours: '80',
        reasonCode: 'Adjustment',
        effDate: '10/12/2018'
      }),
      supervisorInformationGroup: this.formBuilder.group({
        currentSupervisor: 'Phil Betts',
        nextPayReview: '10/10/2018',
        lastPerformanceReview: '10/10/2018',
        nextPerformanceReview: '10/10/2018',
        currentJobCode: { value: 'JC-1010', disabled: true },
        startDate: { value: 'October 10, 2018', disabled: true }
      }),
      jobChangeInformationGroup: this.formBuilder.group({
        jobCode: 'JC-1010',
        reason: 'Adjustments',
        startDate: '10/30/2018'
      })
    });

    const effDateValue = new Date(this.payRateChangeFormGroup.get('rateInformationGroup.effDate').value);
    this.effectiveDatePicker = {
      day: effDateValue.getUTCDate(), month: effDateValue.getUTCMonth() + 1, year: effDateValue.getUTCFullYear()
    };

    const nextPayReviewValue = new Date(this.payRateChangeFormGroup.get('supervisorInformationGroup.lastPerformanceReview').value);
    this.nextPayReviewDatePicker = {
      day: nextPayReviewValue.getUTCDate(),
      month: nextPayReviewValue.getUTCMonth() + 1,
      year: nextPayReviewValue.getUTCFullYear()
    };

    const lastPerformanceReviewValue = new Date(this.payRateChangeFormGroup.get('supervisorInformationGroup.lastPerformanceReview').value);
    this.lastPerformanceReviewDatePicker = {
      day: lastPerformanceReviewValue.getUTCDate(),
      month: lastPerformanceReviewValue.getUTCMonth() + 1,
      year: lastPerformanceReviewValue.getUTCFullYear()
    };

    const nextPerformanceReviewValue = new Date(this.payRateChangeFormGroup.get('supervisorInformationGroup.lastPerformanceReview').value);
    this.nextPerformanceReviewDatePicker = {
      day: nextPerformanceReviewValue.getUTCDate(),
      month: nextPerformanceReviewValue.getUTCMonth() + 1,
      year: nextPerformanceReviewValue.getUTCFullYear()
    };

    const startDateValue = new Date(this.payRateChangeFormGroup.get('jobChangeInformationGroup.startDate').value);
    this.startDatePicker = {
      day: startDateValue.getUTCDate(),
      month: startDateValue.getUTCMonth() + 1,
      year: startDateValue.getUTCFullYear()
    };

    this.payRateChangeFormGroup.get('rateInformationGroup').disable();
    this.payRateChangeFormGroup.get('supervisorInformationGroup').disable();
  }

  selectedPerPayRate(item) {
    this.payRateChangeFormGroup.get('rateInformationGroup.perPayRate').setValue(item);
  }

  selectedAsoPayMethod(item) {
    this.payRateChangeFormGroup.get('rateInformationGroup.asoPayMethod').setValue(item);
  }

  selectedReasonCode(item) {
    this.payRateChangeFormGroup.get('rateInformationGroup.reasonCode').setValue(item);
  }

  selectedCurrentSupervisor(item) {
    this.payRateChangeFormGroup.get('supervisorInformationGroup.currentSupervisor').setValue(item);
  }

  selectedJobChangeJobCode(item) {
    this.payRateChangeFormGroup.get('jobChangeInformationGroup.jobCode').setValue(item);
  }

  selectedJobChangeReason(item) {
    this.payRateChangeFormGroup.get('jobChangeInformationGroup.reason').setValue(item);
  }

  editForm(source) {
    if (source === 'rateInformation') {
      this.payRateChangeFormGroup.get('rateInformationGroup.payRate').enable();
      this.payRateChangeFormGroup.get('rateInformationGroup.standardHours').enable();
      this.payRateChangeFormGroup.get('rateInformationGroup.annualizedPay').enable();
      this.payRateChangeFormGroup.get('rateInformationGroup.defaultHours').enable();
      this.payRateChangeFormGroup.get('rateInformationGroup.reasonCode').enable();
      this.payRateChangeFormGroup.get('rateInformationGroup.effDate').enable();
    } else if (source === 'supervisorInformation') {
      this.payRateChangeFormGroup.get('supervisorInformationGroup.nextPayReview').enable();
      this.payRateChangeFormGroup.get('supervisorInformationGroup.lastPerformanceReview').enable();
      this.payRateChangeFormGroup.get('supervisorInformationGroup.nextPerformanceReview').enable();
    }
  }


}
