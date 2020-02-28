import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { WagesEarningsPayCodes } from '../models';

@Injectable()
export class ReportsWagesEarningsService {

  private ReportsWagesEarningsUrl = 'api/ReportsWagesEarnings';
  private ReportsWagesEarningsSummaryUrl = 'api/ReportsWagesEarningsSummary';

  constructor(
    private http: HttpClient) { }

  getWagesEarnings(): Observable<WagesEarningsPayCodes[]> {
    return this.http.get<WagesEarningsPayCodes[]>(this.ReportsWagesEarningsUrl)
      .pipe(
      tap(client => this.log(`fetched wages earnings`)),
      catchError(this.handleError('getWagesEarnings', []))
      );
  }

  getWagesEarningsSummary(): Observable<WagesEarningsPayCodes[]> {
    return this.http.get<WagesEarningsPayCodes[]>(this.ReportsWagesEarningsSummaryUrl)
      .pipe(
      tap(client => this.log(`fetched wages earnings summary`)),
      catchError(this.handleError('getWagesEarningsSummary', []))
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
