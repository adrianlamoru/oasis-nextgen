import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee401k } from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientEmployee401kService {

  // private ClientEmployee401kSummaryUrl = 'api/ClientEmployee401kSummary';
  private header = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  // getEmployee401kSummary(): Observable<Employee401k[]> {
  //   return this.http.get<Employee401k[]>(environment.clientEmployee401KSummary)
  //     .pipe(
  //     tap(client => this.log(`fetched employee 401k Summary`)),
  //     catchError(this.handleError('getEmployee401kSummary', []))
  //     );
  // }

  // getEmployee401kSummaryByYear(year: number): Observable<Employee401k[]> {
  //   return this.http.get<Employee401k[]>(environment.clientEmployee401KSummary)
  //     .pipe(
  //     tap(client => this.log(`fetched employee 401k Summary`)),
  //     catchError(this.handleError('getEmployee401kSummary', []))
  //     );
  // }

  getEmployee401kSummary(sessionData): Observable<Employee401k[]> {
    const body = {JSONIN: sessionData};
    const options = {headers: this.header};

    return this.http.post<Employee401k[]>(environment.clientEmployee401KSummary,
      body,
      options
    ).pipe(
      tap(client => this.log(`fetched employee 401k Summary`)),
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
