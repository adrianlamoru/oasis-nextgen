import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ReportsList } from '../models';

@Injectable()
export class ReportsService {

  dropdownActions: any[] = [{
      id: 'Open',
      name: 'Open'
    },
    {
      id: 'AddFav',
      name: 'Add to Favorites'
    },
    {
      id: 'RemFav',
      name: 'Remove from Favorites',
      disabled: true
    },
    {
      id: 'DownloadPDF',
      name: 'Download PDF'
    },
    {
      id: 'DownloadXLS',
      name: 'Download XLS'
    },
    {
      id: 'DownloadXLSX',
      name: 'Download XLSX'
    },
    {
      id: 'DownloadXLSXTextOnly',
      name: 'Download XLSX (Text Only)'
    },
    {
      id: 'DownloadCSV',
      name: 'Download CSV'
    },
    {
      id: 'DownloadHTML',
      name: 'Download HTML'
    }];

    dropdownEmployeeActions: any[] = [{
      id: 'Open',
      name: 'Open'
    },
    {
      id: 'DownloadPDF',
      name: 'Download PDF'
    },
    {
      id: 'DownloadXLS',
      name: 'Download XLS'
    },
    {
      id: 'DownloadXLSX',
      name: 'Download XLSX'
    },
    {
      id: 'DownloadXLSXTextOnly',
      name: 'Download XLSX (Text Only)'
    },
    {
      id: 'DownloadCSV',
      name: 'Download CSV'
    },
    {
      id: 'DownloadHTML',
      name: 'Download HTML'
    }];

    downloadOptions: any[] = [{
      id: 'actions',
      name: 'DOWNLOAD',
      items: [
        {
          id: 'DownloadPDF',
          name: 'Download PDF'
        },
        {
          id: 'DownloadXLS',
          name: 'Download XLS'
        },
        {
          id: 'DownloadXLSX',
          name: 'Download XLSX'
        },
        {
          id: 'DownloadXLSXTextOnly',
          name: 'Download XLSX (Text Only)'
        },
        {
          id: 'DownloadCSV',
          name: 'Download CSV'
        },
        {
          id: 'DownloadHTML',
          name: 'Download HTML'
        }
    ]
    }];

    dropdownFilterBy: any[] = [{
      id: 'benefits',
      name: 'Benefits'
    },
    {
      id: 'hr',
      name: 'HR'
    },
    {
      id: 'payroll',
      name: 'Payroll'
    },
    {
      id: 'custom',
      name: 'Custom'
    },
    {
      id: '',
      name: 'Show All'
    }];

