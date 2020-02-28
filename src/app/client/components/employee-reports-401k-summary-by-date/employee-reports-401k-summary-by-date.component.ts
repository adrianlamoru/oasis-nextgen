import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService } from '../../services';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';
import { ReportsEmployee401kSummary } from '../../models/index';
import { Reports401kSummaryReportByDateService } from '../../services';


@Component({
  selector: 'app-employee-reports-401k-summary-by-date',
  templateUrl: './employee-reports-401k-summary-by-date.component.html',
  styleUrls: ['./employee-reports-401k-summary-by-date.component.scss'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class EmployeeReports401kSummaryByDateComponent implements OnInit {

  private employeeIdSubscription: any;
  private employeeId: string;

  employeeReports401kSummaryByDateReport: ReportsEmployee401kSummary;
  filteredEmployee401kSummaryByDateReport: ReportsEmployee401kSummary[];

  selectedBeginningDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportsService: ReportsService,
    private employeeReports401kSummaryByDateReportService: Reports401kSummaryReportByDateService,
  ) { }

  ngOnInit() {

    this.disableViewReportButton = false;
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
    
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

    setTimeout(() => {
      this.viewReport();
      this.isLoading = false;
    }, 1000);

  }

  viewReport() {

    this.isLoading = true;

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];

      this.employeeReports401kSummaryByDateReportService.getEmployee401kSummaryByDate()
      .subscribe(employeeReports401kSummaryByDateReport => {
        this.filteredEmployee401kSummaryByDateReport = employeeReports401kSummaryByDateReport;

        this.filteredEmployee401kSummaryByDateReport = this.filteredEmployee401kSummaryByDateReport.
        filter(f => (this.employeeId === f.iD) &&
                      ((this.compareDates(f.payDate, this.selectedBeginningDate) === 1 &&
                        this.compareDates(f.payDate, this.selectedEndDate) === -1 ||
                        this.compareDates(f.payDate, this.selectedBeginningDate) === 0 ||
                        this.compareDates(f.payDate, this.selectedEndDate) === 0)));

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

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }


  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}

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

}
