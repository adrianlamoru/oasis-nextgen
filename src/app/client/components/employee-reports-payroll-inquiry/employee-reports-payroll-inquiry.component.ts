import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportsService } from '../../services';
import { DataDriven } from '../../models/index';

@Component({
  selector: 'app-employee-reports-payroll-inquiry',
  templateUrl: './employee-reports-payroll-inquiry.component.html',
  styleUrls: ['./employee-reports-payroll-inquiry.component.scss']
})
export class EmployeeReportsPayrollInquiryComponent implements OnInit {

  private employeeIdSubscription: any;

  simpleYears: number[];
  selectedYear: number;
  selectedYearDisplay = 2018;

  periods: DataDriven[];
  selectedPeriod: DataDriven;

  employeePayrollInquirySummaryData: any[];
  employeePayrollInquiryEarningsDetailData: any[];
  employeePayrollInquiryDeductionsDetailData: any[];
  employeePayrollInquiryTaxDetailData: any[];

  dropdownOptions: any[];
  reportGeneratedDate: string;
  private employeeId: string;
  isLoading = true;
  disableViewReportButton = true;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reportsService: ReportsService) { }

  ngOnInit() {

    this.getYears();
    this.initPeriod();

    const reportDate = new Date().toLocaleString();
    this.reportGeneratedDate = reportDate;

    this.employeeIdSubscription = this.route.parent.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });

    setTimeout(() => {
      this.viewReport();

      this.isLoading = false;
    }, 1000);

    this.dropdownOptions = this.reportsService.getDownloadOptions();

  }

  // Get simpleYears array
  getYears() {
    this.simpleYears = [];
    this.selectedYear = new Date().getFullYear();
    const totalYears = 10;
    for (let i = 0; i < totalYears; i++) {
      this.simpleYears.push(this.selectedYear - i);
    }
  }

  onSelectionChanged(year) {
    this.selectedYearDisplay = year;

    // Enable view report button when there is a change in dropdown
    this.disableViewReportButton = false;
  }

  selectPeriod(period: DataDriven) {
    this.selectedPeriod = period;

     // Enable view report button when there is a change in dropdown
     this.disableViewReportButton = false;
  }

  initPeriod() {

    this.periods = [
      {
        ID: '-1',
        Text: 'YTD'
      },
      {
        ID: '0',
        Text: '1st Quarter'
      },
      {
        ID: '2',
        Text: 'January'
      },
      {
        ID: '3',
        Text: 'February'
      },
      {
        ID: '4',
        Text: 'March'
      },
      {
        ID: '5',
        Text: '2nd Quarter'
      },
      {
        ID: '6',
        Text: 'April'
      },
      {
        ID: '7',
        Text: 'May'
      },
      {
        ID: '8',
        Text: 'June'
      },
      {
        ID: '9',
        Text: '3rd Quarter'
      },
      {
        ID: '10',
        Text: 'July'
      },
      {
        ID: '11',
        Text: 'August'
      },
      {
        ID: '12',
        Text: 'September'
      },
      {
        ID: '13',
        Text: '4th Quarter'
      },
      {
        ID: '14',
        Text: 'October'
      },
      {
        ID: '15',
        Text: 'November'
      },
      {
        ID: '16',
        Text: 'December'
      }];
  }

  viewReport() {

    this.employeePayrollInquirySummaryData = [
      {
        summaryDesc: 'Expense Reimbursements ',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Fringe Benefits',
        summaryAmt: 200
      },
      {
        summaryDesc: 'Reported Tips',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Allocated Tips',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Payroll Deductions',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Federal Income Taxes',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Earned Income Credit',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Social Security Taxes',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Medicare Taxes',
        summaryAmt: 100
      },
      {
        summaryDesc: 'State Income Taxes',
        summaryAmt: 100
      },
      {
        summaryDesc: 'State DI/UI Taxes',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Other State/Local Taxes',
        summaryAmt: 100
      },
      {
        summaryDesc: 'Net Earnings',
        summaryAmt: 1300
      }
    ];

    this.employeePayrollInquiryEarningsDetailData = [
      {
        earningsDetailDesc: 'Regular Pay',
        earningsDetailAmt: 2000
      },
      {
        earningsDetailDesc: 'Half Time',
        earningsDetailAmt: 300
      },
      {
        earningsDetailDesc: 'Total',
        earningsDetailAmt: 2300
      }
    ];

    this.employeePayrollInquiryDeductionsDetailData = [
      {
        deductionsDetailDesc: 'Lodging Deduction',
        deductionsDetailAmt: 3000
      },
      {
        deductionsDetailDesc: 'Deposit',
        deductionsDetailAmt: 100
      },
      {
        deductionsDetailDesc: 'Total',
        deductionsDetailAmt: 3100
      }
    ];

    this.employeePayrollInquiryTaxDetailData = [
      {
        taxDetailDesc: 'Federal Income Tax',
        taxDetailAmt: 3000
      },
      {
        taxDetailDesc: 'Medicare - Ee',
        taxDetailAmt: 100
      },
      {
        taxDetailDesc: 'Social Security - Ee',
        taxDetailAmt: 100
      },
      {
        taxDetailDesc: 'Total',
        taxDetailAmt: 3200
      }
    ];


  }

  goToBack() {
    this.router.navigate(['/client/employees/employee/' + this.employeeId + '/details/employeeReports']);
  }

  selectedDownloadOption(item) {}

}
