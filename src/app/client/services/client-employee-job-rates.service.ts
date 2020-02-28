import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IClientEmployeeJobRates, IClientEmployeeJobRatesType, IClientEmployeeJobRatesPayCodeType } from '../models';

@Injectable()
export class ClientEmployeeJobRatesService {

  private ClientEmployeeJobRatesListUrl = 'api/ClientEmployeeJobRatesList';
  private ClientEmployeeJobRatesJobCodeListUrl = 'api/ClientEmployeeJobRatesJobCodeList';
  private ClientEmployeeJobRatesPayCodeListUrl = 'api/ClientEmployeeJobRatesPayCodeList';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeeJobRatesList(): Observable<IClientEmployeeJobRates[]> {

    return this.http.get<IClientEmployeeJobRates[]>(this.ClientEmployeeJobRatesListUrl)
      .pipe(
        tap(client => this.log(`fetched employee IClientEmployeeJobRates list`)),
        catchError(this.handleError('getEmployeeJobRatesList', []))
      );
  }

  getEmployeeJobRatesJobCodesList(): Observable<IClientEmployeeJobRatesType[]> {

    return this.http.get<IClientEmployeeJobRatesType[]>(this.ClientEmployeeJobRatesJobCodeListUrl)
      .pipe(
        tap(client => this.log(`fetched employee job rates job codes list`)),
        catchError(this.handleError('getEmployeeJobRatesJobCodesList', []))
      );
  }

  getEmployeeJobRatesPayCodesList(): Observable<IClientEmployeeJobRatesPayCodeType[]> {

    return this.http.get<IClientEmployeeJobRatesType[]>(this.ClientEmployeeJobRatesPayCodeListUrl)
      .pipe(
        tap(client => this.log(`fetched employee job rates pay codes list`)),
        catchError(this.handleError('getEmployeeJobRatesPayCodesList', []))
      );
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
  private log(message: string) {

  }
}
