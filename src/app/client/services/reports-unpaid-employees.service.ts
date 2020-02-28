import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UnpaidEmployees } from '../models';

@Injectable()
export class ReportsUnpaidEmployeesReportService {

  reportsUnpaidEmployeesReportData = [
      {
        empId: 'B92245',
        empName: 'APPLEBY DALTON F',
        homeDept: 62,
        checkDate: new Date ( '10/19/2017' ),
        benefitsPlan: '',
      },
      {
        empId: 'S96975',
        empName: 'BENJAMIN MARSHA',
        homeDept: 62,
        checkDate: new Date ( '03/16/2018' ),
        benefitsPlan: 'TIMEATT',
      },
      {
        empId: 'T19416',
        empName: 'CUMMINGS CHLOE B',
        homeDept: 33,
        checkDate: new Date ( '03/03/2017' ),
        benefitsPlan: 'UNLIFE10',
      }
  ];

  private ReportsUnpaidEmployeesSummaryUrl = 'api/ReportsUnpaidEmployees';

  constructor(
    private http: HttpClient) { }

    getUnpaidEmployees() {
    return this.reportsUnpaidEmployeesReportData;
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
