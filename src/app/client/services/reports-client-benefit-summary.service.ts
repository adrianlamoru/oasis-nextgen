import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ClientBenefitSummary } from '../models';

@Injectable()
export class ClientBenefitSummaryReportService {

  private ClientBenefitSummaryReportUrl = 'api/ClientBenefitSummaryReport';

  constructor(
    private http: HttpClient) { }

  getClientBenefitSummary(): Observable<ClientBenefitSummary[]> {
    return this.http.get<ClientBenefitSummary[]>(this.ClientBenefitSummaryReportUrl)
      .pipe(
      tap(client => this.log(`fetched client benefit summary`)),
      catchError(this.handleError('getClientBenefitSummary', []))
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