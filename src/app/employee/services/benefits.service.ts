import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { BenefitsDetail } from '../models';

@Injectable()
export class BenefitsService {

  private benefitsUrl = 'api/benefits';

  constructor(
    private http: HttpClient) { }

  getBenefits(): Observable<BenefitsDetail> {
    return this.http.get<BenefitsDetail>(this.benefitsUrl)
      .pipe(
        tap(benefits => this.log('fetched benefits'),
        catchError(this.handleError('getBenefits', null)))
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

  /**
   * Log a HeroService message with the MessageService
   * @param message
   */
  private log(message: string) {

  }
}
