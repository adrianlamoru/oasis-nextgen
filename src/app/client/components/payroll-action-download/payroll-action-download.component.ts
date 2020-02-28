import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Roster } from '../../models/index';

@Component({
  selector: 'app-payroll-action-download',
  templateUrl: './payroll-action-download.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./payroll-action-download.component.scss']
})
export class PayrollActionDownloadComponent implements OnInit {

  @Input() roster: Roster;
  @Input() modalCloseFunc;
  @Input() modalDismissFunc;

  downloadItems = [{
    ID: 1,
    title: 'Separation Form'
  }, {
    ID: 2,
    title: 'Employer Leave and Return'
  }, {
    ID: 3,
    title: 'Employee Rehire Form'
  }, {
    ID: 4,
    title: 'HIPAA Privacy Notice'
  }];

  constructor() {}

  ngOnInit() {
  }

  download(item: any) {
    alert('Action download: ' + item.title);
  }

}
