import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataDriven } from '../../models';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ReportsPayrollDeductionSummary } from '../../models/employee-reports-deduction-code-summary.interface';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-employee-reports-payroll-deduction-code-summary',
  templateUrl: './employee-reports-payroll-deduction-code-summary.component.html',
  styleUrls: ['./employee-reports-payroll-deduction-code-summary.component.scss']
})
export class EmployeeReportsPayrollDeductionCodeSummaryComponent implements OnInit {

  reportGeneratedDate: string;
  private employeeId: string;

  private employeeIdSubscription: any;

  selectedDed: DataDriven;
  disableViewReportButton: boolean;
  deductionCodes: DataDriven[];
  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  dropdownOptions: any[];

  isLoading = true;

  employeeReportsDeductionCodeData: ReportsPayrollDeductionSummary[];
  filteredEmployeeReportsDeductionCodeData: ReportsPayrollDeductionSummary[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private reportsService: ReportsService) { }

  ngOnInit() {

    this.disableViewReportButton = false;
    this.initDeductions();

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });

    if (this.deductionCodes.length > 0) {
      this.selectedDed = this.deductionCodes[0];
    }

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

    setTimeout(() => {
      this.initDeductCodeData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);

    this.dropdownOptions = this.reportsService.getDownloadOptions();
  }

  viewReport() {
    this.filteredEmployeeReportsDeductionCodeData = this.employeeReportsDeductionCodeData
      .filter(e => (this.selectedDed.ID === 'ALL' || e.deductionCode === this.selectedDed.ID) &&
        this.compareDates(e.date, this.startDate) >= 0 &&
        this.compareDates(e.date, this.endDate) <= 0
      );

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
    this.disableViewReportButton = true;
  }

  selectDeduction(deductionCode: DataDriven) {
    this.selectedDed = deductionCode;
    this.disableViewReportButton = false;
  }

  getFilteredData() {
    this.isLoading = true;

    setTimeout(() => {
    this.viewReport();

     this.isLoading = false;
    }, 1000);
  }


  initDeductions() {
    this.deductionCodes = [{
      ID: 'ALL',
      Text: 'ALL'
    }, {
      ID: 'COHSA',
      Text: 'CLIENT HSA'
    }, {
      ID: 'COCRIT',
      Text: 'CLIENT CRITICAL ILLNESS'
    }, {
      ID: 'COLIFE',
      Text: 'CLIENT LIFE'
    }];
  }

  initDeductCodeData() {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tenAgo = new Date();
    tenAgo.setDate(today.getDate() - 10);

    this.employeeReportsDeductionCodeData = [{
      deductionCode: 'CMED125',
      description: 'CLIENT MEDICAL S.125',
      ssn: '###-##-1234',
      employeeName: 'GRAVES TOBIAS',
      amount: '6213.88',
      date: today,
      totalRow: false
    }, {
      deductionCode: 'Total for deduction code CMED125',
      description: '',
      ssn: '',
      employeeName: '',
      amount: '6213.88',
      date: today,
      totalRow: true
    }];
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

  enableViewReportButton() {
    this.disableViewReportButton = false;
  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
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


  selectedDownloadOption(item) {}

}
