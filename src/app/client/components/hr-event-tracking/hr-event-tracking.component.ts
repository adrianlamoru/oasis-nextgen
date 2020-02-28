import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataDriven, HrEventTracking } from '../../models';
import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-event-tracking',
  templateUrl: './hr-event-tracking.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./hr-event-tracking.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class HrEventTrackingComponent implements OnInit {

  disableViewReportButton: boolean;
  eventCodes: DataDriven[];
  eventDataRows: HrEventTracking[];
  filteredEventDataRows: HrEventTracking[];
  reportGeneratedDate: string;
  selectedEndDate: NgbDateStruct;
  selectedEvent: DataDriven;
  selectedStartDate: NgbDateStruct;

  isLoading = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.disableViewReportButton = true;
    this.initEvents();
    if (this.eventCodes.length > 0) {
      this.selectedEvent = this.eventCodes[0];
    }
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    this.selectedStartDate = {
      day: lastMonth.getDate(),
      month: lastMonth.getMonth() + 1,
      year: lastMonth.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    setTimeout(() => {
      this.initEventData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  initEvents() {
    this.eventCodes = [{
      ID: 'ALL',
      Text: 'All'
    }, {
      ID: 'AB',
      Text: 'Test Event'
    }, {
      ID: 'JanReview',
      Text: 'January Reviews Faculty and Staff'
    }, {
      ID: 'TR',
      Text: 'Tuition Reimbursement'
    }];
  }

  selectEvent(eventCode: DataDriven) {
    this.selectedEvent = eventCode;

    this.disableViewReportButton = false;
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  viewReport() {
    if (this.selectedEvent.ID !== 'ALL') {
      this.filteredEventDataRows = this.eventDataRows
        .filter(e => e.eventCode === this.selectedEvent.ID && ((this.compareDates(e.eventDate, this.selectedStartDate) === 1
          && this.compareDates(e.eventDate, this.selectedEndDate) === -1) ||
          this.compareDates(e.eventDate, this.selectedStartDate) === 0 ||
          this.compareDates(e.eventDate, this.selectedEndDate) === 0)
        );
    } else {
      this.filteredEventDataRows = this.eventDataRows
        .filter(e => ((this.compareDates(e.eventDate, this.selectedStartDate) === 1
          && this.compareDates(e.eventDate, this.selectedEndDate) === -1) ||
          this.compareDates(e.eventDate, this.selectedStartDate) === 0 ||
          this.compareDates(e.eventDate, this.selectedEndDate) === 0));
    }

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }

  initEventData() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tenAgo = new Date();
    tenAgo.setDate(today.getDate() - 10);
    const twentyAgo = new Date();
    twentyAgo.setDate(today.getDate() - 20);
    this.eventDataRows = [{
      actionDate: today,
      employeeID: 'A04754',
      employeeName: 'APSEY LOREN',
      eventCode: 'AB',
      eventDate: today,
      eventDescription: 'Test Event',
      comments: 'Finished'
    }, {
      actionDate: tenAgo,
      employeeID: 'W04582',
      employeeName: 'ASDF FRANK A',
      eventCode: 'JanReview',
      eventDate: tenAgo,
      eventDescription: 'January Reviews Faculty and Staff',
      comments: 'Review Complete'
    }, {
      actionDate: yesterday,
      employeeID: 'Z04729',
      employeeName: 'BARNES ELSA',
      eventCode: 'TR',
      eventDate: yesterday,
      eventDescription: 'Tuition Reimbursement',
      comments: 'Approved'
    }, {
      actionDate: twentyAgo,
      employeeID: 'Y04584',
      employeeName: 'BLUE TRUE A',
      eventCode: 'TR',
      eventDate: twentyAgo,
      eventDescription: 'Tuition Reimbursement',
      comments: 'Approved'
    }, {
      actionDate: yesterday,
      employeeID: 'F04687',
      employeeName: 'BRIAN JONES',
      eventCode: 'JanReview',
      eventDate: yesterday,
      eventDescription: 'January Reviews Faculty and Staff',
      comments: 'Review Done'
    }];
  }

  compareDates(date: Date, dateNg: NgbDateStruct) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (year > dateNg.year) {
      return 1;
    } else if (year < dateNg.year) {
      return -1;
    } else {
      if (month > dateNg.month) {
        return 1;
      } else if (month < dateNg.month) {
        return -1;
      } else {
        if (day > dateNg.day) {
          return 1;
        } else if (day < dateNg.day) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}
