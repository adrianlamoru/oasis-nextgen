import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { PayrollVoucherDetail } from '../models';

@Injectable()
export class ReportsPayrollVoucherSummaryService {

  reportsPayrollVoucherSummaryData = [
    {
      batchNo: '123462',
      empName: 'Dylan Abrahams',
      empSsn: '123-45-6789',
      empId: 'A17447',
      payDate: new Date ( '10/19/2018' ),
      periodBegin: new Date ( '09/28/2018' ),
      periodEnd: new Date ( '10/12/2018' ),
      regHours: 80,
      premHours: 0,
      grossPay: 6000,
      fedIncTax: 400,
      fica: 200,
      stateIncTax: 0,
      otherTaxes: 0,
      payrollDeducts: 1000,
      netPay: 4000,
      weeksWorked: 2
    }, {
      batchNo: '123462',
      empName: 'KEELEY ABRAMO',
      empSsn: '123-45-6789',
      empId: 'R98845',
      payDate: new Date ( '4/15/2016' ),
      periodBegin: new Date ( '04/04/2016' ),
      periodEnd: new Date ( '5/15/2016' ),
      regHours: 240,
      premHours: 0,
      grossPay: 34615.38,
      fedIncTax: 9271.92,
      fica: 2609.82,
      stateIncTax: 0,
      otherTaxes: 0,
      payrollDeducts: 500,
      netPay: 22233.64,
      weeksWorked: 6
    }];

  private ReportsPayrollVoucherSummaryUrl = 'api/ReportsPayrollVoucherSummary';

  constructor(
    private http: HttpClient) { }

    getEmployeeVoucherSummary(employeeId) {
      let empVoucherSummaryData: any[] = [];
          empVoucherSummaryData = this.reportsPayrollVoucherSummaryData.filter(item => {
            return (item.empId === employeeId);
          });
      return empVoucherSummaryData;

    }

    getVoucherSummary() {
    return this.reportsPayrollVoucherSummaryData;
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
  private log(message: string) {

  }
}
