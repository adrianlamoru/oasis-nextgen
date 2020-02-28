import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';

import { Roster } from '../../models';
import { Event } from '@angular/router';
import { element } from 'protractor';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-payroll-run-off-cycle-batch',
  templateUrl: './payroll-run-off-cycle-batch.component.html',
  styleUrls: ['./payroll-run-off-cycle-batch.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class PayrollRunOffCycleBatchComponent implements OnInit {

  @Input() roster: Roster;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  @Output() saveEvent = new EventEmitter<Roster>();

  payPeriods: string[] = [
    'Employee Assigned'
    , 'Weekly Off-Cycle'
    , 'Bi-Weekly Off-Cycle'
    , 'Semi-Monthly Off-Cycle'
    , 'Monthly Off-Cycle'
  ];

  rosterFormGroup: FormGroup;

  openedPayPeriodBox: boolean;

  constructor(
    private rosterFormBuilder: FormBuilder
  ) {
    this.openedPayPeriodBox = false;
  }

  ngOnInit() {
    this.configureFormValidation();
  }

  configureFormValidation(): void {
    this.rosterFormGroup = this.rosterFormBuilder.group({
      description: [null, Validators.required],
      checkDate: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      frequency: [null, Validators.required]
    });
  }

  formatDate(dateObj): string {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    return monthNames[dateObj.month] + ' ' + dateObj.day + ', ' + dateObj.year;
  }

  convertViewModelToModel(): Roster {
    const model: Roster = {
      id: this.roster.id,
      batchNumber: this.roster.batchNumber,
      status: this.roster.status,
      location: this.roster.description,
      description: this.roster.description,
      checkDate: this.roster.checkDate,
      startDate: this.roster.startDate,
      endDate: this.roster.endDate,
      frequency: this.roster.frequency,
      total: this.roster.total,
      totalPayroll: this.roster.totalPayroll,
      totalDeductions: this.roster.totalDeductions,
      employees: this.roster.employees,
      payGroup: this.roster.payGroup,
      isOffCycle: true
    };

    return model;
  }

  saveForm(form: NgForm): void {
    if (form.valid) {
      const roster = this.convertViewModelToModel();

      this.saveEvent.emit(roster);

      this.modalCloseFunc('Cross click');
    }
  }

  onEnterKey(event) {
    this.openedPayPeriodBox = !this.openedPayPeriodBox;
  }

  onClosed(event) {
    this.openedPayPeriodBox = false;
  }
}
