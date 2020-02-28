import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {
  IClientEmployeeRecurringDeduction,
  IClientEmployeeRecurringDeductionType,
  IClientEmployeeRecurringDeductionFrequency,
  IClientEmployeeRecurringDeductionPeriod
} from '../models';

@Injectable()
export class ClientEmployeeRecurringDeductionsService {

  private ClientEmployeeRecurringDeductionsUrl = 'api/ClientEmployeeRecurringDeductionsList';
  private ClientEmployeeRecurringDeductionTypeListUrl = 'api/ClientEmployeeRecurringDeductionTypeList';
  private ClientEmployeeRecurringDeductionFrequencyListUrl = 'api/ClientEmployeeRecurringDeductionFrequencyList';
  private ClientEmployeeRecurringDeductionPeriodListUrl = 'api/ClientEmployeeRecurringDeductionPeriodList';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeeRecurringDeductionList(): Observable<IClientEmployeeRecurringDeduction[]> {

    return this.http.get<IClientEmployeeRecurringDeduction[]>(this.ClientEmployeeRecurringDeductionsUrl)
      .pipe(
        tap(client => this.log(`fetched employee recurring deduction list`)),
        catchError(this.handleError('getEmployeeRecurringDeductionList', []))
      );
  }

  getEmployeeRecurringDeductionTypeList(): Observable<IClientEmployeeRecurringDeductionType[]> {

    return this.http.get<IClientEmployeeRecurringDeductionType[]>(this.ClientEmployeeRecurringDeductionTypeListUrl)
      .pipe(
        tap(client => this.log(`fetched employee recurring deduction type list`)),
        catchError(this.handleError('getEmployeeRecurringDeductionTypeList', []))
      );
  }

  getEmployeeRecurringDeductionFrequencyList(): Observable<IClientEmployeeRecurringDeductionFrequency[]> {

    return this.http.get<IClientEmployeeRecurringDeductionFrequency[]>(this.ClientEmployeeRecurringDeductionFrequencyListUrl)
      .pipe(
        tap(client => this.log(`fetched employee recurring deduction frequency list`)),
        catchError(this.handleError('getEmployeeRecurringDeductionFrequencyList', []))
      );
  }

  getEmployeeRecurringDeductionPeriodList(): Observable<IClientEmployeeRecurringDeductionPeriod[]> {

    return this.http.get<IClientEmployeeRecurringDeductionPeriod[]>(this.ClientEmployeeRecurringDeductionPeriodListUrl)
      .pipe(
        tap(client => this.log(`fetched employee recurring deduction period list`)),
        catchError(this.handleError('getEmployeeRecurringDeductionPeriodList', []))
      );
  }

  // PUT
  putEmployeeRecurringDeductionList(ClientEmployeeRecurringDeduction: IClientEmployeeRecurringDeduction) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<IClientEmployeeRecurringDeduction[]>(
      this.ClientEmployeeRecurringDeductionsUrl, ClientEmployeeRecurringDeduction, { headers: headers })
      .pipe(
        tap(client => this.log(`put employee payroll loan list`)),
        catchError(this.handleError('putEmployeeRecurringDeductionList', []))
      );
  }

  // POST
  postEmployeeRecurringDeductionList(ClientEmployeeRecurringDeduction: IClientEmployeeRecurringDeduction) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<IClientEmployeeRecurringDeduction[]>(
      this.ClientEmployeeRecurringDeductionsUrl, ClientEmployeeRecurringDeduction, { headers: headers })
      .pipe(
        tap(client => this.log(`post employee payroll loan list`)),
        catchError(this.handleError('postEmployeeRecurringDeductionList', []))
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
