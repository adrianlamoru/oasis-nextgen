import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DataDriven, ReportsHRTermination } from '../../models';
import { ReportsHRTerminationService } from '../../services';

@Component({
  selector: 'app-reports-hr-termination',
  templateUrl: './reports-hr-termination.component.html',
  styleUrls: ['./reports-hr-termination.component.scss']
})
export class ReportsHrTerminationComponent implements OnInit {

  reportsHRTerminationReport: ReportsHRTermination[];
  filteredHRTerminationReport: ReportsHRTermination[];

  terminationReportRadioType = [
    'By Date Range',
    'By Month'
  ];

  byDateRangeValue: boolean;
  byMonthValue: boolean;

  selectedStartDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;

  simpleYears: number[];
  selectedYear: any;

  monthData: DataDriven[];
  selectedMonth: any;


  isLoading = true;
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  dropdownOptions: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService,
    private reportsHRTerminationService: ReportsHRTerminationService
  ) { }

  ngOnInit() {

    this.byDateRangeValue = false;
    this.byMonthValue = true;

    this.initData();

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);

  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }


  initData() {

    this.getYears();
    this.getMonths();

    this.selectedMonth = 'All Months';

    this.dropdownOptions = this.reportsService.getDownloadOptions();


    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    const today = new Date();
    this.selectedStartDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
    this.selectedEndDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    this.isLoading = false;

  }

  viewReport() {
    this.isLoading = true;


  if (!this.byDateRangeValue) {

    this.reportsHRTerminationService.getHRTerminationData()
    .subscribe(reportsHRTerminationReport => {
      this.filteredHRTerminationReport = reportsHRTerminationReport;

      this.filteredHRTerminationReport = this.filteredHRTerminationReport.
      filter(t =>
        ((this.compareDates(t.termDate, this.selectedStartDate) === 1 &&
          this.compareDates(t.termDate, this.selectedEndDate) === -1 ||
          this.compareDates(t.termDate, this.selectedStartDate) === 0 ||
          this.compareDates(t.termDate, this.selectedEndDate) === 0)));

      this.isLoading = false;

    });
  }

  if (!this.byMonthValue) {

    this.reportsHRTerminationService.getHRTerminationData()
    .subscribe(reportsHRTerminationReport => {
      this.filteredHRTerminationReport = reportsHRTerminationReport;

      this.filteredHRTerminationReport = this.filteredHRTerminationReport.
      filter(t => (this.selectedYear === t.termDate.getFullYear) &&
        (this.selectedMonth === t.termDate.getMonth));

      this.isLoading = false;

    });

  }

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.disableViewReportButton = true;

    this.isLoading = false;

  }

    // Get simpleYears array
    getYears() {
      this.simpleYears = [];
      this.selectedYear = new Date().getFullYear();
      const totalYears = 18;
      for (let i = 0; i < totalYears; i++) {
        this.simpleYears.push(this.selectedYear - i);
      }
    }

    getMonths() {
      this.monthData = [
        {
          ID: '0',
          Text: 'All Months'
        }, {
          ID: '1',
          Text: 'January'
        }, {
          ID: '2',
          Text: 'February'
        }, {
          ID: '3',
          Text: 'March'
        }, {
          ID: '4',
          Text: 'April'
        }, {
          ID: '5',
          Text: 'May'
        }, {
          ID: '6',
          Text: 'June'
        }, {
          ID: '7',
          Text: 'July'
        }, {
          ID: '8',
          Text: 'August'
        }, {
          ID: '9',
          Text: 'September'
        }, {
          ID: '10',
          Text: 'October'
        }, {
          ID: '11',
          Text: 'November'
        }, {
          ID: '12',
          Text: 'December'
        }
      ];
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

  onTerminationReportRadioValueChanged(event) {
    if (event.value === 'By Date Range') {
      this.byMonthValue = true;
      this.byDateRangeValue = false;
    } else if (event.value === 'By Month') {
      this.byMonthValue = false;
      this.byDateRangeValue = true;
    }
  }

  onSelectionYears(year) {
    this.selectedYear = year;
    this.disableViewReportButton = false;
  }

  onSelectionMonth(item) {
    this.selectedMonth = item.Text;
    this.disableViewReportButton = false;
  }

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  goToBack() {
      this.router.navigate(['/client/reports/']);

  }

}
