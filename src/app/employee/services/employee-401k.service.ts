import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { EmployeeContribution } from '../models';

@Injectable()
export class Employee401kService {

  private my401kUrl = 'api/my401kData';
  private my401kData: EmployeeContribution[] = [{
    month: 'NOV',
    balance: 20,
    employerMatch: 30,
    employeeContribution: 40
  }, {
    month: 'DEC',
    balance: 40,
    employerMatch: 60,
    employeeContribution: 80
  }, {
    month: 'JAN',
    balance: 60,
    employerMatch: 80,
    employeeContribution: 100
  }, {
    month: 'FEB',
    balance: 80,
    employerMatch: 100,
    employeeContribution: 120
  }];

  constructor(
    private http: HttpClient
  ) { }

  getMy401k(): Observable<EmployeeContribution[]> {
    return this.http.get<EmployeeContribution[]>(this.my401kUrl)
      .pipe(
        tap(my401kData => this.log(`fetched employee 401k`)),
        catchError(this.handleError('getMy401k', []))
      );
  }

  getMy401kDataMock(): EmployeeContribution[] {
    return this.my401kData;
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

