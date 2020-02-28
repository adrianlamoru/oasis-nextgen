import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { IWorkersCompClaim } from '../models';

@Injectable()
export class WorkersCompClaimsService {

  private workersCompOpenClaimsUrl = 'api/workersCompOpenClaims';

  constructor(
    private http: HttpClient) { }

  getWorkersCompClaims(): Observable<IWorkersCompClaim[]> {
    return this.http.get<IWorkersCompClaim[]>(this.workersCompOpenClaimsUrl)
      .pipe(
        tap(client => this.log(`fetched getWorkersCompOpenClaims `)),
        catchError(this.handleError('getWorkersCompOpenClaims', []))
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
