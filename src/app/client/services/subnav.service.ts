import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { SubnavMenu } from '../models';

@Injectable()
export class SubnavService {

  private subnavDataUrl = 'api/subnav';
  private subnavDataForReportsUrl = 'api/subnavForReports';
  private subnavDataForCompensation = 'api/subnavForCompensation';

  constructor(
    private http: HttpClient
  ) { }

  getSubnavData(): Observable<SubnavMenu> {
    return this.http.get<SubnavMenu>(this.subnavDataUrl)
      .pipe(
        tap(subnav => this.log(`fetched subnav`)),
        catchError(this.handleError('getSubnav', null))
      );
  }

  getSubnavDataForReports(): Observable<SubnavMenu> {
    return this.http.get<SubnavMenu>(this.subnavDataForReportsUrl)
      .pipe(
        tap(subnav => this.log(`fetched subnav for Reports`)),
        catchError(this.handleError('getSubnavDataForReports', null))
      );
  }

  getSubnavDataForCompensationTab(): Observable<SubnavMenu> {
    return this.http.get<SubnavMenu>(this.subnavDataForCompensation)
      .pipe(
        tap(subnav => this.log(`fetched subnav for Compensation Tab`)),
      catchError(this.handleError('getSubnavDataForCompensationTab', null))
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
