import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { LeaveTracker } from '../models';

@Injectable()
export class LeaveTrackerService {

  private leaveTrackerUrl = 'api/leaveTracker';
  private leaveTracker: LeaveTracker[] = [
    {
      ptoType: 'Vacation',
      remaining: 7.56,
      used: 2.44
    }, {
      ptoType: 'Personal',
      remaining: 2.25,
      used: 2.75
    }, {
      ptoType: 'Sick',
      remaining: 3.85,
      used: 2.15
    }
  ];
  constructor(
    private http: HttpClient
  ) { }

  getLeaveTracker(): Observable<LeaveTracker[]> {
    return this.http.get<LeaveTracker[]>(this.leaveTrackerUrl)
      .pipe(
        tap(dashboard => this.log(`fetched leave tracker`)),
        catchError(this.handleError('getLeaveTracker', []))
      );
  }
  
  getLeaveTrackerMock(): LeaveTracker[] {
    return this.leaveTracker;
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

