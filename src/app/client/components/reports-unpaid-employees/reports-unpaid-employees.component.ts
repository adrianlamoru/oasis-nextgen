import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportsService, ReportsUnpaidEmployeesReportService } from '../../services';
import { UnpaidEmployees } from '../../models';

@Component({
  selector: 'app-reports-unpaid-employees',
  templateUrl: './reports-unpaid-employees.component.html',
  styleUrls: ['./reports-unpaid-employees.component.scss']
})
export class ReportsUnpaidEmployeesComponent implements OnInit {

  reportsUnpaidEmployeesReportData: UnpaidEmployees[];
  filteredUnpaidEmployeesReportData: UnpaidEmployees[];

  reportGeneratedDate: string;
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;

  disableViewReportButton: boolean;
  dropdownOptions: any[];
  isLoading = true;

  constructor(private router: Router,
              private reportsService: ReportsService,
              private reportsUnpaidEmployeesReportService: ReportsUnpaidEmployeesReportService) { }

  ngOnInit() {

    const today = new Date();
    this.startDate = {
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    };
    this.endDate = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);
  }

  viewReport() {
    this.isLoading = true;
    this.filteredUnpaidEmployeesReportData = this.reportsUnpaidEmployeesReportService.getUnpaidEmployees();

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

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption(item) {}

}
