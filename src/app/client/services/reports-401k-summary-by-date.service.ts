import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsEmployee401kSummary } from '../models';

@Injectable()
export class Reports401kSummaryReportByDateService {

  private Reports401kSummaryByDateReportUrl = 'api/Reports401kSummaryReport';
  private EmployeeReports401kSummaryByDateReportUrl = 'api/EmployeeReports401kSummaryReport';

  constructor(
    private http: HttpClient) { }

  get401kSummary(): Observable<ReportsEmployee401kSummary[]> {
    return this.http.get<ReportsEmployee401kSummary[]>(this.Reports401kSummaryByDateReportUrl)
      .pipe(
      tap(client => this.log(`fetched 401k summary by date`)),
      catchError(this.handleError('get401kSummary', []))
      );
  }

  getEmployee401kSummaryByDate(): Observable<ReportsEmployee401kSummary[]> {
    return this.http.get<ReportsEmployee401kSummary[]>(this.EmployeeReports401kSummaryByDateReportUrl)
      .pipe(
      tap(client => this.log(`fetched 401k summary by date`)),
      catchError(this.handleError('get401kSummary', []))
      );
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