    reportsList: ReportsList[] = [{
      id: 1,
      type: 'BENEFITS',
      report: '401(k) Summary',
      description: '401(k) data for all selected employees in a selected year',
      link: '401k-summary-report',
      isFavorite: true
    },
    {
      id: 2,
      type: 'BENEFITS',
      report: '401(k) Summary By Date Range',
      description: '401(k) data for all selected employee(s) for a selected date range',
      link: '401k-summary-report-by-date',
      isFavorite: false
    },
    {
      id: 3,
      type: 'BENEFITS',
      report: 'Benefits Payroll Register',
      description: 'Employee benefits elections for all employees in a selected date range of one month or less',
      link: 'benefits-payroll-register',
      isFavorite: true
    },
    {
      id: 4,
      type: 'BENEFITS',
      report: 'Client Benefit Summary Report',
      description: 'Benefits elections for all employees as of a selected date',
      link: 'company-benefits-summary',
      isFavorite: false
    },
    {
      id: 5,
      type: 'BENEFITS',
      report: 'Employee Benefits Register',
      description: 'Benefits elections for all active employees',
      link: 'employee-benefits-register',
      isFavorite: false
    },
    {
      id: 5,
      type: 'HR',
      report: 'Event Tracking',
      description: 'Employee assigned event activity within event date range',
      link: 'event-tracking',
      isFavorite: true
    },
    {
      id: 6,
      type: 'HR',
      report: 'Employee Change',
      description: 'Employee Change',
      link: 'employee-change-summary',
      isFavorite: true
    },
    {
      id: 7,
      type: 'HR',
      report: 'Employee Personal Change',
      description: 'Employee Personal Change',
      link: 'employee-personal-change-summary',
      isFavorite: true
    },
    {
      id: 8,
      type: 'HR',
      report: 'Birthdays',
      description: 'Birthdays',
      link: 'birthdays-summary',
      isFavorite: true
    },
    {
      id: 9,
      type: 'HR',
      report: 'Census',
      description: 'Census',
      link: 'census-summary',
      isFavorite: false
    },
    {
      id: 10,
      type: 'HR',
      report: 'Employee Listing',
      description: 'Employee Listing',
      link: 'employee-listing-summary',
      isFavorite: false
    },
    {
      id: 11,
      type: 'HR',
      report: 'Employee Information Download',
      description: 'Download Employee listing and personal information',
      link: 'employee-information',
      isFavorite: false
    },
    {
      id: 12,
      type: 'HR',
      report: 'I-9 Verification Status',
      description: 'I-9 status for all employees within a date range',
      link: 'i9-verification-status',
      isFavorite: false
    },
    {
      id: 13,
      type: 'HR',
      report: 'Unemployment Wages',
      description: 'Gross wages and taxable SUTA wages',
      link: 'unemployment-wages',
      isFavorite: false
    },
    {
      id: 14,
      type: 'PAYROLL',
      report: 'Invoice Summary',
      description: 'View my Invoice Summary',
      link: 'analytics',
      isFavorite: false
    },
    {
      id: 15,
      type: 'PAYROLL',
      report: 'Invoice Reprint',
      description: 'Invoice information with download option for selected year',
      link: 'invoice-reprint',
      isFavorite: true
    },
    {
      id: 16,
      type: 'PAYROLL',
      report: 'Paid Time Off Absence Summary',
      description: 'Summary of all paid time off information for selected employee(s)',
      link: 'pto-absence-summary',
      isFavorite: true
    }, {
      id: 17,
      type: 'PAYROLL',
      report: 'Average Hours',
      description: 'Average hours by date range',
      link: 'average-hours',
      isFavorite: false
    }, {
      id: 18,
      type: 'PAYROLL',
      report: 'Gross to Net by Last Name',
      description: 'Gross to Net details for selected batch',
      link: 'gross-net-lastname',
      isFavorite: false
    }, {
      id: 19,
      type: 'PAYROLL',
      report: 'Deduction Code Summary',
      description: 'Deductions for all employees in a selected date range',
      link: 'deduction-summary',
      isFavorite: false
    },
    {
      id: 20,
      type: 'PAYROLL',
      report: 'Wages and Earnings',
      description: 'Employee pay code and hours worked for selected date range with sort options',
      link: 'wages-earnings',
      isFavorite: false
    }, {
      id: 21,
      type: 'PAYROLL',
      report: 'Client Allocation',
      description: 'Pay data for all employees included in a selected batch with sorting options',
      link: 'client-allocation',
      isFavorite: true
    },
    {
      id: 22,
      type: 'PAYROLL',
      report: 'Earnings Summary',
      description: 'Pay code earnings for all employees with filtering options',
      link: 'earnings-summary',
      isFavorite: true
    },
    {
      id: 23,
      type: 'PAYROLL',
      report: 'Voucher Detail',
      description: 'Employee pay voucher information for a selected date range',
      link: 'voucher-detail',
      isFavorite: false
    },
    {
      id: 24,
      type: 'PAYROLL',
      report: 'Paid Time Off Hours Taken',
      description: 'Hours of paid time off for selected employee(s) in a selected date range',
      link: 'pto-hours-taken',
      isFavorite: true
    },
    {
      id: 25,
      type: 'PAYROLL',
      report: 'Client Allocation With Check Number',
      description: 'Pay data including check number for all employees by batch with sorting options',
      link: 'client-allocation-checknumber',
      isFavorite: true
    },
    {
      id: 26,
      type: 'PAYROLL',
      report: 'Pay and Job Code Overrides',
      description: 'Override information for selected employees\' job titles and pay',
      link: 'pay-and-job-overrides',
      isFavorite: true
    },
    {
      id: 27,
      type: 'PAYROLL',
      report: 'Gross To Net With Sort Options',
      description: 'Gross to Net details for selected batch with sorting options',
      link: 'gross-net-sort-options',
      isFavorite: true
    },
    {
      id: 28,
      type: 'PAYROLL',
      report: 'Voucher Summary',
      description: 'Summarized data of all an employees\' vouchers for a selected time period',
      link: 'voucher-summary',
      isFavorite: false
    },
    {
      id: 29,
      type: 'PAYROLL',
      report: 'Status Download',
      description: 'Employee details for selected hire date and status code',
      link: 'status-download',
      isFavorite: true
    },
    {
      id: 30,
      type: 'PAYROLL',
      report: 'Web Changes',
      description: 'Changes to an employee\'s information within a selected date range',
      link: 'web-changes',
      isFavorite: true
    },
    {
      id: 31,
      type: 'HR',
      report: 'Information Download',
      description: 'Employee register with personal and pay information',
      link: 'information-download',
      isFavorite: true
    },
    {
      id: 32,
      type: 'HR',
      report: 'Supervisor By Department',
      description: 'Assigned supervisor for all employees, per department',
      link: 'supervisor-by-department',
      isFavorite: true
    },
    {
      id: 33,
      type: 'PAYROLL',
      report: 'Accounting Download',
      description: 'Output file inclusive of payroll allocations to General Ledger account numbers for processing',
      link: 'accounting-download',
      isFavorite: false
    },
    {
      id: 34,
      type: 'PAYROLL',
      report: 'Unpaid Employees',
      description: 'Unpaid employees for selected date range',
      link: 'unpaid-employees',
      isFavorite: true
    },
    {
      id: 35,
      type: 'HR',
      report: 'Reviews',
      description: 'Pay or performance reviews by month or year with filtering options',
      link: 'reviews',
      isFavorite: true
    },
    {
      id: 36,
      type: 'PAYROLL',
      report: 'Deduction Code Details',
      description: 'Itemized deductions for all employees in a selected batch with filtering options',
      link: 'deduction-code-detail',
      isFavorite: true
    },
    {
      id: 37,
      type: 'PAYROLL',
      report: 'WC Billing History',
      description: 'Employee workers\' compensation for a selected date range',
      link: 'wc-billing-history',
      isFavorite: false
    },
    {
      id: 38,
      type: 'PAYROLL',
      report: 'Garnishments',
      description: 'Employee garnishment details per selected employee docket',
      link: 'garnishments',
      isFavorite: true
    },
    {
      id: 39,
      type: 'PAYROLL',
      report: 'Loans',
      description: 'Loan summary for all employees with remaining balance',
      link: 'loans',
      isFavorite: true
    },
    {
      id: 40,
      type: 'HR',
      report: 'Termination',
      description: 'Terminated employees for a selected date range or month and year',
      link: 'termination',
      isFavorite: true
    },
    {
      id: 41,
      type: 'PAYROLL',
      report: 'Payroll Deductions In Arrears',
      description: 'Employees with arrears deductions',
      link: 'payroll-deductions-arrears',
      isFavorite: true
    },
    {
      id: 42,
      type: 'HR',
      report: 'OSHA 300 Log',
      description: 'List of classified work-related injuries, illnesses, and extent of severity of each case',
      link: 'osha-300-log',
      isFavorite: true
    },
    {
      id: 43,
      type: 'PAYROLL',
      report: 'Accounting Setup Listing',
      description: 'List of current General Ledger account numbers on file',
      link: 'accounting-setup-listing',
      isFavorite: true
    },
    {
      id: 44,
      type: 'HR',
      report: 'W-2 Address Change',
      description: 'W-2 address and home address listing',
      link: 'w2-address-change',
      isFavorite: true
    },
    {
      id: 45,
      type: 'HR',
      report: 'Employee Statistics',
      description: 'Summarized employee count by status and employment type',
      link: 'employee-statistics',
      isFavorite: true
    },
    {
      id: 46,
      type: 'PAYROLL',
      report: 'Benefits Billing',
      description: 'Benefits elections for all employees, including premium amounts and employee contributions',
      link: 'benefits-billing',
      isFavorite: true
    },
    {
      id: 47,
      type: 'PAYROLL',
      report: 'Check Register Download',
      description: 'Check register data in a selected year and batch',
      link: 'check-register-download',
      isFavorite: true
    }
    ];

  constructor(private http: HttpClient) {}

  getDropdownActions(): any[] {
    return this.dropdownActions;
  }
  getEmployeeDropdownActions(): any[] {
    return this.dropdownEmployeeActions;
  }
  getDownloadOptions(): any[] {
    return this.downloadOptions;
  }
  getDropdownFilterBy(): any[] {
    return this.dropdownFilterBy;
  }

  getReportsList(): ReportsList[] {
    return this.reportsList;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) { }

}
