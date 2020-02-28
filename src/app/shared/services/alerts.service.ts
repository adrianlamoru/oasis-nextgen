import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AlertData, AlertModal } from '../models/alerts-modal.interface';
import { portalType } from '../models/portal';

@Injectable()
export class AlertsService {

  private alertModalUrl = 'api/alertModal';
  private alertModalEmployeeUrl = 'api/alertModalEmployee';
  constructor(
    private http: HttpClient
  ) { }

  getAlertsModalData(type: portalType): Observable<AlertModal[]> {
    const url: string = type === portalType.client ? this.alertModalUrl : this.alertModalEmployeeUrl;
    return this.http.get<AlertModal[]>(url)
      .pipe(
        tap(dashboard => this.log(`fetched alerts modal`)),
        catchError(this.handleError('getAlertsModalData', []))
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

