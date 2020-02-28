import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Loans } from '../../models/payroll-loans';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-payroll-loans',
  templateUrl: './payroll-loans.component.html',
  styleUrls: ['./payroll-loans.component.scss']
})
export class PayrollLoansComponent implements OnInit {
  reportGeneratedDate: string;
  isLoading = true;
  loansDataRows: Loans[];
  dropdownOptions: any[];
  
  constructor(private router: Router, private reportsService: ReportsService) { }

  ngOnInit() {
    this.dropdownOptions = this.reportsService.getDownloadOptions();
    setTimeout(() => {
      this.initLoansData();
      this.viewReport();

      this.isLoading = false;
    }, 1000);
  }

  viewReport() {
    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;
  }

  goBack() {
      this.router.navigate(['/client/reports/']);
  }

  initLoansData() {
    this.loansDataRows = [{
      employeeName: 'ADDISON BRANDON R',
      employeeSSN: '561-56-5555',
      loanDate: new Date('12/22/2007'),
      loanReason: 'CHRISTMAS LOAN',
      deductionFrequency: 'P',
      paybackAmount: 500,
      paidToDate: null,
      balance: 500
    },
    {
      employeeName: 'AMBROSE CRENEE',
      employeeSSN: '262-27-6870',
      loanDate: new Date('08/18/2006'),
      loanReason: 'PERSONAL',
      deductionFrequency: 'P',
      paybackAmount: 5000,
      paidToDate: null,
      balance: 5000
    },
    {
      employeeName: 'AMBROSE CRENEE',
      employeeSSN: '262-27-6870',
      loanDate: new Date('05/01/2005'),
      loanReason: 'ADVANCE',
      deductionFrequency: 'P',
      paybackAmount: 500,
      paidToDate: 100,
      balance: 400
    },
    {
      employeeName: 'AMBROSE CRENEE',
      employeeSSN: '262-27-6870',
      loanDate: new Date('05/12/2005'),
      loanReason: 'ADVANCE',
      deductionFrequency: 'P',
      paybackAmount: 500,
      paidToDate: 100,
      balance: 400
    },
    {
      employeeName: 'AMBROSE CRENEE',
      employeeSSN: '262-27-6870',
      loanDate: new Date('05/01/2005'),
      loanReason: 'SHOES',
      deductionFrequency: 'M',
      paybackAmount: 1000,
      paidToDate: null,
      balance: 1000
    },
    {
      employeeName: 'ANISTON JENNIFER',
      employeeSSN: '114-87-3302',
      loanDate: new Date('10/23/2006'),
      loanReason: 'KEFM\'WF',
      deductionFrequency: 'P',
      paybackAmount: 100,
      paidToDate: null,
      balance: 100
    },
    {
      employeeName: 'ANISTON JENNIFER',
      employeeSSN: '114-87-3302',
      loanDate: new Date('12/27/2006'),
      loanReason: 'BENEFITS ARREARS',
      deductionFrequency: 'P',
      paybackAmount: 24,
      paidToDate: 16.26,
      balance: 7.74
    },
    {
      employeeName: 'ANISTON JENNIFER',
      employeeSSN: '114-87-3302',
      loanDate: new Date('03/09/2007'),
      loanReason: 'HOUSE',
      deductionFrequency: 'P',
      paybackAmount: 300,
      paidToDate: null,
      balance: 300
    }];
  }
}
