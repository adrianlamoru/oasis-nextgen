import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ReportsList, EmployeeStatistics } from '../models';

@Injectable()
export class EmployeeStatisticsService {

    employeeStatisticsData = [
    {
        status: 'ACTIVE',
        type: 'FULL TIME',
        count: 183

    }, {
        status: 'ACTIVE',
        type: 'SEASONAL PT',
        count: 10
    }, {
        status: 'ACTIVE',
        type: 'TEMPORARY FT',
        count: 1
    }
    ];

    private EmployeeStatisticsUrl = 'api/EmployeeStatistics';

  constructor(
    private http: HttpClient) { }

    getEmployeeStatistics() {
        return this.employeeStatisticsData;
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
