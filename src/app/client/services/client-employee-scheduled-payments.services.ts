import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {
  IClientEmployeeScheduledPayments,
  IClientEmployeeScheduledPaymentsStatus,
  IClientEmployeeScheduledPaymentsType,
  IClientEmployeeScheduledPaymentsDeductionPeriod,
} from '../models';

@Injectable()
export class ClientEmployeeScheduledPaymentsService {

  private ClientEmployeeScheduledPaymentsUrl = 'api/ClientEmployeeScheduledPaymentsList';
  private ClientEmployeeScheduledPaymentsStatusListUrl = 'api/ClientEmployeeScheduledPaymentsStatusList';
  private ClientEmployeeScheduledPaymentsPayCodesListUrl = 'api/ClientEmployeeScheduledPaymentsPayCodesList';
  private ClientEmployeeScheduledPaymentsDeductionPeriodListUrl = 'api/ClientEmployeeRecurringDeductionPeriodList';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeeScheduledPaymentsList(): Observable<IClientEmployeeScheduledPayments[]> {

    return this.http.get<IClientEmployeeScheduledPayments[]>(this.ClientEmployeeScheduledPaymentsUrl)
      .pipe(
        tap(client => this.log(`fetched employee IClientEmployeeScheduled Payments list`)),
        catchError(this.handleError('getEmployeeScheduledPaymentsList', []))
      );
  }

  getEmployeeScheduledPaymentsStatusList(): Observable<IClientEmployeeScheduledPaymentsStatus[]> {

    return this.http.get<IClientEmployeeScheduledPaymentsStatus[]>(this.ClientEmployeeScheduledPaymentsStatusListUrl)
      .pipe(
        tap(client => this.log(`fetched employee scheduled payments status list`)),
        catchError(this.handleError('getEmployeeScheduledPaymentsStatusList', []))
      );
  }

  getEmployeeScheduledPaymentsDeductionPeriodList(): Observable<IClientEmployeeScheduledPaymentsDeductionPeriod[]> {

    return this.http.get<IClientEmployeeScheduledPaymentsDeductionPeriod[]>(this.ClientEmployeeScheduledPaymentsDeductionPeriodListUrl)
      .pipe(
        tap(client => this.log(`fetched employee scheduled payments deduction period list`)),
        catchError(this.handleError('getEmployeeScheduledPaymentsDeductionPeriodList', []))
      );
  }

  getEmployeeScheduledPaymentsPayCodesList(): Observable<IClientEmployeeScheduledPaymentsType[]> {

    return this.http.get<IClientEmployeeScheduledPaymentsType[]>(this.ClientEmployeeScheduledPaymentsPayCodesListUrl)
      .pipe(
        tap(client => this.log(`fetched employee scheduled payments pay codes list`)),
        catchError(this.handleError('getEmployeeScheduledPaymentsPayCodesList', []))
      );
  }

  // PUT
  putEmployeeScheduledPaymentsList(ClientEmployeeScheduledPayments: IClientEmployeeScheduledPayments) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http
      .put<IClientEmployeeScheduledPayments[]>(this.ClientEmployeeScheduledPaymentsUrl,
        ClientEmployeeScheduledPayments, { headers: headers })
      .pipe(
        tap(client => this.log(`put employee scheduled payments list`)),
        catchError(this.handleError('putEmployeeScheduledPaymentsList', []))
      );
  }

  // POST
  postEmployeeScheduledPaymentsList(ClientEmployeeScheduledPayments: IClientEmployeeScheduledPayments) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<IClientEmployeeScheduledPayments[]>(
      this.ClientEmployeeScheduledPaymentsUrl, ClientEmployeeScheduledPayments, { headers: headers })
      .pipe(
        tap(client => this.log(`post employee scheduled payments list`)),
        catchError(this.handleError('postEmployeeScheduledPaymentsList', []))
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
