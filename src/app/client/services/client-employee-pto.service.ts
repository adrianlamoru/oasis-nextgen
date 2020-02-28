import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { IClientEmployeePTO, IClientEmployeePTOSummary } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientEmployeePTOService {
  private header = new HttpHeaders({'Content-Type': 'application/json'});
  private ClientEmployeePTOUrl = 'api/ClientEmployeePTO';
  private ClientEmployeePTOSummaryUrl = 'api/ClientEmployeePTOSummary';

  constructor(
    private http: HttpClient) { }

  // GET
  getEmployeePTOList(): Observable<IClientEmployeePTO[]> {

    return this.http.get<IClientEmployeePTO[]>(this.ClientEmployeePTOUrl)
        .pipe(
          tap(client => this.log(`fetched employee PTO list`)),
          catchError(this.handleError('getEmployeePTOList', []))
        );
  }

  getEmployeePTOSummaryList(): Observable<IClientEmployeePTOSummary[]> {

    return this.http.get<IClientEmployeePTOSummary[]>(this.ClientEmployeePTOSummaryUrl)
      .pipe(
      tap(client => this.log(`fetched employee PTO Summary list`)),
      catchError(this.handleError('getEmployeePTOSummaryList', []))
      );
  }

  // POST Service
  getEmployeePTOData(sessionData, empId): Observable<IClientEmployeePTO[]> {
    const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
    const options = {headers: this.header};

    return this.http.post<IClientEmployeePTO[]>(environment.clientEmployeePTO,
      body,
      options
    ) .pipe(
      tap(client => this.log(`fetched employee PTO Summary list`)),
      catchError(this.handleError('getEmployeePTOSummaryList', []))
    );
  }

  getEmployeePTOViewDetail(sessionData, empId): Observable<IClientEmployeePTOSummary[]> {
    const body = {JSONIN: {sessionToken: sessionData, employeeId: empId}};
    const options = {headers: this.header};

    return this.http.post<IClientEmployeePTOSummary[]>(environment.clientEmployeePTOViewDetail,
      body,
      options
    ).pipe(
      tap(client => this.log(`fetched employee PTO Summary list`)),
      catchError(this.handleError('getEmployeePTOSummaryList', []))
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
