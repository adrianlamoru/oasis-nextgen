import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReportsService, Reports401kSummaryReportService } from '../../services';
import { ReportsEmployee401kSummary } from '../../models/index';

@Component({
  selector: 'app-employee-reports-benefits-401k-summary',
  templateUrl: './employee-reports-benefits-401k-summary.component.html',
  styleUrls: ['./employee-reports-benefits-401k-summary.component.scss']
})
export class EmployeeReportsBenefits401kSummaryComponent implements OnInit {

  private employeeIdSubscription: any;
  private employeeId: string;

  employeeReports401kSummaryReport: ReportsEmployee401kSummary;
  filteredEmployee401kSummaryReport: ReportsEmployee401kSummary[];

  simpleYears: number[];
  selectedYear: any;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportsService: ReportsService,
    private employeeReports401kSummaryReportService: Reports401kSummaryReportService,

  ) { }

  ngOnInit() {

    this.disableViewReportButton = false;
    this.getYears();
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);

  }

  // Get simpleYears array
  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 3;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionYearChanged(year) {
    this.selectedYear = year;
    this.disableViewReportButton = false;

  }

  viewReport() {

    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReports401kSummaryReportService.getEmployee401kSummary()
      .subscribe(employeeReports401kSummaryReport => {
        this.filteredEmployee401kSummaryReport = employeeReports401kSummaryReport;

        this.filteredEmployee401kSummaryReport = this.filteredEmployee401kSummaryReport.
        filter(f => (this.employeeId === f.iD && this.selectedYear === f.year));

        this.isLoading = false;
      });
    });
    this.disableViewReportButton = true;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 3000);
  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}

}
