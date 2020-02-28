import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const today = new Date();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

@Component({
  selector: 'app-payroll-calendar',
  templateUrl: './payroll-calendar.component.html',
  styleUrls: ['./payroll-calendar.component.scss']
})

export class PayrollCalendarComponent implements OnInit {

  @Input() isDashboard;

  payrollCalanderDataFromServer = [{
    'payDate': new Date('8/13/2018'),
    'payDay': 'Friday',
    'perStart': new Date('8/1/2018'),
    'perEnd': new Date('8/15/2018'),
    'per': '1',
    'callIn': new Date('8/12/2018'),
    'deliverOn': new Date('8/13/2018'),
    'dueOn': new Date('8/10/2018')
  }, {
    'payDate': new Date('8/30/2018'),
    'payDay': 'Monday',
    'perStart': new Date('8/16/2018'),
    'perEnd': new Date('8/30/2018'),
    'per': '2',
    'callIn': new Date('8/27/2018'),
    'deliverOn': new Date('8/30/2018'),
    'dueOn': new Date('8/25/2018')
  }, {
    'payDate': new Date('9/15/2018'),
    'payDay': 'Tuesday',
    'perStart': new Date('9/1/2018'),
    'perEnd': new Date('9/16/2018'),
    'per': '1',
    'callIn': new Date('9/14/2018'),
    'deliverOn': new Date('9/15/2018'),
    'dueOn': new Date('9/12/2018')
  }, {
    'payDate': new Date('9/31/2018'),
    'payDay': 'Thursday',
    'perStart': new Date('9/17/2018'),
    'perEnd': new Date('9/31/2018'),
    'per': '2',
    'callIn': new Date('9/30/2018'),
    'deliverOn': new Date('9/31/2018'),
    'dueOn': new Date('9/28/2018')
  }, {
    'payDate': new Date('10/15/2018'),
    'payDay': 'Friday',
    'perStart': new Date('10/1/2018'),
    'perEnd': new Date('10/15/2018'),
    'per': '1',
    'callIn': new Date('10/14/2018'),
    'deliverOn': new Date('10/15/2018'),
    'dueOn': new Date('10/12/2018')
  }, {
    'payDate': new Date('10/29/2018'),
    'payDay': 'Friday',
    'perStart': new Date('10/16/2018'),
    'perEnd': new Date('10/30/2018'),
    'per': '2',
    'callIn': new Date('10/28/2018'),
    'deliverOn': new Date('10/29/2018'),
    'dueOn': new Date('10/26/2018')
  }, {
    'payDate': new Date('11/13/2018'),
    'payDay': 'Friday',
    'perStart': new Date('11/1/2018'),
    'perEnd': new Date('11/16/2018'),
    'per': '1',
    'callIn': new Date('11/12/2018'),
    'deliverOn': new Date('11/13/2018'),
    'dueOn': new Date('11/10/2018')
  }, {
    'payDate': new Date('11/31/2018'),
    'payDay': 'Tuesday',
    'perStart': new Date('11/17/2018'),
    'perEnd': new Date('11/31/2018'),
    'per': '2',
    'callIn': new Date('11/30/2018'),
    'deliverOn': new Date('11/31/2018'),
    'dueOn': new Date('11/28/2018')
  }, {
    'payDate': new Date('12/15/2018'),
    'payDay': 'Wednesday',
    'perStart': new Date('12/1/2018'),
    'perEnd': new Date('12/16/2018'),
    'per': '1',
    'callIn': new Date('12/14/2018'),
    'deliverOn': new Date('12/15/2018'),
    'dueOn': new Date('12/12/2018')
  }];

  payrollCalendarDO: any;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.payrollCalendarDO = {
      'daysHeader': ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      'monthLabel': '',
      'days': [],
      'currentDay': null,
      'payrollDue': null,
      'checkDate': null
    };
    today.setHours(0, 0, 0, 0);
    this.buildPayrollCalendarDataStructure();
  }

  buildPayrollCalendarDataStructure(): void {
    let calendarStartDate = new Date();
    let calendarEndDate = new Date();
    const selectedPayPeriod = this.choosePayPeriod();

    if (selectedPayPeriod) {
      calendarStartDate = this.setDayForTheWeek(this.payrollCalanderDataFromServer[selectedPayPeriod].perStart, -7);
      calendarEndDate = this.setDayForTheWeek(this.payrollCalanderDataFromServer[selectedPayPeriod].perEnd, 6);
      this.payrollCalendarDO.monthLabel = this.generateMonthLabel(calendarStartDate, calendarEndDate);
      this.payrollCalendarDO.currentDay = today;
      this.payrollCalendarDO.payrollDue = this.payrollCalanderDataFromServer[selectedPayPeriod].dueOn;
      this.payrollCalendarDO.payrollDue.setHours(0, 0, 0, 0);
      this.payrollCalendarDO.checkDate = this.payrollCalanderDataFromServer[selectedPayPeriod].callIn;
      this.payrollCalendarDO.checkDate.setHours(0, 0, 0, 0);
      this.payrollCalendarDO.days = this.getDates(calendarStartDate, calendarEndDate);
    }
  }

  choosePayPeriod() {
    let payrollIndex = null;
    this.payrollCalanderDataFromServer.forEach((item, index) => {
      if (today >= item.perStart && today <= item.perEnd) {
        payrollIndex = index;
      }
    });
    return payrollIndex;
  }

  setDayForTheWeek(date, dayOfWeek) {
    date = new Date(date.getTime());
    date.setDate(date.getDate() + (dayOfWeek + 7 - date.getDay()) % 7);
    return date;
  }

  getDates(startDate, endDate) {
    const dateArray = new Array();
    const datArraySliced = new Array();
    let currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);

    while (currentDate <= endDate) {
      dateArray.push({
        'day': currentDate.getDate(),
        'isToday': this.isTodaysDate(currentDate),
        'isDueDate': this.isPayrollDueDate(currentDate),
        'isCheckDate': this.isPayrollCheckDate(currentDate)
      });
      currentDate = this.addDays(currentDate, 1);
    }

    while (dateArray.length) {
      datArraySliced.push(dateArray.splice(0, 7));
    }

    return datArraySliced;
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  generateMonthLabel(startDate, endDate) {
    const sMonth = monthNames[startDate.getMonth()];
    const eMonth = monthNames[endDate.getMonth()];

    return startDate.getMonth() === endDate.getMonth() ? sMonth + ' ' + startDate.getFullYear() :
      startDate.getFullYear() === endDate.getFullYear() ? sMonth + ' - ' + eMonth + ' ' + startDate.getFullYear()
        : sMonth + ' ' + startDate.getFullYear() + ' - ' + eMonth + ' ' + endDate.getFullYear();
  }

  isTodaysDate(date) {
    date = new Date(date.getTime());
    date.setHours(0, 0, 0, 0);
    return date.getTime() === today.getTime();
  }

  isPayrollDueDate(date) {
    date = new Date(date.getTime());
    date.setHours(0, 0, 0, 0);
    return date.getTime() === this.payrollCalendarDO.payrollDue.getTime();
  }

  isPayrollCheckDate(date) {
    date = new Date(date.getTime());
    date.setHours(0, 0, 0, 0);
    return date.getTime() === this.payrollCalendarDO.checkDate.getTime();
  }

  openPayrollCalendarListModal(size, content) {
    this.modalService.open(content, { size: size });
  }

  printPDF() {
    window.open('/assets/pdf/samplePDFForPrint.pdf', '_blank');
  }

}
