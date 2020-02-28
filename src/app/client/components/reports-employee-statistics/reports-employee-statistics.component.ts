import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService, EmployeeStatisticsService } from '../../services';
import { EmployeeStatistics } from '../../models';

@Component({
  selector: 'app-reports-employee-statistics',
  templateUrl: './reports-employee-statistics.component.html',
  styleUrls: ['./reports-employee-statistics.component.scss']
})
export class ReportsEmployeeStatisticsComponent implements OnInit {

  employeeStatisticsData: EmployeeStatistics[];

  reportGeneratedDate: string;
  dropdownOptions: any[];
  isLoading = true;

  constructor(private router: Router,
    private reportsService: ReportsService,
    private employeeStatisticsService: EmployeeStatisticsService) { }

  ngOnInit() {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeStatisticsData = this.employeeStatisticsService.getEmployeeStatistics();

    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  viewReport() {}

  goToBack() {
    this.router.navigate(['/client/reports/']);
  }

  selectedDownloadOption() {}

}
