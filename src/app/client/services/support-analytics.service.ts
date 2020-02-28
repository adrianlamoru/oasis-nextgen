import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { PieData, StackedHorizontalData } from '../../shared/models';


@Injectable()
export class SupportAnalyticsService {

  private clientSupportAnalyticsPieUrl = 'api/ClientSupportAnalyticsPieData';
  private clientSupportAnalyticsHorizontalBarUrl = 'api/ClientSupportAnalyticsHorizontalBarData';

  constructor(
    private http: HttpClient) { }

    getSupportHorizontalBarChartData(): Observable<StackedHorizontalData[]> {
      return this.http.get<StackedHorizontalData[]>(this.clientSupportAnalyticsHorizontalBarUrl)
        .pipe(
          tap(client => this.log(`fetched getSupportHorizontalBarChartData `)),
          catchError(this.handleError('getSupportHorizontalBarChartData', []))
        );
      }

    getSupportPieChartData(): Observable<PieData[]> {
      return this.http.get<PieData[]>(this.clientSupportAnalyticsPieUrl)
        .pipe(
          tap(client => this.log(`fetched getSupportPieChartData `)),
          catchError(this.handleError('getSupportPieChartData', []))
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
