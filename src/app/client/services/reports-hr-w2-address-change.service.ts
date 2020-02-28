import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsW2AddressChange } from '../models';

@Injectable()
export class ReportsW2AddressChangeService {

  private ReportsHRW2AddressChangeUrl = 'api/ReportsW2AddressChangeReport';

  constructor(
    private http: HttpClient) { }

  getHRW2AddressChangeData(): Observable<ReportsW2AddressChange[]> {
    return this.http.get<ReportsW2AddressChange[]>(this.ReportsHRW2AddressChangeUrl)
      .pipe(
      tap(client => this.log(`fetched hr w2 address change data`)),
      catchError(this.handleError('getHRW2AddressChangeData', []))
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
