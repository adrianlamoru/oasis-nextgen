import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {
  IClientEmployeePayrollLoan,
  IClientEmployeePayrollLoanStatus,
  IClientEmployeePayrollLoanReason,
  IClientEmployeePayrollLoanPaymentFrequency
} from '../models';

@Injectable()
export class ClientEmployeePayrollLoansService {

  private ClientEmployeePayrollLoansUrl = 'api/ClientEmployeePayrollLoansList';
  private ClientEmployeePayrollLoanStatusListUrl = 'api/ClientEmployeePayrollLoanStatusList';
  private ClientEmployeePayrollLoanReasonListUrl = 'api/ClientEmployeePayrollLoanReasonList';
  private ClientEmployeePayrollLoanPaymentFrequencyListUrl = 'api/ClientEmployeePayrollLoanPaymentFrequencyList';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeePayrollLoanList(): Observable<IClientEmployeePayrollLoan[]> {

    return this.http.get<IClientEmployeePayrollLoan[]>(this.ClientEmployeePayrollLoansUrl)
        .pipe(
          tap(client => this.log(`fetched employee payroll loan list`)),
          catchError(this.handleError('getEmployeePayrollLoanList', []))
        );
  }

  getEmployeePayrollLoanStatusList(): Observable<IClientEmployeePayrollLoanStatus[]> {

    return this.http.get<IClientEmployeePayrollLoanStatus[]>(this.ClientEmployeePayrollLoanStatusListUrl)
      .pipe(
      tap(client => this.log(`fetched employee payroll loan status list`)),
      catchError(this.handleError('getEmployeePayrollLoanStatusList', []))
      );
  }

  getEmployeePayrollLoanReasonList(): Observable<IClientEmployeePayrollLoanReason[]> {

    return this.http.get<IClientEmployeePayrollLoanReason[]>(this.ClientEmployeePayrollLoanReasonListUrl)
      .pipe(
      tap(client => this.log(`fetched employee payroll loan reason list`)),
      catchError(this.handleError('getEmployeePayrollLoanReasonList', []))
      );
  }

  getEmployeePayrollLoanPaymentFrequencyList(): Observable<IClientEmployeePayrollLoanPaymentFrequency[]> {

    return this.http.get<IClientEmployeePayrollLoanPaymentFrequency[]>(this.ClientEmployeePayrollLoanPaymentFrequencyListUrl)
      .pipe(
      tap(client => this.log(`fetched employee payroll loan payment frequency list`)),
      catchError(this.handleError('getEmployeePayrollLoanPaymentFrequencyList', []))
      );
  }

  // PUT
  putEmployeePayrollLoanList(ClientEmployeePayrollLoan: IClientEmployeePayrollLoan) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put<IClientEmployeePayrollLoan[]>(this.ClientEmployeePayrollLoansUrl, ClientEmployeePayrollLoan, { headers: headers })
      .pipe(
      tap(client => this.log(`put employee payroll loan list`)),
      catchError(this.handleError('putEmployeePayrollLoanList', []))
      );
  }

  // POST
  postEmployeePayrollLoanList(ClientEmployeePayrollLoan: IClientEmployeePayrollLoan) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post<IClientEmployeePayrollLoan[]>(this.ClientEmployeePayrollLoansUrl, ClientEmployeePayrollLoan, { headers: headers })
      .pipe(
      tap(client => this.log(`post employee payroll loan list`)),
      catchError(this.handleError('postEmployeePayrollLoanList', []))
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
