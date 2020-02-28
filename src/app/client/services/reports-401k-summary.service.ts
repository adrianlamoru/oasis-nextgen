import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsEmployee401kSummary } from '../models';

@Injectable()
export class Reports401kSummaryReportService {

  private Reports401kSummaryReportUrl = 'api/Reports401kSummaryReport';
  private EmployeeReports401kSummaryReportUrl = 'api/EmployeeReports401kSummaryReport';

  constructor(
    private http: HttpClient) { }

  get401kSummary(): Observable<ReportsEmployee401kSummary[]> {
    return this.http.get<ReportsEmployee401kSummary[]>(this.Reports401kSummaryReportUrl)
      .pipe(
      tap(client => this.log(`fetched 401k summary`)),
      catchError(this.handleError('get401kSummary', []))
      );
  }

  getEmployee401kSummary(): Observable<ReportsEmployee401kSummary[]> {
    return this.http.get<ReportsEmployee401kSummary[]>(this.EmployeeReports401kSummaryReportUrl)
      .pipe(
      tap(client => this.log(`fetched employee 401k summary`)),
      catchError(this.handleError('getEmployee401kSummary', []))
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
