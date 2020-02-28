import { Slide } from './../models/slide.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { DashboardContact, portalType } from '../models';


@Injectable()
export class DashboardSlidesService {

  private dashboardSlidesUrl = 'api/dashboardSlides';
  private dashboardSlidesEmployeeUrl = 'api/dashboardSlidesEmployee';

  constructor(private http: HttpClient) { }

  public get(type: portalType): Observable<Slide[]> {
    const url: string = type === portalType.client ? this.dashboardSlidesUrl : this.dashboardSlidesEmployeeUrl;
    return this.http.get<Slide[]>(url)
      .pipe(
        tap(() => this.log(`fetched dashboard slides`)),
        catchError(this.handleError('get', []))
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
