import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import { DataDriven, AverageHours } from '../../models/index';
import { ReportsAverageHoursService, ReportsService } from '../../services';

@Component({
  selector: 'app-reports-average-hours',
  templateUrl: './reports-average-hours.component.html',
  styleUrls: ['./reports-average-hours.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class ReportsAverageHoursComponent implements OnInit {

  disableViewReportButton = true;

  statusCode: DataDriven[];
  selectedStatus: DataDriven;

  averageHoursDataRows: AverageHours[];
  filteredAverageHoursDataRows: AverageHours[];

  reportGeneratedDate: any;
  selectedBeginningDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;

  dropdownOptions: any[];

  isLoading = true;

  constructor(
    private router: Router,
    private reportsService: ReportsService,
    private averageHoursReportService: ReportsAverageHoursService
  ) { }

  ngOnInit() {

    this.initStatus();
    this.selectedStatus = this.statusCode.find(s => s.ID === '-1');

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    const today = new Date();

    this.selectedBeginningDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()

    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

      this.averageHoursReportService.getAverageHours().subscribe(
          averageHoursDataRows => {
            this.averageHoursDataRows = averageHoursDataRows;
            this.isLoading = false;
            this.viewReport();
      });

      this.dropdownOptions = this.reportsService.getDownloadOptions();

  }


  selectStatus(status: DataDriven) {
    this.disableViewReportButton = false;

    // Enable view report button when there is a change in dropdown
    this.selectedStatus = status;
  }

  viewReport() {

    this.filteredAverageHoursDataRows = [];

    if (this.selectedStatus.ID !== '-1') {
      this.filteredAverageHoursDataRows = this.averageHoursDataRows
        .filter(e => e.statusID === this.selectedStatus.ID && ((this.compareDates(e.payDate, this.selectedBeginningDate) === 1
          && this.compareDates(e.payDate, this.selectedEndDate) === -1) ||
          this.compareDates(e.payDate, this.selectedBeginningDate) === 0 ||
          this.compareDates(e.payDate, this.selectedEndDate) === 0)
        );
    } else {
      this.filteredAverageHoursDataRows = this.averageHoursDataRows
        .filter(e => ((this.compareDates(e.payDate, this.selectedBeginningDate) === 1
          && this.compareDates(e.payDate, this.selectedEndDate) === -1) ||
          this.compareDates(e.payDate, this.selectedBeginningDate) === 0 ||
          this.compareDates(e.payDate, this.selectedEndDate) === 0));
    }

    // generate timestamp of report
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    // disable the view report button after filtering
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }

    /**
   * init status data driven
   */
  initStatus() {
    this.statusCode = [
    {
      ID: '-1',
      Text: 'ALL'
    },
    {
      ID: '0',
      Text: 'ACTIVE'
    },
    {
      ID: '1',
      Text: 'FMLA'
    },
    {
      ID: '2',
      Text: 'LEAVE - PD'
    },
    {
      ID: '3',
      Text: 'LEAVE - UP'
    },
    {
      ID: '4',
      Text: 'TERM'
    },
    {
      ID: '5',
      Text: 'W COMP'
    },
    {
      ID: '6',
      Text: 'W/C FMLA'
    }];
  }

  compareDates(date: Date, dateNg: NgbDateStruct) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
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

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

}
