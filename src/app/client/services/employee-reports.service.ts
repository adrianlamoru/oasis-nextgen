import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsList } from '../models';

@Injectable()
export class EmployeeReportsService {

    // Replace test reports with actual report data
    employeeReportsList: ReportsList[] = [
    {
      id: 1,
      type: 'BENEFITS',
      report: 'Employee 401(k) Summary',
      description: '401(k) data for all selected employees in a selected year',
      link: 'employee-401k-summary',
      isFavorite: true
    },
    {
      id: 2,
      type: 'BENEFITS',
      report: 'Employee 401(k) Summary By Date Range',
      description: '401(k) data for all selected employee(s) for a selected date range',
      link: 'employee-401k-summary-by-date-range',
      isFavorite: true
    },
    {
      id: 3,
      type: 'HR',
      report: 'Employee Pay History',
      description: 'Employee pay changes for selected employee',
      link: 'employee-pay-history',
      isFavorite: true
    },
    {
      id: 4,
      type: 'HR',
      report: 'Employee Personal Change',
      description: 'Employee personal change records by date range',
      link: 'employee-personal-change',
      isFavorite: true
    },
    {
      id: 5,
      type: 'PAYROLL',
      report: 'Employee Voucher Detail',
      description: 'Employee pay voucher information for a selected date range',
      link: 'employee-voucher-detail',
      isFavorite: true
    },
    {
      id: 6,
      type: 'PAYROLL',
      report: 'Deduction Code Summary',
      description: 'Deductions for all employees in a selected date range',
      link: 'employee-deduction-code-summary',
      isFavorite: true
    },
    {
      id: 7,
      type: 'HR',
      report: 'Employee Information Inquiry',
      description: 'Personal and tax information',
      link: 'employee-information-inquiry',
      isFavorite: true
    }, {
      id: 8,
      type: 'PAYROLL',
      report: 'Average Hours',
      description: 'Average hours by date range',
      link: 'employee-average-hours',
      isFavorite: true
    }, {
      id: 9,
      type: 'HR',
      report: 'Unemployement Wages',
      description: 'Gross wages and taxable SUTA wages',
      link: 'employee-unemployement-wages',
      isFavorite: true
    },
    {
      id: 10,
      type: 'PAYROLL',
      report: 'Gross To Net With Sort Options',
      description: 'Gross Gross to Net details for selected batch with sorting options',
      link: 'employee-gross-net-sort-options',
      isFavorite: true
    },
    {
      id: 11,
      type: 'PAYROLL',
      report: 'Voucher Summary',
      description: 'Summarized data of all an employees\' vouchers for a selected time period',
      link: 'employee-voucher-summary',
      isFavorite: true
    },
    {
      id: 12,
      type: 'PAYROLL',
      report: 'Earnings Summary',
      description: 'Pay code earnings for all employees with filtering options',
      link: 'employee-earnings-summary',
      isFavorite: true
    },
    {
      id: 13,
      type: 'PAYROLL',
      report: 'Paid Time Off Hours Taken',
      description: 'Hours of paid time off for selected employee(s) in a selected date range',
      link: 'employee-pto-hours-taken',
      isFavorite: true
    },
    {
      id: 14,
      type: 'PAYROLL',
      report: 'Status Download',
      description: 'Employee details for selected hire date and status code',
      link: 'employee-status-download',
      isFavorite: true
    },
    {
      id: 15,
      type: 'PAYROLL',
      report: 'Pay and Job Overrides',
      description: 'Override information for selected employees\' job titles and pay',
      link: 'employee-pay-and-job-overrides',
      isFavorite: true
    },
    {
      id: 16,
      type: 'PAYROLL',
      report: 'Web Changes',
      description: 'Changes to an employee\'s information within a selected date range',
      link: 'employee-web-changes',
      isFavorite: true
    },
    {
      id: 17,
      type: 'PAYROLL',
      report: 'Wages and Earnings',
      description: 'Employee pay code and hours worked for selected date range with sort options',
      link: 'employee-wages-earnings',
      isFavorite: true
    },
    {
      id: 18,
      type: 'HR',
      report: 'Employee Personal Information',
      description: 'Employee job, personal and pay information',
      link: 'employee-personal-information',
      isFavorite: true
    },
    {
      id: 19,
      type: 'HR',
      report: 'Job History',
      description: 'Employee job title changes for selected employee',
      link: 'employee-job-history',
      isFavorite: true
    },
    {
      id: 20,
      type: 'HR',
      report: 'Status Inquiry',
      description: 'Employee status changes',
      link: 'employee-status-inquiry',
      isFavorite: true
    },
    {
      id: 21,
      type: 'PAYROLL',
      report: 'Payroll Inquiry',
      description: 'Employee payroll summary for a selected date range',
      link: 'employee-payroll-inquiry',
      isFavorite: true
    },
    {
      id: 22,
      type: 'PAYROLL',
      report: 'Paid Time Off',
      description: 'Accrued and used paid time off data',
      link: 'employee-pto',
      isFavorite: true
    },
    {
      id: 23,
      type: 'PAYROLL',
      report: 'Scheduled Deductions',
      description: 'Active deductions for a selected employee',
      link: 'employee-scheduled-deductions',
      isFavorite: true
    }
  ];

    constructor(private http: HttpClient) {}

  getEmployeeReportsList(): ReportsList[] {
    return this.employeeReportsList;
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
