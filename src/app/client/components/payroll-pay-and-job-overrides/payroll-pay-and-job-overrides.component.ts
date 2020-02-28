import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PayAndJobOverride } from '../../models/payroll-pay-and-job-overrides';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-payroll-pay-and-job-overrides',
  templateUrl: './payroll-pay-and-job-overrides.component.html',
  styleUrls: ['./payroll-pay-and-job-overrides.component.scss']
})
export class PayrollPayAndJobOverridesComponent implements OnInit {

  @Input() pageSource?: string;
  @Input() employeeId?: string;

  isLoading: boolean;
  payAndJobDataRows: PayAndJobOverride[];
  filteredPayAndJobDataRows: PayAndJobOverride[];
  reportGeneratedDate: string;
  dropdownOptions: any[];

  constructor(
    private router: Router,
    private reportsService: ReportsService
    ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isLoading = true;
    this.dropdownOptions = this.reportsService.getDownloadOptions();

    setTimeout(() => {
      this.initPayAndJobData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  goToBack() {
    if (this.pageSource !== 'employeeReports') {
      this.router.navigate(['/client/reports/']);
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports/']);
    }
  }

  viewReport() {
    this.isLoading = true;
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    if (this.pageSource !== 'employeeReports') {
      this.filteredPayAndJobDataRows = this.payAndJobDataRows;
    } else if (this.pageSource === 'employeeReports' && this.employeeId.length > 0) {
      this.filteredPayAndJobDataRows = this.payAndJobDataRows.filter(item => {
        return item.employeeID === this.employeeId;
      });
    }
  }

  initPayAndJobData() {
    this.payAndJobDataRows = [{
      type: 'J',
      clientID: '243',
      employeeID: 'A17447',
      employeeName: 'DYLAN ABRAHAMS',
      jobCode: 'ARTIST',
      jobTitle: 'GRAPHIC AR',
      standardPayRate: 12.0000,
      payCode: '1STRATE',
      payDesc: '1ST RATE',
      payRate: 15.0000,
      billRate: 0
    },
    {
      type: 'P',
      clientID: '243',
      employeeID: 'A17447',
      employeeName: 'DYLAN ABRAHAMS',
      jobCode: '',
      jobTitle: '',
      standardPayRate: null,
      payCode: 'DAILYRT',
      payDesc: 'DAILY RATE',
      payRate: 100,
      billRate: 0
    },
    {
      type: 'P',
      clientID: '243',
      employeeID: 'A17447',
      employeeName: 'DYLAN ABRAHAMS',
      jobCode: '',
      jobTitle: '',
      standardPayRate: null,
      payCode: 'ONCALL',
      payDesc: 'ON CALL DOLLARS',
      payRate: 10,
      billRate: null
    },
    {
      type: 'P',
      clientID: '243',
      employeeID: 'R98845',
      employeeName: 'KEELEY ABRAMO',
      jobCode: '',
      jobTitle: '',
      standardPayRate: null,
      payCode: 'REG',
      payDesc: 'REGULAR PAY',
      payRate: 10,
      billRate: null
    },
    {
      type: 'P',
      clientID: '243',
      employeeID: 'R98845',
      employeeName: 'KEELEY ABRAMO',
      jobCode: '',
      jobTitle: '',
      standardPayRate: null,
      payCode: '1STRATE',
      payDesc: '1ST RATE',
      payRate: 12,
      billRate: null
    },
    {
      type: 'J',
      clientID: '243',
      employeeID: 'G85782',
      employeeName: 'ANTON ACOSTA',
      jobCode: 'ARTIST',
      jobTitle: 'GRAPHIC AR',
      standardPayRate: 25,
      payCode: '',
      payDesc: '',
      payRate: null,
      billRate: null
    },
    {
      type: 'J',
      clientID: '243',
      employeeID: 'G85782',
      employeeName: 'ANTON ACOSTA',
      jobCode: 'CLERK',
      jobTitle: 'CLERK',
      standardPayRate: 10,
      payCode: '',
      payDesc: '',
      payRate: null,
      billRate: null
    },
    {
      type: 'J',
      clientID: '243',
      employeeID: 'G85782',
      employeeName: 'ANTON ACOSTA',
      jobCode: 'PRES',
      jobTitle: 'PRESIDENT',
      standardPayRate: 100,
      payCode: 'REG',
      payDesc: 'REGULAR PAY',
      payRate: 150,
      billRate: 0
    },
    {
      type: 'J',
      clientID: '243',
      employeeID: 'G85782',
      employeeName: 'ANTON ACOSTA',
      jobCode: 'THINKER',
      jobTitle: 'THINKER',
      standardPayRate: 50,
      payCode: 'BONUS',
      payDesc: 'BONUS',
      payRate: 250,
      billRate: 0
    },
    {
      type: 'J',
      clientID: '243',
      employeeID: 'G85782',
      employeeName: 'ANTON ACOSTA',
      jobCode: 'ARTIST',
      jobTitle: 'GRAPHIC AR',
      standardPayRate: 25,
      payCode: '',
      payDesc: '',
      payRate: null,
      billRate: null
    }];
  }
}
