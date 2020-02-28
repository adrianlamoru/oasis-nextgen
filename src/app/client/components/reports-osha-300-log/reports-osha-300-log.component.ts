import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService, ReportsOsha300LogService } from '../../services';

@Component({
  selector: 'app-reports-osha-300-log',
  templateUrl: './reports-osha-300-log.component.html',
  styleUrls: ['./reports-osha-300-log.component.scss']
})
export class ReportsOsha300LogComponent implements OnInit {

  reportGeneratedDate: string;

  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay = 2018;

  osha300LogReportData: any[];
  filteredOsha300LogReportData: any[];

  disableViewReportButton = true;
  dropdownOptions: any[];
  isLoading = true;

  constructor(private router: Router,
    private reportsService: ReportsService,
    private reportOsha300LogService: ReportsOsha300LogService) { }

  ngOnInit() {
    this.getYears();
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    setTimeout(() => {
      this.filterDataRow();

      this.isLoading = false;
    }, 1000);
  }

  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 3;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionChanged(year) {
    this.selectedYearDisplay = year;
    this.disableViewReportButton = false;
  }

  filterDataRow() {
    this.isLoading = true;

    this.selectedYear = this.selectedYearDisplay;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.filteredOsha300LogReportData = this.reportOsha300LogService.getOsha300Log();

    this.disableViewReportButton = true;
    this.isLoading = false;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.filterDataRow();

     this.isLoading = false;
    }, 1000);
  }


  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption() {}
}
