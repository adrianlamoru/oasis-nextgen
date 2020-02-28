import { Component, OnInit, Input } from '@angular/core';
import { ClientEmployees, DataDriven } from '../../models/index';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-employee-status-change',
  templateUrl: './employee-status-change.component.html',
  styleUrls: ['./employee-status-change.component.scss']
})
export class EmployeeStatusChangeComponent implements OnInit {

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

  statusChangeData = {
    employmentStatus: 'Active as of '
      + this.i18n.getMonthFullName(this.nowNgbDate.month)
      + ' '
      + this.nowNgbDate.day
      + ', ' + this.nowNgbDate.year,
    employmentType: 'Full Time as of '
      + this.i18n.getMonthFullName(this.nowNgbDate.month)
      + ' '
      + this.nowNgbDate.day
      + ', '
      + this.nowNgbDate.year,
    statusTypeDate: this.nowNgbDate,
    reasonCode: ''
  };

  employmentTypeTemp = '';
  isEmploymentTypeDDOpened = false;
  employmentType: DataDriven[] = [
    { ID: 'F', Text: 'Full Time' },
    { ID: 'P', Text: 'Part Time' },
    { ID: 'SF', Text: 'Seasonal FT' },
    { ID: 'SP', Text: 'Seasonal PT' },
    { ID: 'TF', Text: 'Temp FT' },
    { ID: 'TP', Text: 'Temp PT' }
  ];

  reasonCodeTemp = '';
  isReasonCodeDDOpened = false;
  reasonCode: DataDriven[] = [
    { ID: 'A-FT>PT', Text: 'Full Time to Part Time' },
    { ID: 'A-PT>FT', Text: 'Part Time to Full Time' }
  ];

  constructor(public i18n: NgbDatepickerI18n) { }

  ngOnInit() {
    this.selectedEmployeeName = this.clientEmployee.firstName + ' ' + this.clientEmployee.lastName;
  }

  submitModal() {
    this.statusChangeData.employmentType = this.employmentTypeTemp + ' as of '
      + this.i18n.getMonthFullName(this.nowNgbDate.month)
      + ' ' + this.nowNgbDate.day + ', '
      + this.nowNgbDate.year;
    this.statusChangeData.reasonCode = this.reasonCodeTemp;
    this.modalCloseFunc('Cross click');
  }

  closeErrorMessage() {
    this.showErrorMessage = false;
  }

  openErrorMessage() {
    this.showErrorMessage = true;
    if (!this.showErrorMessage) {
      setTimeout(() => { this.modalCloseFunc('Cross click'); }, 1000);
    }
  }

  changeEmploymentTypeSelection(item) {
    this.employmentTypeTemp = item;
    this.isEmploymentTypeDDOpened = !this.isEmploymentTypeDDOpened;
  }

  changeReasonCodeSelection(item) {
    this.reasonCodeTemp = item;
    this.isReasonCodeDDOpened = !this.isReasonCodeDDOpened;
  }

}

