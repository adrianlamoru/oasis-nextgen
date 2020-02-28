import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { EarningsSummary } from '../models';

@Injectable()
export class ReportsEarningsSummaryService {

  private ReportsEarningsSummaryUrl = 'api/ReportsEarningsSummary';
  private ReportsEarningsDetailUrl = 'api/ReportsEarningsDetail';

  constructor(
    private http: HttpClient) { }

  getEarningsSummary(): Observable<EarningsSummary[]> {
    return this.http.get<EarningsSummary[]>(this.ReportsEarningsSummaryUrl)
      .pipe(
      tap(client => this.log(`fetched earnings summary`)),
      catchError(this.handleError('getEarningsSummary', []))
      );
  }

  getEarningsDetail(): Observable<EarningsSummary[]> {
    return this.http.get<EarningsSummary[]>(this.ReportsEarningsDetailUrl)
      .pipe(
      tap(client => this.log(`fetched earnings detail`)),
      catchError(this.handleError('getEarningsDetail', []))
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
