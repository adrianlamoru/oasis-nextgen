import { Component, OnInit, Input } from '@angular/core';
import { ClientEmployees, DataDriven } from '../../models/index';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-employee-termination',
  templateUrl: './employee-termination.component.html',
  styleUrls: ['./employee-termination.component.scss']
})
export class EmployeeTerminationComponent implements OnInit {

  @Input() clientEmployee: ClientEmployees;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;
  selectedEmployeeName: string;

  showErrorMessage: boolean;
  terminationTypeVoluntary: boolean = null;
  terminationTypeInvoluntary: boolean = null;
  isSupervisor = false;

  nowNgbDate: NgbDateStruct = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };

  terminationData = {
    terminationType: '',
    job: 'Clerk',
    employmentStatus: 'Active',
    employmentType: 'Full Time',
    reasonCode: '',
    terminationStatusCode: '',
    terminationDate: this.nowNgbDate,
    canBeRehired: null,
    turnOffACH: null,
    transferSupervisionTo: ''
  };

  terminationStatusCodeTemp = '';
  isTerminationStatusCodeDDOpened = false;
  terminationStatusCode: DataDriven[] = [
    { ID: 'TM', Text: 'Term' }
  ];

  reasonCodeTemp = '';
  isReasonCodeDDOpened = false;
  reasonCode: DataDriven[] = [
    { ID: 'T-V-201', Text: '201 - Quit for other employment' },
    { ID: 'T-V-202', Text: '202 - Quit/Resignation' },
    { ID: 'T-V-203', Text: '203 - Relocated/Moved' },
    { ID: 'T-V-204', Text: '204 - Quit without notice/Job abandonment' },
    { ID: 'T-V-205', Text: '205 - No show on begin date' },
    { ID: 'T-V-206', Text: '206 - Did not return from leave' },
    { ID: 'T-V-207', Text: '207 - Retirement' },
    { ID: 'T-V-208', Text: '208 - Job refusal' },
    { ID: 'T-V-210', Text: '210 - Transfer within client owned companies' },
    { ID: 'T-V-500', Text: '500 - Death' }
  ];

  transferSupervisionToTemp = '';
  supervisorListDDOpened = false;
  supervisorList: DataDriven[] = [
    { ID: 'SP-0001', Text: 'Supervisor 1' },
    { ID: 'SP-0002', Text: 'Supervisor 2' },
    { ID: 'SP-0003', Text: 'Supervisor 3' },
    { ID: 'SP-0004', Text: 'Supervisor 4' }
  ];

  constructor(public i18n: NgbDatepickerI18n) { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;
  }

  submitModal() {
    this.terminationData.terminationStatusCode = this.terminationStatusCodeTemp;
    this.terminationData.reasonCode = this.reasonCodeTemp;
    this.terminationData.transferSupervisionTo = this.transferSupervisionToTemp;

    this.modalCloseFunc('Cross click');
  }

  closeErrorMessage() {
    // this.showErrorMessage = false;
  }

  openErrorMessage() {
    this.showErrorMessage = true;
    if (!this.showErrorMessage) {
      setTimeout(() => { this.modalCloseFunc('Cross click'); }, 1000);
    }
  }

  changeTerminationStatusCodeSelection(item) {
    this.terminationStatusCodeTemp = item;
    this.isTerminationStatusCodeDDOpened = !this.isTerminationStatusCodeDDOpened;
  }

  changeReasonCodeSelection(item) {
    this.reasonCodeTemp = item;
    this.isReasonCodeDDOpened = !this.isReasonCodeDDOpened;
  }

  changeSupervisorListSelection(item) {
    this.transferSupervisionToTemp = item;
    this.supervisorListDDOpened = !this.supervisorListDDOpened;
  }

  terminationTypeUpdate(e, isTerminationTypeVoluntary) {
    if (isTerminationTypeVoluntary) {
      this.terminationTypeInvoluntary = false;
      this.terminationData.terminationType = 'voluntary';
    } else {
      this.terminationTypeVoluntary = false;
      this.terminationData.terminationType = 'involuntary';
    }
  }

  get disableSupervisorFields() {
    return this.terminationData.job.toLowerCase() !== 'supervisor';
  }

  get isDataCheckInvalid() {
    return this.reasonCodeTemp === '' || this.terminationStatusCodeTemp === '' ||
      this.terminationData.turnOffACH == null || this.terminationData.canBeRehired == null ||
      this.terminationData.terminationType === '' || (this.isSupervisor && this.transferSupervisionToTemp === '');
  }

}
