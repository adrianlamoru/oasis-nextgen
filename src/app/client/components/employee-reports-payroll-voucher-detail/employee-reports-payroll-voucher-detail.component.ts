import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService, ReportsPayrollVoucherDetailService } from '../../services';
import { PayrollVoucherDetail } from '../../models';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomFormatter } from '../../../shared/utils/ngbDateCustomFormatter';

@Component({
  selector: 'app-employee-reports-payroll-voucher-detail',
  templateUrl: './employee-reports-payroll-voucher-detail.component.html',
  styleUrls: ['./employee-reports-payroll-voucher-detail.component.scss'],
  // providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomFormatter }]
})
export class EmployeeReportsPayrollVoucherDetailComponent implements OnInit {

  employeeReportsPayrollVoucherDetailReportData: PayrollVoucherDetail;
  filteredEmployeePayrollVoucherDetailReportData: PayrollVoucherDetail[];

  private employeeIdSubscription: any;
  private employeeId: string;

  selectedBeginningDate: NgbDateStruct;
  selectedEndDate: NgbDateStruct;

  dropdownOptions: any[];
  reportGeneratedDate: string;
  disableViewReportButton: boolean;
  isLoading = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reportsService: ReportsService,
    private employeeReportsPayrollVoucherDetailService: ReportsPayrollVoucherDetailService,
  ) { }

  ngOnInit() {

    this.disableViewReportButton = false;
    this.dropdownOptions = this.reportsService.getDownloadOptions();

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

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });

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

      this.employeeReportsPayrollVoucherDetailService.getVoucherDetail()
      .subscribe(employeeReportsPayrollVoucherDetailReportData => {
        this.filteredEmployeePayrollVoucherDetailReportData = employeeReportsPayrollVoucherDetailReportData;

      this.filteredEmployeePayrollVoucherDetailReportData = this.filteredEmployeePayrollVoucherDetailReportData.
      filter(f => (this.employeeId === f.empId) &&
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

  calculateSelectedRow(options) {
    if (options.name === 'TotalsFooterEmpName') {
        if (options.summaryProcess === 'start') {
            options.totalValue = 0;
        } else if (options.summaryProcess === 'calculate') {
                options.totalValue = options.value.empName;
        }
    }

    if (options.name === 'TotalsFooterEmpId') {
      if (options.summaryProcess === 'start') {
          options.totalValue = 0;
      } else if (options.summaryProcess === 'calculate') {
              options.totalValue = options.value.empId;
      }
    }
  }

  print() {
    let printContents, popupWin;
    printContents = document.getElementById('contentToRender').outerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        ${this.getHeadHtml(document)}
        <body onload="window.print()">
          <div class="content">
            ${printContents}
          <div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }

  getHeadHtml = (document: Document): string => {
    const head: string[] = [];

    const styleElements = document.getElementsByTagName('head');
    for (let idx = 0; idx < styleElements.length; idx++) {
      head.push(styleElements[idx].outerHTML);
    }

    return head.join('\r\n');
  }


}
