import { Component, OnInit, Input } from '@angular/core';
import { ClientEmployees, DataDriven } from '../../models/index';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-employee-supervisor-change',
  templateUrl: './employee-supervisor-change.component.html',
  styleUrls: ['./employee-supervisor-change.component.scss']
})
export class EmployeeSupervisorChangeComponent implements OnInit {

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  showErrorMessage: boolean;

  nowNgbDate: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  supervisorChangeData = {
    supervisor: 'SP-0001',
    lastPerformanceReview: this.nowNgbDate,
    nextPerformanceReview: this.nowNgbDate,
    nextPayReview: this.nowNgbDate
  };

  supervisorDataDriven: DataDriven[] = [
    { ID: 'SP-0001', Text: 'Supervisor 1' },
    { ID: 'SP-0002', Text: 'Supervisor 2' },
    { ID: 'SP-0003', Text: 'Supervisor 3' },
    { ID: 'SP-0004', Text: 'Supervisor 4' }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;
  }

  submitModal() {
    /* Submit Data */
    this.showErrorMessage = true;

    if (!this.showErrorMessage) {
      setTimeout(() => { this.modalCloseFunc('Cross click'); }, 1000);
    }
  }

  closeErrorMessage() {
    this.showErrorMessage = false;
  }

}

