import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataDriven } from '../../models';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { PayrollPtoHoursTaken } from '../../models/payroll-pto-hours-taken.interface';
import { ReportsService } from '../../services';
import { ReportsPtoHoursTakenService } from '../../services/reports-pto-hours-taken.service';

@Component({
  selector: 'app-reports-payroll-pto-hours-taken',
  templateUrl: './reports-payroll-pto-hours-taken.component.html',
  styleUrls: ['./reports-payroll-pto-hours-taken.component.scss']
})
export class ReportsPayrollPtoHoursTakenComponent implements OnInit {

  @Input() pageSource?: string;
  @Input() employeeId?: string;

  reportGeneratedDate: any;
  disableViewReportButton = true;
  selectedEvent: DataDriven;
  absenceCodes: DataDriven[];
  selectedAbsence: DataDriven;
  selectedStartDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;
  filteredPtoHoursTakenRows: PayrollPtoHoursTaken[];
  ptoHoursTakenDataRows: PayrollPtoHoursTaken[];
  dropdownOptions: any[];
  isLoading = true;

  constructor(private reportsPtoHoursTakenService: ReportsPtoHoursTakenService,
              private router: Router,
              private reportsService: ReportsService) { }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.initPtoHoursTaken();

    this.selectedAbsence = this.absenceCodes.find(e => e.ID === 'ALL');

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
      this.viewReport();

      this.isLoading = false;
    }, 1000);

    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  initPtoHoursTaken() {
    this.absenceCodes = [{
      ID: 'ALL',
      Text: 'ALL'
    }, {
      ID: 'PERSONAL',
      Text: 'PERSONAL'
    }, {
      ID: 'VACATION',
      Text: 'VACATION'
    }];
  }

  initPtoHoursTakenData() {
    // const today = new Date();
    // const yesterday = new Date();
    // yesterday.setDate(today.getDate() - 1);
    // const tenAgo = new Date();
    // tenAgo.setDate(today.getDate() - 10);
    // const twentyAgo = new Date();
    // twentyAgo.setDate(today.getDate() - 20);

    this.ptoHoursTakenDataRows = [];
  }


  viewReport() {

    this.isLoading = true;

    if (this.pageSource !== 'employeeReports' ) {
      if (this.selectedAbsence.ID !== 'ALL') {
        this.filteredPtoHoursTakenRows = this.reportsPtoHoursTakenService.getPtoHoursTaken().filter(item => {
          return item.absenceCode === this.selectedAbsence.ID;
        });
      } else {
        this.filteredPtoHoursTakenRows = this.reportsPtoHoursTakenService.getPtoHoursTaken();
      }
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      if (this.selectedAbsence.ID !== 'ALL') {
        this.filteredPtoHoursTakenRows = this.reportsPtoHoursTakenService.getEmployeePtoHoursTaken(this.employeeId).filter(item => {
          return item.absenceCode === this.selectedAbsence.ID;
        });
      } else {
        this.filteredPtoHoursTakenRows = this.reportsPtoHoursTakenService.getEmployeePtoHoursTaken(this.employeeId);
      }
    }

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;

    this.isLoading = false;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

    this.isLoading = false;
    }, 1000);
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  selectEvent(eventCode: DataDriven) {
    this.selectedAbsence = eventCode;

    this.disableViewReportButton = false;
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
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
    }
  }

  selectedDownloadOption(item) {}

}
