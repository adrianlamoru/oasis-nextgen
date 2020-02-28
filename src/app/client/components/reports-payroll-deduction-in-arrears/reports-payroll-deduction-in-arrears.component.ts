import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../../services';

@Component({
  selector: 'app-reports-payroll-deduction-in-arrears',
  templateUrl: './reports-payroll-deduction-in-arrears.component.html',
  styleUrls: ['./reports-payroll-deduction-in-arrears.component.scss']
})
export class ReportsPayrollDeductionInArrearsComponent implements OnInit {
  reportGeneratedDate: string;
  isLoading = true;
  loansDataRows: any[];
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
      employeeId: 'A12356',
      employeeName: 'ADDISON BRANDON R',
      status: 'TM',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/15/2007'),
      deductionCode: 'Vis123',
      deductionDesc: 'Vision 123',
      amountInArrears: '4.00'
    },
    {
      employeeId: 'B5687',
      employeeName: 'AMBROSE CRENEE',
      status: 'TM',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/17/2007'),
      deductionCode: 'Vis532',
      deductionDesc: 'Vision 532',
      amountInArrears: '8.89'
    },
    {
      employeeId: 'B5699',
      employeeName: 'BALENCIA OSCAR',
      status: 'A',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/17/2007'),
      deductionCode: 'Life',
      deductionDesc: 'Life Ins',
      amountInArrears: '48.91'
    },
    {
      employeeId: 'B5699',
      employeeName: 'BALENCIA OSCAR',
      status: 'TM',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/17/2007'),
      deductionCode: 'DEN125',
      deductionDesc: 'Dental 125',
      amountInArrears: '11.14'
    },
    {
      employeeId: 'B5701',
      employeeName: 'BISHOP ANTHONY',
      status: 'TM',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/17/2007'),
      deductionCode: 'DEN125',
      deductionDesc: 'Dental 125',
      amountInArrears: '11.14'
    },
    {
      employeeId: 'B5701',
      employeeName: 'BISHOP ANTHONY',
      status: 'TM',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/17/2007'),
      deductionCode: 'GAP543',
      deductionDesc: 'GAP Ins 543',
      amountInArrears: '11.14'
    },
    {
      employeeId: 'B5701',
      employeeName: 'BISHOP ANTHONY',
      status: 'TM',
      statusDate: new Date('12/22/2007'),
      dateInArrears: new Date('12/17/2007'),
      deductionCode: 'Vis123',
      deductionDesc: 'Vision Ins 123',
      amountInArrears: '17.24'
    }];
  }
}
